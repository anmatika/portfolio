'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:BlogGruntCtrl
 * @description
 * # BlogGruntCtrl
 * Controller of the appApp
 */
angular.module('app')
  .controller('BlogGruntCtrl', function ($scope, thumbnailSvc) {
    $scope.getThumbnails = function() {
			thumbnailSvc.getThumbnails('/json/grunt/grunt-menu.json')
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
