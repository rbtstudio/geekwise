// var ajaxapp = angular.module('ajaxapp', []);

// ajaxapp.config(function(){

// });


function fetchController($scope, $http, $templateCache){
	$scope.fetch = function(){

		$scope.method = $scope.widget.method;
		//$scope.url = 'http://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero';
		$scope.url = $scope.widget.url;

		$scope.response = null;

		$http({
			method: $scope.method,
			url: $scope.url,
			cache: $templateCache
		})
		.success(function(data, status){
			$scope.status = status;
			$scope.data = data;
		})
		.error(function(data, status){
			$scope.status = data || "Request failed";
			$scope.status = status;
		});



	}
}