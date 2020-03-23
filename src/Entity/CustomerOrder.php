<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CustomerOrderRepository")
 */
class CustomerOrder
{
    use Migration;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="customerOrders")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Address", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $deliveryAddress;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Address", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $billingAddress;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_valid;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_sent;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $sent_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $ordered_at;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $reference;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $total;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $shipping;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $rating;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $giftValueUsed;

    /**
     * @ORM\OneToMany(targetEntity="CustomerOrderLine", mappedBy="customerOrder", cascade={"persist", "remove"})
     */
    private $customerOrderLines;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Gift", cascade={"persist", "remove"})
     */
    private $gift;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Payment", cascade={"persist", "remove"})
     */
    private $payment;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $review;

    public function __construct()
    {
        $this->customerOrderLines = new ArrayCollection();
        $this->is_valid = 0;
        $this->is_sent = 0;
        $this->total = 0;
        $this->shipping = 0;
        $this->giftValueUsed = 0;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getDeliveryAddress(): ?Address
    {
        return $this->deliveryAddress;
    }

    public function setDeliveryAddress(Address $deliveryAddress): self
    {
        $this->deliveryAddress = $deliveryAddress;

        return $this;
    }

    public function getBillingAddress(): ?Address
    {
        return $this->billingAddress;
    }

    public function setBillingAddress(Address $billingAddress): self
    {
        $this->billingAddress = $billingAddress;

        return $this;
    }

    public function getIsValid(): ?bool
    {
        return $this->is_valid;
    }

    public function setIsValid(bool $is_valid): self
    {
        $this->is_valid = $is_valid;

        return $this;
    }

    public function getIsSent(): ?bool
    {
        return $this->is_sent;
    }

    public function setIsSent(bool $is_sent): self
    {
        $this->is_sent = $is_sent;

        return $this;
    }

    public function getSentAt(): ?\DateTimeInterface
    {
        return $this->sent_at;
    }

    public function setSentAt(?\DateTimeInterface $sent_at): self
    {
        $this->sent_at = $sent_at;

        return $this;
    }

    public function getOrderedAt(): ?\DateTimeInterface
    {
        return $this->ordered_at;
    }

    public function setOrderedAt(\DateTimeInterface $ordered_at): self
    {
        $this->ordered_at = $ordered_at;

        return $this;
    }

    public function getReference(): ?int
    {
        return $this->reference;
    }

    public function setReference(?int $reference): self
    {
        $this->reference = $reference;

        return $this;
    }

    public function getTotal(): ?float
    {
        return $this->total;
    }

    public function setTotal(?float $total): self
    {
        $this->total = $total;

        return $this;
    }

    public function getShipping(): ?float
    {
        return $this->shipping;
    }

    public function setShipping(?float $shipping): self
    {
        $this->shipping = $shipping;

        return $this;
    }

    public function getRating(): ?int
    {
        return $this->rating;
    }

    public function setRating(?int $rating): self
    {
        $this->rating = $rating;

        return $this;
    }

    public function getGiftValueUsed(): ?float
    {
        return $this->giftValueUsed;
    }

    public function setGiftValueUsed(?float $giftValueUsed): self
    {
        $this->giftValueUsed = $giftValueUsed;

        return $this;
    }

    /**
     * @return Collection|CustomerOrderLine[]
     */
    public function getCustomerOrderLines(): Collection
    {
        return $this->customerOrderLines;
    }

    public function addCustomerOrderLine(CustomerOrderLine $customerOrderLine): self
    {
        if (!$this->customerOrderLines->contains($customerOrderLine)) {
            $this->customerOrderLines[] = $customerOrderLine;
            $customerOrderLine->setCustomerOrder($this);
        }

        return $this;
    }

    public function removeOrderLine(CustomerOrderLine $customerOrderLine): self
    {
        if ($this->customerOrderLines->contains($customerOrderLine)) {
            $this->customerOrderLines->removeElement($customerOrderLine);
            // set the owning side to null (unless already changed)
            if ($customerOrderLine->getCustomerOrder() === $this) {
                $customerOrderLine->setCustomerOrder(null);
            }
        }

        return $this;
    }

    public function getGift(): ?Gift
    {
        return $this->gift;
    }

    public function setGift(?Gift $gift): self
    {
        $this->gift = $gift;

        return $this;
    }

    public function getPayment(): ?Payment
    {
        return $this->payment;
    }

    public function setPayment(?Payment $payment): self
    {
        $this->payment = $payment;

        return $this;
    }

    public function getReview(): ?string
    {
        return $this->review;
    }

    public function setReview(?string $review): self
    {
        $this->review = $review;

        return $this;
    }
}
