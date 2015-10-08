//Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order.
$.sortedIndex = function (array,n) {
	var min = 0,
		item,
		len = array.length;
	for (var i = 0; i < len; i++) {
		item = array[i];
		if (n > item) {
			min = i;
		}
	}
	if (min > 0) {
		min = min + 1;
	}
	return min;
};