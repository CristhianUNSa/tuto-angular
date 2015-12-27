var miApp=angular.module("miApp",[]);
miApp
.controller('Controlador', ['$scope', function($scope){
	$scope.texto={titulo:'Desde',subtitulo:'archivo HTML'};
	$scope.texto2={titulo:'Otro',subtitulo:'Texto'};
}])
.directive('miEncabezado', function(){
	return {
		scope:{
			textoVariable:'=texto'
		},
		templateUrl: 'mi-encabezado.html'
	}
});