<?php


namespace App\Service\API;


abstract class Curl
{
    const GET = 'GET';
    const POST = 'POST';

    protected function call($url, $method = self::GET, $fields = [], $headers = []) {
        $text_fields = $fields ? http_build_query ($fields) : false;
        if ($text_fields && $method != 'POST') {
            $url .= (strpos ($url, '?') ? "&" : "?").$text_fields;
        }
        $curl = curl_init ($url);
        curl_setopt ($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt ($curl, CURLOPT_VERBOSE, false);
        curl_setopt ($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt ($curl, CURLOPT_FRESH_CONNECT, true);
        curl_setopt ($curl, CURLOPT_FORBID_REUSE, true);
        curl_setopt ($curl, CURLOPT_CONNECTTIMEOUT, 5);
        curl_setopt ($curl, CURLOPT_DNS_CACHE_TIMEOUT, 5);
        curl_setopt ($curl, CURLOPT_TIMEOUT, 600);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        if ($method) curl_setopt ($curl, CURLOPT_CUSTOMREQUEST, $method);
        if ($method == 'POST' && $text_fields) curl_setopt ($curl, CURLOPT_POSTFIELDS, $text_fields);
        curl_setopt ($curl, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt ($curl, CURLOPT_SSL_VERIFYHOST, 0);

        $curlresp = curl_exec ($curl);
        curl_close ($curl);

        //Contrôle encoding
        if (mb_detect_encoding($curlresp) === 'UTF-8' && !mb_check_encoding($curlresp)) {
            $curlresp = utf8_encode($curlresp);
        }

        return json_decode($curlresp);
    }
}