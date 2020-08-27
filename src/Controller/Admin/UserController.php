<?php


namespace App\Controller\Admin;


use App\Controller\AdminController;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/user")
 */
class UserController extends AdminController
{
    /**
     * @Route("/")
     * @return Response
     */
    public function users()
    {
        $users = $this->getDoctrine()->getManager()->getRepository(User::class)->findBy([], ['id' => 'desc']);

        return $this->render($this->getTemplate('admin/user/index.html.twig'), ['users' => $users]);
    }

    /**
     * @Route("/clear-inactive")
     * @return Response
     */
    public function clearInactive()
    {
        $em = $this->getDoctrine()->getManager();

        $users = $em->getRepository(User::class)->findBy(['enabled' => 0]);

        foreach ($users as $user) {
            $em->remove($user);
        }
        $em->flush();

        return $this->redirectToRoute('app_admin_user_index');
    }
}