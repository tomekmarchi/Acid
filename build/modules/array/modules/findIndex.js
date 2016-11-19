var find = $.find = (array, func) => {
		var result;
		eachWhileFalse(array, (item, key) => {
			return result = func(item, key);
		});
		return result;
	},
	findItem = $.findItem = (array, index, name = 'id', returnKey) => {
		return find(array, (item, key) => {
			if (item[name] == index) {
				return (returnKey) ? key : item;
			}
		});
	},
	findIndex = $.findIndex = (array, index, name = 'id') => {
		return findItem(array, index, name, True);
	};
