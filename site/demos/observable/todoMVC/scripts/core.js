(function(){

	//Correct path for CSS files optional due to pushState use
	$.dir.css='/site/demos/observable/todoMVC/';

	//a module saved as a model that is executed by acid's automatic core loading (document.readyState)
	$.module({
		modelName:'core',
		import:['modules/todo/todoModule.js','routers/pushRouter.js'],
		invoke:function(todoModule,pushRouter){
			//compile todo Module with a secondary callback
			todoModule(function(){
				var todoFactory=this();
				$('#wrapper').prepend(todoFactory.render().mount());
			});
		}
	});

})();