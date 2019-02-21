<?php

namespace App\Controller;

use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;

class SocialController extends Controller
{
    /**
     * @param ClientRegistry $clientRegistry
     * @return RedirectResponse
     * @Route("/connect/facebook", name="connect_facebook_start")
     */
    public function connectFacebook(ClientRegistry $clientRegistry):RedirectResponse
    {
        return $clientRegistry->getClient('facebook')->redirect(['public_profile', 'email']);
    }

    /**
     * @return RedirectResponse
     * @Route("/connect/facebook/check", name="connect_facebook_check")
     */
    public function connectFacebookCheckAction():RedirectResponse
    {
        return $this->redirectToRoute('app_shop_index');
    }

    /**
     * @param ClientRegistry $clientRegistry
     * @return RedirectResponse
     * @Route("/connect/google", name="connect_google_start")
     */
    public function connectGoogle(ClientRegistry $clientRegistry):RedirectResponse
    {
        return $clientRegistry->getClient('google')->redirect(['profile', 'email']);
    }

    /**
     * @return RedirectResponse
     * @Route("/connect/google/check", name="connect_google_check")
     */
    public function connectGoogleCheckAction():RedirectResponse
    {
        return $this->redirectToRoute('app_shop_index');
    }
}
