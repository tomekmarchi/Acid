//Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
$.sample = function (array,setAmount) {
	if (setAmount) {
		var temp=toArray(array);
		return whilemap(temp,(item,index,length)=>{
			return spliceArray(temp,roundMethod(randomMethod() * (length-1)), 1)[0];
		});
	}
	return array[roundMethod(randomMethod() * (getLength(array)))];
};
