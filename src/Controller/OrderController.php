<?php

namespace App\Controller;

use App\Entity\Gift;
use App\Entity\Item;
use App\Entity\CustomerOrder;
use App\Entity\CustomerOrderLine;
use App\Entity\User;
use App\Service\GoogleTranslator;
use Doctrine\Common\Persistence\ObjectManager;
use Swift_Mailer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

/**
 * @Route("/order")
 */
class OrderController extends AbstractController
{
    /**
     * @var ObjectManager
     */
    private $em;
    /**
     * @var User
     */
    private $user;

    public function __construct(GoogleTranslator $googleTranslator, Swift_Mailer $mailer, ObjectManager $em, TokenStorageInterface $tokenStorage)
    {
        parent::__construct($googleTranslator, $mailer);
        $this->em = $em;
        $this->user = $tokenStorage->getToken()->getUser();
    }

    /**
     * @Route("/")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        $pendingOrder = $this->getPendingOrder(
            $this->user,[
                'gift',
                [
                    'customerOrderLines',
                    'item',
                    'images',
                ],
            ]
        );
        if ($pendingOrder === null) {
            $session = $this->getSessionFrom($request);
            $items = $session->get('cart');
            $gift = $session->get('gift');

            $order = $this->createOrder($items, $gift);
            $this->em->persist($order);
            $this->em->flush();
            $session->remove('cart');
            $session->remove('gift');
        } else {
            $order = $pendingOrder;
        }

        $order = $this->updateOrder($order);

        return $this->render('order/index.html.twig', [
            'order' => $order,
            'stripe_public_key' => getenv('APP_ENV') === 'prod' ? getenv('STRIPE_PUBLIC_KEY') : getenv('STRIPE_PUBLIC_KEY_TEST'),
        ]);
    }

    /**
     * @param Item[] $items
     * @param Gift $gift
     * @return CustomerOrder
     */
    private function createOrder(Array $items, ?Gift $gift): CustomerOrder
    {
        $gift = $this->checkGift($gift);
        $order = new CustomerOrder();
        $order
            ->setUser($this->user)
            ->setDeliveryAddress(clone $this->user->getDeliveryAddress())
            ->setBillingAddress(clone $this->user->getBillingAddress())
            ->setGift($gift);
        foreach ($items as $cartItem) {
            $item = $this->em->getRepository(Item::class)->find($cartItem->getId());
            $orderLine = new CustomerOrderLine();
            $orderLine
                ->setItem($item)
                ->setQuantity($cartItem->getQuantity())
                ->setPrice($item->getPrice())
                ->setDiscount($this->onSales() ? $item->getDiscount() : 0);
            $order->addCustomerOrderLine($orderLine);
        }

        return $order;
    }
}
