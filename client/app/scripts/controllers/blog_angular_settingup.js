'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:BlogSettingupAngularCtrl
 * @description
 * # BlogSettingupAngularCtrl
 * Controller of the appApp
 */
angular.module('portfolioApp')
	.controller('BlogAngularSettingupCtrl', function($scope, dataSvc) {
		$scope.isDisabled = false;
		$scope.user_img = "test";
		
		dataSvc.getData('/json/angular/settingup_angular.json')
				.then(function(data) {
						console.log('data: ' + data);
						$scope.blogpost = data;
					},
					function(reason) {
						console.log(reason);
					});

	});