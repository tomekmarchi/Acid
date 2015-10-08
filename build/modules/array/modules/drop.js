//Creates a an array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is bound to thisArg and invoked with three arguments; (value, index, array).
$.dropWhile = function (array,funct) {
	var temp = [],
		len = array.length;
	for (var i = 0; i < len; i++) {
		var item = array[i],
			condition = funct(item, i, array);
		if (!condition) {
			temp.push(item);
		}
	}
	return temp;
};

//Creates a an array with elements taken from the end. Elements are taken until predicate returns falsey. The predicate is bound to thisArg and invoked with three arguments; (value, index, array).
$.dropRightWhile = function (array,funct) {
	var temp = [],
		item,
		len = array.length;
	for (var i = len-1; i >= 0; i--) {
			item = array[i],
			condition = funct(item, i, array);
		if (!condition) {
			temp[i]=item;
		}
	}
	return temp;
};


//Removes elements from array corresponding to the given indexes and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
$.drop = function (array,amount) {
	return array.splice(amount,array.length);
};

//Removes elements from array corresponding to the given indexes (from right) and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
$.dropRight = function (array,amount) {
	return array.slice(0,array.length-amount);
};