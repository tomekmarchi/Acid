//create a function that takes an object that is apart of the main $ and applies/calls it to the functions arguments useful for caching functions
var _define=$.define=(function(){

	//module function
	var callback=function(module){
			module();
			return false;
		},
		define=function(methods,fn){
			_module(methods,fn,callback);
			return false;
		};

	//export
	return define;
})();

/*
	Example

	//function to be defined
	var define=function(template,model,toDOM,isNative,console,api){
		console(arguments);
	},
	//definitions for variables
	require=['template','model','toDOM','isNative','console','docs/api.js'];

	// Define our function
	//NOTE: executes once resources are loaded
	$.define(require,define);

*/