/*
	Perform alphabetical sort on collection on provided key name
*/
$.sortAlpha = (collection,key)=>{
	var currentKey,
		nextKey;
	collection.sort((current,next) => {
		currentKey=current[key];
		nextKey = next[key];
		return (currentKey < nextKey)? -1 : (currentKey > nextKey)? 1 : 0;
	});
	return collection;
};
