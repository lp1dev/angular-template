(function () {
  'use strict'

  app.directives
    .directive('appView', appView)

  function appView() {
    var directive = {
      templateUrl: 'js/directives/app-view/app-view.html',
      transclude: true
    }

    return directive
  }

})()