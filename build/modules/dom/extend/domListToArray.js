var domListToArray = $.domListToArray = (collection) => {
	return eachArray(collection,(item) =>{
		if (isHTMLCollection(item) || isNodeList(item)) {
			item = domListToArray(item);
		}
		return item;
	});
};
