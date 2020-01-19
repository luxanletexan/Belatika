<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use \DateTime;
use \DateTimeInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GiftRepository")
 */
class Gift
{
    use Migration;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\User", cascade={"persist", "remove"})
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=9, unique=true)
     */
    private $code;

    /**
     * @ORM\Column(type="float")
     */
    private $value;

    /**
     * @ORM\Column(type="boolean")
     */
    private $valid;

    /**
     * @ORM\Column(type="date")
     * @var DateTimeInterface
     */
    private $start;

    /**
     * @ORM\Column(type="date")
     * @var DateTimeInterface
     */
    private $end;

    private $status;

    public function __construct()
    {
        $this->valid = false;
    }

    public function initDate(): self
    {
        $this->start = new DateTime();
        $this->end = (new DateTime())->modify('+1 year');

        return $this;
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

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getValue(): ?float
    {
        return $this->value;
    }

    public function setValue(float $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getValid(): ?bool
    {
        return $this->valid;
    }

    public function setValid(bool $valid): self
    {
        $this->valid = $valid;

        return $this;
    }

    public function getStart(): ?DateTimeInterface
    {
        return $this->start;
    }

    public function setStart(DateTimeInterface $start): self
    {
        $this->start = $start;

        return $this;
    }

    public function getEnd(): ?DateTimeInterface
    {
        return $this->end;
    }

    public function setEnd(DateTimeInterface $end): self
    {
        $this->end = $end;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus($status): self
    {
        $this->status = $status;

        return $this;
    }

    public function updateStatus(): self
    {
        if ($this->start === null || $this->end === null) {
            $this->status = 'Désolé, ce code n\'existe pas. Merci de vérifier que le code que vous avez saisi est correct.';
            $this->valid = false;
        } elseif (!$this->valid) {
            $this->status = 'Désolé, ce code a déjà été utilisé.';
        } elseif ($this->start > new DateTime()) {
            $this->status = 'Désolé, vous devez attendre le ' . $this->start->format('d/m/Y') . ' pour utiliser ce code.';
            $this->valid = false;
        } elseif ($this->end < new DateTime('-1 day')) {
            $this->status = 'Désolé, ce code n\'est plus utilisable depuis le '. $this->end->format('d/m/Y');
            $this->valid = false;
        } else {
            $this->status =
                'Votre code cadeau de '.number_format($this->value, 2, ',', ' ')
                .'€ est utilisable une seule fois jusqu\'au '. $this->end->format('d/m/Y');
        }

        return $this;
    }
}
