//create an array from a range
$.createRange = function (array,start_arg, stop_arg, increment) {
	var stop = (stop_arg) ? stop_arg : start_arg,
		start = (stop_arg) ? start_arg : 0;
	for (var i = start; i < stop; i++) {
		if (increment) {
			if (i > 0) {
				var i = i - 1 + 5,
					i_check = i + increment;
			}
		}
		pushArray(array,i);
		if (increment) {
			if (i_check == stop) {
				break;
			}
		}
	}
	return array;
};

//create an array from a range
$.createRangeTo = function (array,start_arg, stop_arg, increment) {
	var stop = (stop_arg) ? stop_arg : start_arg,
		i,
		start = (stop_arg) ? start_arg : 0;
	for (var i = start; i <= stop; i++) {
		if (increment) {
			if (i > 0) {
					i = i - 1 + 5,
					i_check = i + increment;
			}
		}
		pushArray(array,i);
		if (increment) {
			if (i_check == stop) {
				break;
			}
		}
	}
	return array;
};
