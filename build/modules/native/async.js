//async launch an array of functions
var asyncLaunch= (item) => {
	_async(item);
};
$.async = function(fns) {
	if (_isFunction(fns)) {
		_async(fns);
	} else if (_isArray(fns)) {
		_each_array(fns, asyncLaunch);
	} else {
		_each_object(fns,asyncLaunch);
	}
};
