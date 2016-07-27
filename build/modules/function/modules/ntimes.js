//Creates a function that is restricted to execute func once. Repeat calls to the function will return the value of the first call. The func is executed with the this binding of the created function.
$.once = (fn) => {
	var value;
	return function named() {
		if (!value) {
			value = apply(fn, named, arguments);
		}
		return value;
	};
};

//Creates a function that executes func, with the this binding and arguments of the created function, only after being called n times.
var afterFn = $.after = (amount, fn) => {
	return function named() {
		if (--amount < 0) {
			return apply(fn, named, arguments);
		}
	};
};

//Creates a function that executes func, with the this binding and arguments of the created function, only before being called n times.
var beforeFn = $.before = (amount, fn) => {
	return function named() {
		if (--amount > 0) {
			return apply(fn, named, arguments);
		}
	};
};

//Creates a function that executes func, with the this binding and arguments of the created function, only after or equal to being called n times.
$.onAfter = (amount, fn) => {
	return afterFn(amount - 1, fn);
};

//Creates a function that executes func, with the this binding and arguments of the created function, only before or equal to being called n times.
$.onBefore = (amount, fn) => {
	return beforeFn(amount + 1, fn);
};
