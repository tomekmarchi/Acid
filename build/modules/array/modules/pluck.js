//extracting a list of property values to an array
array_extend.pluck = function (pluck_item) {
	var array = this,
		temp = [],
		len = array.length;
	for (var i = 0; i < len; i++) {
		var item = array[i][pluck_item];
		if (item) {
			temp.push(item);
		}
	}
	return temp;
};