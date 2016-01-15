//sum of values in an array
$.sumOf = function (array) {
	var sumof = 0;
	_each_array(array,(item)=>{
		sumof = sumof + item;
	});
	return sumof;
};
