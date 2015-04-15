'use strict';

/**
 * @ngdoc service
 * @name appApp.postSvc
 * @description
 * # postSvc
 * Service in the appApp.
 */
angular.module('portfolioApp')
  .service('postSvc', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      return {

      postComment: function(comment, userid, username, postid) {

        var deferred = $q.defer();
        console.log('comment: ' + comment);
               
  		$http.post('/postComment', {
          comment: comment,
          userid: userid,
          username: username,
          postid: postid
        }).
        success(function(data, status, headers, config) {
          deferred.resolve(data);
        }).
        error(function(data, status, headers, config) {
          deferred.reject(data);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

        return deferred.promise;
      },

      getComments: function (postid){
      	var deferred = $q.defer();
      	$http.post('/getComments', {
          postid: postid,          
        }).
        success(function(data, status, headers, config) {
          deferred.resolve(data);
        }).
        error(function(data, status, headers, config) {
          deferred.reject(data);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
        return deferred.promise;
      }
  	}
});
