//Creates a function that is restricted to execute func once. Repeat calls to the function will return the value of the first call. The func is executed with the this binding of the created function.
function_extend.once= function () {
	var fn = this,
		value = 0,
		amount = false;
	return function () {
		if (!amount) {
			amount = true;
			value = fn.apply(this, _toArray(arguments));
			fn = null; //null func to free up mem
		}
		return value;
	};
};

//Creates a function that executes func, with the this binding and arguments of the created function, only after being called n times.
function_extend.after = function (amount) {
	var fn = this,
		called_amount = 0,
		value = 0;
	return function () {
		if (amount < called_amount) {
			amount = 1;
			value = fn.apply(this, _toArray(arguments));
			fn = null; //null func to free up mem
		}
		return value;
	};
};

//Creates a function that executes func, with the this binding and arguments of the created function, only before being called n times.
function_extend.before = function (amount) {
	var fn = this,
		called_amount = 0,
		value = 0;
	return function () {
		if (amount > called_amount) {
			amount = 1;
			value = fn.apply(this, _toArray(arguments));
			fn = null; //null func to free up mem
		}
		return value;
	};
};