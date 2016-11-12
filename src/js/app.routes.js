/* global angular */
;(function () {
  'use strict'

  angular
    .module('app')
    .config(routesBlock)

  //

  routesBlock.$inject = [ '$routeProvider' ]

  /* @ngInject */
  function routesBlock ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeController',
        controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginController',
        controllerAs: 'vm'
      })
  }
})()
