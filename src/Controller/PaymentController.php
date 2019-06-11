<?php

namespace App\Controller;


use App\Entity\CustomerOrder;
use App\Entity\Payment;
use App\Entity\User;
use App\Service\GoogleTranslator;
use Swift_Mailer;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/paiement")
 */
class PaymentController extends AbstractController
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

    private function validateOrder(CustomerOrder $order)
    {
        $highestReference = $this->getDoctrine()->getRepository(CustomerOrder::class)->getHighestReferene();
        $order
            ->setIsValid(true)
            ->setOrderedAt(date_create())
            ->setReference($highestReference + 1);
        $this->em->persist($order);
        $this->em->flush();
        $this->addFlash('success', $this->gTrans('Merci pour votre commande, vous la recevrez très rapidement!'));
        return $this->redirectToRoute('app_shop_index');
    }
}