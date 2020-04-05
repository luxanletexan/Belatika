<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StatVisitRepository")
 */
class StatVisit
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ip_md5;

    /**
     * @ORM\Column(type="array")
     */
    private $referers = [];

    /**
     * @ORM\Column(type="array")
     */
    private $requested_uris = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIpMd5(): ?string
    {
        return $this->ip_md5;
    }

    public function setIpMd5(string $ip_md5): self
    {
        $this->ip_md5 = $ip_md5;

        return $this;
    }

    public function getReferers(): ?array
    {
        return $this->referers;
    }

    public function setReferers(array $referers): self
    {
        $this->referers = $referers;

        return $this;
    }

    public function addReferer(string $referer): self
    {
        $this->referers[] = $referer;

        return $this;
    }

    public function getRequestedUris(): ?array
    {
        return $this->requested_uris;
    }

    public function setRequestedUris(array $requested_uris): self
    {
        $this->requested_uris = $requested_uris;

        return $this;
    }

    public function addRequestedUri(string $requestedUri): self
    {
        $this->requested_uris[] = $requestedUri;

        return $this;
    }
}
