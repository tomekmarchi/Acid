(function(){

	//core model used for onready
	$.model('core',function(){
		$.ensureInvoke(['/site/scripts/models/css/css.js','/site/scripts/models/libs/hl.js'],function(){
			$.import('todo.js',{});
		});
	});
})();