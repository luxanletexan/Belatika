<?php

namespace App\Repository;

use App\Entity\Traduction;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Traduction|null find($id, $lockMode = null, $lockVersion = null)
 * @method Traduction|null findOneBy(array $criteria, array $orderBy = null)
 * @method Traduction[]    findAll()
 * @method Traduction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TraductionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Traduction::class);
    }

    public function searchTranslation($crc32, $language)
    {
        return $this
            ->createQueryBuilder('t')
            ->where('t.crc32 = :crc32')
            ->setParameter('crc32', $crc32)
            ->andWhere('t.target = :language')
            ->setParameter('language', $language)
            ->getQuery()
            ->getOneOrNullResult();
    }

    // /**
    //  * @return Traduction[] Returns an array of Traduction objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Traduction
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
