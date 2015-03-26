//Math.js math utilities
(function () {
	//cache math functions
	var abs=_math.abs,
		acos=_math.acos,
		acosh=_math.acosh,
		asin=_math.asin,
		asinh=_math.asinh,
		atan=_math.atan,
		atanh=_math.atanh,
		atan2=_math.atan2,
		cbrt=_math.cbrt,
		ceil=_math.ceil,
		clz32=_math.clz32,
		cos=_math.cos,
		cosh=_math.cosh,
		exp=_math.exp,
		expm1=_math.expm1,
		floor=_math.floor,
		fround=_math.fround,
		hypot=_math.hypot,
		imul=_math.imul,
		log=_math.log,
		log1p=_math.log1p,
		log10=_math.log10,
		log2=_math.log2,
		max=_math.max,
		min=_math.min,
		pow=_math.pow,
		random=_math.random,
		round=_math.round,
		sign=_math.sign,
		sin=_math.sin,
		sinh=_math.sinh,
		sqrt=_math.sqrt,
		tan=_math.tan,
		tanh=_math.tanh,
		trunc=_math.trunc;


	//add this and value
	number_extend.add = function (value) {
		return this + value;
	};
	//minus this and value
	number_extend.minus = function (value) {
		return this - value;
	};
	//divide this and value
	number_extend.divide = function (value) {
		return this / value;
	};
	//multiple this and value
	number_extend.multiple = function (value) {
		return this * value;
	};
	//The modulo function is the integer remainder of dividing this by value
	number_extend.remainder = function (value) {
		return this % value;
	};
	//add 1
	number_extend.increment = function () {
		return this + 1;
	};
	//minus 1
	number_extend.decrement = function () {
		return this - 1;
	};
	//Returns the absolute value of a number_extend.
	number_extend.abs = function () {
		return abs(this);
	};
	//Returns the arccosine of a number_extend.
	number_extend.acos = function () {
		return acos(this);
	};
	//Returns the hyperbolic arccosine of a number_extend.
	number_extend.acosh = function () {
		return acosh(this);
	};
	//Returns the arcsine of a number_extend.
	number_extend.asin = function () {
		return asin(this);
	};
	//Returns the hyperbolic arcsine of a number_extend.
	number_extend.asinh = function () {
		return asinh(this);
	};
	//Returns the arctangent of a number_extend.
	number_extend.atan = function () {
		return atan(this);
	};
	//Returns the hyperbolic arctangent of a number_extend.
	number_extend.atanh = function () {
		return atanh(this);
	};
	//Returns the arctangent of the quotient of its arguments.
	number_extend.atan2 = function (y) {
		return atan2(this, y);
	};
	//Returns the cube root of a number_extend.
	number_extend.cbrt = function () {
		return cbrt(this);
	};
	//Returns the smallest integer greater than or equal to a number_extend.
	number_extend.ceil = function () {
		return ceil(this);
	};
	//Returns the number of leading zeroes of a 32-bit integer.
	number_extend.clz32 = function () {
		return clz32(this);
	};
	//Returns the cosine of a number_extend.
	number_extend.cos = function () {
		return cos(this);
	};
	//Returns the hyperbolic cosine of a number_extend.
	number_extend.cosh = function () {
		return cosh(this);
	};
	//Returns Ex, where x is the argument, and E is Euler's constant (2.718…), the base of the natural logarithm.
	number_extend.exp = function () {
		return exp(this);
	};
	//Returns subtracting 1 from exp(x).
	number_extend.expm1 = function () {
		return expm1(this);
	};
	//Returns the largest integer less than or equal to a number_extend.
	number_extend.floor = function () {
		return floor(this);
	};
	//Returns the nearest single precision float representation of a number_extend.
	number_extend.fround = function () {
		return fround(this);
	};
	//Returns the square root of the sum of squares of its arguments.
	number_extend.hypot = function (x, y) {
		return hypot(this, x, y);
	};
	//Returns the result of a 32-bit integer multiplication.
	number_extend.imul = function () {
		return imul(this);
	};
	//Returns the natural logarithm (loge, also ln) of a number_extend.
	number_extend.log = function () {
		return log(this);
	};
	//Returns the natural logarithm of 1 + x (loge, also ln) of a number_extend.
	number_extend.log1p = function () {
		return log1p(this);
	};
	//Returns the base 10 logarithm of a number_extend.
	number_extend.log10 = function () {
		return log10(this);
	};
	//Returns the base 2 logarithm of a number_extend.
	number_extend.log2 = function () {
		return log2(this);
	};
	//Returns the largest of zero or more numbers.
	number_extend.max = function () {
		return max(this, y);
	};
	//Returns the smallest of zero or more numbers.
	number_extend.min = function () {
		return min(this, y);
	};
	//Returns base to the exponent power, that is, baseexponent.
	number_extend.pow = function () {
		return pow(this, y);
	};
	//Returns a random number between min (inclusive) and max (exclusive)
	number_extend.randomArbitrary = function (min) {
		if(!min){
			var min=0;
		}
		return random() * (this - min) + min;
	};
	// Returns a random integer between min (included) and max (excluded)
	// Using Math.round() will give you a non-uniform distribution!
	number_extend.randomInt = function (min) {
		if(!min){
			var min=0;
		}
		return floor(random() * (this - min)) + min;
	};
	//random wrapper
	number_extend.random = function (min) {
		return random();
	};
	//Returns the value of a number rounded to the nearest integer.
	number_extend.round = function () {
		return round(this);
	};
	//Returns the sign of the x, indicating whether x is positive, negative or zero.
	number_extend.sign = function () {
		return sign(this);
	};
	//Returns the sine of a number_extend.
	number_extend.sin = function () {
		return sin(this);
	};
	//Returns the hyperbolic sine of a number_extend.
	number_extend.sinh = function () {
		return sinh(this);
	};
	//Returns the positive square root of a number_extend.
	number_extend.sqrt = function () {
		return sqrt(this);
	};
	//Returns the tangent of a number_extend.
	number_extend.tan = function () {
		return tan(this);
	};
	//Returns the hyperbolic tangent of a number_extend.
	number_extend.tanh = function () {
		return tanh(this);
	};
	//Returns the integral part of the number x, removing any fractional digits.
	number_extend.trunc = function () {
		return trunc(this);
	};
})();