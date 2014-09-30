<!-- app/assets/javascripts/angular/app.js -->

var myApp = angular.module('RailsWithAngular', ['ngRoute', 'ngResource']);

//Routes

myApp.config([
    '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/products', {
            templateUrl: '/template/products/index.html',
            controller: 'ProductListCtr'
        });
        $routeProvider.when('/products/new', {
            templateUrl: '/template/products/new.html',
            controller: 'ProductAddCtr'
        });
        $routeProvider.when('/products/:id/edit', {
            templateUrl: '/template/products/edit.html',
            controller: "ProductUpdateCtr"
        });
        $routeProvider.when('/users', {
            templateUrl: '/template/users/index.html',
            controller: "UserUpdateCtr"
        });
        $routeProvider.when('/users/new', {
            templateUrl: '/template/users/new.html',
            controller: 'UserAddCtr'
        });
        $routeProvider.when('/users/:id/edit', {
            templateUrl: '/template/users/edit.html',
            controller: "UserUpdateCtr"
        });
        $routeProvider.otherwise({
            redirectTo: '/products'
        });
    }
]);

