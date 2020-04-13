<?php


namespace App\Controller\Admin;


use App\Controller\AdminController;
use App\Entity\BlogArticle;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/blog")
 */
class BlogController extends AdminController
{
    /**
     * @Route("/")
     */
    public function blog()
    {
        $manager = $this->getDoctrine()->getManager();

        $blogArticles = $manager->getRepository(BlogArticle::class)->findAllWithComments();

        return $this->render($this->getTemplate('admin/blog/index.html.twig'), [
            'blogArticles' => $blogArticles,
        ]);
    }
}