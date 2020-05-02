<?php

namespace App\Repository;

use App\Entity\Category;
use App\Entity\Item;
use App\Entity\Range;
use Pagerfanta\Pagerfanta;
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

    /**
     * @param array $params
     * @return Item[]|Pagerfanta
     */
    public function findAllWithImages($params = [])
    {
        $params = array_merge([
            'forSlider' => false,
            'paginate' => false,
            'filters' => ['it.quantity > 0'],
            'order' => ['it.created_at' => 'DESC'],
        ], $params);

        $qb = $this
            ->createQueryBuilder('it')
            ->innerJoin('it.images', 'im')
            ->addSelect('im')
            ->innerJoin('it.category', 'c')
            ->addSelect('c');

        foreach ($params['order'] as $orderBy => $order) {
            $qb->orderBy($orderBy, $order);
        }

        if ($params['forSlider']) {
            $qb
                ->where('it.highlighted = 1')
                ->orWhere('it.created_at > :date')
                ->setParameter('date', date_create()->modify('-1 month'))
                ->andWhere('it.quantity > 0');
            return $qb->getQuery()->getResult();
        }

        foreach ($params['filters'] as $filter) {
            $qb->andWhere($filter);
        }

        if ($params['paginate']) {
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

    /**
     * @param string $search
     * @return Item[]
     */
    public function searchWithImages($search): array
    {
        $qb = $this->createQueryBuilder('it')
            ->where('it.quantity > 0')
            ->innerJoin('it.images', 'im')
            ->addSelect('im')
            ->innerJoin('it.category', 'c')
            ->addSelect('c')
            ->andwhere('it.name like :search')
            ->setParameter('search', '%' . $search . '%')
            ->orWhere('it.reference = :ref')
            ->setParameter('ref', $search)
            ->orWhere('c.name like :catname')
            ->setParameter('catname', '%'.$search.'%')
            ->orderBy('it.created_at', 'DESC');

        return $qb->getQuery()->getResult();
    }

    /**
     * @param Range $range
     * @return Item[]
     */
    public function findRangeWithImages(Range $range): array
    {
        $qb = $this->createQueryBuilder('it')
            ->where('it.quantity > 0')
            ->innerJoin('it.images', 'im')
            ->addSelect('im')
            ->innerJoin('it.ranges', 'r')
            ->addSelect('r')
            ->andWhere(':range MEMBER OF it.ranges')
            ->setParameter('range', $range)
            ->orderBy('it.created_at', 'DESC');

        return $qb->getQuery()->getResult();
    }
}
