<?php

namespace App\Repository;

use App\Entity\Category;
use App\Entity\Item;
use Pagerfanta\Pagerfanta;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Item|null find($id, $lockMode = null, $lockVersion = null)
 * @method Item|null findOneBy(array $criteria, array $orderBy = null)
 * @method Item[]    findAll()
 * @method Item[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ItemRepository extends AbstractRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Item::class);
    }

    public function findAllWithImages():Pagerfanta
    {
        $qb = $this->createQueryBuilder('it')
            ->innerJoin('it.images', 'im')
            ->addSelect('im')
            ->innerJoin('it.category', 'c')
            ->addSelect('c');
        return $this->paginate($qb);
    }

    public function findOneWithImages($slug):Item
    {
        $qb = $this->createQueryBuilder('i')->where('i.slug = :slug')->setParameter('slug', $slug);
        $this
            ->with($qb, 'category')
            ->with($qb, 'images');
        return $qb->getQuery()->getSingleResult();
    }

    public function findCategoryWithImages(Category $category):Pagerfanta
    {
        $qb = $this->createQueryBuilder('it')
            ->innerJoin('it.images', 'im')
            ->addSelect('im')
            ->innerJoin('it.category', 'c')
            ->addSelect('c')
            ->where('it.category = :category')
            ->setParameter('category', $category);

        return $this->paginate($qb);
    }
}
