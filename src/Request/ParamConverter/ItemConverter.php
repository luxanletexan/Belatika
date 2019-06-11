<?php

namespace App\Request\ParamConverter;


use App\Entity\Item;
use Doctrine\Common\Persistence\ObjectManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Sensio\Bundle\FrameworkExtraBundle\Request\ParamConverter\ParamConverterInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ItemConverter implements ParamConverterInterface
{
    /**
     * @var ObjectManager
     */
    private $em;

    public function __construct(ObjectManager $em)
    {
        $this->em = $em;
    }

    public function apply(Request $request, ParamConverter $configuration)
    {
        $item = $this->em->getRepository(Item::class)->findOneWithImages($request->attributes);

        if (null === $item) {
            throw new NotFoundHttpException(
                sprintf('%s object not found.', $configuration->getClass())
            );
        }

        $request->attributes->set($configuration->getName(), $item);

        return true;
    }

    public function supports(ParamConverter $configuration)
    {
        return Item::class === $configuration->getClass();
    }
}