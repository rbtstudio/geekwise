/* Controllers */

app.controller('AppController',
    function AppController($scope){
        $scope.projects = [{
            title: "My first project",
            description: "Record your meals",
            duedate: "09-01-2013",
            team: "Iron Sky"
        },
        {
            title: "My second project",
            description: "Record your drinks",
            duedate: "10-02-2013",
            team: "Holy Grail"
        }];
        $scope.model = {
            message: "This is the app home."
        }
    });

app.controller('DetailController',function($scope){
    $scope.model = {
        message: "This is the detail home."
    }
});

app.controller('AddController', function($scope, $routeParams){
    $scope.model = {
        message: $routeParams.message
    }
});

app.controller('EditController', function($scope){
    $scope.model = {
        message: "This is the edit page."
    }
});

app.controller('DeleteController', function($scope){
    $scope.model = {
        message: "This is the delete page."
    }
});