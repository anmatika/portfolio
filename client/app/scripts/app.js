'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * #
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', [
    'ngLocale',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'zeroclipboard',
    'hljs'
  ])
  .config(function($routeProvider, $translateProvider, $locationProvider, uiZeroclipConfigProvider) {
    $routeProvider
      .when('/', {
       templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/order', {
        templateUrl: 'views/order.html',
        controller: 'OrderCtrl'
      })
      .when('/customerDetails', {
        templateUrl: 'views/customerdetails.html',
        controller: 'CustomerdetailsCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/cv', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/blog/angular', {
        templateUrl: 'views/blog/blog_angular.html',
        controller: 'BlogAngularCtrl'
      })
      .when('/blog/angular/settingup', {
        templateUrl: 'views/blog/blog_angular_settingup.html',
        controller: 'BlogAngularSettingupCtrl'
      })
      .when('/blog/node', {
        templateUrl: 'views/blog/blog_node.html',
        controller: 'BlogNodeCtrl'
      })
      .when('/blog/node/expresshttp', {
        templateUrl: 'views/blog/blog_node_expresshttp.html',
        controller: 'BlogNodeCtrl'
      })
      .when('/blog/grunt', {
        templateUrl: 'views/blog/blog_grunt.html',
        controller: 'BlogGruntCtrl'
      })
      .when('/blog/angular/directives', {
        templateUrl: 'views/blog/blog_angular_directives.html',
        controller: 'BlogAngularCtrl'
      })
      .when('/blog/grunt/automation', {
        templateUrl: 'views/blog/blog_grunt_automation.html',
        controller: 'BlogGruntCtrl'
      })
      .when('/blog/bower', {
        templateUrl: 'views/blog/blog_bower.html',
        controller: 'BlogBowerCtrl'
      })
      .when('/blog/bower/basic', {
        templateUrl: 'views/blog/blog_bower_basic.html',
        controller: 'BlogBowerCtrl'
      })
      .when('/blog/yeoman', {
        templateUrl: 'views/under-construction.html'
      })
      .when('/blog/linux', {
        templateUrl: 'views/under-construction.html'
      })
      .when('/blog/git', {
        templateUrl: 'views/under-construction.html'
      })
      .otherwise({
        redirectTo: '/'
      });

      $translateProvider.translations('en', {
        aboutMe: 'CV',
        blog: 'Blog',
        services: 'Services',
        contact: 'Contact',
        signUp: 'Sign up',
        login: 'Log in',
        addToCart: 'Add to cart',
        thisItemIsInYourCart: 'This item is in your cart',
        quantity: 'Quantity',
        price: 'Price',
        total: 'Total',
        checkout: 'Checkout',
        logout: 'Log out',
        account: 'Account'
      }).translations('fi', {
        aboutMe: 'Tietoja',
        blog: 'Blogi',
        services: 'Palvelut',
        contact: 'Yhteystiedot',
        signUp: 'Rekisteröidy',
        login: 'Kirjaudu',
        addToCart: 'Ostoskoriin',
        thisItemIsInYourCart: 'Tuote lisätty ostoskoriisi',
        quantity: 'Määrä',
        price: 'Hinta',
        total: 'Yhteensä',
        checkout: 'Kassalle',
        logout: 'Kirjaudu ulos',
        account: 'Tili'
      });
      $translateProvider.preferredLanguage('en');

       // config ZeroClipboard
      uiZeroclipConfigProvider.setZcConf({
        swfPath: '../bower_components/zeroclipboard/dist/ZeroClipboard.swf'
      });

      // $locationProvider.html5Mode(true);
      // $locationProvider.hashPrefix('!');
  });