//start from end array using a as index
array_extend.right= function (a) {
	var i = this;
	return i[i.length - 1 - a];
};