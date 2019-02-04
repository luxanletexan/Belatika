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
     * @Route("/{page<\d+>?1}", name="app_shop_index")
     * @param $page integer
     * @return Response
     */
    public function index($page):Response
    {
        $items = $this->getDoctrine()->getRepository(Item::class)->findAllWithImages()->setCurrentPage($page);

        $categories = $this->getDoctrine()->getRepository(Category::class)->findBy([], ['name' => 'ASC']);

        return $this->render('shop/index.html.twig', ['items' => $items, 'categories' => $categories]);
    }

    /**
     * @Route("/bijoux/{customer<femme|homme>}/{slug}/{page<\d+>?1}", name="app_shop_category")
     * @param Category $category
     * @param $page integer
     * @return Response
     */
    public function category(Category $category, $page):Response
    {
        $items = $this->getDoctrine()->getRepository(Item::class)->findCategoryWithImages($category)->setCurrentPage($page);

        $categories = $this->getDoctrine()->getRepository(Category::class)->findBy([], ['name' => 'ASC']);

        return $this->render('shop/category.html.twig', ['category' => $category, 'items' => $items, 'categories' => $categories]);
    }

    /**
     * @Route("/bijoux/{customer<femme|homme>}/{category_slug}/{slug}", name="app_shop_item")
     * @param Item $item
     * @return Response
     */
    public function item(Item $item):Response
    {
        $categories = $this->getDoctrine()->getRepository(Category::class)->findBy([], ['name' => 'ASC']);

        return $this->render('shop/item.html.twig', ['item' => $item, 'categories' => $categories]);
    }

    /**
     * @Route("/conditions-generales-de-vente", name="app_shop_cgv")
     */
    public function cgv(): Response
    {
        $categories = $this->getDoctrine()->getRepository(Category::class)->findBy([], ['name' => 'ASC']);
        return $this->render('shop/cgv.html.twig', ['categories' => $categories]);
    }

    /**
     * @Route("/mentions-legales", name="app_shop_legals")
     */
    public function legals(): Response
    {
        $categories = $this->getDoctrine()->getRepository(Category::class)->findBy([], ['name' => 'ASC']);
        return $this->render('shop/legals.html.twig', ['categories' => $categories]);
    }

    /**
     * @Route("/condition-d-utilisation-du-blog", name="app_shop_bloginfos")
     */
    public function bloginfos(): Response
    {
        $categories = $this->getDoctrine()->getRepository(Category::class)->findBy([], ['name' => 'ASC']);
        return $this->render('shop/bloginfos.html.twig', ['categories' => $categories]);
    }
}