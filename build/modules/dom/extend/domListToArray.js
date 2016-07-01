var domListToArray = $.domListToArray = (collection) => {
	return mapArray(collection,(item) =>{
		if (isHTMLCollection(item) || isNodeList(item)) {
			item = domListToArray(item);
		}
		return item;
	});
};
