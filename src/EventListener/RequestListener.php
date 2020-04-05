<?php


namespace App\EventListener;


use App\Entity\StatVisit;
use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;

class RequestListener
{
    /**
     * @var EntityManager
     */
    private $manager;

    public function __construct(EntityManager $manager)
    {
        $this->manager = $manager;
    }

    public function onKernelRequest(GetResponseEvent $event)
    {
        $session = $event->getRequest()->getSession();
        $request = $event->getRequest();

        //Stats visite
        $referer = $request->headers->get('referer');
        $referer = empty($referer) ? 'none' : $referer;
        $host = $request->getHost();
        if (preg_match("#$host#", $referer) !== 1) {
            $clientIpMd5 = md5($request->getClientIp());
            $requestedURI = $request->getRequestUri();
            $requestedURI = empty($requestedURI) ? 'none' : $requestedURI;
            $statVisit = $this->manager->getRepository(StatVisit::class)->findOneBy(['ip_md5' => $clientIpMd5]);
            if ($statVisit instanceof StatVisit) {
                $statVisit
                    ->addReferer($referer)
                    ->addRequestedUri($requestedURI);
            } else {
                $statVisit = new StatVisit();
                $statVisit->setIpMd5($clientIpMd5)->setReferers([$referer])->setRequestedUris([$requestedURI]);
            }

            $this->manager->persist($statVisit);
            $this->manager->flush();
        }

        $route = $request->attributes->get('_route');

        if (
            preg_match('#^app_#', $route) !== 1
            || preg_match('#^app_cart_add#', $route) === 1
        ) {
            return;
        }
        $session->set('_last_route', $request->getSchemeAndHttpHost().$request->getRequestUri());
    }
}