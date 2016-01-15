var _arrayLastItem=function (array,indexFrom) {
	var result;
	if(!indexFrom){
		indexFrom=1;
	}
	if (array) {
		result = array.splice(array.length - indexFrom, indexFrom);
	}else{
		result = array[array.length - 1];
	}
	return result;
};
