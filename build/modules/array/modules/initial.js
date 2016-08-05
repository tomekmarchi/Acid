var generateArrayRange = (method) => {
		return (array) =>{
			array = cloneArray(array);
			method(array);
			return array;
		};
	};
