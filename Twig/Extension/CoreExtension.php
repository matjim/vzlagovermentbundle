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
 * Description of CoreExtension
 *
 * @author Carlos Mendoza <inhack20@tecnocreaciones.com>
 */
class CoreExtension extends \Twig_Extension
{
    /**
     * @var \Twig_Environment
     */
    protected $environment;
    
    private $cacheRendered;
    public function __construct() {
        $this->cacheRendered = array();
    }
    
    public function initRuntime(\Twig_Environment $environment)
    {
        $this->environment = $environment;
    }
    
    public function getFilters() {
        return array(
            new \Twig_SimpleFilter('hash', array($this, 'generateHash'), array('is_safe' => array('html'))),
        );
    }
    
    public function getFunctions() {
        return array(
            new \Twig_SimpleFunction('isRender', array($this,'isRender')),
        );
    }
    
    /**
     * Returns a list of functions to add to the existing list.
     *
     * @return array An array of functions
     */
    public function getTests()
    {
        return array(
                new \Twig_SimpleTest('loaded', [$this, 'hasExtension']),
        );
    }
    
//    
//    function staticCall($class, $function, $args = array())
//    {
//        if (class_exists($class) && method_exists($class, $function))
//            return call_user_func_array(array($class, $function), $args);
//        return null;
//    }
    
    public function isRender($name) 
    {
        if(in_array($name,$this->cacheRendered)){
            return true;
        }
        $this->cacheRendered[] = $name;
        return false;
    }
    
    function generateHash($str) {
        return md5($str);
    }
    
    /**
     * @param string $name
     * @return boolean
     */
    function hasExtension($name)
    {
        return $this->environment->hasExtension($name);
    }

    
    public function getName() {
        return 'vzla_government_core_extension';
    }
}
