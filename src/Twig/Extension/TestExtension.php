<?php

namespace App\Twig\Extension;


use Twig\Extension\AbstractExtension;
use Twig\TwigTest;

class TestExtension extends AbstractExtension
{
    public function getTests():array
    {
        return [
            new TwigTest('onDisk', static function ($file) {
                return file_exists($file);
            }),
        ];
    }
}