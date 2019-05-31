<?php

namespace App\Repository;

use App\Entity\CustomerOrderLine;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method CustomerOrderLine|null find($id, $lockMode = null, $lockVersion = null)
 * @method CustomerOrderLine|null findOneBy(array $criteria, array $orderBy = null)
 * @method CustomerOrderLine[]    findAll()
 * @method CustomerOrderLine[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CustomerOrderLineRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, CustomerOrderLine::class);
    }

    // /**
    //  * @return OrderLine[] Returns an array of OrderLine objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?OrderLine
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
