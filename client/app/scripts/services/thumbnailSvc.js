'use strict';

/**
 * @ngdoc service
 * @name appApp.thumbnail
 * @description
 * # thumbnail
 * Service in the appApp.
 */
angular.module('app')
  .service('thumbnailSvc', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
     function getThumbnails() {
	   	
	   	var deferred = $q.defer();
		
	   	$http.get('json/thumbnails.json')
	   		.success(function(data){
	   			
	   			deferred.resolve(data);
		   		
   		}).
   		error(function(data){
   			console.log(data);
   			deferred.reject(data);
   		});

   		return deferred.promise;
   }

   return {
   	getThumbnails: getThumbnails
   }
  });
