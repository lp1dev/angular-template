/* global angular */
var app = angular.module('app',
  [
    'app.services',
    'app.directives',
    'app.controllers',
    'ngRoute'
  ])

app.controllers = angular.module('app.controllers', [])
app.directives = angular.module('app.directives', [])
app.services = angular.module('app.services', [])
