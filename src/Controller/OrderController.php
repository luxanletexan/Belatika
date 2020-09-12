<?php

namespace App\Controller;

use App\Entity\Gift;
use App\Entity\Item;
use App\Entity\CustomerOrder;
use App\Entity\CustomerOrderLine;
use App\Entity\Payment;
use App\Entity\User;
use App\Service\GoogleTranslator;
use Stripe\PaymentIntent;
use Stripe\Stripe;
use Swift_Mailer;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

/**
 * @Route("/commande")
 */
class OrderController extends ParentController
{
    /**
     * @var User
     */
    private $user;

    public function __construct(GoogleTranslator $googleTranslator, Swift_Mailer $mailer, TokenStorageInterface $tokenStorage)
    {
        parent::__construct($googleTranslator, $mailer);
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

            $order = $this->createOrder($session);
            $this->getEm()->persist($order);
            $this->getEm()->flush();
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
                //Récupération intention de paiement
                $intent = PaymentIntent::retrieve($intentId);
                $this->alertAdmin('Récupération intention de paiement', 'ID de paiement: '.$intent->id);
            } catch (\Exception $e) {
                $payment->reset();
            }
        }

        if (!isset($intent)) {
            $amount = (max(0, $order->getTotal() - $order->getGiftValueUsed()) + $order->getShipping()) * 100;
            //Création intention de paiement
            $intent = PaymentIntent::create([
                'amount' => $amount,
                'currency' => 'eur'
            ]);
            $this->alertAdmin('Création intention de paiement', 'ID de paiement: '.$intent->id);

            $payment = $payment instanceof Payment ? $payment : new Payment();
            $payment
                ->setMethod('Stripe intent')
                ->setIdentifier($intent->id);
            $this->getEm()->persist($payment);
            $order->setPayment($payment);
            $this->getEm()->flush();
        }

        return $this->render($this->getTemplate('order/index.html.twig'), [
            'order' => $order,
            'stripe_public_key' => getenv('APP_ENV') === 'prod' ? getenv('STRIPE_PUBLIC_KEY') : getenv('STRIPE_PUBLIC_KEY_TEST'),
            'stripe_intent_secret' => $intent->client_secret
        ]);
    }

    /**
     * @Route("/confirmation")
     * @return Response
     */
    public function confirmation()
    {
        return $this->render($this->getTemplate('order/confirmation.html.twig'));
    }

    /**
     * @param SessionInterface $session
     * @return CustomerOrder
     */
    private function createOrder(SessionInterface $session): CustomerOrder
    {

        $items = $session->get('cart');
        $gift = $session->get('gift');
        $address = $session->get('guestAddress');

        $gift = $this->checkGift($gift);
        $order = new CustomerOrder();
        $order
//            ->setUser($this->user)
//            ->setDeliveryAddress(clone $this->user->getDeliveryAddress())
//            ->setBillingAddress(clone $this->user->getBillingAddress())
            ->setGift($gift);

        if ($this->user instanceof User) {
            $order->setUser($this->user)->setAddress(clone $this->user->getAddress());
        } else {
            $order->setAddress($address);
        }

        foreach ($items as $cartItem) {
            $item = $this->getEm()->getRepository(Item::class)->find($cartItem->getId());
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

    /**
     * @Route("/report-error")
     * @param Request $request
     * @return JsonResponse
     */
    public function reportError(Request $request)
    {
        $errors = $request->get('errors');
        $arrayErrors = json_decode($errors);
        $this->alertAdmin('Echec tentative de paiement', is_array($arrayErrors) ? implode("\r\n",  $arrayErrors) : $errors);
        return $this->json([]);
    }
}
