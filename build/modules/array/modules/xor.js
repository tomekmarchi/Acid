//Creates an array that is the symmetric difference of the provided arrays. See Wikipedia for more details.
$.xor = function(arrayOG) {
	var numArgs = arguments.length,
		i,
		result;

	if (!numArgs) {
		return _uniq(arrayOG);
	}

	result = xorBase(arrayOG, arguments[0]);

	for (i = 1; i < numArgs; i++) {
		result = xorBase(result, arguments[i]);
	}

	return result;
};
