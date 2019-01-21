<?php

namespace App\Controller;


use App\Entity\Item;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class ShopController extends AbstractController
{
    /**
     * @Route("/", name="app_shop_index")
     */
    public function index():Response
    {

        $text = "Ceci est un texte de test pour le hachagesfbsdfbef'è(&é'";

        $crc = crc32($text);

        $repository = $this->getDoctrine()->getRepository(Item::class);
        $items = $repository->findAllWithImages();

        return $this->render('shop/index.html.twig', ['items' => $items]);
    }

}