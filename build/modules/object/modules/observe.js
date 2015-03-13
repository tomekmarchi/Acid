//short hand for object.observe
object_extend.obsrv = function (fn) {
	var object=this;
	if(_isArray(object)){
		return _array_observe(this, fn);
	}
	return _observe(this, fn);
};
//short hand for object.unobserve
object_extend.unObsrv = function (fn) {
	var object=this;
	if(_isArray(object)){
		return _array_unobserve(object, fn);
	}
	return _unobserve(object, fn);
};