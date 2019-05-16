<?php

/*
 * This file is part of the TecnoCreaciones package.
 * 
 * (c) www.tecnocreaciones.com
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tecnocreaciones\Vzla\GovernmentBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Aciones genericas del template
 *
 * @author Carlos Mendoza <inhack20@tecnocreaciones.com>
 */
class TemplateController extends Controller 
{
    function browsersAction()
    {
        return $this->render('TecnocreacionesVzlaGovernmentBundle:Template:Developer/Layout/browsers.html.twig');
    }
}
