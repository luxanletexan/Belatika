<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CustomerOrderLineRepository")
 */
class CustomerOrderLine
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Item")
     * @ORM\JoinColumn(nullable=false)
     */
    private $item;

    /**
     * @ORM\ManyToOne(targetEntity="CustomerOrder", inversedBy="customerOrderLines")
     * @ORM\JoinColumn(nullable=false)
     */
    private $customerOrder;

    /**
     * @ORM\Column(type="smallint")
     */
    private $quantity;

    /**
     * @ORM\Column(type="smallint")
     */
    private $discount;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $price;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getItem(): ?Item
    {
        return $this->item;
    }

    public function setItem(?Item $item): self
    {
        $this->item = $item;

        return $this;
    }

    public function getCustomerOrder(): ?CustomerOrder
    {
        return $this->customerOrder;
    }

    public function setCustomerOrder(?CustomerOrder $customerOrder): self
    {
        $this->customerOrder = $customerOrder;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getDiscount(): ?int
    {
        return $this->discount;
    }

    public function setDiscount(int $discount): self
    {
        $this->discount = $discount;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(?float $price): self
    {
        $this->price = $price;

        return $this;
    }
}
