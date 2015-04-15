//create a function that takes an object that is apart of the main $ and applies/calls it to the functions arguments
var _define=(function(){
	//module function
	var callback=function(module){
			module();
			return false;
		},
		define=function(methods,fn){
			if(isPlainObject(methods) && !fn){
				return _module(methods)();
			}
			return _module(methods,fn,callback)();
		};

	//export
	return define;
})();

$.define = _define;

/*
	Example

	//function to be defined
	var define=function(template,model,toDOM,isNative,console){
		console(arguments);
	},
	//definitions for variables
	require=['template','model','toDOM','isNative','console'];

	// Define our function
	//NOTE: executes once resources are loaded
	$.define(require,define);

*/