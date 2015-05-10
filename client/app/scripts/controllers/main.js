'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('portfolioApp')
	.controller('MainCtrl', function($scope, $timeout, dataSvc) {
		
		$timeout(function() {$scope.fadeIn = true}, 0);
		$timeout(function() {$scope.fadeIn2 = true}, 700);
		$timeout(function() {$scope.fadeIn3 = true}, 1500);
		
	});

