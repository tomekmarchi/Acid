//create an array from a range
var createRange = $.createRange = function(start, stop, increment) {
	var array = [];
	increment = increment || 1;
    while(start<stop){
		pushArray(array,start);
		start = start + increment;
	}
    return array;
};

//create an array from a range
$.createRangeTo = function(start, stop, increment) {
    return createRange(start, stop+(increment||1), increment);
};
