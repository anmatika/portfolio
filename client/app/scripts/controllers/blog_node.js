'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:BlogNodeCtrl
 * @description
 * # BlogNodeCtrl
 * Controller of the appApp
 */
angular.module('portfolioApp')
	.controller('BlogNodeCtrl', function($scope, dataSvc) {
		$scope.getData = function() {
			dataSvc.getData('/json/node/node-menu.json')
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