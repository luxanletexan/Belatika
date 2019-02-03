<?php

namespace App\Controller;


use App\Entity\Category;
use App\Entity\Item;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class ShopController extends AbstractController
{
    /**
     * @Route("/{page<\d+>?1}",name="app_shop_index")
     * @param $page integer
     * @return Response
     */
    public function index($page):Response
    {
        $items = $this->getDoctrine()->getRepository(Item::class)->findAllWithImages()->setCurrentPage($page);

        $categories = $this->getDoctrine()->getRepository(Category::class)->findBy([], ['name' => 'ASC']);

        return $this->render('shop/index.html.twig', ['items' => $items, 'categories' => $categories]);
    }
}