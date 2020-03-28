<?php

namespace App\Controller;


use App\Entity\CustomerOrder;
use App\Entity\Item;
use App\Entity\Payment;
use App\Entity\User;
use App\Service\GoogleTranslator;
use PayPal\Api\Address;
use PayPal\Api\Amount;
use PayPal\Api\BillingInfo;
use PayPal\Api\Details;
use PayPal\Api\Item as PaypalItem;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\PayerInfo;
use PayPal\Api\Payment as PaypalPayment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\RedirectUrls;
use PayPal\Api\ShippingAddress;
use PayPal\Api\Transaction;
use PayPal\Auth\OAuthTokenCredential;
use PayPal\Exception\PayPalConnectionException;
use PayPal\Rest\ApiContext;
use Swift_Mailer;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/paiement")
 */
class PaymentController extends ParentController
{
    const STRIPE_METHOD = 'Stripe';

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
     * @Route("/stripe")
     * @param Request $request
     * @return Response
     */
    public function stripe(Request $request)
    {
        $order = $this->getPendingOrder($this->user, ['gift', 'payment', ['customerOrderLines', 'item']]);

        if ($order === null) {
            $this->addFlash('danger', $this->gTrans('Une erreur est survenue au moment de vérifier votre commande. Aucun paiement n\'a été effectué.'));
            return $this->redirectToRoute('app_shop_index');
        }
        $this->updateOrder($order);

        $stripe_secret_key = getenv('APP_ENV') === 'prod' ? getenv('STRIPE_SECRET_KEY') : getenv('STRIPE_SECRET_KEY_TEST');
        \Stripe\Stripe::setApiKey($stripe_secret_key);

        //Checks if charge already exists
        $payment = $order->getPayment();
        if ($payment instanceof Payment && $payment->getMethod() === self::STRIPE_METHOD) {
            $charge = \Stripe\Charge::retrieve($payment->getIdentifier());
            if ($charge->status === 'succeeded') {
                return $this->validateOrder($order);
            } else {
                $this->addFlash('warning', $this->gTrans('Désolé, votre paiement n\'a pas encore été accepté.'));
                return $this->redirectToRoute('app_order_index');
            }
        } else {
            $amount = (max(0, $order->getTotal() - $order->getGiftValueUsed()) + $order->getShipping()) * 100;
            $user = $order->getUser();
            $token = $request->get('stripeToken');
            try {
                $charge = \Stripe\Charge::create([
                    'amount' => $amount,
                    'currency' => 'eur',
                    'source' => $token,
                    'description' => $user->getUsername() . ' - '.$this->gTrans('Facture').' #' . 2,
                    'statement_descriptor' => $this->gTrans('Votre achat'). ' Belatika',
                ]);
            } catch (\Exception $e) {
                $this->addFlash('danger', $this->gTrans('Désolé, votre paiement n\'a pas pu être accepté.'));
                $this->alertAdmin(
                    'Problème site ou client - echec paiement',
                    'L\erreur suivante est survenue lorque l\'utilisateur '.$user->getRealname().' a voulu payer: '.$e->getMessage()
                );
                $this->redirectToRoute('app_order_index');
            }
            $payment = new Payment();
            $payment->setMethod(self::STRIPE_METHOD)->setIdentifier($charge->id);
            $order->setPayment($payment);
            $this->em->persist($order);
            $this->em->flush();
            if ($charge->status === 'succeeded') {
                return $this->validateOrder($order);
            } else {
                $this->addFlash('warning', $this->gTrans('Désolé, votre paiement n\'a pas encore été accepté.'));
                return $this->redirectToRoute('app_order_index');
            }
        }
    }

