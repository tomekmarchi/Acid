//sum of values in an array
array_extend.sumOf = function () {
	var array = this,
		sumof = 0,
		len = array.length;
	for (var i = 0; i < len; i++) {
		sumof = sumof + array[i];
	}
	return sumof;
};