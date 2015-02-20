'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app')
	.controller('MainCtrl', function($scope, productSvc) {

		$scope.getProducts = function() {
			productSvc.getProducts()
				.then(function(products) {
						console.log(products);
						$scope.products = products;
					},
					function(reason) {
						console.log(reason);
					});
		}

		$scope.getProducts();
	});