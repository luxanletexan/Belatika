<?php

namespace App\Twig\Extension;


use App\Entity\Category;
use Doctrine\Common\Persistence\ObjectManager;

class FunctionExtension extends \Twig_Extension
{
    private $manager;

    public function __construct(ObjectManager $manager)
    {
        $this->manager = $manager;
    }

    public function getFunctions():array
    {
        return [
            new \Twig_Function('categories', [$this, 'getCategories']),
        ];
    }

    public function getCategories()
    {
        return $this->manager->getRepository(Category::class)->findBy([], ['name' => 'ASC']);
    }
}