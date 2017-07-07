import acid from '../namespace/index';
import { assign } from '../internal/object';
<<<<<<< HEAD
import { isEqual } from './isEqual';
/**
  * Performs a toggle between 2 values using a deep or strict comparison.
=======
import { hasValue } from '../internal/is';
let count = 0;
const uuidFree = [];
const uuidClosed = {};
/**
  * Creates a numerical unique ID and recycles old ones. UID numerically ascends however freed UIDs are later reused.
>>>>>>> origin/master
  *
  * @function uid
  * @type {Function}
<<<<<<< HEAD
<<<<<<< HEAD
  * @param  {(string|number|Object|Array)} value - Strictly compared against the on argument.
  * @param {(string|number|Object|Array)} on -  Strictly compared against the value argument.
  * @param {(string|number|Object|Array)} off -  Value to be returned.
  * @returns {(string|number|Object|Array)} - The opposing value to the current.
=======
  * @param  {(string|number)} value - Strictly compared against the on argument.
  * @param {(string|number)} on -  Strictly compared against the value argument.
  * @param {(string|number)} off -  Value to be returned.
  * @returns {(string|number)} - The on or off argument.
>>>>>>> origin/master
=======
  * @returns {number} - Returns a unique id.
>>>>>>> origin/master
  *
  * @example
  * uid();
  * //=> 0
  *
  * uid();
  * //=> 1
  *
  * uid.free(0);
  * //=> undefined
  *
  * uid();
  * //=> 0
*/
export const uid = () => {
  let result = uuidFree.shift(uuidFree);
  if (!hasValue(result)) {
    result = count;
    uuidClosed[result] = true;
    count++;
  }
  return result;
};
/**
  * Frees an UID so that it may be recycled for later use.
  *
  * @function uid
  * @type {Function}
  * @param {number} uid - Number to freed.
  * @returns {undefined} - Nothing is returned.
  *
  * @example
  * uid();
  * //=> 0
  *
  * uid();
  * //=> 1
  *
  * uid.free(0);
  * //=> undefined
  *
  * uid();
  * //=> 0
*/
<<<<<<< HEAD
export const toggle = (value, on, off) => {
  return (isEqual(on, value)) ? off : on;
=======
uid.free = (id) => {
  uuidClosed[id] = null;
  uuidFree.push(id);
>>>>>>> origin/master
};
assign(acid, {
  uid,
});
