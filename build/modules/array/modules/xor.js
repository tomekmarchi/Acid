//Creates an array that is the symmetric difference of the provided arrays. See Wikipedia for more details.
array_extend.xor = function () {
	var xor = [],
		loop = this,
		llen = loop.length;
	for (var i = 0; i < llen; i++) {
		var array = loop[i],
			len = array.length;
		for (var a = 0; a < len; a++) {
			var item = array[a],
				index = xor.indexOf(item);
			if (index === -1) {
				xor.push(item);
			} else {
				xor.splice(index, 1);
			}
		}
	}
	return xor;
};