//returns the first false item
array_extend.firstFalse = function (funct) {
	var array = this,
		len = array.length;
	for (var i = 0; i < len; i++) {
		var item = array[i];
		if (!funct(item)) {
			return item;
		}
	}
	return false;
};