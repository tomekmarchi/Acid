//Creates a slice of array with n elements taken from the beginning.
array_extend.take = function (amount) {
	return this.slice(0,amount);
};

//Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. function args (value, index, array).
array_extend.takeWhile = function (funct) {
	var array = this,
		temp = [],
		len = array.length;
	for (var i = 0; i < len; i++) {
		var item = array[i],
			condition = funct(item, i, array);
		if (condition) {
			temp.push(item);
		}
	}
	return temp;
};

//Creates a slice of array with n elements taken from the end.
array_extend.takeRight = function (amount) {
	var array=this;
	return array.splice(array.length-amount,amount);
};

//Creates a slice of array with elements taken from the end. Elements are taken until predicate returns falsey. function args (value, index, array).
array_extend.takeRightWhile = function (funct) {
	var array = this,
		temp = [],
		len = array.length;
	for (var i = len-1; i >= 0; i--) {
		var item = array[i],
			condition = funct(item, i, array);
		if (condition) {
			temp.unshift(item);
		}
	}
	return temp;
};