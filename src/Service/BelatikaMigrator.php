<?php


namespace App\Service;


use App\Entity\Address;
use App\Entity\BlogArticle;
use App\Entity\BlogComment;
use App\Entity\Category;
use App\Entity\CustomerOrder;
use App\Entity\CustomerOrderLine;
use App\Entity\Gift;
use App\Entity\Image;
use App\Entity\Item;
use App\Entity\Range;
use App\Entity\User;
use DateTime;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Id\AssignedGenerator;
use Doctrine\ORM\Mapping\ClassMetadata;
use PDO;

class BelatikaMigrator
{
    /**
     * @var EntityManager
     */
    private $manager;
    /**
     * @var PDO
     */
    private $oldDb;
    /**
     * @var PDO
     */
    private $newDb;
    private $addressIds = [];
    private $emojis = [];
    private $ranges = [];

    public function __construct(EntityManager $manager)
    {
        $this->manager = $manager;
        $this->oldDb = $this->getMysqlConnexion('belatika-old');
        $this->newDb = $this->getMysqlConnexion('belatika');
        $this->emojis = [
            ':smiley:' => '😃',
            ':smile:' => '😄',
            ':joy:' => '😂',
            ':rofl:' => '🤣',
            ':innocent:' => '😇',
            ':wink:' => '😉',
            ':heart_eyes:' => '😍',
            ':kissing_heart:' => '😘',
            ':star_struck:' => '🤩',
            ':disappointed:' => '😞',
            ':worried:' => '😟',
            ':cry:' => '😢',
            ':scream:' => '😱',
            ':sailboat:' => '⛵',
        ];
    }

    private function getMysqlConnexion($database)
    {
        $db = new PDO('mysql:host=localhost;dbname='.$database, 'root', '');
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $db;
    }

    public function migrateCategories()
    {
        $categories = $this->sqlRows('category');
        $lastId = 0;
        foreach ($categories as $category) {
            $newCategory = new Category();
            $newCategory
                ->setId($category['id'])
                ->setName($category['viewName'])
                ->setCustomers('femme');
            $this->persist($newCategory);
            $lastId = $lastId > $newCategory->getId() ? $lastId : $newCategory->getId();
        }
        $manCategory = new Category();
        $manCategory
            ->setId($lastId + 1)
            ->setName('Bracelets')
            ->setCustomers('homme');
        $this->persist($manCategory);
        $this->manager->flush();
    }

    public function migrateRanges()
    {
        $this->ranges['argent_925'] = (new Range())->setName('Bijoux en argent 925')->setImage('argent.jpeg');
        $this->ranges['gold_filled'] = (new Range())->setName('Bijoux en gold filled')->setImage('gold-filled.jpeg');
        $this->ranges['acier'] = (new Range())->setName('Bijoux en acier')->setImage('acier.jpeg');
        $this->ranges['metal_laiton'] = (new Range())->setName('Bijoux en métal et laiton')->setImage('laiton-metal.jpeg');
        foreach ($this->ranges as $range) {
            $this->manager->persist($range);
        }
        $this->manager->flush();
    }

    public function migrateItems()
    {
        $manCategory = $this->manager->getRepository(Category::class)->findOneBy(['customers' => 'homme']);
        $highlitedItems = [861,862,867,868,869,870,871,872,873,874,875,876];
        $menItems = [823, 810, 802];
        $articles = $this->sqlRows('article');
        $imageList = $this->sqlRows('image');
        $images = [];
        foreach ($imageList as $image) {
            $images[$image['id']] = $image;
        }
        foreach ($articles as $article) {
            $category = $this->manager->getRepository(Category::class)->find($article['category_id']);
            $item = new Item();
            $item
                ->setId($article['id'])
                ->setCategory(in_array($article['id'], $menItems) ? $manCategory : $category)
                ->setName($article['name'])
                ->setReference($article['reference'])
                ->setDescription($article['description'])
                ->setPrice($article['price'])
                ->setQuantity($article['quantity'])
                ->setCreatedAt(DateTime::createFromFormat('Y-m-d H:i:s', $article['created']))
                ->setHighlighted(in_array($article['id'], $highlitedItems))
                ->setDiscount($article['sales']);
            $innerText = $article['name'].' '.$article['description'];
            if (preg_match('# argent #', $innerText) === 1) {
                $item->addRange($this->ranges['argent_925']);
            }
            if (preg_match('#acier#', $innerText) === 1) {
                $item->addRange($this->ranges['acier']);
            }
            if (preg_match('#gold|filled#', $innerText) === 1) {
                $item->addRange($this->ranges['gold_filled']);
            }
            if (preg_match('#metal|laiton#', $innerText) === 1) {
                $item->addRange($this->ranges['metal_laiton']);
            }
            $this->persist($item);
            $image = $images[$article['image_id']];
            $newImage = new Image();
            $newImage
                ->setId($image['id'])
                ->setAlt($image['alt'])
                ->setExt($image['ext'])
                ->setItem($item);
            $this->persist($newImage);
        }
        $this->manager->flush();
    }

