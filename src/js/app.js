/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define("app", [
    'angular'
], function (ng) {
    'use strict';

    return ng.module('app', []).controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});});
