//shared functions
//Flattens a nested array. Pass level to flatten up to a depth;
var flatten = $.flatten = (array, level) => {
		for (var i = 0; i < (level || 1); i++) {
			array = array.reduce((previousValue, currentValue, index, array) => {
				return concatArray(previousValue, (level) ?
					ensureArray(currentValue) : (isArray(currentValue)) ? flatten(currentValue) : currentValue);
			}, []);
		}
		return array;
	},
	//cache for function that removes Falsey values from array or object
	compact = $.compact = (array) => {
		return filter(array, (item) => {
			return item;
		});
	},
	arraySortToObject = (func, array, object) => {
		var object = object || {};
		eachArray(array, (item, key) => {
			func(item, key, object);
		});
		return object;
	};
