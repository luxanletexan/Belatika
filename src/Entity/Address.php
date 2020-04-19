<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AddressRepository")
 * @ORM\Table(indexes={
 *     @ORM\Index(columns={"additional"})
 * })
 */
class Address
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\User", mappedBy="deliveryAddress")
     */
    private $deliveryUser;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\User", mappedBy="billingAddress")
     */
    private $billingUser;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CustomerOrder", mappedBy="deliveryAddress")
     */
    private $deliveryCustomerOrder;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CustomerOrder", mappedBy="billingAddress")
     */
    private $billingCustomerOrder;

    /**
     * @ORM\Column(type="text")
     */
    private $fullAddress;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $administrative;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $country;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $countryCode;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $county;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $lat;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $lng;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $value;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $postcode;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $additional;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lastname;

    public function __construct()
    {
        $this->deliveryCustomerOrder = new ArrayCollection();
        $this->billingCustomerOrder = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFullAddress(): ?string
    {
        return $this->fullAddress;
    }

    public function setFullAddress(?string $fullAddress): self
    {
        $this->fullAddress = $fullAddress;

        return $this;
    }

    public function getAdministrative(): ?string
    {
        return $this->administrative;
    }

    public function setAdministrative(?string $administrative): self
    {
        $this->administrative = $administrative;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(?string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(?string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getCountryCode(): ?string
    {
        return $this->countryCode;
    }

    public function setCountryCode(?string $countryCode): self
    {
        $this->countryCode = $countryCode;

        return $this;
    }

    public function getCounty(): ?string
    {
        return $this->county;
    }

    public function setCounty(?string $county): self
    {
        $this->county = $county;

        return $this;
    }

    public function getLat(): ?float
    {
        return $this->lat;
    }

    public function setLat(?float $lat): self
    {
        $this->lat = $lat;

        return $this;
    }

    public function getLng(): ?float
    {
        return $this->lng;
    }

    public function setLng(?float $lng): self
    {
        $this->lng = $lng;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(?string $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getPostcode(): ?string
    {
        return $this->postcode;
    }

    public function setPostcode(?string $postcode): self
    {
        $this->postcode = $postcode;

        return $this;
    }

    public function getDeliveryUser(): ?User
    {
        return $this->deliveryUser;
    }

    public function setDeliveryUser(?User $deliveryUser): self
    {
        $this->deliveryUser = $deliveryUser;

        return $this;
    }

    public function getBillingUser(): ?User
    {
        return $this->billingUser;
    }

    public function setBillingUser(?User $billingUser): self
    {
        $this->billingUser = $billingUser;

        return $this;
    }

    public function getAdditional(): ?string
    {
        return $this->additional;
    }

    public function setAdditional(?string $additional): self
    {
        $this->additional = $additional;

        return $this;
    }

    public function isFullyFilled()
    {
        $requiredFields = ['city', 'country', 'countryCode', 'county', 'value', 'postcode'];

        foreach ($requiredFields as $field) {
            if (is_null($this->$field)) {
                return false;
            }
        }

        return true;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    /**
     * @return Collection|CustomerOrder[]
     */
    public function getDeliveryCustomerOrder(): Collection
    {
        return $this->deliveryCustomerOrder;
    }

    public function addDeliveryCustomerOrder(CustomerOrder $deliveryCustomerOrder): self
    {
        if (!$this->deliveryCustomerOrder->contains($deliveryCustomerOrder)) {
            $this->deliveryCustomerOrder[] = $deliveryCustomerOrder;
            $deliveryCustomerOrder->setDeliveryAddress($this);
        }

        return $this;
    }

    public function removeDeliveryCustomerOrder(CustomerOrder $deliveryCustomerOrder): self
    {
        if ($this->deliveryCustomerOrder->contains($deliveryCustomerOrder)) {
            $this->deliveryCustomerOrder->removeElement($deliveryCustomerOrder);
            // set the owning side to null (unless already changed)
            if ($deliveryCustomerOrder->getDeliveryAddress() === $this) {
                $deliveryCustomerOrder->setDeliveryAddress(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|CustomerOrder[]
     */
    public function getBillingCustomerOrder(): Collection
    {
        return $this->billingCustomerOrder;
    }

    public function addBillingCustomerOrder(CustomerOrder $billingCustomerOrder): self
    {
        if (!$this->billingCustomerOrder->contains($billingCustomerOrder)) {
            $this->billingCustomerOrder[] = $billingCustomerOrder;
            $billingCustomerOrder->setBillingAddress($this);
        }

        return $this;
    }

    public function removeBillingCustomerOrder(CustomerOrder $billingCustomerOrder): self
    {
        if ($this->billingCustomerOrder->contains($billingCustomerOrder)) {
            $this->billingCustomerOrder->removeElement($billingCustomerOrder);
            // set the owning side to null (unless already changed)
            if ($billingCustomerOrder->getBillingAddress() === $this) {
                $billingCustomerOrder->setBillingAddress(null);
            }
        }

        return $this;
    }
}
