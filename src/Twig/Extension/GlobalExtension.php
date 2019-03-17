<?php

namespace App\Twig\Extension;


class GlobalExtension extends \Twig\Extension\AbstractExtension implements \Twig\Extension\GlobalsInterface
{
    private $sales_start;
    private $sales_end;
    private $now;

    public function __construct($shopSettings)
    {
        $this->sales_start = $shopSettings['sales']['start'];
        $this->sales_end = $shopSettings['sales']['end'];
        $this->now = time();
    }

    /**
     * Returns a list of global variables to add to the existing list.
     *
     * @return array An array of global variables
     */
    public function getGlobals():array
    {
        return [
            'onSales' => $this->sales_start < $this->now && $this->now < $this->sales_end,
        ];
    }
}