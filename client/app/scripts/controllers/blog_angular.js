'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:BlogAngularCtrl
 * @description
 * # BlogAngularCtrl
 * Controller of the appApp
 */
angular.module('portfolioApp')
  .controller('BlogAngularCtrl', function ($scope, dataSvc) {
    $scope.getData = function() {
			dataSvc.getData('/json/angular/angular-menu.json')
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
