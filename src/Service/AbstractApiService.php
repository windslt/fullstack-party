<?php

namespace App\Service;

use Github\Client;

abstract class AbstractApiService
{
    private $client;
    private $username;
    private $repository;
    private $repositoryOwner;
    private $secret;
    private $authMethod;

    public function __construct(
        Client $client,
        $repositoryOwner,
        $repository,
        $username,
        $secret,
        $authMethod
    ) {
        $this->client = $client;
        $this->repositoryOwner = $repositoryOwner;
        $this->repository = $repository;
        $this->username = $username;
        $this->secret = $secret;
        $this->authMethod = $authMethod;
    }

    public function api($name, $params = [])
    {
        return $this->client->api($name)->all($this->repositoryOwner, $this->repository, $params);
    }

    public function getCount($state)
    {
        $query = sprintf('repo:%s/%s state:%s type:issue', $this->repositoryOwner, $this->repository, $state);
        return $this->client
            ->search()
            ->setPerPage(1)// one item per page to limit the amount of unneeded data
            ->issues($query);
    }
}