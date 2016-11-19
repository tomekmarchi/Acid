//create an array from a range
var range = $.range = function(start, stop, increment = 1, fliped) {
	if (increment === 0) {
		return sameRange(start, stop);
	}
	if (!hasValue(stop)) {
		stop = start;
		start = 0;
	}
	var array = (fliped) ? [] : [start];
	if (start > stop) {
		while (start > stop) {
			start = start - increment;
			if (start > stop) {
				pushArray(array, start);
			}
		}
	} else if (start < stop) {
		while (start < stop) {
			start = start + increment;
			if (start < stop) {
				pushArray(array, start);
			}
		}
	}
	if (fliped) {
		pushArray(array, start);
	}
	return array;
};

var sameRange = (start, stop) => {
	stop = (stop < 0)? stop * -1: stop;
	var array = [],
		i = 1;
	while (i < stop) {
		i++;
		pushArray(array, start);
	}
	return array;
};

var rangeRight = $.rangeRight = function(start = 0, stop, increment) {
	if (increment === 0) {
		return sameRange(start, stop);
	}
	if (!stop) {
		stop = start;
		start = 0;
	} else if (increment < 0 && start > stop) {
		increment = increment * -1;
	}
	return range(stop, start, increment, True);
}

//create an array from a range
$.rangeTo = function(start, stop, increment) {
	return range(start, stop + (increment || 1), increment);
};
