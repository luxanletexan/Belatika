<?php
/**
 * Created by PhpStorm.
 * User: Patxi
 * Date: 14/08/2019
 * Time: 07:58
 */

namespace App\Form;


use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

class SettingsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add(
                'sales',
                TextType::class,
                [
                    'label' => 'Période de soldes',
                ]
            )
            ->add(
                'save',
                SubmitType::class,
                [
                    'attr' => [
                        'class' => 'btn btn-belatika-dark',
                    ],
                    'label' => 'Enregistrer',
                ]
            )
        ;
    }
}