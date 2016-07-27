//Splits a collection into sets, grouped by the result of running each value through iteratee.
$.groupBy = function (array,funct) {
	return arraySortToObject = ((item,index,object)=>{
		let results = funct(item);
		if (!object[results]) {
			object[results] = [];
		}
		pushArray(object[results],item);
	}, array);
};
