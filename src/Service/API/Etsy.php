<?php


namespace App\Service\API;


class Etsy extends Curl
{
    private $apiKey;
    private $baseUrl;
    private $userId;

    public function __construct($apiKey, $userId)
    {
        $this->apiKey = $apiKey;
        $this->baseUrl = 'https://openapi.etsy.com/v2/';
        $this->userId = $userId;
    }

    /**
     * Renvoie la liste des avis Etsy
     * @return array
     */
    public function getFeedbacks()
    {
        $response = $this->call(
            $this->baseUrl.'users/'.$this->userId.'/feedback/as-seller',
            'GET',
            [
                'api_key' => $this->apiKey,
                'limit' => 100000
            ]
        );

        return isset($response->results) && is_array($response->results) ? $response->results : [];
    }
}