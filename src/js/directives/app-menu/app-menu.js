(function () {
  'use strict'

  app.directives
    .directive('appMenu', appMenu)

  function appMenu() {
    var directive = {
      templateUrl: 'js/directives/app-menu/app-menu.html'
    }

    return directive
  }

})()