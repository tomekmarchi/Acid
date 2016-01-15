var domListToArray = $.domListToArray = (collection) => {
	var list = _toArray(collection),
		temp = [],
		item,
		name,
		length = list.length;
	for (var i = 0; i < length; i++) {
		item = list[i];
		name = item.constructor.name;
		if (name === "HTMLCollection" || name === "NodeList") {
			pushApply(temp, toArrayDeep(item));
		} else {
			temp.push(item);
		}
	}
	return temp;
};
