<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Intervention\Image\Constraint;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ImageRepository")
 * @ORM\HasLifecycleCallbacks
 */
class Image
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"item"})
     */
    private $id;

    /**
     * @var Item
     * @ORM\ManyToOne(targetEntity="App\Entity\Item", inversedBy="images")
     * @ORM\JoinColumn(nullable=false, onDelete="CASCADE")
     */
    private $item;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $alt;

    /**
     * @ORM\Column(type="string", length=4)
     * @Groups({"item"})
     */
    private $ext;

    /**
     * @var ArrayCollection
     */
    private $files;
    /**
     * @var UploadedFile
     */
    private $file;

    public function __construct()
    {
        $this->files = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAlt(): ?string
    {
        return $this->alt;
    }

    public function setAlt(string $alt): self
    {
        $this->alt = $alt;

        return $this;
    }

    public function getExt(): ?string
    {
        return $this->ext;
    }

    public function setExt(string $ext): self
    {
        $this->ext = $ext;

        return $this;
    }

    public function getItem(): ?Item
    {
        return $this->item;
    }

    public function setItem(?Item $item): self
    {
        $this->item = $item;

        return $this;
    }

    public function getAbsolutePath()
    {
        return $this->getUploadRootDir().$this->makeFileName();
    }

    public function getWebPath(): string
    {
        return $this->getUploadDir().$this->makeFileName();
    }

    /**
     * @return Collection|UploadedFile[]
     */
    public function getFiles(): Collection
    {
        return $this->files;
    }

    public function addFile(UploadedFile $file): self
    {
        if (!$this->files->contains($file)) {
            $this->files[] = $file;
        }

        return $this;
    }

    public function removeFile(UploadedFile $file): self
    {
        if ($this->files->contains($file)) {
            $this->files->removeElement($file);
        }

        return $this;
    }

    public function getFile(): ?UploadedFile
    {
        return $this->file;
    }

    public function setFile(UploadedFile $file): self
    {
        $this->file = $file;
        return $this;
    }

    /**
     * @ORM\PostPersist()
     * @ORM\PostUpdate()
     */
    public function upload()
    {
        $this->file->move($this->getUploadRootDir(), $this->makeFileName());
    }

    protected function getUploadRootDir()
    {
        return realpath(__DIR__.'/../../public/'.$this->getUploadDir()).'/';
    }

    protected function getUploadDir()
    {
        return 'img/uploads/';
    }

    protected function makeFileName()
    {
        return $this->item->getSlug().'-'.$this->id.'.'.$this->ext;
    }
}
