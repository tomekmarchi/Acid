import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Strictly checks if a number is zero.
  *
  * @function isZero
  * @category number
  * @type {Function}
  * @param {number} item - Number to be checked.
  * @returns {boolean} True or False.
  *
  * @example
  * isZero(0);
  * // => true
  * @example
  * isZero(1);
  * // => false
*/
export const isZero = (item) => {
  return item === 0;
};
/**
  * Strictly checks if a number equal to another number.
  *
  * @function isNumberEqual
  * @category number
  * @type {Function}
  * @param {number} item - Number to be checked against num.
  * @param {number} num - Number to be checked against item.
  * @returns {boolean} True or False.
  *
  * @example
  * isNumberEqual(0, 0);
  * // => true
  * @example
  * isNumberEqual(0, 1);
  * // => false
*/
export const isNumberEqual = (item, num) => {
  return item === num;
};
/**
  * Checks if a number is within a range.
  *
  * @function isNumberInRange
  * @category number
  * @type {Function}
  * @param {number} num - Number to be checked.
  * @param {number} start - Beginning of range.
  * @param {number} end - End of range.
  * @returns {boolean} True or False.
  *
  * @example
  * isNumberInRange(1, 0, 2);
  * // => true
  * @example
  * isNumberInRange(1, -1, 0);
  * // => false
*/
export const isNumberInRange = (num, start, end) => {
  return num > start && num < end;
};
assign(acid, {
  isNumberEqual,
  isNumberInRange,
  isZero
});
