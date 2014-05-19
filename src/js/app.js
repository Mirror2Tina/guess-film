/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define("appGuessFilm", [
    'angular',
    'angular-route',
     'controllers'
], function (ng,ngRoute) {
    'use strict';

    return ng.module('appGuessFilm', ['ngRoute','gameControllers']).config(['$routeProvider',
        function  ($routeProvider) {
            $routeProvider.when('/home',{
                templateUrl:'partials/home.html',
                controller:'homeCtrl'
            }).
            when('/games',{
                templateUrl:'partials/game.html',
                controller: 'gameRunCtrl'
            }).when('/games/:gamelevel',{
                templateUrl:'partials/game.html',
                controller: 'gameRunCtrl'
            }).
            when('/levelMenu',{
                templateUrl:'partials/levelMenu.html',
                controller:'levelMenuCtrl'
            }).
            when('/help',{
                templateUrl:'partials/help.html',
                controller:''
            }).
            when('/author',{
                templateUrl:'partials/author.html',
                controller:''
            }).
            otherwise({
              redirectTo:'/home'
            });
        }]);
})