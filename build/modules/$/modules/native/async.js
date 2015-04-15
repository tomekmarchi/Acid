//async launch an array of functions
$.async = function (fns) {
	if(_isArray(fns)){
		var len = fns.length;
		for (var i = 0; i < len; i++) {
			_async(fns[i]);
		}
		var len = null;
	} else if(_isFunction(fns)){
		_async(fns);
	}
	return false;
};