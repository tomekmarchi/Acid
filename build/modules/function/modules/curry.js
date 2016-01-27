$.curry = function(funts) {
    var argsLength = getLength(funts),
        args = [],
        curry = function() {
            eachArray(arguments, (item) => {
                pushArray(args, item);
            });
            return curry;
        };
		curry.result = () =>{
			var results = apply(funts, curry, args);
			args = [];
			return results;
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
    var argsLength = getLength(funts),
        args = [],
        curry = function() {
            eachArray(arguments, (item) => {
                unShiftArray(args,item);
            });
            return curry;
        };
		curry.result = () =>{
			var results = apply(funts, curry, args);
			args = [];
			return results;
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
