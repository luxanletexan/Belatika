<?php

namespace App\Controller;

use App\Entity\Gift;
use App\Entity\Item;
use App\Entity\CustomerOrder;
use App\Entity\CustomerOrderLine;
use App\Service\GoogleTranslator;
use Doctrine\Common\Persistence\ObjectManager;
use Swift_Mailer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/order")
 */
class OrderController extends AbstractController
{
    /**
     * @var ObjectManager
     */
    private $em;

    public function __construct(GoogleTranslator $googleTranslator, Swift_Mailer $mailer, ObjectManager $em)
    {
        parent::__construct($googleTranslator, $mailer);
        $this->em = $em;
    }

    /**
     * @Route("/")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        $pendingOrder = $this->getPendingOrder();
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
        $user = $this->getUser();
        $order = new CustomerOrder();
        $order
            ->setUser($user)
            ->setDeliveryAddress(clone $user->getDeliveryAddress())
            ->setBillingAddress(clone $user->getBillingAddress())
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

    /**
     * @param CustomerOrder $order
     * @return CustomerOrder
     */
    private function updateOrder(CustomerOrder $order): CustomerOrder
    {
        $orderLines = $order->getCustomerOrderLines();
        $total = 0;
        foreach ($orderLines as $orderLine) {
            $item = $orderLine->getItem();
            $orderLine
                ->setDiscount($this->onSales() ? $item->getDiscount() : 0)
                ->setPrice($item->getPrice())
                ->setQuantity(min($orderLine->getQuantity(), $item->getQuantity()));

            $total += $orderLine->getQuantity() * $orderLine->getPrice() * (100 - $orderLine->getDiscount())/100;
        }

        $order->setTotal($total);
        $gift = $order->getGift();
        if(!$this->onSales() && $gift instanceof Gift && $gift->updateStatus()->getValid()) {
            $order->setGiftValueUsed(min($total, $gift->getValue()));
        }
        return $order;
    }
}
