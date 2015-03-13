//set resize model
$.model('resize',function(){
	$.service('resize').run();
}.debounce(200));