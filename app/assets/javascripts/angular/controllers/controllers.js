// app/assets/javascripts/angular/controllers/controllers.js


//Controllers

myApp.controller("ProductListCtr", ['$scope', '$http', '$resource', 'Products', 'Product', '$location', function ($scope, $http, $resource, Products, Product, $location) {

    $scope.products = Products.query();

    $scope.deleteProduct = function (ProductId) {
        if (confirm("Are you sure you want to delete this Product?")) {
            Product.delete({ id: ProductId }, function () {
                $scope.products = Products.query();
                $location.path('/');
            });
        }
    };
}]);

myApp.controller("ProductUpdateCtr", ['$scope', '$resource', 'Product', '$location', '$routeParams', function ($scope, $resource, Product, $location, $routeParams) {
    $scope.product = Product.get({id: $routeParams.id})
    $scope.update = function () {
        if ($scope.productForm.$valid) {
            Product.update({id: $scope.product.id}, {product: $scope.product}, function () {
                $location.path('/');
            }, function (error) {
                console.log(error)
            });
        }
    };
}]);

myApp.controller("ProductAddCtr", ['$scope', '$resource', 'Products', '$location', function ($scope, $resource, Products, $location) {

    $scope.product = {name: '', price: '', deacription: ''};
    $scope.save = function () {
        if ($scope.productForm.$valid) {
            Products.create({product: $scope.product}, function () {
                $location.path('/');
            }, function (error) {
                console.log(error)
            });
        }
    }


}]);

myApp.controller("UserListCtr", ['$scope', '$http', '$resource', 'users', 'User', '$location', function ($scope, $http, $resource, Users, User, $location) {

    $scope.users = Users.query();

    $scope.deleteProduct = function (ProductId) {
        if (confirm("Are you sure you want to delete this User?")) {
            User.delete({ id: UserId }, function () {
                $scope.users = Users.query();
                $location.path('/');
            });
        }
    };
}]);
myApp.controller("UserUpdateCtr", ['$scope', '$resource', 'User', '$location', '$routeParams', function ($scope, $resource, User, $location, $routeParams) {
    $scope.user = User.get({id: $routeParams.id})
    $scope.update = function () {
        if ($scope.userForm.$valid) {
            User.update({id: $scope.user.id}, {user: $scope.user}, function () {
                $location.path('/');
            }, function (error) {
                console.log(error)
            });
        }
    };
}]);
myApp.controller("UserAddCtr", ['$scope', '$resource', 'users', '$location', function ($scope, $resource, Users, $location) {


    alert('user')
    $scope.user = {name: '', first_name: '', last_name: '', email_id: ''};
    $scope.save = function () {
        if ($scope.userForm.$valid) {
            Users.create({user: $scope.user}, function () {
                $location.path('/');
            }, function (error) {
                console.log(error)
            });
        }
    }


}]);
