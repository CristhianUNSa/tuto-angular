var miApp=angular.module("miApp",[]);
miApp
	.controller('ControladorUno', ['$scope','Dato', function($scope,Dato){
		$scope.dato=Dato;//{mensaje:'Saludos desde el ControladorUno'};
	}])
	.controller('ControladorDos', ['$scope','Dato', function($scope,Dato){
		$scope.dato=Dato;//{mensaje:'Saludos desde el ControladorDos'};
	}])
	.factory('Dato', function(){
		return {mensaje:'Saludos desde la fábrica'};
	})
	;