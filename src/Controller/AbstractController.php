<?php

namespace App\Controller;


use App\Service\GoogleTranslator;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use \Swift_Mailer;
use \Swift_Message;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\Exception\SessionUnavailableException;

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
     * @return string
     */
    protected function gTrans($text):string
    {
        return $this->googleTranslator->gTrans($text);
    }

    /**
     * alias for $this->googleTranslator->gTransDB($text)
     *
     * @param $text
     * @return string
     */
    protected function gTransDB($text):string
    {
        return $this->googleTranslator->gTransDB($text);
    }

    /**
     * @return bool
     */
    protected function onSales():bool
    {
        $shopSettings = $this->getParameter('shop_settings');

        return $shopSettings['sales']['start'] < time() && time() < $shopSettings['sales']['end'];
    }

    /**
     * @param $entityClass
     * @param Request $request
     * @param string $suffix
     * @return mixed
     */
    protected function hydrate($entityClass, Request $request, $suffix = '')
    {
        $setters = array_filter(get_class_methods($entityClass), static function($method) {
            return 0 === strpos($method, 'set');
        });

        $entity = new $entityClass();
        foreach ($setters as $setter) {
            $key = lcfirst(str_replace('set', '', $setter)).$suffix;
            if ($request->request->has($key)) {
                $value = $request->get($key);
                $entity->$setter($value);
            }
        }

        return $entity;
    }

    protected function alertAdmin($subject, $body):void
    {
        $message = (new Swift_Message($subject))
            ->setFrom('noreply@belatika.com')
            ->setTo($_ENV['ADMIN_MAIL'], 'Admin Belatika')
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
}