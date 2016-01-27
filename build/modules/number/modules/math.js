//cache math functions
var floorMethod = mathNative.floor,
    randomMethod = mathNative.random,
    mathNativeMax = mathNative.max,
    ceilMethod = mathNative.ceil,
    roundMethod = mathNative.round;

$.math = mathNative;

//add this and value
$.add = function(number, value) {
    return number + value;
};
//minus this and value
$.minus = function(number, value) {
    return number - value;
};
//divide this and value
$.divide = function(number, value) {
    return number / value;
};
//multiply this and value
$.multiply = function(number, value) {
    return number * value;
};
//The modulo function is the integer remainder of dividing this by value
$.remainder = function(number, value) {
    return number % value;
};
//add 1
$.increment = function(number) {
    return number + 1;
};
//minus 1
$.deduct = function(number) {
    return number - 1;
};
//Returns a random number between min (inclusive) and max (exclusive)
$.randomArbitrary = function(number, min) {
    min = min || 0;
    return randomMethod() * (number - min) + min;
};
// Returns a random integer between min (included) and max (excluded)
$.randomInt = function(number, min) {
    min = min || 0;
    return floorMethod(randomMethod() * (number - min)) + min;
};
