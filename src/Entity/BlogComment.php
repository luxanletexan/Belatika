<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BlogCommentRepository")
 */
class BlogComment
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\BlogArticle", inversedBy="blogComments")
     */
    private $blogArticle;

    /**
     * @ORM\Column(type="datetime")
     */
    private $posted_at;

    /**
     * @ORM\Column(type="text")
     */
    private $content;

    public function __construct()
    {
        $this->posted_at = date_create();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPostedAt(): ?\DateTimeInterface
    {
        return $this->posted_at;
    }

    public function setPostedAt(\DateTimeInterface $posted_at): self
    {
        $this->posted_at = $posted_at;

        return $this;
    }

    public function getContent(): ?string
    {
        return preg_replace('#^(.*)https://belatika\.com/bijoux/(femme|homme)/([0-9a-z\-]+)/([0-9a-z\-]+)(.*)$#', '$1<a href="https://belatika.com/bijoux/$2/$3/$4">$4</a>$5', $this->content);
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
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

    public function getBlogArticle(): ?BlogArticle
    {
        return $this->blogArticle;
    }

    public function setBlogArticle(?BlogArticle $blogArticle): self
    {
        $this->blogArticle = $blogArticle;

        return $this;
    }

    public function belongsTo(?User $user)
    {
        if (!$this->user instanceof User || !$user instanceof User) {
            return false;
        }

        return $user->getId() === $this->user->getId();
    }
}
