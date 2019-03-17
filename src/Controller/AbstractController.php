<?php

namespace App\Controller;


use App\Service\GoogleTranslator;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

abstract class AbstractController extends Controller
{
    /**
     * @var GoogleTranslator
     */
    private $googleTranslator;

    public function __construct(GoogleTranslator $googleTranslator)
    {
        $this->googleTranslator = $googleTranslator;
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
}