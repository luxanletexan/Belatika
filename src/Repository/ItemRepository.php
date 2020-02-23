<?php

namespace App\Repository;

use App\Entity\Category;
use App\Entity\Item;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\HttpFoundation\ParameterBag;

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

    public function findAllWithImages($filters = [], $paginate = true)
    {
        $qb = $this->createQueryBuilder('it')
            ->innerJoin('it.images', 'im')
            ->addSelect('im')
            ->innerJoin('it.category', 'c')
            ->addSelect('c')
        ->orderBy('it.created_at', 'DESC');
        foreach ($filters as $field => $value) {
            $qb->where('it.'.$field.' = :'.$field)->setParameter($field, $value);
        }

        if ($paginate) {
            return $this->paginate($qb);
        } else {
            return $qb->getQuery()->getResult();
        }
    }

    public function findOneWithImages(ParameterBag $parameterBag):Item
    {
        $qb = $this->createQueryBuilder('i');
        $params = ['id', 'slug'];
        foreach ($params as $param) {
            if ($parameterBag->has($param)) {
                $qb->where('i.'.$param.' = :'.$param)->setParameter($param, $parameterBag->get($param));
            }
        }
        $this
            ->with($qb, 'category')
            ->with($qb, 'images');
        return $qb->getQuery()->getSingleResult();
    }

    /**
     * @param Category $category
     * @return Item[]
     */
    public function findCategoryWithImages(Category $category): array
    {
        $qb = $this->createQueryBuilder('it')
            ->where('it.quantity > 0')
            ->innerJoin('it.images', 'im')
            ->addSelect('im')
            ->innerJoin('it.category', 'c')
            ->addSelect('c')
            ->andWhere('it.category = :category')
            ->setParameter('category', $category)
            ->orderBy('it.created_at', 'DESC');

        return $qb->getQuery()->getResult();
    }
}
