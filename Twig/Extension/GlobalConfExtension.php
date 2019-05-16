<?php

/*
 * This file is part of the TecnoCreaciones package.
 * 
 * (c) www.tecnocreaciones.com
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tecnocreaciones\Vzla\GovernmentBundle\Twig\Extension;

/**
 * Description of GlobalConfExtension
 *
 * @author Carlos Mendoza <inhack20@tecnocreaciones.com>
 */
class GlobalConfExtension extends \Twig_Extension implements \Symfony\Component\DependencyInjection\ContainerAwareInterface
{
    private $container;
    
    public function getGlobals() {
        return array('templateConfig' => $this->container->get('tecnocreaciones_vzla_government.global_config'));
    }
    
    public function getName()
    {
        return 'vzla_government_global_conf_extension';
    }

    public function setContainer(\Symfony\Component\DependencyInjection\ContainerInterface $container = null)
    {
        $this->container = $container;
    }

}
