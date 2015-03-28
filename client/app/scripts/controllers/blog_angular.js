'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:BlogAngularCtrl
 * @description
 * # BlogAngularCtrl
 * Controller of the appApp
 */
angular.module('app')
  .controller('BlogAngularCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
