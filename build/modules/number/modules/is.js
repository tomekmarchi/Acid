//is number zero
number_extend.isZero = function () {
	return this === 0;
};
//is strict equal to
number_extend.isEqual = function (num) {
	return this === num;
};
//is In range of two numbers
number_extend.isInRange = function (start,end) {
	var num=this;
	if (end === _undefined) {
     var end = start;
     var start = 0;
    }
	return num > start && num < end;
};