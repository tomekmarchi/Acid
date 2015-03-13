//Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
array_extend.flow = function () {
	var array = this,
		len = array.length;
	return function () {
		var args=_toArray(arguments);
		for (var i = 0; i < len; i++) {
			var args = array[i].apply(null,(_isArray(args)? args : [args]));
		}
		return args;
	};
};

//flowright is like flow except that it creates a function that invokes the provided functions from right to left.
array_extend.flowRight = function () {
	var array = this,
		len = array.length;
	return function () {
		var args=_toArray(arguments);
		for (var i = len-1; i >= 0; i--) {
			var args = array[i].apply(null,(_isArray(args)? args : [args]));
		}
		return args;
	};
};

/*

var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
[greet,exclaim].flow()('moe');

function add(x, y) {
  return x + y;
}

function square(n) {
  return n * n;
}

var addSquare = [square, add].flowright();
addSquare(1, 2);

right will just allow you to reverse the order of the args

*/