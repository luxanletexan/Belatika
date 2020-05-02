<?php


namespace App\Service\API;


use stdClass;

class LaPoste extends Curl
{
    private $apiKey;
    private $baseUrl;

    public function __construct($apiKey)
    {
        $this->apiKey = $apiKey;
        $this->baseUrl = 'https://api.laposte.fr/suivi/v2/idships/';
    }

    /**
     * @param string $id
     * @return stdClass
     */
    public function getStatus($id)
    {
        return $this->call(
            $this->baseUrl.$id.'?lang=fr_FR',
            'GET',
            [
                'lang' => 'fr_FR',
            ],
            [
                'X-Okapi-Key: '.$this->apiKey,
                'Accept: application/json',
            ]
        );
    }
}