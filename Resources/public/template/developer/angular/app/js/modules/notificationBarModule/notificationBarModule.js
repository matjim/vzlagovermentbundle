/* 
 * This file is part of the SmsFacilito package.
 * 
 * (c) www.tecnocreaciones.com.ve
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var notificationBarModule = angular.module('notificationBarModule', ['sfTranslatorModule']);

//Services
notificationBarModule.factory('notificationBarService',['$timeout','sfTranslator',function($timeout,sfTranslator){
        this.transText = function(text){
            return sfTranslator.trans(text)+'...';
        }
        
        var LoadStatus = {
            parent: this,
            showStatus : false,
            defaultText: this.transText('app.loading'),
            text: this.transText('app.loading'),
            delay: 1000,
            error_class: '',
            loading: function(text){
                if(text != undefined){
                    this.setText(text);
                }
                this.showStatus = true;
            },
            done: function(text){
                var delay = 0;
                if(text != undefined){
                    delay = this.delay;
                    this.setText(text);
                }
                var self = this;
                $timeout(function(){
                    self.showStatus = false;
                    self.text = self.defaultText;
                },delay);
            },
            error: function(text){
                this.error_class = ' error-loading';
                var delay = 0;
                if(text == undefined){
                    text = 'Error';
                }
                if(text != undefined){
                    delay = 500;
                    this.setText(text);
                }
                var self = this;
                $timeout(function(){
                    self.showStatus = false;
                    self.text = self.defaultText;
                    self.error_class = '';
                },delay);
            },
            setText: function(text){
                this.text = this.parent.transText(text);
            }
        };
        return {
            getLoadStatus: function(){
                return LoadStatus;
            }
        }
}]);