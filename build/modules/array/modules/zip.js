//Merges together the values of each of the arrays with the values at the corresponding position.
$.zip = function () {
	return _each_array(arguments[0],(arraySet)=>{
		return _each_array(arguments,(arraySet)=>{
			return arraySet.shift();
		});
	});
};
//unzip the array of zipped arrays [["fred",30,true],["barney",40,false]]
$.unZip = function (array) {
	return _each_array(array[0],(item)=>{
		return _each_array(array,(arraySet)=>{
			return arraySet.shift();
		});
	});
};
