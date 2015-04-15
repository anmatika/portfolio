'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:BlogGruntCtrl
 * @description
 * # BlogGruntCtrl
 * Controller of the appApp
 */
angular.module('portfolioApp')
  .controller('BlogGruntCtrl', function ($scope, dataSvc) {
    $scope.getData = function() {
			dataSvc.getData('/json/grunt/grunt-menu.json')
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
