'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:thumbnailRepeater
 * @description
 * # thumbnailRepeater
 */
angular.module('portfolioApp')
  .directive('disqus', function () {
    return {
      templateUrl: 'template/disqus.html',
      restrict: 'E'
    };
  });
