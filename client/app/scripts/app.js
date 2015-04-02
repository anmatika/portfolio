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
  .module('app', [
    'ngLocale',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCart',
    'pascalprecht.translate',
    'zeroclipboard'
  ])
  .config(function($routeProvider, $translateProvider, uiZeroclipConfigProvider) {
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/blog/angular', {
        templateUrl: 'views/blog_angular.html',
        controller: 'BlogAngularCtrl'
      })
      .when('/blog/angular/settingup', {
        templateUrl: 'views/blog_angular_settingup.html',
        controller: 'BlogAngularSettingupCtrl'
      })
      .when('/blog/node', {
        templateUrl: 'views/blog_node.html',
        controller: 'BlogNodeCtrl'
      })
      .when('/blog/grunt', {
        templateUrl: 'views/blog_grunt.html',
        controller: 'BlogGruntCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $translateProvider.translations('en', {
        about: 'About',
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
        about: 'Tietoja meistä',
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
      $translateProvider.preferredLanguage('fi');

       // config ZeroClipboard
      uiZeroclipConfigProvider.setZcConf({
        swfPath: '../bower_components/zeroclipboard/dist/ZeroClipboard.swf'
      });
  });