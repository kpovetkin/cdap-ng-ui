(function () {
    'use strict';

    /**
     * @ngdoc overview
     * @name cdapNgUiApp
     * @description
     * # cdapNgUiApp
     *
     * Main module of the application.
     */
    window.cdapNgUiApp = angular
        .module('cdapNgUiApp', [
            'ngRoute'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    redirectTo: '/overview'
                })
                .when('/overview', {
                    /*                    templateUrl: 'views/overview.html',
                     controller: 'OverviewCtrl' */
                })
                .when('/streams', {

                })
                .when('/flows', {

                })
                .when('/datasets', {

                })
                .when('/procedures', {

                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();