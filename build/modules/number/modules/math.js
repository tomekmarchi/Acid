const floorMethod = mathNative.floor;
const randomMethod = mathNative.random;
const mathNativeMax = mathNative.max;
const ceilMethod = mathNative.ceil;
const roundMethod = mathNative.round;
$.math = mathNative;
$.add =  (number, value) => {
  return number + value;
};
$.minus =  (number, value) => {
  return number - value;
};
$.divide =  (number, value) => {
  return number / value;
};
$.multiply =  (number, value) => {
  return number * value;
};
$.remainder =  (number, value) => {
  return number % value;
};
$.increment = (number) => {
  return number + 1;
};
$.deduct = (number) => {
  return number - 1;
};
// Returns a random number between min (inclusive) and max (exclusive)
$.randomArbitrary = (max, min = 0) => {
  return randomMethod() * (max - min) + min;
};
// Returns a random integer between min (included) and max (excluded)
const randomInt = (max, min = 0) => {
  return floorMethod(randomMethod() * (max - min)) + min;
};
$.randomInt = randomInt;
