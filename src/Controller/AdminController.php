<?php

namespace App\Controller;

use App\Entity\CustomerOrder;
use App\Entity\EtsyFeedback;
use App\Entity\Image;
use App\Entity\Item;
use App\Form\ItemType;
use App\Form\SettingsType;
use App\Repository\ItemRepository;
use App\Service\API\Etsy;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Yaml\Yaml;

/**
 * @Route("/admin")
 */
class AdminController extends ParentController
{
    private $settingsFile;

    /**
     * @Route("/")
     * @return Response
     */
    public function index()
    {
        return $this->render($this->getTemplate('admin/index.html.twig'));
    }

    /**
     * @Route("/test-mail/{reference<\d+>}")
     * @param CustomerOrder $customerOrder
     * @return Response
     */
    public function testMail(CustomerOrder $customerOrder)
    {
//        $this->fastMail('test mail', 'patxi064@gmail.com', 'mail/sentOrder.html.twig', ['order' => $customerOrder]);

        return $this->render('mail/sentOrder.html.twig', ['order' => $customerOrder]);
    }

    /**
     * @Route("/items/{page<\d+>?1}")
     * @param Request $request
     * @param int $page
     * @return Response
     */
    public function olditems(Request $request, $page): Response
    {
        if ($request->isMethod('POST')) {
            $action = $request->get('action');
            $datas = $request->request->keys();
            $item_ids = [];
            foreach ($datas as $data) {
                if (substr($data,0,5) === 'item-') {
                    $item_ids[] = str_replace('item-', '', $data);
                }
            }
            $this->itemsAction($action, $item_ids);
        }

        /**
         * @var ItemRepository $itemRepository
         */
        $itemRepository = $this->getDoctrine()->getManager()->getRepository(Item::class);
        $items = $itemRepository->findAllWithImages(['paginate' => true])->setCurrentPage($page)->setMaxPerPage(2);

        return $this->render('admin/articles.html.twig', ['items' => $items]);
    }

    /**
     * @Route("/item/add")
     * @param Request $request
     * @return Response
     */
    public function addItem(Request $request): Response
    {
        $form = $this->createForm(ItemType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $item = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($item);
            $em->flush();
            $this->addFlash('success', 'Nouvel article créé');
        }

        return $this->render('admin/addItem.html.twig', ['form' => $form->createView()]);
    }

    /**
     * @Route("/item/update/{id<\d+>}")
     * @param Request $request
     * @param Item $item
     * @return Response
     */
    public function updateItem(Request $request, Item $item)
    {
        $form = $this->createForm(ItemType::class, $item);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $item = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($item);
            $em->flush();
            $this->addFlash('success', 'Article modifié');
        }

