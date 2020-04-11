<?php

namespace App\Controller;

use App\Entity\Gift;
use App\Entity\Item;
use App\Entity\CustomerOrder;
use App\Entity\CustomerOrderLine;
use App\Entity\Payment;
use App\Entity\User;
use App\Service\GoogleTranslator;
use Doctrine\Common\Persistence\ObjectManager;
use Stripe\Error\InvalidRequest;
use Stripe\PaymentIntent;
use Stripe\Stripe;
use Swift_Mailer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

/**
 * @Route("/commande")
 */
class OrderController extends ParentController
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

        $stripe_secret_key = getenv('APP_ENV') === 'prod' ? getenv('STRIPE_SECRET_KEY') : getenv('STRIPE_SECRET_KEY_TEST');
        Stripe::setApiKey($stripe_secret_key);

        $payment = $order->getPayment();
        if ($payment instanceof Payment) {
            $intentId = $payment->getIdentifier();
            try {
                $intent = PaymentIntent::retrieve($intentId);
            } catch (InvalidRequest $e) {
                $payment->reset();
            }
        }

        if (!isset($intent)) {
            $amount = (max(0, $order->getTotal() - $order->getGiftValueUsed()) + $order->getShipping()) * 100;
            $intent = PaymentIntent::create([
                'amount' => $amount,
                'currency' => 'eur'
            ]);

            $payment = $payment instanceof Payment ? $payment : new Payment();
            $payment
                ->setMethod('Stripe intent')
                ->setIdentifier($intent->id);
            $this->em->persist($payment);
            $order->setPayment($payment);
            $this->em->flush();
        }

        return $this->render($this->getTemplate('order/index.html.twig'), [
            'order' => $order,
            'stripe_public_key' => getenv('APP_ENV') === 'prod' ? getenv('STRIPE_PUBLIC_KEY') : getenv('STRIPE_PUBLIC_KEY_TEST'),
            'stripe_intent_secret' => $intent->client_secret
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

    /**
     * @Route("/remove")
     * @return Response
     */
    public function remove() {

        $order = $this->getPendingOrder($this->getUser());
        if ($order instanceof CustomerOrder) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($order);
            $em->flush();
        }

        return $this->redirectToRoute('app_shop_index');
    }
}
