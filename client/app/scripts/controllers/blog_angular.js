'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:BlogAngularCtrl
 * @description
 * # BlogAngularCtrl
 * Controller of the appApp
 */
angular.module('app')
  .controller('BlogAngularCtrl', function ($scope, thumbnailSvc) {
    $scope.getThumbnails = function() {
			thumbnailSvc.getThumbnails('/json/angular/angular-menu.json')
				.then(function(thumbnails) {
						console.log('thumbnails: ' + thumbnails);
						$scope.thumbnails = thumbnails;
					},
					function(reason) {
						console.log(reason);
					});
		}

		$scope.getThumbnails();
  });
