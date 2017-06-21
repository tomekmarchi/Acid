import acid from '../namespace/index';
import { assign } from '../internal/object';
const mathNative = Math;
const floorMethod = mathNative.floor;
const randomMethod = mathNative.random;
export const add = (number, value) => {
  return number + value;
};
export const minus = (number, value) => {
  return number - value;
};
export const divide = (number, value) => {
  return number / value;
};
export const multiply = (number, value) => {
  return number * value;
};
export const remainder = (number, value) => {
  return number % value;
};
export const increment = (number) => {
  return number + 1;
};
export const deduct = (number) => {
  return number - 1;
};
// Returns a random number between min (inclusive) and max (exclusive)
export const randomArbitrary = (max, min = 0) => {
  return randomMethod() * (max - min) + min;
};
// Returns a random integer between min (included) and max (excluded)
export const randomInt = (max, min = 0) => {
  return floorMethod(randomMethod() * (max - min)) + min;
};
assign(acid, {
  add,
  minus,
  divide,
  multiply,
  remainder,
  increment,
  deduct,
  randomArbitrary,
  randomInt
});
