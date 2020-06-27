<?php


namespace App\Service\API;


class Etsy extends Curl
{
    /**
     * @var string
     */
    private $apiKey;
    /**
     * @var string
     */
    private $apiSecret;
    /**
     * @var integer
     */
    private $userId;
    /**
     * @var integer
     */
    private $shopId;
    /**
     * @var string
     */
    private $baseUrl;
    /**
     * @var bool
     */
    private $SSLCheck;

    public function __construct()
    {
        $this->baseUrl = 'https://openapi.etsy.com/v2/';
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

    public function getSales($access_token, $access_token_secret, $page = 1)
    {
        $page = intval($page);
        try {
            $oauth = new \OAuth($this->apiKey, $this->apiSecret,
                OAUTH_SIG_METHOD_HMACSHA1, OAUTH_AUTH_TYPE_URI);

            if (!$this->SSLCheck) {
                $oauth->disableSSLChecks();
            }

            $oauth->setToken($access_token, $access_token_secret);
            $success = $oauth->fetch(
                $this->baseUrl.'shops/'.$this->shopId.'/receipts?includes=Country&limit=100&page='.$page,
                null, OAUTH_HTTP_METHOD_GET);
            if (!$success) {
                return false;
            }
            $json = $oauth->getLastResponse();
            return json_decode($json, true);
        } catch (\OAuthException $e) {
            dump($e);die;
            return false;
        }
    }

    public function getRequestToken($callbackUrl, $scopes = [])
    {
        try {
            $oauth = new \OAuth($this->apiKey, $this->apiSecret);

            if (!$this->SSLCheck) {
                $oauth->disableSSLChecks();
            }

            $url = 'oauth/request_token';
            if ($scopes && is_array($scopes)) {
                $url .= '?scope='.implode('%20', $scopes);
            }

            return $oauth->getRequestToken(
                $this->baseUrl.$url,
                $callbackUrl
            );
        } catch (\OAuthException $e) {
            return false;
        }
    }

    public function getAccessToken($request_token, $request_token_secret, $verifier)
    {
        try {
            $oauth = new \OAuth($this->apiKey, $this->apiSecret);

            if (!$this->SSLCheck) {
                $oauth->disableSSLChecks();
            }

            $oauth->setToken($request_token, $request_token_secret);

            return $oauth->getAccessToken(
                $this->baseUrl."oauth/access_token",
                null,
                $verifier
            );
        } catch (\OAuthException $e) {
            return false;
        }
    }

    /**
     * @return string
     */
    public function getApiKey()
    {
        return $this->apiKey;
    }

    /**
     * @param string $apiKey
     * @return Etsy
     */
    public function setApiKey($apiKey)
    {
        $this->apiKey = $apiKey;
        return $this;
    }

    /**
     * @return string
     */
    public function getApiSecret()
    {
        return $this->apiSecret;
    }

    /**
     * @param string $apiSecret
     * @return Etsy
     */
    public function setApiSecret($apiSecret)
    {
        $this->apiSecret = $apiSecret;
        return $this;
    }

    /**
     * @return integer
     */
    public function getUserId()
    {
        return $this->userId;
    }

    /**
     * @param integer $userId
     * @return Etsy
     */
    public function setUserId($userId)
    {
        $this->userId = $userId;
        return $this;
    }

    /**
     * @return bool
     */
    public function isSSLCheck(): bool
    {
        return $this->SSLCheck;
    }

    /**
     * @param bool $SSLCheck
     * @return Etsy
     */
    public function setSSLCheck(bool $SSLCheck): Etsy
    {
        $this->SSLCheck = $SSLCheck;
        return $this;
    }

    /**
     * @return int
     */
    public function getShopId(): int
    {
        return $this->shopId;
    }

    /**
     * @param int $shopId
     * @return Etsy
     */
    public function setShopId(int $shopId): Etsy
    {
        $this->shopId = $shopId;
        return $this;
    }
}