    public function migrateAddresses()
    {
        $oldAdresses = $this->sqlRows('adress');
        foreach ($oldAdresses as $oldAdress) {
            $address = new Address();
            $address
                ->setId($oldAdress['id'])
                ->setName($oldAdress['adresse'])
                ->setPostcode($oldAdress['cp'])
                ->setCountry($oldAdress['pays'])
                ->setCity($oldAdress['ville'])
                ->setAdditional($oldAdress['complement']);
            $address->setFullAddress(
                $address->getName().
                ', '.$address->getCity().
                ', '.$address->getCountry()
            );
            $address->setValue($address->getFullAddress());
            $this->persist($address);
        }
        $this->manager->flush();
    }

    public function migrateUsers()
    {
        $oldAdresses = $this->sqlRows('adress');
        $addresses = [];
        foreach ($oldAdresses as $oldAdress) {
            if (empty($oldAdress['user_id'])) {
                continue;
            } elseif (!isset($addresses[$oldAdress['user_id']])) {
                $addresses[$oldAdress['user_id']] = $oldAdress;
            } elseif ($addresses[$oldAdress['user_id']]['id'] < $oldAdress['id']) {
                $addresses[$oldAdress['user_id']] = $oldAdress;
            }
        }
        $oldUsers = $this->sqlRows('user');
        foreach ($oldUsers as $oldUser) {
            $user = new User();
            if (isset($addresses[$oldUser['id']])) {
                $address = $this->manager->getRepository(Address::class)->find($addresses[$oldUser['id']]['id']);
                $user->setDeliveryAddress($address)->setBillingAddress($address);
            }
            $user
                ->setId($oldUser['id'])
                ->setUsername($oldUser['username'])
                ->setUsernameCanonical($oldUser['username_canonical'])
                ->setEmail($oldUser['email'])
                ->setEmailCanonical($oldUser['email_canonical'])
                ->setEnabled($oldUser['enabled'])
                ->setSalt($oldUser['salt'])
                ->setPassword($oldUser['password'])
                ->setLastLogin(DateTime::createFromFormat('Y-m-d H:i:s', $oldUser['last_login']))
                ->setConfirmationToken($oldUser['confirmation_token'])
                ->setPasswordRequestedAt($oldUser['password_requested_at'])
                ->setRoles(unserialize($oldUser['roles']));
            $user->setCreatedAt(DateTime::createFromFormat('Y-m-d H:i:s', $oldUser['created']))
                ->setRealname($oldUser['realname'])
                ->setFacebookId($oldUser['facebook_id'])
                ->setGoogleId($oldUser['google_id']);
            $this->persist($user);
        }
        $this->manager->flush();
    }

    public function migrateGift()
    {
        $oldGifts = $this->sqlRows('gift');
        foreach ($oldGifts as $oldGift) {
            $gift = new Gift();
            if ($oldGift['user_id']) {
                $user = $this->manager->getRepository(User::class)->find($oldGift['user_id']);
                $gift->setUser($user);
            }
            $gift
                ->setId($oldGift['id'])
                ->setCode($oldGift['code'])
                ->setValue($oldGift['value'])
                ->setValid($oldGift['valid'])
                ->setStart(DateTime::createFromFormat('Y-m-d', $oldGift['start']))
                ->setEnd(DateTime::createFromFormat('Y-m-d', $oldGift['end']));
            $this->persist($gift);
        }
        $this->manager->flush();
    }

