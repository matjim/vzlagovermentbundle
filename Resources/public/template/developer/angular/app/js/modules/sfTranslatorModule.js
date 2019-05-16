/* 
 * This file is part of the SmsFacilito package.
 * 
 * (c) www.tecnocreaciones.com.ve
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var sfTranslatorModule = angular.module('sfTranslatorModule', []);

sfTranslatorModule.factory('sfTranslator',[function(){
    try { 
        return Translator;
    } catch( err ) { 
        if ( err instanceof ReferenceError ) 
            throw ('Variable "Translator" is not detected, please install BazingaJsTranslationBundle in your symfony project and import in layout');
    }
}])
.filter('trans',function(sfTranslator){
      return function(message,parameters){
          return sfTranslator.trans(message,parameters);
      };
  })
;

