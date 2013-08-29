/* Controllers */

app.controller('AppController',
    function AppController($scope, $http){
        $http({
            method: 'GET',
            url: 'projects.json'
        })
        .success(function(data, status){
            $scope.projects = data;
        }).error(function(data, status){

        });
    });


app.controller('DetailController', function($scope, $routeParams){
    $scope.project = $scope.projects[$routeParams.id];
});


app.controller('AddController', function($scope, $location){
    $scope.project = {};
    $scope.add = function(){
        $scope.projects.push($scope.project);
        $location.url('/');
    };
});

app.controller('EditController', function($scope, $routeParams, $location){
    $scope.project = $scope.projects[$routeParams.id];
    $scope.edit = function(){
        $scope.projects[$routeParams.id] = $scope.project;
        $location.url('/');
    };
});

app.controller('DeleteController', function($scope, $routeParams, $location){
    $scope.project = $scope.projects[$routeParams.id];
    $scope.delete = function(){
        $scope.projects.splice($routeParams.id, 1);
        $location.url('/');
    };
    $scope.back = function(){
        $location.url('/');
    };
});