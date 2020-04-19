<?php


namespace App\Controller\Admin;


use App\Controller\AdminController;
use App\Entity\Image;
use App\Entity\Item;
use App\Form\ItemType;
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

    /**
     * @Route("/add")
     * @param Request $request
     * @return Response
     */
    public function add(Request $request): Response
    {
        $form = $this->createForm(ItemType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $item = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($item);
            $em->flush();
        }

        return $this->render($this->getTemplate('admin/item/edit.html.twig'), [
            'form' => $form->createView(),
            'title' => 'Créer un bijou'
        ]);
    }

    /**
     * @Route("/edit/{id<\d+>}")
     * @param Request $request
     * @param Item $item
     * @return Response
     */
    public function edit(Request $request, Item $item)
    {
        $form = $this->createForm(ItemType::class, $item);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $item = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($item);
            $em->flush();
        }

        return $this->render($this->getTemplate('admin/item/edit.html.twig'), [
            'form' => $form->createView(),
            'item' => $item,
            'title' => 'Modifier un bijou'
        ]);
    }

    /**
     * @Route("/remove/image/{id<\d+>}", methods={"POST"})
     * @param Image $image
     * @return Response
     */
    public function removeImage(Image $image)
    {
        if ($image->getItem()->getImages()->count() > 1) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($image);
            $em->flush();
            $dataResponse = ['success' => true];
        } else {
            $dataResponse = [
                'success' => false,
                'errorMessage' => 'Impossible de supprimer la dernière image d\'un article',
            ];
        }

        return $this->json($dataResponse);
    }
}