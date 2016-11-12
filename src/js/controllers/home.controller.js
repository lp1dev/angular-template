;(function () {
  'use strict';

  app.controllers
    .controller('homeController', homeController)

  ////

  /* @ngInject */
  function homeController (APP_NAME) {
    var vm = this

    vm.controller = "homeController"
    vm.pageTitle = "Home"
    vm.appName = APP_NAME
  }
})();
