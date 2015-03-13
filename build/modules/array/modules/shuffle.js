//shuffle an array and return a new array
array_extend.shuffle = function () {
	var temp = this,
		array = [],
		i = 0,
		len = temp.length;
	while (i < len) {
		array.push(temp.splice(Math.round(Math.random() * temp.length), 1)[0]);
		i++;
	}
	return array;
};