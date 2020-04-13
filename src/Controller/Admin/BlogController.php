<?php


namespace App\Controller\Admin;


use App\Controller\AdminController;
use App\Entity\BlogArticle;
use App\Form\BlogArticleType;
use App\Service\ImageLoader;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
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

    /**
     * @Route("/toggle-published/{id}")
     * @param BlogArticle $blogArticle
     * @return RedirectResponse
     */
    public function togglePublished(BlogArticle $blogArticle)
    {
        $blogArticle->setIsPublished(!$blogArticle->getIsPublished());
        $this->getDoctrine()->getManager()->flush();

        return $this->redirectToRoute('app_admin_blog_blog');
    }

    /**
     * @Route("/edit/{id}")
     * @param BlogArticle $blogArticle
     * @param Request $request
     * @return Response
     */
    public function edit(BlogArticle $blogArticle, Request $request)
    {
        $form = $this->createForm(BlogArticleType::class, $blogArticle);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $blogArticle = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($blogArticle);
            $em->flush();
        }


        return $this->render($this->getTemplate('admin/blog/edit.html.twig'), [
            'blogArticle' => $blogArticle,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/upload", methods={"POST"})
     * @param ImageLoader $imageLoader
     * @return JsonResponse
     */
    public function upload(ImageLoader $imageLoader)
    {
        $imageLoader->upload(ImageLoader::BLOG_PATH);

        return new JsonResponse($imageLoader);
    }
}