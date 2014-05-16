/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define("controllers", [
	'angular',
	'angular-route'
], function(ng, ngRoute) {
	'use strict';

	/* Controllers */

	var gameControllers = angular.module('gameControllers', []);

	gameControllers.controller('gameRunCtrl', ['$scope', '$http', '$routeParams',
		function($scope, $http, $routeParams) {
			if (!$scope.$parent.films) {
				$http.get('datas/films.json').success(function(data) {
					$scope.$parent.films = data;
					initData();
				});
			} else {
				initData();
			}

			function initData() {
				$scope.currentLevel = $routeParams.gamelevel || 1;
				$scope.currentfilms = $scope.$parent.films[$scope.currentLevel-1];
				$scope.answers=$scope.currentfilms.answer.split("");
				$scope.tips=$scope.currentfilms.tip.split("");
			}

		}
	]);

	gameControllers.controller('homeCtrl', ['$scope', '$http', '$routeParams',
		function($scope, $routeParams) {
			$scope.phoneId = $routeParams.phoneId;
		}
	]);

	gameControllers.controller('helpCtrl', ['$scope', '$routeParams',
		function($scope, $routeParams) {

		}
	]);

	gameControllers.controller('levelMenuCtrl', ['$scope', '$http', '$routeParams',
		function($scope, $http, $routeParams) {
			if (!$scope.$parent.films) {
				$http.get('datas/films.json').success(function(data) {
					$scope.$parent.films = $scope.films = data;
				});
			} else {
				$scope.films = $scope.$parent.films;
			}
		}
	]);
});