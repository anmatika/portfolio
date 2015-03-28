'use strict';
/**
 * @ngdoc function
 * @name appApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the appApp
 */
angular.module('app')
	.controller('BlogCtrl', function($scope, postSvc, loginSvc) {
		
		$scope.isDisabled = false;
		$scope.user_img = "test";
		$scope.blogpost = {
			paragraphs: [
				{
					title: 'Prequisities',
					steps: [
						{ title: 'Create route', command: 'yo angular:route routename'},
						{ title: 'Install bower', command: 'sudo npm install -g bower'},
						{ title: 'Install grunt', command: 'sudo npm install -g grunt-cli'},
						{ title: 'Install Ruby for compass', command: 'sudo apt-get install ruby'},
						{ title: 'Install Compass', command: 'sudo gem install compass'}
					]
				},
				{
					title: 'Steps',
					steps: [
						{ title: 'Create root directory', command: 'mkdir myproject'},
						{ title: 'Create server directory into root folder', command: 'mkdir -p myproject/server'},
						{ title: 'Create client directory into root folder', command: 'mkdir -p myproject/client'},
						{ title: 'In client folder scaffold angular by using Yeoman', command: 'yo angular'},
						{ title: 'Install package.json dependencies', command: 'npm install'},
						{ title: 'Install bower.json dependencies', command: 'bower install'},
					] 

				}
			]
		};

		function getUser() {
			console.log('post hit');
			loginSvc.getUser()
				.then(function(data) {
						if (data.facebook) {
							console.log(data.facebook.id);
							$scope.userid = data.facebook.id;
							$scope.username = data.facebook.name;
							$scope.isDisabled = false;
							FB.api(
				                "/me/picture",
				                function (response) {
				                  console.log('picture: ' + response.toSource());
				                  console.log('picture.data.url: ' + response.data.url);
				                  $scope.user_img = response.data.url;
				                  $scope.$digest();
				                  if (response && !response.error) {
				                    /* handle the result */
				                    
				                  }
				                }
			            	);

						} else {
							$scope.isDisabled = true;
							console.log(data);
						}
						// this callback will be called asynchronously
						// when the response is available
					},
					function(reason) {
						console.log(reason);
					});
		}

		function getComments() {
			postSvc.getComments(123)
				.then(function(data) {
						console.log('data: ' + data);
						$scope.comments = data;
					},
					function(reason) {
						console.log(reason);
					});
		}
		getComments();

		$scope.post = function(postid) {
			console.log('post hit. postid: ' + postid);
			postSvc.postComment($scope.comment, $scope.userid, $scope.username, postid)
				.then(function(data) {
						console.log('data: ' + data);
						$scope.comment = '';
						getComments();
						// this callback will be called asynchronously
						// when the response is available
					},
					function(reason) {
						console.log(reason);
					});
		};
		
		//getUser();
		
		
	});