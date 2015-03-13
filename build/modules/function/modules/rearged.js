//Creates a function that invokes func with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.
function_extend.reArg=function(){
	var funct = this,
		list=_toArray(arguments),
		list_len=list.length;

	var rearged=function(){
		var args=[],
			order=_toArray(arguments),
			len=order.length;

		for(var i=0; i< list_len; i++){
			args.push(order[list[i]]);
		}

		return funct.apply(rearged,args);
	};

	return rearged;
};

/*

var rearg=(function(a, b, c) {
  return [a, b, c];
}).rearg(1,2,0);

rearg(1,2,3);
-> [2, 3, 1]


*/