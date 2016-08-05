function returnFlow(method){
	return function () {
		var funcs=flatten(toArray(arguments));
		console.log(funcs);
		return function wrapped() {
			var args=toArray(arguments),value=[];
			method(funcs,(item)=>{
				value[0] = apply(item,wrapped, value[0]? value: args);
			});
			return value[0];
		};
	};
}
//Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
$.flow = returnFlow(eachArray),
//Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
$.flowRight = returnFlow(eachArrayRight);
