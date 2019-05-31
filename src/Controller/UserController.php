<?php

namespace App\Controller;

use App\Entity\Address;
use App\Form\UserAddressesType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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

            $this->addFlash('success', $this->gTrans('Votre adresse a bien été enregistrée.'));

            return $this->redirectToRoute('fos_user_profile_show');
        }

        return $this->render('user/address.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}