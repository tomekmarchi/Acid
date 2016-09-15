//is number zero
$.isZero = function (item) {
	return item === 0;
};
//is strict equal to
$.isNumberEqual = function (item, num) {
	return item === num;
};
//is In range of two numbers
$.isNumberInRange = function (num, start, end) {
	if (isUndefined(end)) {
		end = start;
		start = 0;
	}
	return num > start && num < end;
};
