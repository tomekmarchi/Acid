//Pluck an attribute from each object in an array.
var pluck = $.pluck = function (array,pluckThis) {
	return mapArray(array,(item,index) =>{
		return isArray(pluckThis)? arraySortToObject((pluckItem,pluckKey,object) =>{
			object[pluckItem]=item[pluckItem];
		}, pluckThis) : item[pluckThis];
	});
};
