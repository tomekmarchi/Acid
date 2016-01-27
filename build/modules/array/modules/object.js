//Converts arrays into objects. Keys as this and values as first argument
$.object = function (array,value) {
	var object = {};
	eachArray(array,(item,index) =>{
		object[item] = value[index];
	});
	return object;
};
