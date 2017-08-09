import acid from '../namespace/index';
import { assign } from '../internal/object';
const mathNative = Math;
const floorMethod = mathNative.floor;
const randomMethod = mathNative.random;
/**
  * Adds two numbers.
  *
  * @function add
  * @category number
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
  * @category number
  * @type {Function}
  * @param {number} number - First number.
  * @param {number} value - Second number.
  * @returns {number} - Returns the difference of the arguments.
  *
  * @example
  * minus(1, 1);
  * // => 0
*/
export const minus = (number, value) => {
  return number - value;
};
/**
  * Divides two numbers.
  *
  * @function divide
  * @category number
  * @type {Function}
  * @param {number} number - First number.
  * @param {number} value - Second number.
  * @returns {number} - Returns the quotient of the arguments.
  *
  * @example
  * divide(10, 5);
  * // => 2
*/
export const divide = (number, value) => {
  return number / value;
};
/**
  * Multiplies two numbers.
  *
  * @function multiply
  * @category number
  * @type {Function}
  * @param {number} number - First number.
  * @param {number} value - Second number.
  * @returns {number} - Returns the product of the arguments.
  *
  * @example
  * multiply(10, 5);
  * // => 50
*/
export const multiply = (number, value) => {
  return number * value;
};
/**
  *  Extracts the remainder between two numbers.
  *
  * @function remainder
  * @category number
  * @type {Function}
  * @param {number} number - First number.
  * @param {number} value - Second number.
  * @returns {number} - Returns the remainder of the arguments.
  *
  * @example
  * remainder(10, 6);
  * // => 4
*/
export const remainder = (number, value) => {
  return number % value;
};
/**
  *  Increments a number.
  *
  * @function increment
  * @category number
  * @type {Function}
  * @param {number} number - First number.
  * @returns {number} - Returns an incremented version of the number.
  *
  * @example
  * increment(10);
  * // => 11
*/
export const increment = (number) => {
  return number + 1;
};
/**
  *  Decrements a number.
  *
  * @function deduct
  * @category number
  * @type {Function}
  * @param {number} number - First number.
  * @returns {number} - Returns a decremented version of the number.
  *
  * @example
  * deduct(10);
  * // => 9
*/
export const deduct = (number) => {
  return number - 1;
};
/**
  *  Produces a random number between min (included) and max (excluded).
  *
  * @function randomArbitrary
  * @category number
  * @type {Function}
  * @param {number} max - Establishes highest possible value for the random number.
  * @param {number} [min = 0] - Establishes lowest possible value for the random number.
  * @returns {number} - Returns random integer between the max and min range.
  *
  * @test
  * (async () => {
  *   return assert(isNumber(randomArbitrary(10)), true);
  * });
  *
  * @example
  * randomArbitrary(10);
  * // => 9.1
*/
export const randomArbitrary = (max, min = 0) => {
  return randomMethod() * (max - min) + min;
};
/**
  *  Produces a random integer between min (included) and max (excluded).
  *
  * @function randomInt
  * @category number
  * @type {Function}
  * @param {number} max - Establishes highest possible value for the random number.
  * @param {number} [min = 0] - Establishes lowest possible value for the random number.
  * @returns {number} - Returns random integer between the max and min range.
  *
  * @test
  * (async () => {
  *   return assert(isNumber(randomInt(10)), true);
  * });
  *
  * @example
  * randomInt(10);
  * // => 9
*/
export const randomInt = (max, min = 0) => {
  return floorMethod(randomMethod() * (max - min)) + min;
};
assign(acid, {
  add,
  deduct,
  divide,
  increment,
  minus,
  multiply,
  randomArbitrary,
  randomInt,
  remainder,
});
