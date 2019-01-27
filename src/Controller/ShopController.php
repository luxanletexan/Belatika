<?php

namespace App\Controller;


use App\Entity\Item;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Yaml\Yaml;


class ShopController extends AbstractController
{
    /**
     * @Route("/", name="app_shop_index")
     */
    public function index():Response
    {

        $items = $this->getDoctrine()->getRepository(Item::class)->findAllWithImages();

        return $this->render('shop/index.html.twig', ['items' => $items]);
    }
}