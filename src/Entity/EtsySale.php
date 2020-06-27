<?php

namespace App\Entity;

use App\Repository\EtsySaleRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EtsySaleRepository::class)
 */
class EtsySale
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", unique=true)
     */
    private $receipt_id;

    /**
     * @ORM\Column(type="integer")
     */
    private $creation_tsz;

    /**
     * @ORM\Column(type="integer")
     */
    private $country_id;

    /**
     * @ORM\Column(type="string")
     */
    private $country_code;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $country_name;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getReceiptId(): ?int
    {
        return $this->receipt_id;
    }

    public function setReceiptId(int $receipt_id): self
    {
        $this->receipt_id = $receipt_id;

        return $this;
    }

    public function getCreationTsz(): ?int
    {
        return $this->creation_tsz;
    }

    public function setCreationTsz(int $creation_tsz): self
    {
        $this->creation_tsz = $creation_tsz;

        return $this;
    }

    public function getCountryId(): ?int
    {
        return $this->country_id;
    }

    public function setCountryId(int $country_id): self
    {
        $this->country_id = $country_id;

        return $this;
    }

    public function getCountryCode(): ?string
    {
        return $this->country_code;
    }

    public function setCountryCode($country_code): self
    {
        $this->country_code = $country_code;

        return $this;
    }

    public function getCountryName(): ?string
    {
        return $this->country_name;
    }

    public function setCountryName(string $country_name): self
    {
        $this->country_name = $country_name;

        return $this;
    }
}
