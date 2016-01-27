//sum of values in an array
$.sumOf = function (array) {
	var sumof = 0;
	eachArray(array,(item)=>{
		sumof = sumof + item;
	});
	return sumof;
};
