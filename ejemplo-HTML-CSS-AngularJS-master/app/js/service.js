
angular.module('librosApp')
.service('LibrosService',function(){
	this.todosLosLibros=function(){
		return  [
			{
				autor: todosLosLibros.autor, 
				id: todosLosLibros.id,
				titulo: todosLosLibros.titulo
			}
		];
	}
});