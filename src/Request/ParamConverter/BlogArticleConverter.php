<?php

namespace App\Request\ParamConverter;


use App\Entity\BlogArticle;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Sensio\Bundle\FrameworkExtraBundle\Request\ParamConverter\ParamConverterInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class BlogArticleConverter implements ParamConverterInterface
{
    /**
     * @var EntityManagerInterface
     */
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function apply(Request $request, ParamConverter $configuration)
    {
        $blogArticle = $this->em->getRepository(BlogArticle::class)->findOneWithComments($request->attributes);

        if (null === $blogArticle) {
            throw new NotFoundHttpException(
                sprintf('%s object not found.', $configuration->getClass())
            );
        }

        $request->attributes->set($configuration->getName(), $blogArticle);

        return true;
    }

    public function supports(ParamConverter $configuration)
    {
        return BlogArticle::class === $configuration->getClass();
    }
}