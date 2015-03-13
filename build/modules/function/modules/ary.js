//Creates a function that accepts up to n arguments ignoring any additional arguments. The 2nd argument will be binded if none the initial new function will be.
function_extend.ary=function(amount,bind){
	var funct = this,
		ary = function(){
			return funct.apply(bind || ary,_toArray(arguments).splice(0,amount));
		};
	return ary;
};