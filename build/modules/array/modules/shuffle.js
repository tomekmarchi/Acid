//shuffle an array and return a new array
$.shuffle = function (array) {
	var temp=toArray(array);
	return whileLength(temp,() =>{
		return spliceArray(temp,randomMethod(randomMethod() * (getLength(temp)-1)), 1)[0];
	});
};
