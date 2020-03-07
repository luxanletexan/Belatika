<?php

namespace App\Controller;

use App\Entity\Gift;
use App\Entity\Item;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use App\Form\UserAddressesType;
use App\Entity\Address;

/**
 * @Route("/panier")
 */
class CartController extends AbstractController
{
    /**
     * @Route("/")
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     * @param Request $request
     * @return Response
     */
    public function show(Request $request):Response
    {
        $isOrdering = $this->getPendingOrder($this->getUser()) !== null;

        $gift = new Gift();
        if ($request->isMethod('POST')) {
            $gift->setCode($request->get('giftCode'));
            $gift = $this->checkGift($gift);
            $session = $this->getSessionFrom($request);
            if ($gift->updateStatus()->getValid()) {
                $session->set('gift', $gift);
            } else {
                $session->remove('gift');
            }
            $this->addFlash($gift->getValid() ? 'success' : 'danger', $this->gTrans($gift->getStatus()));
        }

        return $this->render('cart/index.html.twig', ['isOrdering' => $isOrdering, 'gift' => $gift]);
    }

    /**
     * @Route("/livraison/")
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     * @param Request $request
     * @return Response
     */
    public function delivering(Request $request): Response
    {
        $form = $this->createForm(UserAddressesType::class, $this->getUser());
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $sameAddress = $request->get('same-address') === 'on';
            if ($sameAddress) {
                $billingAddress = $this->getUser()->getBillingAddress();
                if($billingAddress instanceof Address) {
                    $em->remove($billingAddress);
                    $em->flush();
                }
                $user->setBillingAddress(clone $user->getDeliveryAddress());
            }
            $em->persist($user);
            $em->flush();

            return $this->redirectToRoute('app_order_index');
        }

        return $this->render('cart/delivering.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/add/{id<\d+>}/{quantity<\d+>?1}", name="app_cart_add")
     * @param Item $item
     * @param Request $request
     * @param integer $quantity
     * @param CacheManager $cacheManager
     * @return JsonResponse
     */
    public function add(Item $item, Request $request, $quantity, CacheManager $cacheManager):JsonResponse
    {
        $session = $this->getSessionFrom($request);

        if(!$session->has('cart')) {
            $session->set('cart', array());
        }

        $cart = $session->get('cart');

        if(array_key_exists($item->getId(), $cart)) {
            /** @var Item $item_in_cart */
            $item_in_cart = $cart[$item->getId()];
            $quantity += $item_in_cart->getQuantity();
        }

        $em = $this->getDoctrine()->getManager();
        $stock = $item->getQuantity();
        $em->clear(Item::class);
        $item
            ->setQuantity($quantity > $stock ? $stock : $quantity)
            ->setLink($this->generateUrl(
                'app_shop_item',
                [
                    'category_slug' => $item->getCategory()->getSlug(),
                    'customer' => $item->getCategory()->getCustomers(),
                    'slug' => $item->getSlug()
                ])
            )
            ->setRemoveLink($this->generateUrl(
                'app_cart_remove',
                [
                    'item_id' => $item->getId()
                ],
                UrlGeneratorInterface::ABSOLUTE_PATH)
            );
        $images = $item->getImages();
        $images[0]->setCachePath($cacheManager->getBrowserPath($images[0]->getWebPath(), 'icon'));
        $cart[$item->getId()] = $item;
        $session->set('cart', $cart);

        $message = $this->gTrans('Article ajouté au panier');

        return new JsonResponse([
            'message' => $message,
            'onSales' => $this->onSales(),
            'cart' => $this->get('serializer')->serialize($cart, 'json', ['groups' => 'item'])
        ]);
    }

    /**
     * @Route("/remove/{item_id<\d+>}/{quantity<\d+>?0}", name="app_cart_remove")
     * @param int $item_id
     * @param int $quantity
     * @param Request $request
     * @return JsonResponse|RedirectResponse
     */
    public function remove(int $item_id, int $quantity, Request $request):Response
    {
        $session = $this->getSessionFrom($request);

        $cart = $session->get('cart');

        if(is_array($cart) && array_key_exists($item_id, $cart)){
            $item = $cart[$item_id];
            if($quantity === 0 || $item->getQuantity() <= $quantity) {
                unset($cart[$item_id]);
            }else{
                $item->setQuantity($item->getQuantity() - $quantity);
                $cart[$item_id] = $item;
            }
            $session->set('cart', $cart);
        }

        $message = $this->gTrans('Article Retiré du panier');

        return new JsonResponse([
            'message' => $message,
            'onSales' => $this->onSales(),
            'cart' => $this->get('serializer')->serialize($cart, 'json', ['groups' => 'item'])
        ]);
    }
}