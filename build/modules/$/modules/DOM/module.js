//create a function that takes an object that is apart of the main $ and applies/calls it to the functions arguments useful for caching functions

var orderModuleMethods = function(methods, len) {
    var array = [];
    for (var i = 0; i < len; i++) {
        var item = methods[i];
        if (_isString(item)) {
            if (_has(item, '.js')) {
                var splitIt = item.split('/');
                var model = _find(splitIt[splitIt.length - 1].split('.js')[0], _model);
                if (model) {
                    array.push(model);
                }
            } else {
                var acidMethod = _find(item, $);
                if (acidMethod) {
                    array.push(acidMethod);
                }
            }
        } else if (isObject(item) || _isFunction(item)) {
            array.push(item);
        }
    }
    return array;
};

var _module = (function() {
    //module function
    var compile_module = function(methods, fn, callback, callbackOptional) {
        var importItems = [];
        var methods = (_isArray(methods)) ? methods : [methods];
        var len = methods.length;
        for (var i = 0; i < len; i++) {
            var item = methods[i];
            if (_isString(item)) {
                if (_has(item, '.js') || _has(item, '.css')) {
                    importItems.push(item);
                }
            }
        }
        var compiled = function() {
            var orderedMethods = orderModuleMethods(methods, len);
            if (callbackOptional) {
                return callbackOptional.apply(function() {
                    return fn.apply(fn, orderedMethods)
                }, orderedMethods);
            }
            return fn.apply(fn, orderedMethods);
        };
        var call = function() {
            if (callback) {
                return callback(compiled);
            }
            return compiled();
        };
        if (importItems.length > 0) {
            return _import(importItems, {
                call: call
            });
        }
        //return to callback if passed
        if (callback) {
            return call();
        }
        return compiled;
    };
    //export

    var module = function(data, fn, callback, modelName, lean) {

        if (isPlainObject(data) && !fn) {
            var fn = data.invoke;
            var callback = data.callback;
            var modelName = data.modelName;
            var lean = hasValue(data.leanModel) ? data.leanModel : true;
            var data = data.import;
        }

        if (!fn) {
            return _model[data];
        }

        var compiled = function(callbackOptional) {
            var returned = compile_module(data, fn, callback, callbackOptional);
            if (_isFunction(returned)) {
                return returned();
            }
            return returned;
        };
        compiled.save = function(name) {
            return _model(name, compiled, lean);
        };
        if (modelName) {
            return _model[modelName] = compiled;;
        }
        return compiled;
    };

    return module;
})();

$.module = _module;

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