//make a promise
var _promoiseFN = $.promise = function (array, name, fun) {
	if (!fun) {
		return _promised(array, name);
	}
	return _promise(array, name, fun);
};
var _promises = $.promises = {};