'use strict';

/* Controllers */
angular.module('mainApp.controllers', [])
    .controller('MainController',function($rootScope,notificationBarService,$q){
           $rootScope.notificationBarService = notificationBarService;
           $rootScope.asset = function(path){
               return ConfApp.assetPath+path;
           };
           var inArray = Array.prototype.indexOf ?
            function (val, arr) {
                return arr.indexOf(val);
            } :
            function (val, arr) {
                var i = arr.length;
                while (i--) {
                    if (arr[i] === val) return i;
                }
                return -1;
            };
           
           $rootScope.names = function(data) {
                var def = $q.defer(),
                    arr = [],
                    names = [];
                angular.forEach(data, function(item){
                    if (inArray(item.name, arr) === -1) {
                        arr.push(item.name);
                        names.push({
                            'id': item.id,
                            'title': item.name
                        });
                    }
                });
                def.resolve(names);
                return def;
            };
            
          $rootScope.generateUrl = function(route,parameters){
              return Routing.generate(route,parameters);
          };
       })
       .controller("MainContentController",function(){
       })
;