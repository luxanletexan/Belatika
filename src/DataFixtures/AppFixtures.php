<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Image;
use App\Entity\Item;
use App\Entity\Translation;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use joshtronic\LoremIpsum;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager):void
    {
        $lipsum = new LoremIpsum();
        $imageExts = ['jpg', 'jpeg', 'png'];

        //Creating categories
        $categories = [];
        for($i=1; $i < 10; $i++) {
            $category = new Category();
            $category->setName($lipsum->words(random_int(1, 3)));
            $manager->persist($category);
            $categories[] = $category;
        }

        //Creating items
        for($i=1; $i < 300; $i++) {
            $date = new \DateTime();
            $date->modify('-'.random_int(0,365).' day'); //Random date from last year
            $item = new Item();
            $item
                ->setName($lipsum->words(random_int(1, 5)))
                ->setReference($i)
                ->setDescription($lipsum->sentences(random_int(1, 5)))
                ->setPrice(random_int(10, 100)/2) //Prices 5€ to 50€ step 0.5€
                ->setQuantity(random_int(1, 10))
                ->setCreatedAt($date)
                ->setDiscount(0) //Sales will be tested in a future commit
                ->setCategory($categories[array_rand($categories)]);
            $manager->persist($item);
            $images_number = random_int(1, 3);
            for($j=0; $j < $images_number; $j++) {
                $image = new Image();
                $image
                    ->setAlt($lipsum->words(random_int(1,5)))
                    ->setExt($imageExts[array_rand($imageExts)])
                    ->setItem($item);
                $manager->persist($image);
            }
        }

        //Creating 1 translation for testings
        $translation = new Translation();
        $translation
            ->setCrc32(crc32('Hello world'))
            ->setTarget('fr')
            ->setTranslation('Bonjour le monde');
        $manager->persist($translation);

        $manager->flush();
    }
}
