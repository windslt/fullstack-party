<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class AuthenticationController extends Controller
{
    /**
     * @Route("/")
     */
    public function loginAction()
    {
        return $this->render('security/login.html.twig');
    }

    /**
     * @Route("/logout", name="logout")
     */
    public function logoutAction()
    {
    }

    /**
     * @Route("/connect/github", name="connect_github")
     */
    public function connectAction()
    {
        return $this->get('oauth2.registry')
            ->getClient('github')
            ->redirect();
    }

    /**
     * @Route("/connect/github/check", name="connect_github_check")
     */
    public function connectCheckAction()
    {
        return $this->redirect($this->generateUrl('issues'));
    }
}