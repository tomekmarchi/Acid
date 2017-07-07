import acid from '../namespace/index';
import { assign } from '../internal/object';
import { isEqual } from './isEqual';
/**
  * Performs a toggle between 2 values using a deep or strict comparison.
  *
  * @function toggle
  * @type {Function}
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
  *
  * @example
  * toggle(1, 2, 3);
  * //=> 2
*/
export const toggle = (value, on, off) => {
  return (isEqual(on, value)) ? off : on;
};
assign(acid, {
  toggle
});
