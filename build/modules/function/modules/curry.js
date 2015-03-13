//short hand for request animation frame
function_extend.curry = function () {
	var funts = this,
		count = 0,
		args = [],
		len = funts.length,
		curry = function () {
			var sub_args = _toArray(arguments),
				sub_len = arguments.length;
			for (var i = 0; i < sub_len; i++) {
				args.push(sub_args[i]);
				count++;
			}
			if (len == count) {
				var value=funts.apply(curry, args);
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

//short hand for request animation frame
function_extend.curryRight = function () {
	var funts = this,
		count = 0,
		args = [],
		len = funts.length,
		curry = function () {
			var sub_args = _toArray(arguments),
				sub_len = arguments.length;
			for (var i = 0; i < sub_len; i++) {
				args.unshift(sub_args[i]);
				count++;
			}
			if (len == count) {
				var value=funts.apply(curry, args);
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
	}.curryright();

	curried(1)(2)(3);
	// → [1, 2, 3]

	curried(1, 2)(3);
	// → [1, 2, 3]

	curried(1, 2, 3);
	// → [1, 2, 3]

*/