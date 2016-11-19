/*
	Creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.
	Arguments

	[predicates=[_.identity]] (...(Function|Function[])): The predicates to check.
	Returns

	(Function): Returns the new function.
*/
$.overEvery = function(array) {
	return function() {
		var result,
			args = arguments;
		eachWhile(array, (item)=>{
			return apply(item,args);
		});
		return !!result;
	}
};
/*
	Creates a function that invokes iteratees with the arguments it receives and returns their results.
*/
$.over = function(array) {
	return function() {
		var args = arguments;
		return mapArray(array, (item)=>{
			return apply(item,args);
		});
	}
};
