//create a function that takes an object that is apart of the main $ and applies/calls it to the functions arguments useful for caching functions
var _module = $.module = (function () {
	//module function
	var compile_module = function (methods, fn, callback) {
			var temp = [],
				import_it = [],
				methods = (_isArray(methods)) ? methods : [methods],
				len = methods.length;
			for (var i = 0; i < len; i++) {
				var item = methods[i];
				if (_isString(item)) {
					if (_has(item, '.js') || _has(item, '.css')) {
						import_it.push(item);
					} else {
						temp.push(_find(item, $));
					}
				} else {
					temp.push(item);
				}
			}
			var call = function () {
					var args = temp.concat(_toArray(arguments)),
						module_with_import = function () {
							return fn.apply(fn, args);
						};
					module_with_import.args = function (i) {
						if (i) {
							args = args.concat(_toArray(arguments));
						}
						return args;
					};
					if (callback) {
						return callback(module_with_import);
					}
					return module_with_import();
				};
			if (import_it.length > 0) {
				return _import(import_it, {
					call: call
				});
			}
			var compiled = function () {
					return fn.apply(fn, temp);
				};
			//return to callback if passed
			if (callback) {
				return call();
			}
			return compiled;
		};
	//export

	var module=function(data, fn, callback){

		if(!fn){
			return _module[data];
		}

		var compiled=function(){
			var returned=compile_module(data, fn, callback);
			if(_isFunction(returned)){
				return returned();
			}
			return returned;
		};
		compiled.save=function(name){
			return _module[name]=compiled;
		};
		return compiled;
	};

	return module;
})();
/*
	Example
	//module function
	var module=function(template,model,toDOM,isNative,console,api){
		model('test',{
			log:function(){ console(1); },
			template:template,
			model:model,
			toDOM:toDOM,
			isNative:isNative(isNative),
			api:api
		});
	},
	//callback for module when import items are loaded -> if none the module function will be used
	callback=function(module){
		module();
		$.model('test');
		$.model('test.log')();
		return module();
	};

	//module definitions
	$.module(['template','model','toDOM','isNative','console','docs/api.js'],module,callback);

*/