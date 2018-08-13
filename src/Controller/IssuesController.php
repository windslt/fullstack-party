<?php

namespace App\Controller;

use App\Service\Issues;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class IssuesController extends Controller
{
    /**
     * @Route("/issues/", name="issues")
     */
    public function siteAction()
    {
        return $this->render('site/client-zone.html.twig');
    }

    /**
     * @Route("/api/issue/", name="api_issue")
     */
    public function issueAction()
    {
        return $this->render('site/client-zone.html.twig');
    }

    /**
     * @Route("/api/issues/", name="api_issues")
     * @param Request $request
     * @param Issues $issue
     * @return JsonResponse
     */
    public function issuesAction(Request $request, Issues $issue)
    {
        $state = $request->query->get('state');
        $page = $request->query->get('page');
        return new JsonResponse($issue->getIssues($state, $page));
    }

    /**
     * @Route("/api/issues/count/", name="api_issues_count")
     * @param Issues $issue
     * @return JsonResponse
     */
    public function issuesCountAction(Issues $issue)
    {
        return new JsonResponse([
            'open' => $issue->getIssuesCount(Issues::ISSUES_SATE_OPEN),
            'closed' => $issue->getIssuesCount(Issues::ISSUES_SATE_CLOSED)
        ]);
    }
}