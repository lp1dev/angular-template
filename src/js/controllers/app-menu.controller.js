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
        "view": "/",
        "icon": "glyphicon-home"
      },
      {
        "name": "Login",
        "view": "/login",
        "icon": "glyphicon-ok"
      }
    ]

    function changeView(view) {
      $location.path(view);
    }

  }
})();
