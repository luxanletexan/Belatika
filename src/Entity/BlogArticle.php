<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BlogArticleRepository")
 */
class BlogArticle
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $posted_at;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     * @Gedmo\Slug(fields={"title"})
     */
    private $slug;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $metaDescription;

    /**
     * @ORM\Column(type="text")
     */
    private $content;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\BlogComment", mappedBy="blogArticle")
     */
    private $blogComments;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isPublished;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
        $this->blogComments = new ArrayCollection();
        $this->posted_at = date_create();
        $this->isPublished = false;
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

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getIsPublished(): ?bool
    {
        return $this->isPublished;
    }

    public function setIsPublished(bool $isPublished): self
    {
        $this->isPublished = $isPublished;

        return $this;
    }

    public function getMainImage()
    {
        preg_match('#<img src="([^"]+)" alt="([^"]+)"[^>]*>#', $this->content, $matches);

        $src = isset($matches[1]) ? $matches[1] : 'img/resources/belatika_logo.png';
        $alt = isset($matches[2]) ? $matches[2] : 'Logo Belatika';

        return ['src' => $src, 'alt' => $alt];
    }

    /**
     * @return Collection|BlogComment[]
     */
    public function getBlogComments(): Collection
    {
        return $this->blogComments;
    }

    public function addBlogComment(BlogComment $blogComment): self
    {
        if (!$this->blogComments->contains($blogComment)) {
            $this->blogComments[] = $blogComment;
            $blogComment->setBlogArticle($this);
        }

        return $this;
    }

    public function removeBlogComment(BlogComment $blogComment): self
    {
        if ($this->blogComments->contains($blogComment)) {
            $this->blogComments->removeElement($blogComment);
            // set the owning side to null (unless already changed)
            if ($blogComment->getBlogArticle() === $this) {
                $blogComment->setBlogArticle(null);
            }
        }

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getMetaDescription(): ?string
    {
        return $this->metaDescription;
    }

    public function setMetaDescription(string $metaDescription): self
    {
        $this->metaDescription = $metaDescription;

        return $this;
    }

    public function getContentPreview($length = 400)
    {
        return substr(strip_tags($this->content, '<p><br>'), 0, $length);
    }
}
