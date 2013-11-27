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
    }).when('/job', {
      templateUrl: 'views/job.html'
    }).when('/contact', {
      templateUrl: 'views/contact.html'
    }).otherwise({
      redirectTo: '/'
    });
  });

}).call(this);

/*
//@ sourceMappingURL=app.js.map
*/
(function() {
  'use strict';
  angular.module('maclabWebApp').controller('MainCtrl', function($scope) {
    return $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
  });

}).call(this);

/*
//@ sourceMappingURL=main.js.map
*/