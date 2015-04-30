//loop through array using for loop cached
array_extend.each = function (callback) {
	return _each_array(this,callback);
};

//loop through array backwards aka from the right
array_extend.eachRight = function (fn) {
	return eachArrayFromRight(this,fn);
};

//loop through array using for loop cached
array_extend.eachDo = function (callback, safeIteration) {
	return _each_array(this,callback, safeIteration);
};

//each while the check function is true
array_extend.eachWhile = function (fn,check) {
	return _eachWhile(this,fn,check);
};

//loop while the returned result is true
array_extend.whileTrue = function (fn) {
	return _whileTrue(this,fn);
};

//loop while the returned result is false
array_extend.whileFalse = function (fn) {
	return _whileFalse(this,fn);
};

//loop while the count is less than the length of the array
array_extend.whileLength = function (fn) {
	return _whileLength(this,fn);
};