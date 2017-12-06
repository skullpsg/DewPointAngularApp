'use strict';
DewPointAppSPA.controller('servicerequestcontroller', ['$scope', '$location', function ($scope, $location) {
    $scope.Querys = [{ Name: 'Product Purchase' }, { Name: 'Service Request' }];

    $scope.user = {};
    $scope.user.SelectedQuery = $scope.Querys[0];
}]);