'use strict';

/**
 * @ngdoc service
 * @name app.data
 * @description
 * # data service
 * Service in the app.
 */
angular.module('portfolioApp')
  .service('dataSvc', function($http, $q) {
    function getData(path) {

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
      getData: getData
    }

  });