<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TraductionRepository")
 * @ORM\Table(name="traduction", indexes={
 *     @ORM\Index(name="search", columns={"crc32", "target"})
 * })
 */
class Traduction
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="bigint")
     */
    private $crc32;

    /**
     * @ORM\Column(type="string", length=2, options={"fixed"=true})
     */
    private $target;

    /**
     * @ORM\Column(type="text")
     */
    private $traduction;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTarget(): ?string
    {
        return $this->target;
    }

    public function setTarget(string $target): self
    {
        $this->target = $target;

        return $this;
    }

    public function getCrc32(): ?int
    {
        return $this->crc32;
    }

    public function setCrc32(int $crc32): self
    {
        $this->crc32 = $crc32;

        return $this;
    }

    public function getTraduction(): ?string
    {
        return $this->traduction;
    }

    public function setTraduction(string $traduction): self
    {
        $this->traduction = $traduction;

        return $this;
    }
}
