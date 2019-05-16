<?php

namespace Tecnocreaciones\Vzla\GovernmentBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

/**
 * This is the class that validates and merges configuration from your app/config files
 *
 * To learn more see {@link http://symfony.com/doc/current/cookbook/bundles/extension.html#cookbook-bundles-extension-config-class}
 */
class Configuration implements ConfigurationInterface
{
    /**
     * {@inheritDoc}
     */
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder();
        $rootNode = $treeBuilder->root('tecnocreaciones_vzla_government');
        
        $rootNode
                ->children()
                    ->arrayNode('config')
                        ->addDefaultsIfNotSet()
                        ->children()
                            ->scalarNode('main_route')->defaultNull()->cannotBeEmpty()->end()
                        ->end()
                    ->end()
                ->end()
                ->children()
                    ->arrayNode('template')
                        ->addDefaultsIfNotSet()
                        ->children()
                            ->arrayNode('developer')
                                ->addDefaultsIfNotSet()
                                ->children()
                                    ->scalarNode('app_title')->defaultValue('appTitle')->cannotBeEmpty()->end()
                                    ->scalarNode('menu')->defaultValue('Tecnocreaciones\Vzla\GovernmentBundle\Menu\Template\Developer\BackendMenuBuilder')->cannotBeEmpty()->end()
                                    ->arrayNode('angular_dependencies')
                                        ->prototype('scalar')->end()
                                    ->end()
                                    ->arrayNode('angular_modules')
                                        ->prototype('scalar')->end()
                                    ->end()
                                    ->arrayNode('logo')
                                        ->addDefaultsIfNotSet()
                                        ->children()
                                            ->scalarNode('login_watermark')->defaultValue('bundles/tecnocreacionesvzlagovernment/template/developer/img/favicons/watermark.png')->cannotBeEmpty()->end()
                                            ->scalarNode('panel_right')->defaultValue('bundles/tecnocreacionesvzlagovernment/template/developer/img/favicons/logo.png')->cannotBeEmpty()->end()
                                            ->scalarNode('icon_png')->defaultValue('bundles/tecnocreacionesvzlagovernment/template/developer/img/favicons/favicon.png')->cannotBeEmpty()->end()
                                            ->scalarNode('icon_ico')->defaultValue('bundles/tecnocreacionesvzlagovernment/template/developer/img/favicons/favicon.ico')->cannotBeEmpty()->end()
                                        ->end()
                                ->end()
                        ->end()
                    ->end()
                ->end();

        return $treeBuilder;
    }
}
