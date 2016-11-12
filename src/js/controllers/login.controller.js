;(function () {
  'use strict';

  app.controllers
    .controller('loginController', loginController)

  ////

  /* @ngInject */
  function loginController (APP_NAME) {
    var vm = this

    vm.controller = "loginController"
    vm.pageTitle = "Login"
    vm.appName = APP_NAME
  }
})();
