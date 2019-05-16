/* 
 * This file is part of the TecnoCreaciones package.
 * 
 * (c) www.tecnocreaciones.com.ve
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var notifyModule = angular.module('notifyModule',[]);

//Services
notifyModule.factory('notifyService',[function(){
        
        return {
            success: function(message){
                if(message instanceof Array){
                    $.each(message,function(index, value){
                                notify(value,'', {
                                    system:		false,   
                                    autoClose:		4000,
                                    icon:               ConfApp.assetPath + 'bundles/tecnocreacionesvzlagovernment/template/developer/img/icons/icon-success.png',
                                    iconOutside:        false,
                                    closeButton:        true,
                                    showCloseOnHover:	false,
                                    groupSimilar:	true
                                });
                            });
                }else{
                    notify(message,'', {
                            system:		false,   
                            autoClose:		4000,
                            icon:               ConfApp.assetPath + 'bundles/tecnocreacionesvzlagovernment/template/developer/img/icons/icon-success.png',
                            iconOutside:        false,
                            closeButton:        true,
                            showCloseOnHover:	false,
                            groupSimilar:	true
                    });
                }
                
            },
            error: function(message){
                if(message instanceof Array){
                    $.each(message,function(index, value){
                        notify(value,'', {
                            system:		false,   
                            autoClose:		4000,
                            icon:               ConfApp.assetPath + 'bundles/tecnocreacionesvzlagovernment/template/developer/img/icons/icon-error.png',
                            iconOutside:        false,
                            closeButton:        true,
                            showCloseOnHover:	false,
                            groupSimilar:	true
                        }); 
                    });
                }else{
                    notify(message,'', {
                        system:		false,   
                        autoClose:		4000,
                        icon:               ConfApp.assetPath + 'bundles/tecnocreacionesvzlagovernment/template/developer/img/icons/icon-error.png',
                        iconOutside:        false,
                        closeButton:        true,
                        showCloseOnHover:	false,
                        groupSimilar:	true
                    });
                    
                }
            }
        }
}]);
