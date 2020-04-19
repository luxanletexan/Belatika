<?php


namespace App\Controller\Admin;


use App\Controller\AdminController;
use App\Entity\Item;
use App\Repository\ItemRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/item")
 */
class ItemController extends AdminController
{
    /**
     * @Route("/{page<\d+>?1}")
     * @param int $page
     * @param Request $request
     * @return Response
     */
    public function items($page, Request $request)
    {
        $manager = $this->getDoctrine()->getManager();
        /**
         * @var ItemRepository $itemRepository
         */
        $itemRepository = $manager->getRepository(Item::class);

        if ($request->isMethod('POST')) {
            $changes = [];
            foreach ($request->request->all() as $key => $value) {
                if (preg_match('#^ITEM_(\d+)_(.*)#', $key, $matches)) {
                    $id = $matches[1];
                    $field = $matches[2];
                    if (isset($changes[$id])) {
                        $changes[$id][$field] = $value;
                    } else {
                        $changes[$id] = [$field => $value];
                    }
                }
            }
            $changeItems = $itemRepository->findAllWithImages(
                [
                    'filters' => ['it.id in ('.implode(',', array_keys($changes)).')']
                ]
            );
            foreach ($changeItems as $item) {
                foreach ($changes[$item->getId()] as $key => $value) {
                    switch ($key) {
                        case 'FIRST_IMAGE_ALT':
                            $firstImage = $item->getImages()[0];
                            if ($firstImage->getAlt() != $value) {
                                $firstImage->setAlt($value);
                                $manager->persist($firstImage);
                            }
                            continue 2;
                            break;
                    }
                    $camelCase = implode(
                        '',
                        array_map('ucfirst',
                            array_map('strtolower',
                                explode('_', $key)
                            )
                        )
                    );
                    $setter = 'set'.$camelCase;
                    $getter = 'get'.$camelCase;
                    if (
                        method_exists($item, $getter)
                        && method_exists($item, $setter)
                        && $item->$getter() != $value
                    ) {
                        $item->$setter($value);
                        $manager->persist($item);
                    }
                }
            }
            $manager->flush();
        }

        $items = $itemRepository->findAllWithImages(['paginate' => true, 'filters' => [], 'order' => ['it.reference' => 'DESC']]);

        $items
            ->setCurrentPage($page);

        return $this->render($this->getTemplate('admin/item/index.html.twig'), [
            'items' => $items,
        ]);
    }
}