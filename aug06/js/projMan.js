var projMan = angular.module("projMan", []);

projMan.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: "listProj.html",
			controller: "listController"
		})
		.when('/addProj', {
			templateUrl: "addProj.html",
			controller: "addController"
		});
});




