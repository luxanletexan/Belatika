<?php

namespace App\Repository;

use App\Entity\BlogArticle;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method BlogArticle|null find($id, $lockMode = null, $lockVersion = null)
 * @method BlogArticle|null findOneBy(array $criteria, array $orderBy = null)
 * @method BlogArticle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BlogArticleRepository extends AbstractRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, BlogArticle::class);
    }

     /**
      * @return BlogArticle[] Returns an array of BlogArticle objects
      */
    public function findAllWithComments()
    {
        $qb = $this->createQueryBuilder('b');
        $this->with($qb, 'blogComments');
        return $qb->orderBy('b.posted_at', 'DESC')->getQuery()->getResult();
    }
}
