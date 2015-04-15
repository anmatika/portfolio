'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:BlogBowerCtrl
 * @description
 * # BlogBowerCtrl
 * Controller of the appApp
 */
angular.module('portfolioApp')
  .controller('BlogBowerCtrl', function ($scope, dataSvc) {
    $scope.getData = function() {
			dataSvc.getData('/json/bower/bower-menu.json')
				.then(function(data) {
						console.log('data: ' + data);
						$scope.thumbnails = data;
					},
					function(reason) {
						console.log(reason);
					});
	}

	dataSvc.getData('/json/bower/bower-inject.json')
				.then(function(data) {
						console.log('data: ' + data);
						$scope.blogpost = data;
					},
					function(reason) {
						console.log(reason);
					});
	

	$scope.getData();
  });
