'use strict'

angular.module('maclabWebApp')
  .controller 'MainCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
  .controller 'PplCtrl', ($scope, RAList, alumniList) ->
    $scope.RA_list = RAList
    $scope.alumni_list = alumniList

  .controller 'PublicationCtrl', ($scope, journalPapers, confPapers) ->
    $scope.journal_papers = journalPapers
    $scope.conf_papers = confPapers
