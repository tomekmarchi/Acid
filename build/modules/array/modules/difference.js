//Creates an array excluding all values of the provided arrays using SameValueZero for equality comparisons.
array_extend.difference = function (compare) {
	var array = this,
		difference = [],
		len = array.length;
	for (var i = 0; i < len; i++) {
		var item = array[i],
			indexof=compare.indexOf(item);
		if (indexof == -1) {
			difference.push(item);
		}
	}
	return difference;
};

//Creates an array excluding all values of the arrays using SameValueZero for equality comparisons.
array_extend.differenceAll = function () {
	var array = this,
		len = array.length,
		difference = [];
	for (var i = 0; i < len; i++) {
		var item = array[i],
			sub_len = item.length;
		for (var a = 0; a < sub_len; a++) {
			var subitem=item[a],
				indexof=difference.indexOf(subitem);
			if (indexof == -1) {
				difference.push(subitem);
			}else{
				difference.splice(indexof,1);
			}
		}
	}
	return difference;
};