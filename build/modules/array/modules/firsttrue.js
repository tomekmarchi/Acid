//returns the first true item
$.firstTrue = function (array,funct) {
	var item,
		len = array.length;
	for (var i = 0; i < len; i++) {
			item = array[i];
		if (funct(item)) {
			return item;
		}
	}
};
