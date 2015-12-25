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
var miApp2=angular.module("miApp2",[]);
miApp2
	.controller('ControladorUno', ['$scope','Fabrica', function($scope,Fabrica){
		$scope.nuevo= function(){
			Fabrica.msjNuevo($scope.mensajeNuevo);
		};
		$scope.dato=Fabrica.objeto;
	}])
	.controller('ControladorDos', ['$scope','Fabrica', function($scope,Fabrica){
		$scope.nuevo= function(){
			Fabrica.msjNuevo($scope.mensajeNuevo);
		};
		$scope.dato=Fabrica.objeto;
	}])
	.controller('ControladorTres', ['$scope','Fabrica', function($scope,Fabrica){
		$scope.resetear=function(){
			Fabrica.msjInicial();	
		}
	}])
	.factory('Fabrica', function(){
		var servicio={
			objeto:{mensaje:'Saludos desde la fábrica !'},
			msjInicial:function(){
				servicio.objeto['mensaje']='Saludos desde la fábrica !';
			},
			msjNuevo:function(msj){
				servicio.objeto['mensaje']=msj;
			}
		};
		return servicio;
	})
	;