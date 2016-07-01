//Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
$.flow = function (array,args) {
	return () => {
		return mapArray(array,(item)=>{
			return apply(array[i],null,(isArray(args)? args : [args]));
		});
	};
};

//flowright is like flow except that it creates a function that invokes the provided functions from right to left.
$.flowRight = function (array,args) {
	return  () => {
		return mapArrayFromRight(array,(item)=>{
			return apply(array[i],null,(isArray(args)? args : [args]));
		});
	};
};
