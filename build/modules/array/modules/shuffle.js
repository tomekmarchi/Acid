//shuffle an array and return a new array
$.shuffle = function (arrayOG) {
	var temp = _toArray(arrayOG),
		array = [],
		i = 0,
		len = temp.length;
	while (i < len) {
		array.push(temp.splice(Math.round(Math.random() * (temp.length-1)), 1)[0]);
		i++;
	}
	return array;
};
