'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app')
	.controller('MainCtrl', function($scope, thumbnailSvc) {

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