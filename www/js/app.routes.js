(function() {
    'use strict';

    angular
	.module('app')
	.config(routes)

    ////

    /* @ngInject */
    function routes($stateProvider, $urlRouterProvider) {
	$stateProvider
	    .state('app', {
		url: '/app',
		templateUrl: '',
		controller: 'appController',
		controllerAs: 'vm'
	    });
    }
})();