    public function migrateOrders()
    {
        $deliveryAddressUsed = [];
        $addresses = $this->sqlRows('adress');
        foreach ($addresses as $address) {
            $this->addressIds[] = $address['id'];
        }

        $sql = '
        SELECT
            c.id commande_id,
            c.user_id,
            c.delivery_id,
            c.billing_id,
            c.valid,
            c.sent,
            c.sent_date,
            c.date,
            c.reference,
            c.total,
            c.shipping,
            c.rating,
            c.gift,
            q.id quantity_id,
            q.article_id,
            q.quantity,
            q.sales
        FROM commande c
        INNER JOIN quantity q on c.id = q.commande_id
        ';
        $query = $this->oldDb->query($sql);
        $orders = [];
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $orderLine = [
                'id' => $row['quantity_id'],
                'article_id' => $row['article_id'],
                'commande_id' => $row['commande_id'],
                'quantity' => $row['quantity'],
                'sales' => $row['sales']
            ];
            if (isset($orders[$row['commande_id']])) {
                $orders[$row['commande_id']]['lines'][] = $orderLine;
            } else {
                $order = [
                    'id' => $row['commande_id'],
                    'user_id' => $row['user_id'],
                    'delivery_id' => $row['delivery_id'],
                    'billing_id' => $row['billing_id'],
                    'valid' => $row['valid'],
                    'sent' => $row['sent'],
                    'sent_date' => $row['sent_date'],
                    'date' => $row['date'],
                    'reference' => $row['reference'],
                    'total' => $row['total'],
                    'shipping' => $row['shipping'],
                    'rating' => $row['rating'],
                    'gift' => $row['gift'],
                    'lines' => [$orderLine]
                ];
                $orders[$row['commande_id']] = $order;
            }
        }
        $query->closeCursor();

