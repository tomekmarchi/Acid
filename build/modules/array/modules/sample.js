//Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
array_extend.sample = function (set_amount) {
	var array = this;
	if (set_amount) {
		var temp = [];
		for (var i = 0; i < set_amount; i++) {
			var random = array.splice(Math.round(Math.random() * array.length), 1)[0];
			if (random) {
				temp.push(random);
			}
		}
		return temp;
	}
	return array[Math.round(Math.random() * array.length)];
};