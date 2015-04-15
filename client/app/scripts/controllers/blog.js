'use strict';
/**
 * @ngdoc function
 * @name appApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the appApp
 */
angular.module('portfolioApp')
	.controller('BlogCtrl', function($scope, dataSvc) {
		
		$scope.getData = function() {
			dataSvc.getData('json/thumbnails.json')
				.then(function(data) {
						console.log('data: ' + data);
						$scope.thumbnails = data;
					},
					function(reason) {
						console.log(reason);
					});
		}

		$scope.getData();
		
	});