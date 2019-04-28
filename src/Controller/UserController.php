<?php

namespace App\Controller;

use App\Entity\Address;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @Route("/user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/address")
     * @param Request $request
     * @return Response
     */
    public function address(Request $request):Response
    {
        $user = $this->getUser();

        if($request->isMethod('POST')) {
            $addressDelivery = $this->hydrate(Address::class, $request, '-delivery');
            $addressDelivery = $this->returnAddressIfExists($addressDelivery);
            $sameAddress = $request->get('same-address');
            $user->setDeliveryAddress($addressDelivery);
            if ($sameAddress === 'on') {
                $user->setBillingAddress($addressDelivery);
            } else {
                $addressBilling = $this->hydrate(Address::class, $request, '-billing');
                $addressBilling = $this->returnAddressIfExists($addressBilling);
                $user->setBillingAddress($addressBilling);
            }

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            $this->addFlash('success', $this->gTrans('Votre adresse a bien été enregistrée.'));
            return $this->redirectToRoute('fos_user_profile_show');
        }

        return $this->render('user/address.html.twig', ['user' => $user]);
    }

    /**
     * @param Address $address
     * @return Address
     */
    private function returnAddressIfExists(Address $address):Address
    {
        return $this
            ->getDoctrine()
            ->getManager()
            ->getRepository(Address::class)
            ->findOneBy(['fullAddress' => $address->getFullAddress()]) ?? $address;
    }
}