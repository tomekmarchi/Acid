$.nthArg = (num) => {
	return function() {
		var args = arguments;
		if(num<0){
			num = args.length - (num * -1);
		}
		return args[num];
	}
};
