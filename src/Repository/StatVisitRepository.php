<?php

namespace App\Repository;

use App\Entity\StatVisit;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method StatVisit|null find($id, $lockMode = null, $lockVersion = null)
 * @method StatVisit|null findOneBy(array $criteria, array $orderBy = null)
 * @method StatVisit[]    findAll()
 * @method StatVisit[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StatVisitRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StatVisit::class);
    }

    // /**
    //  * @return StatVisit[] Returns an array of StatVisit objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?StatVisit
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
