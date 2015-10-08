//extracting a list of property values to an array
$.pluck = function (array,pluck_item) {
	var temp = [],
		item,
		len = array.length;
	for (var i = 0; i < len; i++) {
		item = array[i][pluck_item];
		if (item) {
			temp.push(item);
		}
	}
	return temp;
};