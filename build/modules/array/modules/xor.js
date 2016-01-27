//Creates an array that is the symmetric difference of the provided arrays. See Wikipedia for more details.
$.xor = function(arrayOG) {
	var numArgs = getLength(arguments),result;

	if (!numArgs) {
		return uniqueArray(arrayOG);
	}

	result = xorBase(arrayOG, arguments[0]);

	eachArray(arguments,(item) =>{
		result = xorBase(result, item);
	});

	return result;
};
