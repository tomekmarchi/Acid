//create an array from a range
array_extend.createRange = function (start_arg, stop_arg, increment) {
	var array = this,
		stop = (stop_arg) ? stop_arg : start_arg,
		start = (stop_arg) ? start_arg : 0;
	for (var i = start; i < stop; i++) {
		if (increment) {
			if (i > 0) {
				var i = i - 1 + 5,
					i_check = i + increment;
			}
		}
		array.push(i);
		if (increment) {
			if (i_check == stop) {
				break;
			}
		}
	}
	return array;
};

//create an array from a range
array_extend.createRangeTo = function (start_arg, stop_arg, increment) {
	var array = this,
		stop = (stop_arg) ? stop_arg : start_arg,
		start = (stop_arg) ? start_arg : 0;
	for (var i = start; i <= stop; i++) {
		if (increment) {
			if (i > 0) {
				var i = i - 1 + 5,
					i_check = i + increment;
			}
		}
		array.push(i);
		if (increment) {
			if (i_check == stop) {
				break;
			}
		}
	}
	return array;
};