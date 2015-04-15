//loop through array using for loop
array_extend.each = function (fn) {
	return _each_array(this,fn);
};

//loop through array using for loop
array_extend.eachFromRight = function (fn) {
	return eachArrayFromRight(this,fn);
};