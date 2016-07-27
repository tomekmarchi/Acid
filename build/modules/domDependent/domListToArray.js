var domListToArray = $.domListToArray = (collection) => {
	return mapArray(collection,(item) =>{
		return (isHTMLCollection(item) || isNodeList(item))? domListToArray(item) : item;
	});
};
