<?php

namespace App\Controller;


use App\Entity\Category;
use App\Entity\Item;
use App\Service\BelatikaMigrator;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class ShopController extends AbstractController
{
    /**
     * @Route("/migrate", name="app_shop_migrate")
     * @param BelatikaMigrator $migrator
     * @return RedirectResponse
     */
    public function migrate(BelatikaMigrator $migrator)
    {
        $migrator->clearAll();
        $migrator->migrateCategories();
        $migrator->migrateItems();
        $migrator->migrateAddresses();
        $migrator->migrateUsers();
        $migrator->migrateGift();
        $migrator->migrateOrders();

        return $this->redirectToRoute('app_shop_index');
    }

    /**
     * @Route("/{page<\d+>?1}", name="app_shop_index")
     * @param $page integer
     * @return Response
     */
    public function index($page):Response
    {
        $itemRepository = $this->getDoctrine()->getRepository(Item::class);

        $sliderItems = $itemRepository->findAllWithImages(['highlighted' => true], false);
        $items = $itemRepository->findAllWithImages(['highlighted' => false])->setCurrentPage($page);

        return $this->render($this->getTemplate('shop/index.html.twig'), ['sliderItems' => $sliderItems, 'items' => $items]);
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

        return $this->render('shop/category.html.twig', ['category' => $category, 'items' => $items]);
    }

    /**
     * @Route("/bijoux/{customer<femme|homme>}/{category_slug}/{slug}", name="app_shop_item")
     * @param Item $item
     * @return Response
     */
    public function item(Item $item):Response
    {
        return $this->render('shop/item.html.twig', ['item' => $item]);
    }

    /**
     * @Route("/conditions-generales-de-vente", name="app_shop_cgv")
     */
    public function cgv(): Response
    {
        return $this->render('shop/cgv.html.twig');
    }

    /**
     * @Route("/mentions-legales", name="app_shop_legals")
     */
    public function legals(): Response
    {
        return $this->render('shop/legals.html.twig');
    }

    /**
     * @Route("/condition-d-utilisation-du-blog", name="app_shop_bloginfos")
     */
    public function bloginfos(): Response
    {
        return $this->render('shop/bloginfos.html.twig');
    }
}