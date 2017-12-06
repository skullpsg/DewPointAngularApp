'use strict';
DewPointAppSPA.controller('indexController', ['$scope', '$location', function ($scope, $location) {

    $scope.goto = function (path) {
        $location.path(path);
    }
    $scope.location = $location;


}]);