        return $this->render($this->getTemplate('admin/addItem.html.twig'), ['form' => $form->createView(), 'item' => $item]);
    }

    /**
     * @Route("/remove/item-image/{id<\d+>}", methods={"POST"})
     * @param Image $image
     * @return Response
     */
    public function removeItemImage(Image $image)
    {
        if ($image->getItem()->getImages()->count() > 1) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($image);
            $em->flush();
            $dataResponse = ['success' => true];
        } else {
            $dataResponse = [
                'success' => false,
                'errorMessage' => 'Impossible de supprimer la dernière image d\'un article',
            ];
        }

        return $this->json($dataResponse);
    }

    /**
     * @Route("/settings")
     * @param Request $request
     * @return Response
     */
    public function settings(Request $request): Response
    {
        $this->settingsFile = $this->getParameter('kernel.project_dir').'\config\packages\belatika.yaml';
        $shop_settings = $this->getShopSettings();

        $form = $this->createForm(SettingsType::class, $shop_settings);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $shop_settings = $form->getData();
            $this->setShopSettings($shop_settings);
        }

        return $this->render('admin/settings.html.twig', ['form' => $form->createView()]);
    }

    private function getShopSettings(): array
    {
        $belatika_yaml = Yaml::parseFile($this->settingsFile);
        $shop_settings = $belatika_yaml['parameters']['shop_settings'];

        $salesStart = $shop_settings['sales']['start'];
        $salesStart = date_create()->setTimestamp($salesStart)->format('d/m/Y');
        $salesEnd = $shop_settings['sales']['end'];
        $salesEnd = date_create()->setTimestamp($salesEnd)->format('d/m/Y');

        $shop_settings['sales'] = $salesStart. ' - '.$salesEnd;

        return $shop_settings;
    }

    private function setShopSettings($shopSettings): void
    {
        $sales = explode(' - ', $shopSettings['sales']);
        $sales = [
            'start' => \DateTime::createFromFormat('d/m/Y H:i:s', $sales[0].' 00:00:00')->getTimestamp(),
            'end' => \DateTime::createFromFormat('d/m/Y H:i:s', $sales[1].' 00:00:00')->getTimestamp(),
        ];

        $shopSettings['sales'] = $sales;

        $belatika_yaml = Yaml::parseFile($this->settingsFile);

        foreach ($shopSettings as $settingName => $setting) {
            if (array_key_exists($settingName, $belatika_yaml['parameters']['shop_settings'])) {
                $belatika_yaml['parameters']['shop_settings'][$settingName] = $setting;
            }
        }

        file_put_contents($this->settingsFile, Yaml::dump($belatika_yaml));
    }

    /**
     * @param string $action
     * @param array $item_ids
     */
    private function itemsAction($action, $item_ids): void
    {
        $em = $this->getDoctrine()->getManager();
        if ($action === 'delete') {
            $items = $em->getRepository(Item::class)->findBy(['id' => $item_ids]);
            foreach ($items as $item) {
                $em->remove($item);
            }
            $em->flush();
            $s = count($items) > 1 ? 's' : '';
            $this->addFlash('success', count($items)."article$s supprimé$s");
        }
    }

    /**
     * @Route("/etsy/get-feedbacks")
     */
    public function etsyGetFeedbacks()
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository(EtsyFeedback::class);
        $etsy = new Etsy(getenv('ETSY_KEY'), getenv('ETSY_USER_ID'));
        $feedbacks = $etsy->getFeedbacks();
        $hasNewFeedbacks = false;
        foreach ($feedbacks as $feedback) {
            $etsyFeedback = $repository->findOneBy(['feedback_id' => $feedback->feedback_id]);
            if ($etsyFeedback === null) {
                $etsyFeedback = new EtsyFeedback();
                $etsyFeedback
                    ->setMessage($feedback->message)
                    ->setValue($feedback->value)
                    ->setFeedbackId($feedback->feedback_id)
                    ->setCreationTsz($feedback->creation_tsz);
                $em->persist($etsyFeedback);
                $hasNewFeedbacks = true;
            }
        }
        if ($hasNewFeedbacks) {
            $em->flush();
        }
        die;
    }

    /**
     * @Route("/commandes")
     */
    public function orders()
    {
        $orders = $this->getDoctrine()->getManager()->getRepository(CustomerOrder::class)->findBy(['is_sent' => '0'], ['reference' => 'DESC']);

        return $this->render($this->getTemplate('admin/orders.html.twig'), ['orders' => $orders]);
    }

    /**
     * @Route("/commande/send/{reference<\d+>}")
     * @param CustomerOrder $order
     * @param Request $request
     * @return RedirectResponse
     */
    public function sendOrder(CustomerOrder $order, Request $request)
    {
        $trackingNumber = $request->get('tracking_number');
        $order->setTrackingNumber($trackingNumber);
        $order->setSentAt(date_create());
        $order->setIsSent(true);
        $em = $this->getDoctrine()->getManager();
        $em->flush();

        $this->fastMail($this->gTrans('Votre commande Belatika est en route'), $order->getUser()->getEmail(), 'mail/sentOrder.html.twig', ['order' => $order]);

        $this->addFlash('success', 'Commande validée et mail envoyé');

        return $this->redirectToRoute('app_admin_orders');
    }

    protected function render($view, array $parameters = [], Response $response = null)
    {
        $menus = [
            'Site Front' => $this->generateUrl('app_shop_index'),
            'Tableau de bord' => $this->generateUrl('app_admin_index'),
            'Blog' => $this->generateUrl('app_admin_blog_blog'),
            'Bijoux' => $this->generateUrl('app_admin_item_index')
        ];
        $parameters['menus'] = $menus;
        return parent::render($view, $parameters, $response);
    }
}
