$.matchesProperty = (path,srcValue) =>{
	return function(item){
		return get(path,item) === srcValue;
	};
};
