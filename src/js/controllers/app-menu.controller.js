;(function () {
  'use strict';

  app.controllers
    .controller('appMenuController', appMenuController)

  ////

  /* @ngInject */
  function appMenuController ($location) {
    var menuVm = this;

    menuVm.isOpen = true;
    menuVm.controller = "appMenuController"
    menuVm.changeView = changeView
    menuVm.menuItems = [
      {
        "name": "Home",
        "view": "/"
      },
      {
        "name": "Login",
        "view": "/login"
      }
    ]

    function changeView(view) {
      $location.path(view);
    }

  }
})();
