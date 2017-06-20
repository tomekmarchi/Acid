const floorMethod = mathNative.floor;
const randomMethod = mathNative.random;
const mathNativeMax = mathNative.max;
const ceilMethod = mathNative.ceil;
const roundMethod = mathNative.round;
acid.math = mathNative;
acid.add =  (number, value) => {
  return number + value;
};
acid.minus =  (number, value) => {
  return number - value;
};
acid.divide =  (number, value) => {
  return number / value;
};
acid.multiply =  (number, value) => {
  return number * value;
};
acid.remainder =  (number, value) => {
  return number % value;
};
acid.increment = (number) => {
  return number + 1;
};
acid.deduct = (number) => {
  return number - 1;
};
// Returns a random number between min (inclusive) and max (exclusive)
acid.randomArbitrary = (max, min = 0) => {
  return randomMethod() * (max - min) + min;
};
// Returns a random integer between min (included) and max (excluded)
const randomInt = (max, min = 0) => {
  return floorMethod(randomMethod() * (max - min)) + min;
};
acid.randomInt = randomInt;
