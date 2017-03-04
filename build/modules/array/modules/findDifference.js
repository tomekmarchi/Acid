$.findDifference = function(array, sum) {
	var len = getLength(array),
		returnedObject = {},
		item,
		end,
		check;

	for (var i = 0; i < len; i++) {
		item = array[i];
		end = sum - item;
		check = array.indexOf(end);

		if (check != -1 && check != i) {
			returned.start = item;
			returned.end = end;
			returned.startIndex = i;
			returned.endIndex = check;
			break;
		}
	}

	return returnedObject;
};
