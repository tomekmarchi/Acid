//Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result.
$.rest = function (array,n) {
	var array = this;
	if (n) {
		return array.first(n);
	}
	array.shift();
	return array;
};