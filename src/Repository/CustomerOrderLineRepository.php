<?php

namespace App\Repository;

use App\Entity\CustomerOrderLine;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method CustomerOrderLine|null find($id, $lockMode = null, $lockVersion = null)
 * @method CustomerOrderLine|null findOneBy(array $criteria, array $orderBy = null)
 * @method CustomerOrderLine[]    findAll()
 * @method CustomerOrderLine[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CustomerOrderLineRepository extends AbstractRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, CustomerOrderLine::class);
    }
}
