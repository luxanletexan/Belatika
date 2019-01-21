<?php

namespace App\Twig\Extension;


class TestExtension extends \Twig_Extension
{
    public function getTests():array
    {
        return [
            new \Twig_Test('onDisk', function ($file) {
                return file_exists($file);
            }),
        ];
    }

}