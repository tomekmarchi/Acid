import acid from '../namespace/index';
import { assign } from '../internal/object';
const mathNative = Math;
const floorMethod = mathNative.floor;
const randomMethod = mathNative.random;
/**
  * Adds two numbers
  *
  * @function add
  * @type {Function}
  * @param {number} number - First number.
  * @param {number} value - Second number.
  * @returns {number} - Returns the sum of the arguments.
  *
  * @example
  * add(1, 1);
  * // => 2
*/
export const add = (number, value) => {
  return number + value;
};
/**
  * Subtracts two numbers.
  *
  * @function minus
  * @type {Function}
  * @param {number} number - First number.
  * @param {number} value - Second number.
  * @returns {number} - Returns the difference of the arguments.
  *
  * @example
  * add(1, 1);
  * // => 0
*/
export const minus = (number, value) => {
  return number - value;
};
/**
  * Divides two numbers.
  *
  * @function divides
  * @type {Function}
  * @param {number} number - First number.
  * @param {number} value - Second number.
  * @returns {number} - Returns the quotient of the arguments.
  *
  * @example
  * add(10, 5);
  * // => 2
*/
export const divide = (number, value) => {
  return number / value;
};
/**
  * Multiplies two numbers.
  *
  * @function multiply
  * @type {Function}
  * @param {number} number - First number.
  * @param {number} value - Second number.
  * @returns {number} - Returns the product of the arguments.
  *
  * @example
  * add(10, 5);
  * // => 50
*/
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
