<?php

namespace App\Controller;


use App\Entity\CustomerOrder;
use App\Entity\Gift;
use App\Entity\User;
use App\Service\GoogleTranslator;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use \Swift_Mailer;
use \Swift_Message;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\Exception\SessionUnavailableException;
use Doctrine\ORM\NonUniqueResultException;

abstract class AbstractController extends Controller
{
    /**
     * @var GoogleTranslator
     */
    private $googleTranslator;

    /**
     * @var Swift_Mailer
     */
    private $mailer;

    public function __construct(GoogleTranslator $googleTranslator, Swift_Mailer $mailer)
    {
        $this->googleTranslator = $googleTranslator;
        $this->mailer = $mailer;
    }

    /**
     * alias for $this->googleTranslator->gTrans($text)
     *
     * @param string $text
     * @param bool $force
     * @return string
     */
    protected function gTrans($text, $force = false):string
    {
        return $this->googleTranslator->gTrans($text, $force);
    }

    /**
     * alias for $this->googleTranslator->gTransDB($text)
     *
     * @param $text
     * @param bool $force
     * @return string
     */
    protected function gTransDB($text, $force = false):string
    {
        return $this->googleTranslator->gTransDB($text, $force);
    }

    /**
     * @return bool
     */
    protected function onSales():bool
    {
        $shopSettings = $this->getParameter('shop_settings');

        return $shopSettings['sales']['start'] < time() && time() < $shopSettings['sales']['end'];
    }

    protected function checkGift(?Gift $gift)
    {
        if ($this->onSales()) {
            return null;
        }
        try {
            return $this->getDoctrine()->getRepository(Gift::class)->checkGift($gift);
        } catch (NonUniqueResultException $e) {
            $title = 'Problème site - code de chèque cadeau en doublon';
            $body = 'L\'utilisateur '.$this->getUser()->getRealname().' n\'a pas pu utiliser le chèque-cadeau n°'.$gift->getCode().' car ce code existe en doublon dans la base.';
            $this->alertAdmin($title, $body);
            return $gift->setStatus('Un problème est survenu avec ce code cadeau. Une notification a été transmise au gestionnaire du site.');
        }
    }

    protected function alertAdmin($subject, $body):void
    {
        $message = (new Swift_Message($subject))
            ->setFrom('noreply@belatika.com')
            ->setTo(getenv('ADMIN_MAIL'), 'Admin Belatika')
            ->setBody($body);
        $this->mailer->send($message);
    }

    protected function getSessionFrom(Request $request): SessionInterface
    {
        $session = $request->getSession();
        if($session === null) {
            $backtrace = debug_backtrace();
            $title = 'Problème site - session indisponible';
            $body = 'Impossible de charger la session. Classe : '.$backtrace[1]['class'].', Méthode : '.$backtrace[1]['function'];
            $this->alertAdmin($title, $body);
            throw new SessionUnavailableException('An error occured: the session is unavailable');
        }

        return $session;
    }

    protected function getPendingOrder(User $user, $joins = []):?CustomerOrder
    {
        try {
            return $this
                ->getDoctrine()
                ->getManager()
                ->getRepository(CustomerOrder::class)
                ->getPendingOrder($user, $joins);
        } catch (NonUniqueResultException $e) {
            $title = 'Problème site - plusieurs commandes en cours pour l\'utilisateur '.$user->getRealname();
            $body = 'L\'utilisateur '.$user->getRealname().' a plusieurs commandes non finalisées dans la base.';
            $this->alertAdmin($title, $body);
            return null;
        }
    }

    /**
     * @param CustomerOrder $order
     * @return CustomerOrder
     */
    protected function updateOrder(CustomerOrder $order): CustomerOrder
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