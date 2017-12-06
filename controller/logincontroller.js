'use strict';
DewPointAppSPA.controller('loginController', ['$scope', '$location', function ($scope, $location) {
    $scope.loginFailure = false;
    $scope.email = "test@gmail.com";
    $scope.pwd = "test123$";
    $scope.login = function () {
        $scope.loginFailure = false;
        if ($scope.email == "test@gmail.com" && $scope.pwd == "test123$") {
            $location.path('/Product');
        }
        else {
            $scope.loginFailure = true;
        }
    }
}]);