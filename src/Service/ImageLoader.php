<?php


namespace App\Service;


use stdClass;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

class ImageLoader
{
    private $publicDir;
    private $destination;
    public $errorMessage;
    public $result;
    const ITEM_PATH = '/uploads';
    const BLOG_PATH = '/blog';
    /**
     * @var Request
     */
    private $request;

    public function __construct($projectDir, RequestStack $requestStack)
    {
        $this->publicDir = $projectDir.'/public';
        $this->destination = '/img';
        $this->result = [];
        $this->request = $requestStack->getCurrentRequest();
    }

    /**
     * @param $destination
     * @return bool
     */
    public function upload($destination)
    {
        $this->destination .= $destination;
        $files = $this->request->files->all();
        foreach ($files as $file) {
            $ext = $file->guessExtension();
            $filename = date_create()->format('YmdHisu');

            $result = new stdClass();
            $result->name = $filename.'.'.$ext;
            $result->size = $file->getSize();
            $result->url = $this->request->getSchemeAndHttpHost().$this->destination.'/'.$result->name;
            try {
                $file->move($this->publicDir.$this->destination, $result->name);
                $this->result[] = $result;
            } catch (FileException $e) {
                $this->setError($e->getMessage());
                return false;
            }
        }
        return true;
    }

    private function setError($errorMessage)
    {
        $this->errorMessage = $errorMessage;
    }
}