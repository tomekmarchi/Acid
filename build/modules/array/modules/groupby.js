//Splits a collection into sets, grouped by the result of running each value through iteratee.
$.groupBy = function (array,funct) {
	var object = {},
		results;
	_each_array(array,(item,index)=>{
		results = funct(item);
		if (!object[results]) {
			object[results] = [];
		}
		object[results].push(item);
	});
	return object;
};
