var _each = function(object,funct,fn){
	if(_isArray(object)){
		var returned=_each_array(object,funct);
	}else if(isPlainObject(object)){
		var returned=_each_object(object,funct);
	}else if(isNumber(object)){
		var returned=_each_number(object, funct, fn);
	}
	return returned;
};

$.each=_each;