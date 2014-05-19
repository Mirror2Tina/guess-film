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

			function initData() {
				$scope.currentLevel = $routeParams.gamelevel || 1;
				$scope.currentfilms = $scope.$parent.films[$scope.currentLevel - 1];
				$scope.answers = $scope.currentfilms.answer.split("");
				initChoseAnswer($scope.answers.length);
				$scope.tips = $scope.currentfilms.tip.split("");
			}


			 function CanInput() {
				var caninput = false;
				$scope.choseAnswer.forEach(function(value) {
					if (value == null);
					caninput = true;
				})
				return caninput;
			}
			 function setWord(word) {
				$scope.choseAnswer.forEach(function(value, key) {
					if ($scope.choseAnswer.flag == null && value == null) {
						$scope.choseAnswer.flag = key;
					}
				})
				$scope.choseAnswer[$scope.choseAnswer.flag] = word;
				$scope.choseAnswer.flag = null;
			}

			 function chickAnswer() {
				if ($scope.choseAnswer.join('') == $scope.currentfilms.answer) {
					alert("you  are win!!");
					$scope.$parent.score=$scope.$parent.score+1||1;
				}
			}
			 function initChoseAnswer(length) {
				$scope.choseAnswer = [];
				for (var i = 0; i < length; i++) {
					$scope.choseAnswer.push(null);
				}
				$scope.choseAnswer.flag = null;
			}

			$scope.choseWord = function(word) {
				if (CanInput()) {
					setWord(word);
					chickAnswer();
				}
			}

            $scope.removeWord = function(index) {
				$scope.choseAnswer[index] = null;
			}

            if (!$scope.$parent.films) {
				$http.get('datas/films.json').success(function(data) {
					$scope.$parent.films = data;
					initData();
				});
			} else {
				initData();
			}
		}
	]);

	gameControllers.controller('homeCtrl', ['$scope', '$http', '$routeParams',
		function($scope, $routeParams) {
			$scope.score = $scope.$parent.score||0;;
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