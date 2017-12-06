'use strict';
DewPointAppSPA.controller('homeController', ['$scope', '$location', function ($scope, $location) {
  
    $scope.goto=function(path){
        $location.path(path);
    }

   
}]);