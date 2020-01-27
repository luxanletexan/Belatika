<?php


namespace App\Controller;


use App\Service\ImageLoader;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/blog")
 */
class BlogController extends AbstractController
{
    /**
     * @Route("/{page<\d+>?1}")
     * @param $page integer
     * @return Response
     */
    public function index($page)
    {
        return $this->render($this->getTemplate('blog/index.html.twig'));
    }

    /**
     * @Route("/upload")
     * @param Request $request
     * @param ImageLoader $imageLoader
     * @return JsonResponse
     */
    public function upload(Request $request, ImageLoader $imageLoader)
    {
        $imageLoader->upload(ImageLoader::BLOG_PATH);

        return new JsonResponse($imageLoader);
    }
}