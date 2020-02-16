<?php


namespace App\EventListener;


use Symfony\Component\HttpKernel\Event\GetResponseEvent;

class RequestListener
{
    public function onKernelRequest(GetResponseEvent $event)
    {
        $session = $event->getRequest()->getSession();
        $request = $event->getRequest();

        $route = $request->attributes->get('_route');

        if (preg_match('#^app_#', $route) !== 1) {
            return;
        }
        $session->set('_last_route', $request->getSchemeAndHttpHost().$request->getRequestUri());
    }
}