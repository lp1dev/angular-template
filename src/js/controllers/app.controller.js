(function () {
  'use strict';

  app.controllers
    .controller('appController', appController)

  ////

  /* @ngInject */
  function appController ($scope) {
    var vm = this;

    vm.name = "placeholder";
    vm.onChange = onChange;

    function onChange (value) {
      vm.name = value;
      alert(value);
    }
  }
})();
