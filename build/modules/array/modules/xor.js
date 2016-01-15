//Creates an array that is the symmetric difference of the provided arrays. See Wikipedia for more details.
$.xor = function(arrayOG) {
	var numArgs = arguments.length,result;

	if (!numArgs) {
		return _uniq(arrayOG);
	}

	result = xorBase(arrayOG, arguments[0]);

	_each_array(arguments,(item) =>{
		esult = xorBase(result, item);
	});

	return result;
};
