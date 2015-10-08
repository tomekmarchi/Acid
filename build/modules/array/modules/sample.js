//Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
$.sample = function (array,set_amount) {
	var len=array.length-1;
	if (set_amount) {
		var temp = [],
			random;
		for (var i = 0; i < set_amount; i++) {
			random = array.splice(Math.round(Math.random() * (array.length-1)), 1)[0];
			if (random) {
				temp.push(random);
			}
		}
		return temp;
	}
	return array[Math.round(Math.random() * (len))];
};