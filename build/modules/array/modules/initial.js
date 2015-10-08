//Returns everything but the last entry of the array.
$.initial = function (array,startFrom) {
	var temp=[],
		length=array.length-1;
	for(var i=0; i < length; i++){
		temp[i]=array[i];
	}
	return temp;
};
