import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * This method returns a new empty object.
  *
  * @function stubObject
  * @category function
  * @type {Function}
  * @returns {Object} Returns the new empty object.
  *
  * @example
  * stubObject();
  * // => {}
*/
export const stubObject = () => {
  return {};
};
/**
  * This method returns a new empty array.
  *
  * @function stubArray
  * @category function
  * @type {Function}
  * @returns {Array} Returns the new empty array.
  *
  * @example
  * stubArray();
  * // => []
*/
export const stubArray = () => {
  return [];
};
/**
  * This method returns a new empty string.
  *
  * @function stubString
  * @category function
  * @type {Function}
  * @returns {string} Returns the new empty string.
  *
  * @example
  * stubString();
  * // => ''
*/
export const stubString = () => {
  return '';
};
/**
  * This method returns false.
  *
  * @function stubFalse
  * @category function
  * @type {Function}
  * @returns {boolean} Returns false.
  *
  * @example
  * stubFalse();
  * // => false
*/
export const stubFalse = () => {
  return false;
};
/**
  * This method returns true.
  *
  * @function stubTrue
  * @category function
  * @type {Function}
  * @returns {boolean} Returns true.
  *
  * @example
  * stubTrue();
  * // => true
*/
export const stubTrue = () => {
  return true;
};
/**
  * This method returns undefined.
  *
  * @function noop
  * @category function
  * @type {Function}
  * @returns {undefined} Returns undefined.
  *
  * @example
  * noop();
  * // => undefined
*/
export const noop = () => {
  return undefined;
};
assign(acid, {
  noop,
  stubArray,
  stubFalse,
  stubObject,
  stubString,
  stubTrue,
});
