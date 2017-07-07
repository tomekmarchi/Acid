import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Strictly checks if a number is zero.
  *
  * @function isZero
  * @type {Function}
  * @param {number} item - Number to be checked.
  * @returns {boolean}
  *
  * @example
  * isZero(0);
  * // => true
  *
  * isZero(1);
  * // => False
*/
export const isZero = (item) => {
  return item === 0;
};
/**
  * Strictly checks if a number equal to another number.
  *
  * @function isNumberEqual
  * @type {Function}
  * @param {number} item - Number to be checked against num.
  * @param {number} num - Number to be checked against item.
  * @returns {boolean}
  *
  * @example
  * isNumberEqual(0, 0);
  * // => true
  *
  * isNumberEqual(0, 1);
  * // => False
*/
export const isNumberEqual = (item, num) => {
  return item === num;
};
/**
  * Checks if a number is within a range.
  *
  * @function isNumberInRange
  * @type {Function}
  * @param {number} num - Number to be checked.
  * @param {number} [start = 0] - Beginning of range.
  * @param {number} [end] - End of range.
  * @returns {boolean}
  *
  * @example
  * isNumberInRange(1, 0, 2);
  * // => True
  *
  * isNumberEqual(1, -1, 0);
  * // => False
*/
export const isNumberInRange = (num, start = 0, end = start) => {
  return num > start && num < end;
};
assign(acid, {
  isNumberInRange,
  isNumberEqual,
  isZero
});
