//Sorts a list into groups and returns a count for the number of objects in each group.
$.countBy = function (array,funct) {
	var object = {},
		item,
		len = array.length;
	for (var i = 0; i < len; i++) {
			item = array[i],
			results = funct(item);
		if (!object[results]) {
			object[results] = 0;
		}
		object[results] = object[results] + 1;
	}
	return object;
};

/*

[4.3, 6.1, 6.4].countBy(function(n) {
  return n.floor();
});

//{ '4': 1, '6': 2 }


*/