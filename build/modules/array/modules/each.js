//loop through array using for loop cached
array_extend.each = function (fn) {
	return _each_array(this,fn);
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

//loop through array backwards aka from the right
array_extend.eachFromRight = function (fn) {
	return eachArrayFromRight(this,fn);
};