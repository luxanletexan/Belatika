<?php


namespace App\Entity;


trait Migration
{
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }
}