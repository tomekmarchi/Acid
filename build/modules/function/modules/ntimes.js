//Creates a function that is restricted to execute func once. Repeat calls to the function will return the value of the first call. The func is executed with the this binding of the created function.
$.once = (fn) => {
	var value,
		amount = False;
	return function() {
		if (!amount) {
			amount = True;
			value = apply(fn,this, toArray(arguments));
			fn = null; //null func to free up mem
		}
		return value;
	};
};

//Creates a function that executes func, with the this binding and arguments of the created function, only after being called n times.
$.after = function(fn, amount) {
	var called_amount = 0,
		value = 0;
	return function() {
		if (amount < called_amount) {
			amount = 1;
			value = apply(fn,this, toArray(arguments));
			fn = null; //null func to free up mem
		}
		return value;
	};
};

//Creates a function that executes func, with the this binding and arguments of the created function, only before being called n times.
$.before = (fn, amount) => {
	var called_amount = 0,
		value = 0;
	return function() {
		if (amount > called_amount) {
			amount = 1;
			value = apply(fn,this, toArray(arguments));
			fn = null; //null func to free up mem
		}
		return value;
	};
};
