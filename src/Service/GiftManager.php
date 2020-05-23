<?php


namespace App\Service;


use App\Entity\Gift;
use Doctrine\ORM\EntityManager;

class GiftManager
{
    /**
     * @var EntityManager
     */
    private $manager;

    public function __construct(EntityManager $manager)
    {
        $this->manager = $manager;
    }

    /**
     * @param array $options
     * @return Gift
     */
    public function createGift($options = [])
    {
        $options = array_merge([
            'value' => 5,
            'start' => date_create(),
            'end' => date_create()->modify('+1 year')
        ], $options);

        /**
         * On récupère la liste des codes cadeaux existants pour en créer un nouveau
         * @var Gift[] $gifts
         */
        $gifts = $this->manager->getRepository(Gift::class)->findAll();
        $giftCodes = [];
        foreach ($gifts as $gift) {
            $giftCode = $gift->getCode();
            if (preg_match('#^(\d{3})-(\d{3})-(\d)$#', $giftCode, $matches)) {
                $giftCodes[] = $matches[1].$matches[2].$matches[3];
            }
        }
        $newCode = null;
        while (!$newCode || in_array($newCode, $giftCodes)) {
            $newCode = rand(1000000, 9999999);
        }
        $newCode = preg_replace('#^(\d{3})(\d{3})(\d)$#', '$1-$2-$3', $newCode);

        $gift = new Gift();
        $gift
            ->setCode($newCode)
            ->setValue($options['value'])
            ->setStart($options['start'])
            ->setEnd($options['end'])
            ->setValid(true);

        return $gift;
    }
}