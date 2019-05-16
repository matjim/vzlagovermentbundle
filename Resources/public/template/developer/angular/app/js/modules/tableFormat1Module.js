var tableFormat1 = angular.module('tableFormat1', ['ngTable','ngTableExport'])
        .directive('loadingContainer', function(notificationBarService) {
            return {
                restrict: 'A',
                scope: false,
                link: function(scope, element, attrs) {
                    var loadingLayer = angular.element('<div class="loading"></div>');
                    element.append(loadingLayer);
                    element.addClass('loading-container');
                    scope.$watch(attrs.loadingContainer, function(value) {
                        if(value){
                            notificationBarService.getLoadStatus().loading();
                        }else{
                            notificationBarService.getLoadStatus().done();
                        }
                        loadingLayer.toggleClass('ng-hide', !value);
                    });
                }
            };
        })
        .directive('apiDataUrl',function($rootScope){
            return {
              link: function(scope, element, attrs){
                    $rootScope.apiDataUrl = attrs.apiDataUrl;
                }
            };
        })
        .controller('TableFormatController', function($scope, ngTableParams, $http,sfTranslator,notifyService) {
            $scope.itemEdit = function(url){
                document.location = url;
            };
            $scope.itemDelete = function(url){
                $.modal.confirm(sfTranslator.trans('tecnocreaciones_vzla_government.question.delete'), function()
                {
                    $http.post(url,{_method:'DELETE'},{headers:{'X-Requested-With':'XMLHttpRequest'}}).success(function(data){
                        $.each(data.message,function(index, value){
                            notifyService.success(value);
                        });
                        $scope.tableParams.reload();
                    }).error(function(data, status){
                        if(status == 403){
                            notifyService.error(sfTranslator.trans('Permission Denied!'));
                        }
                    });
                }, function(){},
                {
                    textConfirm: sfTranslator.trans('tecnocreaciones_vzla_government.yes'),
                    textCancel: sfTranslator.trans('tecnocreaciones_vzla_government.no')
                });
            };
            $scope.evalFooter = function(type,footer){
              for (var i = 0; i < footer.length; i++) {
                    if (footer[i] === type) {
                        return true;
                    }
                }
              return false;
           };
            $scope.tableParams = new ngTableParams({
                page: 1, // show first page
                count: 10 // count per page
            }, {
                total: 0, // length of data
                getData: function($defer, params) {
                    var parameters = params.url();
                    parameters.limit = parameters.count;
                    var apiUrl = $scope.apiDataUrl;
                    $http.get(apiUrl, {params: parameters}).success(function(data) {
                        params.total(data._embedded.paginator.getNbResults);
                        $defer.resolve($scope.results = data._embedded.results);
                    });
                }
            });
            $scope.tableParams.search = '';
              $scope.checkboxes = { 'checked': false, items: {} };

                // watch for check all checkbox
                $scope.$watch('checkboxes.checked', function(value) {
                    angular.forEach($scope.results, function(item) {
                        if (angular.isDefined(item.id)) {
                            $scope.checkboxes.items[item.id] = value;
                        }
                    });
                });

                // watch for data checkboxes
                $scope.$watch('checkboxes.items', function(values) {
                    if (!$scope.results) {
                        return;
                    }
                    var checked = 0, unchecked = 0,
                        total = $scope.results.length;
                    angular.forEach($scope.results, function(item) {
                        checked   +=  ($scope.checkboxes.items[item.id]) || 0;
                        unchecked += (!$scope.checkboxes.items[item.id]) || 0;
                    });
                    if ((unchecked == 0) || (checked == 0)) {
                        $scope.checkboxes.checked = (checked == total);
                    }
                    // grayed checkbox
                    angular.element(document.getElementById("select_all")).prop("indeterminate", (checked != 0 && unchecked != 0));
                }, true);

        })
        .controller('TableGroupingFormatController', function($scope, ngTableParams, $http,sfTranslator,notifyService) {
            $scope.itemEdit = function(url){
                document.location = url;
            };
            $scope.itemDelete = function(url){
                $.modal.confirm(sfTranslator.trans('tecnocreaciones_vzla_government.question.delete'), function()
                {
                    $http.post(url,{_method:'DELETE'},{headers:{'X-Requested-With':'XMLHttpRequest'}}).success(function(data){
                        $.each(data.message,function(index, value){
                            notifyService.success(value);
                        });
                        $scope.tableParams.reload();
                    }).error(function(data, status){
                        if(status == 403){
                            notifyService.error(sfTranslator.trans('Permission Denied!'));
                        }
                    });
                }, function(){},
                {
                    textConfirm: sfTranslator.trans('tecnocreaciones_vzla_government.yes'),
                    textCancel: sfTranslator.trans('tecnocreaciones_vzla_government.no')
                });
            };
            $scope.evalFooter = function(type,footer){
              for (var i = 0; i < footer.length; i++) {
                    if (footer[i] === type) {
                        return true;
                    }
                }
              return false;
           };
            $scope.tableParams = new ngTableParams({
                page: 1, // show first page
                count: 10 // count per page
            }, {
                total: 0, // length of data
                groupBy: 'groupBy',
                getData: function($defer, params) {
                    var parameters = params.url();
                    parameters.limit = parameters.count;
                    var apiUrl = $scope.apiDataUrl;
                    $http.get(apiUrl, {params: parameters}).success(function(data) {
                        params.total(data._embedded.paginator.getNbResults);
                        $defer.resolve($scope.results = data._embedded.results);
                    });
                }
            });
            $scope.tableParams.search = '';
              $scope.checkboxes = { 'checked': false, items: {} };

                // watch for check all checkbox
                $scope.$watch('checkboxes.checked', function(value) {
                    angular.forEach($scope.results, function(item) {
                        if (angular.isDefined(item.id)) {
                            $scope.checkboxes.items[item.id] = value;
                        }
                    });
                });

                // watch for data checkboxes
                $scope.$watch('checkboxes.items', function(values) {
                    if (!$scope.results) {
                        return;
                    }
                    var checked = 0, unchecked = 0,
                        total = $scope.results.length;
                    angular.forEach($scope.results, function(item) {
                        checked   +=  ($scope.checkboxes.items[item.id]) || 0;
                        unchecked += (!$scope.checkboxes.items[item.id]) || 0;
                    });
                    if ((unchecked == 0) || (checked == 0)) {
                        $scope.checkboxes.checked = (checked == total);
                    }
                    // grayed checkbox
                    angular.element(document.getElementById("select_all")).prop("indeterminate", (checked != 0 && unchecked != 0));
                }, true);

        });