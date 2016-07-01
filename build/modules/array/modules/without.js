//Returns a copy of the array with all instances of the values removed.
$.without = function(array, args) {
	var isFN=isFunction(args),
		args=(isArray(args))? args : [args];
    return mapArray(array, (item, index) => {
		if ((isFN)? args(item) : has(args, item)) {
			return item;
		}
	});
};
