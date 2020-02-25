<?php

namespace App\Controller;


use App\Entity\BlogArticle;
use App\Entity\Category;
use App\Entity\Item;
use App\Entity\Range;
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
        $migrator->migrateRanges();
        $migrator->migrateItems();
        $migrator->migrateAddresses();
        $migrator->migrateUsers();
        $migrator->migrateGift();
        $migrator->migrateOrders();
        $migrator->migrateBlog();
        $migrator->migrateComments();

        return $this->redirectToRoute('app_shop_index');
    }

    /**
     * @Route("/")
     * @return Response
     */
    public function index():Response
    {
        $doctrine = $this->getDoctrine();

        $sliderItems = $doctrine->getRepository(Item::class)->findAllWithImages(['highlighted' => true], false);
        $ranges = $doctrine->getRepository(Range::class)->findAll();
        $blogArticle = $doctrine->getRepository(BlogArticle::class)->findLastWithComments();

        return $this->render(
            $this->getTemplate('shop/index.html.twig'),
            [
                'sliderItems' => $sliderItems,
                'ranges' => $ranges,
                'blogArticle' => $blogArticle,
            ]
        );
    }

    /**
     * @Route("/bijoux/{customer<femme|homme>}/{slug}", name="app_shop_category")
     * @param Category $category
     * @return Response
     */
    public function category(Category $category):Response
    {
        $items = $this->getDoctrine()->getRepository(Item::class)->findCategoryWithImages($category);

        return $this->render($this->getTemplate('shop/category.html.twig'), ['category' => $category, 'items' => $items]);
    }

    /**
     * @Route("/gamme/{slug}", name="app_shop_range")
     * @param Range $range
     * @return Response
     */
    public function range(Range $range):Response
    {
        $items = $this->getDoctrine()->getRepository(Item::class)->findRangeWithImages($range);

        return $this->render($this->getTemplate('shop/range.html.twig'), ['range' => $range, 'items' => $items]);
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
        return $this->render($this->getTemplate('shop/cgv.html.twig'));
    }

    /**
     * @Route("/mentions-legales", name="app_shop_legals")
     */
    public function legals(): Response
    {
        return $this->render($this->getTemplate('shop/legals.html.twig'));
    }

    /**
     * @Route("/condition-d-utilisation-du-blog", name="app_shop_bloginfos")
     */
    public function bloginfos(): Response
    {
        return $this->render($this->getTemplate('shop/bloginfos.html.twig'));
    }
}