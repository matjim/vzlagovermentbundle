<?php

/*
 * This file is part of the TecnoCreaciones package.
 * 
 * (c) www.tecnocreaciones.com
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tecnocreaciones\Vzla\GovernmentBundle\Model;

/**
 * Description of TemplateConfig
 *
 * @author Carlos Mendoza <inhack20@tecnocreaciones.com>
 */
class TemplateConfig implements \Symfony\Component\DependencyInjection\ContainerAwareInterface
{
    private $templates = array();
    
    private $container;
    
    private $options = array();

    private $defaultTemplateOptions = array(
            'app_title'         => 'appTitle',
            'menu'              => '',
            'logo'              => 'logo.png',
            'angular_dependencies'              => array(),
            'angular_modules'              => array(),
        );
            
    function setTemplateOptions($template, array $options) {
        
        $defaultTemplateOptions = $this->defaultTemplateOptions;
        // check option names and live merge, if errors are encountered Exception will be thrown
        $invalid = array();
        foreach ($options as $key => $value) {
            if (array_key_exists($key, $defaultTemplateOptions)) {
                if($key == 'angular_dependencies'){
                    $value = $this->fixDependencies($value);
                }
                $defaultTemplateOptions[$key] = $value;
            } else {
                $invalid[] = $key;
            }
        }

        if ($invalid) {
            throw new \InvalidArgumentException(sprintf('The Template does not support the following options: "%s".', implode('", "', $invalid)));
        }
        $this->templates[$template] = $defaultTemplateOptions;
    }
    
    function setOptions(array $options) {
        $defaultOptions = array(
            'main_route' => null,
        );
        // check option names and live merge, if errors are encountered Exception will be thrown
        $invalid = array();
        foreach ($options as $key => $value) {
            if (array_key_exists($key, $defaultOptions)) {
                $this->options[$key] = $value;
            } else {
                $invalid[] = $key;
            }
        }

        if ($invalid) {
            throw new \InvalidArgumentException(sprintf('The Config Template does not support the following options: "%s".', implode('", "', $invalid)));
        }
    }
            
    function getTemplateOptions($template)
    {
        return $this->getTemplate($template);
    }
    
    function getTemplateOption($template,$option = null)
    {
        return $this->getTemplate($template,$option);
    }
    
    function getTemplate($template,$option = null) {
        if(!isset($this->templates[$template])){
            throw new \InvalidArgumentException(sprintf('The template "%s" does not exist, are available: "%s".',$template, implode('", "', array_keys($this->templates))));
        }
        if($option != null){
            if(!$this->isValidOption($option )){
                throw new \InvalidArgumentException(sprintf('The Template does not support the following options: "%s".',$template, implode('", "', array_keys($this->defaultTemplateOptions))));
            }
            return $this->templates[$template][$option];
        }
        return $this->templates[$template];
    }
    
    function getOption($key = null)
    {
        if (!array_key_exists($key, $this->options)) {
            throw new \InvalidArgumentException(sprintf('The Template Config does not support the following options: "%s".',$key));
        }
        return $this->options[$key];
    }
    
    public function isValidOption($option) {
        return isset($this->defaultTemplateOptions[$option]);
    }
    
    public function setTemplates(array $templates)
    {
        $this->templates = $templates;
        foreach ($templates as $template => $options) {
            $this->setTemplateOptions($template, $options);
        }
    }
    
    private function fixDependencies(array $dependencies) {
        foreach ($dependencies as $key => $dependence) {
            $dependencies[$key] = $this->container->get('templating.helper.assets')->getUrl($dependence);
        }
        return $dependencies;
    }


    public function setContainer(\Symfony\Component\DependencyInjection\ContainerInterface $container = null)
    {
        $this->container = $container;
    }
}
