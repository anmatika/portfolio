'use strict';
/**
 * @ngdoc function
 * @name appApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the appApp
 */
angular.module('app')
	.controller('BlogCtrl', function($scope, postSvc, thumbnailSvc) {
		
		$scope.getThumbnails = function() {
			thumbnailSvc.getThumbnails()
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