var generateCheckLoops = (first, second) => {
		return (object, funct, optional, rawProp) => {
			var returned;
			if (!hasValue(object)) {
				return;
			} else if (isArray(object)) {
				returned = first;
			} else if (isPlainObject(object) || isFunction(object)) {
				returned = second;
			} else if (isNodeList(object) || isHTMLCollection(object)) {
				object = toArray(object);
				returned = first;
			} else {
				if (rawProp) {
					returned = mapProperty;
				} else if (object.forEach) {
					returned = forEach;
				} else {
					returned = second;
				}
			}
			return returned(object, funct, optional);
		};
	},
	map = $.map = generateCheckLoops(mapArray, mapObject),
	each = $.each = generateCheckLoops(eachArray, eachObject),
	filter = $.filter = generateCheckLoops(filterArray, filterObject);
