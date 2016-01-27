//Splits a collection into sets, grouped by the result of running each value through iteratee.
$.groupBy = function (array,funct) {
	var object = {},
		results;
	eachArray(array,(item,index)=>{
		results = funct(item);
		if (!object[results]) {
			object[results] = [];
		}
		pushArray(object[results],item);
	});
	return object;
};
