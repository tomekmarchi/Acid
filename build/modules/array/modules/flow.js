//Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
$.flow = function (array,args) {
	var len = array.length;
	return function () {
		for (var i = 0; i < len; i++) {
			args = array[i].apply(null,(_isArray(args)? args : [args]));
		}
		return args;
	};
};

//flowright is like flow except that it creates a function that invokes the provided functions from right to left.
$.flowRight = function (array,args) {
	var len = array.length;
	return function () {
		for (var i = len-1; i >= 0; i--) {
			args = array[i].apply(null,(_isArray(args)? args : [args]));
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
