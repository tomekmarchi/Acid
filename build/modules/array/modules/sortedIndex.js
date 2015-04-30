//Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order.
array_extend.sortedIndex = function (n) {
	var array = this,
		min = 0,
		len = array.length;
	for (var i = 0; i < len; i++) {
		var item = array[i];
		if (n > item) {
			var min = i;
		}
	}
	if (min > 0) {
		var min = min + 1;
	}
	return min;
};