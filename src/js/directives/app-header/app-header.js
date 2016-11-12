;(function () {
  'use strict'

  app.directives
    .directive('appHeader', appHeader)

  function appHeader() {
    var directive = {
      templateUrl: 'js/directives/app-header/app-header.html'
    }

    return directive
  }

})()