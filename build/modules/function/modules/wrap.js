//wrap 2 functions 'this' is launched after the argument function(s)
$.wrap=function(funct,object,bind){
	if(_isFunction(object)){
		return function(){
			var args=_toArray(arguments);
			return [object.apply(bind,args),funct.apply(bind,args)];
		};
	}else if(isPlainObject(object)){
		for (var i = 0,keys=_object_keys(object), len = keys.length; i < len; i++) {
			var key=keys[i];
			object[key]=$.wrap.apply(funct,[object[key],bind]);
		}
	}
	return object;
};

//wrap 2 functions 'this' is launched before the argument function(s)
$.wrapBefore=function(funct,object,bind){
	if(_isFunction(object)){
		return function(){
			var args=_toArray(arguments);
			return [funct.apply(bind,args),object.apply(bind,args)];
		};
	}else if(isPlainObject(object)){
		for (var i = 0,keys=_object_keys(object), len = keys.length; i < len; i++) {
			var key=keys[i];
			object[key]=wrap_before.apply(funct,[object[key],bind]);
		}
	}
	return object;
};