(function () {
    'use strict';

    window.cdapNgUiApp
        .controller('MenuCtrl',
        ['$scope', '$location', function ($scope, $location) {
            $scope.menuItems = [
                {
                    name: 'cdap',
                    displayName: '',
                    url: '/'
                },
                {
                    name: 'application',
                    displayName: 'Application',
                    url: '/overview'
                },
                {
                    name: 'collect',
                    displayName: 'Collect',
                    url: '/streams'
                },
                {
                    name: 'process',
                    displayName: 'Process',
                    url: '/flows'
                },
                {
                    name: 'store',
                    displayName: 'Store',
                    url: '/datasets'
                },
                {
                    name: 'query',
                    displayName: 'Query',
                    url: '/procedures'
                }
            ];

            $scope.locationPath = null;

            $scope.$watch(function () {
                return $location.path();
            }, function (newPath) {
                $scope.locationPath = newPath;
            });
        }]).directive('menu', function () {
            return {
                restrict: 'A',
                replace: true,
                scope: true,
                templateUrl: 'views/menu.html',
                link: function link(scope, element, attrs) {

                }
            };
        });
})();
