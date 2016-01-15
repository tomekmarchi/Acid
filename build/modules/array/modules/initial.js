//Returns everything but the last entry of the array.
$.initial = function (array,startFrom) {
	return _each_array(array,(item,index,length) =>{
		if(!(index+1) !== length){
			return item;
		}
	});
};
