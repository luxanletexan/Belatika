<?php

namespace App\Form;

use App\Entity\Address;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\SearchType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AddressType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstname', TextType::class, ['label' => false])
            ->add('lastname', TextType::class, ['label' => false])
            ->add('fullAddress', SearchType::class)
            ->add('administrative', HiddenType::class)
            ->add('city', HiddenType::class)
            ->add('country', HiddenType::class)
            ->add('countryCode', HiddenType::class)
            ->add('county', HiddenType::class)
            ->add('lat', HiddenType::class)
            ->add('lng', HiddenType::class)
            ->add('name', HiddenType::class)
            ->add('value', HiddenType::class)
            ->add('postcode', HiddenType::class)
            ->add('additional')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Address::class,
        ]);
    }
}
