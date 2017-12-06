'use strict';
DewPointAppSPA.controller('serviceestimatecontroller', ['$scope', '$location', function ($scope, $location) {
    $scope.ServiceTypes = [{ Name: 'Installation', value: 1.5 }, { Name: 'On call Service', value: 1 }, { Name: 'Non Comprehensive', value: 3 }, { Name: 'Comprehensive', value: 6 }];

    $scope.Tonnages = [{ Name: '1 ton', value: 1 }, { Name: '1.5 ton', value: 1.25 }, { Name: '2 ton', value: 1.6 }];

    $scope.product = {};
    $scope.product.SelectedServiceType = $scope.ServiceTypes[0];
    $scope.product.SelectedTonnage = $scope.Tonnages[0];

    $scope.$watch('product.SelectedBrand', function () {
       
    });
    $scope.$watch('product.SelectedTonnage', function () {
       
    });



}]);