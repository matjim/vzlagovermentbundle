<?php

namespace Tecnocreaciones\Vzla\GovernmentBundle\Form\Type;

use FOS\UserBundle\Form\Type\ProfileFormType as BaseProfileFormType;
use Symfony\Component\Form\FormBuilderInterface;

class ProfileFormType extends BaseProfileFormType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        parent::buildForm($builder, $options);
        $builder
                ->add('firstName',null,array(
                    'label' => 'form.first_name',
                    'translation_domain' => 'TecnocreacionesVzlaGovernmentBundle',
                ))
                ->add('lastName',null,array(
                    'label' => 'form.last_name',
                    'translation_domain' => 'TecnocreacionesVzlaGovernmentBundle',
                ))
                ;
    }

    public function getName()
    {
        return 'tecnocreaciones_vzla_government_user_profile';
    }
}
