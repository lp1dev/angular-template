;(function () {
  'use strict';

  app.controllers
    .controller('appMenuController', appMenuController)

  ////

  /* @ngInject */
  function appMenuController ($location) {
    var menuVm = this;

    menuVm.controller = "appMenuController"
    menuVm.changeView = changeView
    menuVm.menuItems = [
      {
        "name": "Home",
        "view": "/"
      }
    ]

    function changeView(view) {
      $location.path(view);
    }

  }
})();
