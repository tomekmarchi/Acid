//extracting a list of property values to an array
$.pluck = function (array,pluck_item) {
	return eachArray(array,(item,index) =>{
		return item[pluck_item];
	});
};
