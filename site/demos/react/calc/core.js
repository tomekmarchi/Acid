(function(){

	//core module
	var required=['promise','ensure','../../../scripts/models/css/css.js','../../../scripts/models/libs/hl.js'],
		module=function(promise,ensure,css,hl){
			promise(['css','hl'],'payload',function(){
				ensure('calc');
			});
			css('css','payload');
			hl('hl','payload');
		};

	$.model('core',function(){
		$.module(required,module);//launched in async
	});

})();