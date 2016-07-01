//Creates a function that accepts up to n arguments ignoring any additional arguments. The 2nd argument will be binded if none the initial new function will be.
$.ary = function(funct, amount, bind) {
	return function() {
		return apply(funct,bind || funct, toArray(arguments).splice(0, amount));
	};
};
