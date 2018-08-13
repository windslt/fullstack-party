<?php

namespace App\Service;

class Issues extends AbstractApiService
{
    const ISSUES_SATE_OPEN = 'open';
    const ISSUES_SATE_CLOSED = 'closed';
    const ISSUES_PER_PAGE = 30;
    const DATA_FIELDS = ['number', 'title', 'comments', 'created_at', 'user', 'labels'];

    public function getIssues($state = 'open', $page = 0)
    {
        $issues = $this->api('issues', [
            'page' => $page,
            'per_page' => self::ISSUES_PER_PAGE,
            'state' => $state
        ]);

        $issues = $this->formatData($issues);

        return $issues;
    }

    public function getIssuesCount($state = self::ISSUES_SATE_OPEN)
    {
        $searchResult = $this->getCount($state);
        return !empty($searchResult['total_count']) ? (int)$searchResult['total_count'] : 0;
    }

    public function getFormattedIssues($page = 1)
    {
        return $this->formatData(
            $this->getIssues($page)
        );
    }

    private function formatData($data)
    {
        foreach ($data as $key => $item) {
            $data[$key] = array_intersect_key($item, array_flip(self::DATA_FIELDS));
        }
        return $data;
    }
}