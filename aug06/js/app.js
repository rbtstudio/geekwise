var app = angular.module("app", []);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: "app.html",
        controller: "AppController"
    })
    .when('/koala', {
        templateUrl: "koala.html",
        controller: "KoalaController"
    })
    .when('/kangaroo', {
        templateUrl: "kangaroo.html",
        controller: "KangarooController"
    });
});

app.controller("AppController", function($scope){
    $scope.model = {
        message: "You should pick an animal!"
    }
});
app.controller("KoalaController", function($scope){
    $scope.model = {
        message: "The koala:"
    }
});
app.controller("KangarooController", function($scope){
    $scope.model = {
        message: "The kangaroo:"
    }
});








