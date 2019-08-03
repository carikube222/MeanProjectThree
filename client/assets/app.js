//***********************************************************************
var app = angular.module('app', ['ngRoute']);
//***********************************************************************
  app.config(function ($routeProvider) {
    console.log('client/app.js config routes');
    $routeProvider
    .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'loginController',
    })
    .when('/appointments', {
        templateUrl: 'partials/main.html',
        controller: 'mainController',
    })
    .when('/appointments/new', {
      templateUrl: 'partials/new.html',
      controller: 'newController',
    })
    .when('/appointments/:id/update', {
      templateUrl: 'partials/update.html',
      controller: 'updateController',
    })
    .when('/appointments/:id/show', {
      templateUrl: 'partials/show.html',
      controller: 'showController',
    })
    .when('/logout', {
      templateUrl: 'partials/logout.html',
      controller: 'logoutController'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
