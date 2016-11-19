$.method = (string) =>{
	return (item) =>{
		return get(isArray(string)?joinArray(string,dotString) : string,item);
	};
};
