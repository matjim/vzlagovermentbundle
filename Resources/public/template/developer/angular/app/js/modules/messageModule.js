'use strict';

smsFacilitoApp.requires.push('messageModule');

// Declare app level module which depends on filters, and services
var messageModule = angular.module('messageModule', [
    'ngRoute',
    'messageModule.filters',
    'messageModule.services',
    'messageModule.directives',
    'messageModule.controllers',
    'ngResource',
    'notificationBarModule'
])
        .
        config(['$routeProvider', function($routeProvider) {
                $routeProvider.when('/message/:type/inbox', {
                    templateUrl: ConfTray.assetApp + 'partials/message/inbox.html',
                    controller: 'ShowInboxController',
                    resolve: messageModule.resolveTypeMessage
                });
                $routeProvider.when('/message/:type/inbox/:messageId', {
                    templateUrl: ConfTray.assetApp + 'partials/message/show.html',
                    controller: 'ShowMessageController',
                    resolve: messageModule.resolveViewMessage
                });
                $routeProvider.when('/message/:type/new', {
                    templateUrl: function(params){
                        return Routing.generate('sms_facilito_backend_message_render_form',{type: params.type})
                    },
                    controller: 'newMessageController',
                    resolve: messageModule.resolveTypeMessage
                });
                $routeProvider.when('/message/:type/:id/edit', {
                    templateUrl: function(params){
                        return Routing.generate('sms_facilito_backend_message_render_form',{type: params.type})
                    },
                    controller: 'newMessageController',
                    resolve: messageModule.resolveTypeMessage
                });
                $routeProvider.otherwise({redirectTo: '/message/'+ConfTray.typeTrayMessage+'/inbox'});
            }])
        ;