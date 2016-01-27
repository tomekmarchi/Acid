//Merges together the values of each of the arrays with the values at the corresponding position.
$.zip = function () {
	return eachArray(arguments[0],function(arraySet){
		return eachArray(arguments,(arraySet)=>{
			return shiftArray(arraySet);
		});
	});
};
//unzip the array of zipped arrays [["fred",30,true],["barney",40,false]]
$.unZip = function (array) {
	return eachArray(array[0],(item)=>{
		return eachArray(array,(arraySet)=>{
			return shiftArray(arraySet);
		});
	});
};
