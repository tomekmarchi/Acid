var generateArrayRange = (method) => {
		return (array) =>{
			array = cloneArray(array);
			method(array);
			return array;
		};
	},
	//Returns everything but the last entry of the array.
	arrayInitial = $.initial = generateArrayRange(popArray),
	//Returns everything but the first entry of the array.
	arrayRest = $.rest = generateArrayRange(shiftArray);
