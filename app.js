
var DewPointAppSPA = angular.module("dewPointApp", ['ngRoute', 'ngMaterial', 'angular-loading-bar', 'ngMessages']);

DewPointAppSPA.config(['$routeProvider', '$locationProvider', '$httpProvider', 'cfpLoadingBarProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider, cfpLoadingBarProvider, $httpProvider) {
    RegisterRoutes($routeProvider, $locationProvider);

    $locationProvider.html5Mode(true).hashPrefix('#');

    cfpLoadingBarProvider.includeBar = true;

    delete $httpProvider.defaults.headers.common['X-Requested-With'];

}]);

var RegisterRoutes = function ($routeProvider, $locationProvider) {

    $routeProvider.when("/Home", {
        controller: "homeController",
        templateUrl: "template/home.html",
    });

    $routeProvider.when("/Product", {
        controller: "productportfoliocontroller",
        templateUrl: "template/product.html",
    });

    $routeProvider.when("/Estimate", {
        controller: "serviceestimatecontroller",
        templateUrl: "template/serviceestimate.html",
    });

    $routeProvider.when("/Request", {
        controller: "servicerequestcontroller",
        templateUrl: "template/servicerequest.html",
    });

    $routeProvider.when("/Login", {
        controller: "loginController",
        templateUrl: "template/login.html",
    });

    $routeProvider.otherwise({ redirectTo: "/Home" });
}

DewPointAppSPA.constant('apiServiceBaseUri', 'http://localhost/DewPointAppAPI/');

DewPointAppSPA.run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (e, curr, prev) {
        if (curr != undefined && curr.$$route && curr.$$route.resolve) {
            // Show a loading message until promises are not resolved
        }
    });

    $rootScope.$on('$routeChangeSuccess', function (eventObj, curr, prev) {
      
    });
}]);