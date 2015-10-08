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
	$.add = function (number,value) {
		return number + value;
	};
	//minus this and value
	$.minus = function (number,value) {
		return number - value;
	};
	//divide this and value
	$.divide = function (number,value) {
		return number / value;
	};
	//multiple this and value
	$.multiple = function (number,value) {
		return number * value;
	};
	//The modulo function is the integer remainder of dividing this by value
	$.remainder = function (number,value) {
		return number % value;
	};
	//add 1
	$.increment = function (number) {
		return number + 1;
	};
	//minus 1
	$.deduct = function (number) {
		return number - 1;
	};
	//Returns the absolute value of a $.
	$.abs = abs;
	//Returns the arccosine of a $.
	$.acos = acos;
	//Returns the hyperbolic arccosine of a $.
	$.acosh = acosh;
	//Returns the arcsine of a $.
	$.asin = asin;
	//Returns the hyperbolic arcsine of a $.
	$.asinh = asinh;
	//Returns the arctangent of a $.
	$.atan = atan;
	//Returns the hyperbolic arctangent of a $.
	$.atanh = atanh;
	//Returns the arctangent of the quotient of its arguments.
	$.atan2 = atan2;
	//Returns the cube root of a $.
	$.cbrt = cbrt;
	//Returns the smallest integer greater than or equal to a $.
	$.ceil = ceil;
	//Returns the number of leading zeroes of a 32-bit integer.
	$.clz32 = clz32;
	//Returns the cosine of a $.
	$.cos = cos;
	//Returns the hyperbolic cosine of a $.
	$.cosh = cosh;
	//Returns Ex, where x is the argument, and E is Euler's constant (2.718…), the base of the natural logarithm.
	$.exp = exp;
	//Returns subtracting 1 from exp(x).
	$.expm1 = expm1;
	//Returns the largest integer less than or equal to a $.
	$.floor = floor;
	//Returns the nearest single precision float representation of a $.
	$.fround = fround;
	//Returns the square root of the sum of squares of its arguments.
	$.hypot = hypot;
	//Returns the result of a 32-bit integer multiplication.
	$.imul = imul;
	//Returns the natural logarithm (loge, also ln) of a $.
	$.log = log;
	//Returns the natural logarithm of 1 + x (loge, also ln) of a $.
	$.log1p = log1p;
	//Returns the base 10 logarithm of a $.
	$.log10 = log10;
	//Returns the base 2 logarithm of a $.
	$.log2 = log2;
	//Returns the largest of zero or more numbers.
	$.max = max;
	//Returns the smallest of zero or more numbers.
	$.min = min;
	//Returns base to the exponent power, that is, baseexponent.
	$.pow = pow;
	//Returns a random number between min (inclusive) and max (exclusive)
	$.randomArbitrary = function (number,min) {
		if(!min){
			var min=0;
		}
		return random() * (number - min) + min;
	};
	// Returns a random integer between min (included) and max (excluded)
	// Using Math.round() will give you a non-uniform distribution!
	$.randomInt = function (number,min) {
		if(!min){
			var min=0;
		}
		return floor(random() * (number - min)) + min;
	};
	//random wrapper
	$.random = random;
	//Returns the value of a number rounded to the nearest integer.
	$.round = round;
	//Returns the sign of the x, indicating whether x is positive, negative or zero.
	$.sign = sign;
	//Returns the sine of a $.
	$.sin = sin;
	//Returns the hyperbolic sine of a $.
	$.sinh = sinh;
	//Returns the positive square root of a $.
	$.sqrt = sqrt;
	//Returns the tangent of a $.
	$.tan = tan;
	//Returns the hyperbolic tangent of a $.
	$.tanh = tanh;
	//Returns the integral part of the number x, removing any fractional digits.
	$.trunc = trunc;
})();
