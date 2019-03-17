<?php

namespace App\Controller;

use App\Entity\Item;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Exception\SessionUnavailableException;

class CartController extends AbstractController
{
    /**
     * @Route("/cart/add/{id<\d+>}/{quantity<\d+>?1}", name="app_cart_add")
     * @param Item $item
     * @param Request $request
     * @param integer $quantity
     * @return JsonResponse
     */
    public function add(Item $item, Request $request, $quantity):JsonResponse
    {
        $session = $request->getSession();
        if($session === null) {
            throw new SessionUnavailableException('Unable to add item to cart because the session is unavailable');
        }

        if(!$session->has('cart')) {
            $session->set('cart', array());
        }

        $cart = $session->get('cart');

        if(array_key_exists($item->getId(), $cart)) {
            $item_in_cart = $cart[$item->getId()];
            $quantity += $item_in_cart->getQuantity();
        }

        $em = $this->getDoctrine()->getManager();
        $stock = $item->getQuantity();
        $em->detach($item);
        $item->setQuantity($quantity > $stock ? $stock : $quantity);
        if($this->onSales()){
            $item->setPrice($item->getDiscountPrice());
        }
        $cart[$item->getId()] = $item;
        $session->set('cart', $cart);

        $message = $this->gTrans('Article ajouté au panier');

        return new JsonResponse([
            'message' => $message,
            'homePath' => $this->generateUrl('app_shop_index', [], UrlGeneratorInterface::ABSOLUTE_URL),
            'cart' => $this->get('serializer')->serialize($cart, 'json', ['groups' => 'item'])
        ]);
    }

    /**
     * @Route("/cart/remove/{item_id<\d+>}/{quantity<\d+>?0}", name="app_cart_remove")
     * @param int $item_id
     * @param Request $request
     * @param int $quantity
     * @return JsonResponse
     */
    public function remove(int $item_id, Request $request, int $quantity):JsonResponse
    {
        $session = $request->getSession();
        if($session === null) {
            throw new SessionUnavailableException('Unable to remove item from cart because the session is unavailable');
        }

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
            'homePath' => $this->generateUrl('app_shop_index', [], UrlGeneratorInterface::ABSOLUTE_URL),
            'cart' => $this->get('serializer')->serialize($cart, 'json', ['groups' => 'item'])
        ]);
    }
}