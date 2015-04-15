'use strict';

/**
 * @ngdoc service
 * @name app.productSvc
 * @description
 * # productSvc
 * Service in the app.
 */
angular.module('portfolioApp')
  .service('productSvc', function ($http, $q) {
     
      function getProducts() {
	   	
	   	var deferred = $q.defer();
		
	   	$http.get('/getProducts')
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
   	getProducts: getProducts
   }
  });