    /**
     * @Route("/paypal")
     * @param Request $request
     * @return Response
     */
    public function paypal(Request $request)
    {
        $order = $this->getPendingOrder($this->user, ['gift', 'payment', ['customerOrderLines', 'item']]);

        if ($order === null) {
            $this->addFlash('danger', $this->gTrans('Une erreur est survenue au moment de vérifier votre commande. Aucun paiement n\'a été effectué.'));
            return $this->redirectToRoute('app_shop_index');
        }
        $this->updateOrder($order);

        $paypal_client = getenv('APP_ENV') === 'prod' ? getenv('PAYPAL_CLIENT') : getenv('PAYPAL_CLIENT_TEST');
        $paypal_secret = getenv('APP_ENV') === 'prod' ? getenv('PAYPAL_SECRET') : getenv('PAYPAL_SECRET_TEST');
        $apiContext = new ApiContext(new OAuthTokenCredential($paypal_client, $paypal_secret));
        $mode = getenv('APP_ENV') === 'prod' ? 'live' : 'sandbox';
        $apiContext->setConfig(['mode' => $mode]);

        $transaction = $this->getTransaction($order);

        if ($request->query->has('paymentId') && $request->query->has('PayerID') && $request->query->has('token')) {
            $paymentId = $request->get('paymentId');
            $payerID = $request->get('PayerID');

            $paypalPayment = PaypalPayment::get($paymentId, $apiContext);
            $paymentExecution = new PaymentExecution();
            $paymentExecution->setPayerId($payerID)->addTransaction($transaction);
            try {
                $paypalPayment->execute($paymentExecution, $apiContext);
                return $this->validateOrder($order);
            } catch (\Exception $e) {
                $message = $e instanceof PayPalConnectionException ? json_decode($e->getData())->message : $e->getMessage();
                $this->addFlash('warning', $this->gTrans($message, true));
                return $this->redirectToRoute('app_order_index');
            }
        } else {
            $payerInfo = new PayerInfo();
            $payer = new Payer();
            $payer->setPayerInfo($payerInfo)->setPaymentMethod('paypal');

            $redirectUrls = new RedirectUrls();
            $cancelUrl = $this->generateUrl('app_order_index', [], UrlGeneratorInterface::ABSOLUTE_URL);
            $returnUrl = $this->generateUrl('app_payment_paypal', [], UrlGeneratorInterface::ABSOLUTE_URL);
            $redirectUrls->setCancelUrl($cancelUrl)->setReturnUrl($returnUrl);

            $paypalPayment = new PaypalPayment();
            $paypalPayment->setPayer($payer)->setRedirectUrls($redirectUrls)->addTransaction($transaction)->setIntent('sale');

            try {
                $paypalPayment->create($apiContext);
                return $this->redirect($paypalPayment->getApprovalLink());
            } catch (\Exception $e) {
                $message = $e instanceof PayPalConnectionException ? json_decode($e->getData())->message : $e->getMessage();
                $this->addFlash('warning', $this->gTrans($message, true));
                return $this->redirectToRoute('app_order_index');
            }
        }
    }

    private function validateOrder(CustomerOrder $order)
    {
        $highestReference = $this->getDoctrine()->getRepository(CustomerOrder::class)->getHighestReference();
        $order
            ->setIsValid(true)
            ->setOrderedAt(date_create())
            ->setReference($highestReference + 1);
        $lines = $order->getCustomerOrderLines();
        foreach ($lines as $line) {
            $item = $this->getDoctrine()->getRepository(Item::class)->find($line->getItem()->getId());
            $item->setQuantity($item->getQuantity() - $line->getQuantity());
        }
        $this->em->persist($order);
        $this->em->flush();
        $this->fastMail($this->gTrans('Votre commande Belatika'), $order->getUser()->getEmail(), 'mail/confirmedOrder.html.twig', ['order' => $order]);
        $this->fastMail('Nouvelle commande!', getenv('ADMIN_MAIL'), 'mail/confirmedOrderSeller.html.twig', ['order' => $order]);
        $this->addFlash('success', $this->gTrans('Merci pour votre commande, vous la recevrez très rapidement!'));
        return $this->redirectToRoute('app_shop_index');
    }

    private function getTransaction(CustomerOrder $order): Transaction
    {
        $deliveryAddress = $order->getDeliveryAddress();
        $itemList = new ItemList();
        if ($deliveryAddress->isFullyFilled()) {
            $shippingAddress = new ShippingAddress();
            $shippingAddress
                ->setLine1($deliveryAddress->getValue())
                ->setLine2($deliveryAddress->getAdditional())
                ->setCity($deliveryAddress->getCity())
                ->setCountryCode(strtoupper($deliveryAddress->getCountryCode()))
                ->setPostalCode($deliveryAddress->getPostcode())
                ->setState($deliveryAddress->getCountry())
                ->setRecipientName($order->getUser()->getRealname());

            $itemList->setShippingAddress($shippingAddress);
        }

        $customerOrderLines = $order->getCustomerOrderLines();
        $subTotal = 0;
        foreach ($customerOrderLines as $customerOrderLine) {
            $paypalItem = new PaypalItem();
            $item = $customerOrderLine->getItem();
            $paypalItem
                ->setName($item->getName())
                ->setQuantity($customerOrderLine->getQuantity())
                ->setCurrency('EUR')
                ->setPrice($customerOrderLine->getDiscountPrice());
            $itemList->addItem($paypalItem);
            $subTotal += $customerOrderLine->getQuantity() * $customerOrderLine->getDiscountPrice();
        }

        $details = new Details();
        $details->setSubtotal($subTotal)->setShipping($order->getShipping());

        $amount = new Amount();
        $amount
            ->setCurrency('EUR')
            ->setDetails($details)
            ->setTotal($subTotal + $order->getShipping());

        $transaction = new Transaction();
        $transaction
            ->setItemList($itemList)
            ->setAmount($amount)
            ->setDescription($this->gTrans('Votre achat sur'). ' belatika.com');

        return $transaction;
    }
}