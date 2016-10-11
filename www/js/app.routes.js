(function() {
    'use strict';
    
    angular
	.module('app')
	.config(routesBlock)

    ////

    routesBlock.$inject = ['$routeProvider'];
    
    /* @ngInject */
    function routesBlock($routeProvider) {  
        $routeProvider
            .when('/', {
		templateUrl: 'partials/home.html',
		controller: 'appController',
		controllerAs: 'vm'
            });
    }
})();
