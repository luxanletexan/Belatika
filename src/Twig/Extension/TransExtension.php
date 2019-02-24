<?php

namespace App\Twig\Extension;


use App\Service\GoogleTranslator;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class TransExtension extends AbstractExtension
{
    private $translator;

    public function __construct(GoogleTranslator $translator)
    {
        $this->translator = $translator;
    }

    public function getFilters():array
    {
        return [
            new TwigFilter('gTrans', [$this->translator, 'gTrans']),
            new TwigFilter('gTransDB', [$this->translator, 'gTransDB']),
        ];
    }
}