        foreach ($orders as $order) {
            $customerOrder = new CustomerOrder();
            $user = $this->manager->getRepository(User::class)->find($order['user_id']);
            if (in_array($order['delivery_id'], $deliveryAddressUsed)) {
                $oldDeliveryAddress = $this->manager->getRepository(Address::class)->find($order['delivery_id']);
                $deliveryAddress = $this->copyAddress($oldDeliveryAddress);
                $this->manager->persist($deliveryAddress);
                $oldBillingAddress = $this->manager->getRepository(Address::class)->find($order['billing_id']);
                $billingAddress = $this->copyAddress($oldBillingAddress);
                $this->manager->persist($billingAddress);
            } else {
                $deliveryAddress = $this->manager->getRepository(Address::class)->find($order['delivery_id']);
                $billingAddress = $this->manager->getRepository(Address::class)->find($order['billing_id']);
                $deliveryAddressUsed[] = $order['delivery_id'];
            }
            $customerOrder
                ->setId($order['id'])
                ->setUser($user)
                ->setDeliveryAddress($deliveryAddress)
                ->setBillingAddress($billingAddress)
                ->setIsValid($order['valid'])
                ->setIsSent($order['sent'])
                ->setSentAt(DateTime::createFromFormat('Y-m-d H:i:s', $order['sent_date']))
                ->setOrderedAt(DateTime::createFromFormat('Y-m-d H:i:s', $order['date']))
                ->setReference($order['reference'])
                ->setTotal($order['total'])
                ->setShipping($order['shipping'])
                ->setRating($order['rating'])
                ->setGiftValueUsed($order['gift']);
            foreach ($order['lines'] as $line) {
                $item = $this->manager->getRepository(Item::class)->find($line['article_id']);
                $customerOrderLine = new CustomerOrderLine();
                $customerOrderLine
                    ->setId($line['id'])
                    ->setCustomerOrder($customerOrder)
                    ->setQuantity($line['quantity'])
                    ->setDiscount($line['sales'])
                    ->setPrice($item->getPrice())
                    ->setItem($item);
                $this->persist($customerOrderLine);
            }
            $this->persist($customerOrder);
        }
        $this->manager->flush();
    }

    public function migrateBlog()
    {
        $sql = '
            SELECT
            b.id blog_id,
            b.date,
            b.title,
            b.content,
            b.published,
            i.id image_id,
            i.alt,
            i.ext
            FROM blog b
            INNER JOIN image i ON b.image_id = i.id
            ';
        $query = $this->oldDb->query($sql);
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $content = str_replace("\r\n", '<br>',$row['content']);
            foreach ($this->emojis as $shortname => $emoji) {
                $content = str_replace($shortname, $emoji, $content);
            }
            $imageUrl = 'https://belatika.com/uploads/img/'.$row['image_id'].'.'.$row['ext'];
            $content = '<div class="se-component se-image-container __se__float-left" contenteditable="false"><figure style="margin: auto;"><img src="'.$imageUrl.'" alt="'.$row['alt'].'" data-rotate="" data-proportion="true" data-rotatex="" data-rotatey="" data-size="," data-align="left" data-percentage="auto,auto" data-index="0" data-file-name="'.$row['alt'].'" data-file-size="35427" origin-size="400,400" data-origin="," style=""></figure></div><p>'.$content.'</p>';

            $blogArticle = new BlogArticle();
            $blogArticle
                ->setId($row['blog_id'])
                ->setPostedAt(DateTime::createFromFormat('Y-m-d H:i:s', $row['date']))
                ->setTitle($row['title'])
                ->setMetaDescription($row['title'])
                ->setContent($content)
                ->setIsPublished($row['published'] === '1');
            $this->persist($blogArticle);
        }
        $query->closeCursor();
        $this->manager->flush();
    }

    public function migrateComments()
    {
        $comments = $this->sqlRows('comment');
        foreach ($comments as $comment) {
            if ($comment['blog_id'] === null) {
                continue;
            }
            $content = str_replace("\r\n", '<br>',$comment['content']);
            foreach ($this->emojis as $shortname => $emoji) {
                $content = str_replace($shortname, $emoji, $content);
            }
            $user = $this->manager->getRepository(User::class)->find($comment['user_id']);
            $blogArticle = $this->manager->getRepository(BlogArticle::class)->find($comment['blog_id']);
            $blogComment = new BlogComment();
            $blogComment
                ->setId($comment['id'])
                ->setBlogArticle($blogArticle)
                ->setUser($user)
                ->setPostedAt(DateTime::createFromFormat('Y-m-d H:i:s', $comment['date']))
                ->setContent($content);
            $this->persist($blogComment);
        }
        $this->manager->flush();
    }

    private function persist($entity)
    {
        $this->manager->persist($entity);
        $metadata = $this->manager->getClassMetadata(get_class($entity));
        $metadata->setIdGeneratorType(ClassMetadata::GENERATOR_TYPE_NONE);
        $metadata->setIdGenerator(new AssignedGenerator());
    }

    /**
     * @param string $table
     * @return array
     */
    private function sqlRows($table)
    {
        $query = $this->oldDb->query("SELECT * FROM $table");
        $rows = [];
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $rows[] = $row;
        }
        $query->closeCursor();
        return $rows;
    }

    public function clearAll()
    {
        $this->clear('blog_comment');
        $this->clear('blog_article');
        $this->clear('customer_order_line');
        $this->clear('customer_order');
        $this->clear('image');
        $this->clear('item');
        $this->clear('category');
        $this->clear('range');
        $this->clear('address');
        $this->clear('gift');
        $this->clear('fos_user');
    }

    private function clear($table)
    {
        $this->newDb->exec("DELETE FROM `$table` WHERE 1");
    }

    private function copyAddress(Address $address)
    {
        $newAddress = new Address();
        $methods = get_class_methods(Address::class);
        foreach ($methods as $method) {
            if (strpos($method, 'get') === 0 && $method !== 'getId') {
                $getter = $method;
                $setter = str_replace('get', 'set', $method);
                if (method_exists(Address::class, $getter) && method_exists(Address::class, $setter)) {
                    $newAddress->$setter($address->$getter());
                }
            }
        }
        $newId = max($this->addressIds) + 1;
        $this->addressIds[] = $newId;
        return $newAddress->setId($newId);
    }
}