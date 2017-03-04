//Pluck an attribute from each object in an array.
var pluck = $.pluck = function(array, pluckThis) {
	if (isArray(pluckThis)) {
		var pluckMethod = (item, index) => {
			return arraySortToObject((pluckItem, pluckKey, object) => {
				object[pluckItem] = item[pluckItem];
			}, pluckThis);
		};
	} else {
		var pluckMethod = (item, index) => {
			return item[pluckThis];
		};
	}
	return mapArray(array, pluckMethod);
};
