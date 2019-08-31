<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Item;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ItemType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('category', EntityType::class, [
                'label' => 'Catégorie',
                'class' => Category::class,
                'choice_label' => 'name_customer',
            ])
            ->add('name', TextType::class, ['label' => 'Nom'])
            ->add('reference', IntegerType::class, ['label' => 'Référence'])
            ->add('description', TextareaType::class, ['label' => 'Description', 'attr' => ['class' => 'tinymce']])
            ->add('price', NumberType::class, ['label' => 'Prix'])
            ->add('quantity', HiddenType::class, ['attr' => ['value' => 1]])
            ->add('images', ImagesType::class)
            ->add('Enregistrer', SubmitType::class, ['attr' => ['class' => 'btn btn-belatika-dark float-right']])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Item::class,
        ]);
    }
}
