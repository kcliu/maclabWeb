'use strict'

angular.module('maclabWebApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config ($routeProvider, $locationProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/home.html'
        controller: 'MainCtrl'
      .when '/people',
        templateUrl: 'views/people.html'
      .when '/research',
        templateUrl: 'views/research.html'
      .when '/publication',
        templateUrl: 'views/publication.html'
      .when '/db',
        templateUrl: 'views/database.html'
      .when '/contact',
        templateUrl: 'views/contact.html'
      .otherwise
        redirectTo: '/'
