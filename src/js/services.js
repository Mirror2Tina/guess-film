'use strict';

/* Services */

var gameServices = angular.module('gameServices', ['ngResource']);

gameServices.factory('Films', ['$resource',
  function($resource){
    return $resource('datas/:data.json', {}, {
      query: {method:'GET', params:{data:'data'}, isArray:true}
    });
  }]);
