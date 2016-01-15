var _each = function(object,funct,fn){
	var returned;
	if(_isArray(object)){
		returned=_each_array(object,funct);
	}else if(isPlainObject(object)){
		returned=_each_object(object,funct);
	}else if(isNumber(object)){
		returned=_each_number(object, funct, fn);
	}else if(_isNodeList(object) || _isHTMLCollection(object)){
		returned=_each_array(_toArray(object),funct);
	}else{
		returned=_each_object(object,funct);
	}
	return returned;
};

$.each=_each;
