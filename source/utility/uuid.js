import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
let count = 0;
const uuidFree = [];
const uuidClosed = {};
/**
  * Creates a numerical unique ID and recycles old ones. UID numerically ascends however freed UIDs are later reused.
  *
  * @function uid
  * @type {Function}
  * @returns {number} - Returns a unique id.
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
<<<<<<< HEAD
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
uid.free = (id) => {
=======
uuid.remove = (id) => {
>>>>>>> origin/master
  uuidClosed[id] = null;
  uuidFree.push(id);
};
assign(acid, {
  uid,
});
