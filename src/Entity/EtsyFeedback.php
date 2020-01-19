<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EtsyFeedbackRepository")
 */
class EtsyFeedback
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $message;

    /**
     * @ORM\Column(type="smallint")
     */
    private $value;

    /**
     * @ORM\Column(type="integer")
     */
    private $feedback_id;

    /**
     * @ORM\Column(type="integer")
     */
    private $creation_tsz;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(?string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getValue(): ?int
    {
        return $this->value;
    }

    public function setValue(int $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getFeedbackId(): ?int
    {
        return $this->feedback_id;
    }

    public function setFeedbackId(int $feedback_id): self
    {
        $this->feedback_id = $feedback_id;

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
}
