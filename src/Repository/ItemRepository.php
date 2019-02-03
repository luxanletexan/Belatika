<?php

namespace App\Repository;

use App\Entity\Item;
use phpDocumentor\Reflection\Types\This;
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
            ->addSelect('im');

        return $this->paginate($qb);
    }
}
