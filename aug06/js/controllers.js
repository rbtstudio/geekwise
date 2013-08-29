/* Controllers */

projMan.controller('listController', function($scope){
    $scope.model = {
        //message: "bite me!"
    }
});

projMan.controller('addController',
    function projMan($scope){
        $scope.model = {
            message: "ugh."
        }
    });

projMan.controller('appController',
    function appController($scope){
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
    });





