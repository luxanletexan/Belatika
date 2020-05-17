<?php

namespace App\Controller;


use App\Entity\BlogArticle;
use App\Entity\Category;
use App\Entity\CustomerOrder;
use App\Entity\EtsyFeedback;
use App\Entity\Item;
use App\Entity\Range;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;


class ShopController extends ParentController
{
    /**
     * @Route("/")
     * @return Response
     */
    public function index():Response
    {
        $doctrine = $this->getDoctrine();

        $sliderItems = $doctrine->getRepository(Item::class)->findAllWithImages(['forSlider' => true]);
        $limit = 12;
        if (is_array($sliderItems)) {
            $sliderItems = array_slice($sliderItems, 0, $limit);
        }
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
     * @Route("/bijoux/recherche", name="app_shop_search")
     * @param Request $request
     * @return Response
     */
    public function search(Request $request):Response
    {
        $search = $request->get('bt-search');

        $items = $this->getDoctrine()->getRepository(Item::class)->searchWithImages(trim($search));

        return $this->render($this->getTemplate('shop/search.html.twig'), ['items' => $items]);
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
        $itemUrl = $this->generateUrl('app_shop_item', [
            'category_slug' => $item->getCategory()->getSlug(),
            'customer' => $item->getCategory()->getCustomers(),
            'slug' => $item->getSlug()
        ], UrlGeneratorInterface::ABSOLUTE_URL);

        $facebookShareUrl = 'https://www.facebook.com/sharer.php?u=' . urlencode($itemUrl);

        return $this->render($this->getTemplate('shop/item.html.twig'), [
            'item' => $item,
            'facebookShareUrl' => $facebookShareUrl
        ]);
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

    /**
     * @Route("/avis", name="app_shop_avis")
     */
    public function ratings()
    {
        $orders = $this->getDoctrine()->getRepository(CustomerOrder::class)->findBy(['rating' => [1,2,3,4,5]]);
        $etsyFeedbacks = $this->getDoctrine()->getRepository(EtsyFeedback::class)->findAll();

        $reviews = [];

        foreach ($orders as $order) {
            $reviews[] = [
                'datetime' => $order->getOrderedAt(),
                'rate' => $order->getRating(),
                'review' => $order->getReview()
            ];
        }
        foreach ($etsyFeedbacks as $etsyFeedback) {
            $datetime = new \DateTime();
            $datetime->setTimestamp($etsyFeedback->getCreationTsz());
            $reviews[] = [
                'datetime' => $datetime,
                'rate' => 3 + 2*$etsyFeedback->getValue(),
                'review' => $etsyFeedback->getMessage()
            ];
        }

        usort($reviews, function ($a, $b) {
            $aDate = $a['datetime'];
            $bDate = $b['datetime'];
            if ($aDate == $bDate) {
                return 0;
            }
            return $aDate > $bDate ? -1 : 1;
        });

        return $this->render($this->getTemplate('shop/avis.html.twig'), ['reviews' => $reviews]);
    }
}