'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appApp
 */
angular.module('portfolioApp')
  .controller('AboutCtrl', function ($scope, dataSvc) {
    $scope.getData = function() {
			dataSvc.getData('json/professional_history.json')
				.then(function(data) {
						console.log('data: ' + data);
						$scope.histories = data;
					},
					function(reason) {
						console.log(reason);
					});
		}

		$scope.getData();
  });
