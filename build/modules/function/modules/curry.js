//short hand for request animation frame
$.curry = function(funts) {
	var count = 0,
		args = [],
		argsLength = funts.length,
		curry = function() {
			args = _each_array(_toArray(arguments), (item) => {
				count++;
			});
			if (argsLength == count) {
				var value = funts.apply(funts, args);
				count = 0;
				args = [];
				return value;
			}
			return curry;
		};
	return curry;
};

/*

	var curried=function(a,b,c){
		return [a,b,c];
	}.curry();

	curried(1)(2)(3);
	// → [1, 2, 3]

	curried(1, 2)(3);
	// → [1, 2, 3]

	curried(1, 2, 3);
	// → [1, 2, 3]

*/

$.curryRight = function(funts) {
	var count = 0,
		args = [],
		argsLength = funts.length,
		curry = function() {
			_each_array(_toArray(arguments), (item) => {
				args.unshift(item);
				count++;
			});
			if (argsLength == count) {
				var value = funts.apply(curry, args);
				count = 0;
				args = [];
				return value;
			}
			return curry;
		};
	return curry;
};

/*

	curried(1)(2)(3);
	// → [1, 2, 3]

	curried(1, 2)(3);
	// → [1, 2, 3]

	curried(1, 2, 3);
	// → [1, 2, 3]

*/
