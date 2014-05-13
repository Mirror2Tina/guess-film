/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define("appGuessFilm", [
    'angular',
    'angular-route'
], function (ng,ngRoute) {
    'use strict';

    return ng.module('appGuessFilm', ['ngRoute']).config(['$routeProvider',
        function  ($routeProvider) {
            $routeProvider.when('/home',{
                templateUrl:'partials/home.html',
                controller:''
            }).when('/games',{
                templateUrl:'partials/game.html',
                controller:''
            }).
            when('/levelMenu',{
                templateUrl:'partials/levelMenu.html',
                controller:''
            }).
            otherwise({
              redirectTo:'/home'
            });
        }]);
})