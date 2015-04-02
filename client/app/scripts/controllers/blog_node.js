'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:BlogNodeCtrl
 * @description
 * # BlogNodeCtrl
 * Controller of the appApp
 */
angular.module('app')
	.controller('BlogNodeCtrl', function($scope, thumbnailSvc) {
		$scope.getThumbnails = function() {
			thumbnailSvc.getThumbnails('/json/node/node-menu.json')
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