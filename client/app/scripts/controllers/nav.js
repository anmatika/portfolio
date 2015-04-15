'use strict';

/**
 * @ngdoc function
 * @name app.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the app
 */
angular.module('portfolioApp')
	.controller('NavCtrl', function($scope, $location, $cookies, $rootScope, loginSvc) {

		$scope.logout = function() {
			loginSvc.logout()
				.then(function(data) {
						console.log(data);
					},
					function(reason) {
						console.log(reason);
					});
			$scope.username = '';
		};

		var setUserName = function() {

			loginSvc.getUser()
				.then(function(data) {
						if (data.facebook) {
							$scope.username = data.facebook.name;
						} else if (data.local){
							$scope.username = data.local.email;
						}
					},
					function(reason) {
						console.log(reason);
					});
		}

		$scope.isActive = function(viewLocation) {
			return viewLocation === $location.path();
		};

		$scope.$on('loggedIn', function(event, args) {
			console.log('loggedIn hit: ' + args);
			$scope.username = args;
		})

		// setUserName();

	});