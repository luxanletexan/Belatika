<?php

namespace App\EventListener;


use Symfony\Component\HttpKernel\Event\GetResponseEvent;

class ClientLocaleListener
{
    private $locales;

    public function __construct($locales)
    {
        $this->locales = $locales;
    }

    public function onKernelRequest(GetResponseEvent $event):void
    {
        if (!$event->isMasterRequest()) {
            return;
        }
        $request = $event->getRequest();
        $preferredLanguage = substr($request->getPreferredLanguage(), 0, 2);
        $locale = in_array($preferredLanguage, $this->locales, true) ? $preferredLanguage : 'en';
        $request->setLocale($locale);
    }

}