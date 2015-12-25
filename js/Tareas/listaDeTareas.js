angular.module('todoAp',[])
.controller('ControladorTareas',['$scope',function($scope){
	$scope.tareas=[
		{texto:'Super Heroico con AngularJS', hecho:true},
		{texto:'Crear una APP con Angular',hecho:false}
	];
}]);