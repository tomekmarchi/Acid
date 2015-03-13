//Creates a function that negates the result of the predicate func. The func predicate is invoked with the this binding and arguments of the created function.
function_extend.negate=function(){
	var func=this;
	return function(){
		var negate=func.apply(func,_toArray(arguments));
		if(negate){
			return false;
		}
		return true;
	};
};