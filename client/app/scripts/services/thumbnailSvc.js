'use strict';

/**
 * @ngdoc service
 * @name appApp.thumbnail
 * @description
 * # thumbnail
 * Service in the appApp.
 */
angular.module('app')
  .service('thumbnailSvc', function($http, $q) {
    function getThumbnails(path) {

      var deferred = $q.defer();

      $http.get(path)
        .success(function(data) {

          deferred.resolve(data);

        }).
      error(function(data) {
        console.log(data);
        deferred.reject(data);
      });

      return deferred.promise;
    }

   

    return {
      getThumbnails: getThumbnails
    }

  });