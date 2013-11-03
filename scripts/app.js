(function() {
  'use strict';
  angular.module('maclabWebApp', ['ngCookies', 'ngResource', 'ngSanitize']).config(function($routeProvider, $locationProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainCtrl'
    }).when('/people', {
      templateUrl: 'views/people.html'
    }).when('/research', {
      templateUrl: 'views/research.html'
    }).when('/publication', {
      templateUrl: 'views/publication.html'
    }).when('/db', {
      templateUrl: 'views/database.html'
    }).otherwise({
      redirectTo: '/'
    });
  });

}).call(this);

/*
//@ sourceMappingURL=app.js.map
*/