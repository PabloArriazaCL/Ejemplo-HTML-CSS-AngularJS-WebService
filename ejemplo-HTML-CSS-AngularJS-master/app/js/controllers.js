var app = angular.module('librosApp', []);
app.controller('TodosLosLibrosCtrl',function ($scope, $http) {
	// Simple GET request example:
	$http({method: 'GET', url: 'http://45.79.0.212:8080/TestJson/webresources/servicios/generador_json'
	}).then(function successCallback(response) {
		// when the response is available
	    $scope.libros = 	data;
	    
	 });
});
  
  
 	 