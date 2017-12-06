'use strict';
DewPointAppSPA.controller('productportfoliocontroller', ['$scope', '$location', function ($scope, $location) {
    $scope.Brands = [{ Name: 'Voltas', value: 1 }, { Name: 'Carrier', value: 1.2 }, { Name: 'O General', value: 1.3 }, { Name: 'Whirlpool', value: 1.1 }, { Name: 'L G', value: 1.1 }];

    $scope.Tonnages = [{ Name: '1 ton', value: 1 }, { Name: '1.5 ton', value: 1.25 }, { Name: '2 ton', value: 1.6 }];

    $scope.product = {};
    $scope.product.SelectedBrand = $scope.Brands[0];
    $scope.product.SelectedTonnage = $scope.Tonnages[0];

    $scope.$watch('product.SelectedBrand', function () {

    });
    $scope.$watch('product.SelectedTonnage', function () {

    });
}]);