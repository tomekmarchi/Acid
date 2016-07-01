//Merges together the values of each of the arrays with the values at the corresponding position.
$.zip = function () {
	return mapArray(arguments[0],function(arraySet){
		return mapArray(arguments,(arraySet)=>{
			return shiftArray(arraySet);
		});
	});
};
//unzip the array of zipped arrays [["fred",30,True],["barney",40,False]]
$.unZip = function (array) {
	return mapArray(array[0],(item)=>{
		return mapArray(array,(arraySet)=>{
			return shiftArray(arraySet);
		});
	});
};
