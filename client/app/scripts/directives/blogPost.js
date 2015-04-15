'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:thumbnailRepeater
 * @description
 * # thumbnailRepeater
 */
angular.module('portfolioApp')
  .directive('blogPost', function () {
    return {
      templateUrl: 'template/blogPost.html',
      restrict: 'E'
    };
  });
