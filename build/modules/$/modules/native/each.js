var _each = $.each = (function(){
	function each(object,funct){
		if(_isArray(object)){
			var returned=_each_array(object,funct);
		}else if(isPlainObject(object)){
			var returned=_each_object(object,funct);
		}else if(isNumber(object)){
			var returned=_each_number(object,funct);
		}
		return returned;
	}

	return each;
})();