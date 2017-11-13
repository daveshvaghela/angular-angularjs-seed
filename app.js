(function(){
  'use strict';
    var myApp = angular.module('myApp',['ngRoute']);

    myApp.config(function($routeProvider) {
      $routeProvider

      .when('/', {
        templateUrl: 'main.html', 
        controller: 'dataController'
})
    .when('/second',{
        templateUrl: 'second.html',
        controller: 'secondController'

})

    });
  
  })();