<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TranslationRepository")
 * @ORM\Table(name="translation", indexes={
 *     @ORM\Index(name="search", columns={"crc32", "target"})
 * })
 */
class Translation
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
    private $translation;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getTarget(): ?string
    {
        return $this->target;
    }

    /**
     * @param string $target
     * @return Translation
     */
    public function setTarget(string $target): self
    {
        $this->target = $target;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getCrc32(): ?int
    {
        return $this->crc32;
    }

    /**
     * @param int $crc32
     * @return Translation
     */
    public function setCrc32(int $crc32): self
    {
        $this->crc32 = $crc32;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getTranslation(): ?string
    {
        return $this->translation;
    }

    /**
     * @param string $translation
     * @return Translation
     */
    public function setTranslation(string $translation): self
    {
        $this->translation = $translation;

        return $this;
    }
}
