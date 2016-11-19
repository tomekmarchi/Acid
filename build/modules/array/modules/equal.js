/*
 	Determines if the arrays are equal by doing a shallow comparison of their elements using strict equality.
*/
var isEqualArray = $.isEqualArray = (original, array) =>{
	var result = True;
	if (getLength(array) !== getLength(original)) {
		result = False;
	} else {
		eachWhile(array,(item, index) => {
			if (original[index] !== item) {
				result = False;
				return result;
			}
		});
	}
	return result;
};

/*
	Performs a deep comparison between object and source to determine if object contains equivalent property values.
*/

var isEqualArrayDeep = $.isEqualArrayDeep = (original, array) =>{
	var result = True;
	if (getLength(array) !== getLength(original)) {
		result = False;
	} else {
		eachWhile(array,(item, index) => {
			result = isMatch(item,original[index])
			return result;
		});
	}
	return result;
};
