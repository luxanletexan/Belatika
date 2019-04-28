<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AddressRepository")
 * @ORM\Table(indexes={@ORM\Index(columns={"full_address"}, flags={"fulltext"})})
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
     * @ORM\OneToMany(targetEntity="App\Entity\User", mappedBy="deliveryAddress")
     */
    private $deliveryUsers;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\User", mappedBy="billingAddress")
     */
    private $billingUsers;

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

    public function __construct()
    {
        $this->deliveryUsers = new ArrayCollection();
        $this->billingUsers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFullAddress(): ?string
    {
        return $this->fullAddress;
    }

    public function setFullAddress(string $fullAddress): self
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

    /**
     * @return Collection|User[]
     */
    public function getDeliveryUsers(): Collection
    {
        return $this->deliveryUsers;
    }

    public function addDeliveryUser(User $deliveryUser): self
    {
        if (!$this->deliveryUsers->contains($deliveryUser)) {
            $this->deliveryUsers[] = $deliveryUser;
            $deliveryUser->setDeliveryAddress($this);
        }

        return $this;
    }

    public function removeDeliveryUser(User $deliveryUser): self
    {
        if ($this->deliveryUsers->contains($deliveryUser)) {
            $this->deliveryUsers->removeElement($deliveryUser);
            // set the owning side to null (unless already changed)
            if ($deliveryUser->getDeliveryAddress() === $this) {
                $deliveryUser->setDeliveryAddress(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getBillingUsers(): Collection
    {
        return $this->billingUsers;
    }

    public function addBillingUser(User $billingUser): self
    {
        if (!$this->billingUsers->contains($billingUser)) {
            $this->billingUsers[] = $billingUser;
            $billingUser->setBillingAddress($this);
        }

        return $this;
    }

    public function removeBillingUser(User $billingUser): self
    {
        if ($this->billingUsers->contains($billingUser)) {
            $this->billingUsers->removeElement($billingUser);
            // set the owning side to null (unless already changed)
            if ($billingUser->getBillingAddress() === $this) {
                $billingUser->setBillingAddress(null);
            }
        }

        return $this;
    }
}
