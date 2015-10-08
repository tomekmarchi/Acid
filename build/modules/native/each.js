var _each = function(object,funct,fn){
	if(_isArray(object)){
		var returned=_each_array(object,funct);
	}else if(isPlainObject(object)){
		var returned=_each_object(object,funct);
	}else if(isNumber(object)){
		var returned=_each_number(object, funct, fn);
	}else if(_isNodeList(object) || _isHTMLCollection(object)){
		var returned=_each_array(_toArray(object),funct);
	}else{
		var returned=_each_object(object,funct);
	}
	return returned;
};

$.each=_each;
