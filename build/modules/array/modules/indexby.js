//Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know your keys are unique.
$.indexBy = function (array,index) {
	return arraySortToObject = ((item,key,object)=>{
		object[item[index]] = item;
	}, array);
};
