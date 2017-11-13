(function(){
    'use strict';
 
    var myApp = angular.module('myApp');
    //$http service is to make the ajax call. Here in this example we have used
    //min safe array and writing the $http as parameter of the function is called as
    //dependency injection [DI].
    myApp.controller('dataController',['$scope','$http',function($scope,$http)

    {
        
        $scope.propertyName = 'amount';
        $scope.reverse = true;
        
      
        $scope.sortBy = function(propertyName) {
          $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
          $scope.propertyName = propertyName;
        };
  
        $http.get('data.json')
        .then(function(edata){ //call back function
          
        $scope.empl = edata.data;

        });

        
        
    }]);
    myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {
            
            console.log('hi this is second');
            
        }]);
        
    
})();
 