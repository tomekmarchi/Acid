var generateArrayRange = (method) => {
		return (array) => {
			array = cloneArray(array);
			method(array);
			return array;
		};
	},
	arrayInitial = $.initial = generateArrayRange(popArray),
	arrayRest = $.rest = generateArrayRange(shiftArray);
