var arrayLastItem=function (array,indexFrom) {
	var result;
	if(!indexFrom){
		indexFrom=1;
	}
	if (array) {
		result = spliceArray(array,getLength(array) - indexFrom, indexFrom);
	}else{
		result = array[getLength(array) - 1];
	}
	return result;
};
