/*
	Return a copy of the object, filtered to omit the blacklisted keys (or array of keys). Alternatively accepts a predicate indicating which keys to omit.
*/
var omit = $.omit = (originalObject, array) => {
	return filterObject(originalObject,(item,key)=>{
		if(!has(array,key)){
			return item;
		}
	});
};
