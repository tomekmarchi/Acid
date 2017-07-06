import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Performs strict comparison between the value and an argument. If it *returns true, then it returns the b argument. Else it returns the a *argument.
  *
  * @function toggle
  * @type {Function}
  * @param  {(string|number)} value - Strictly compared against the on argument
  * @param {(string|number)} on -  Strictly compared against the value argument
  * @param {(string|number)} off -  Value to be returned
  *
  * @example
  * toggle(1, 2, 3);
  * //=> 2
  * @returns {(string|number)} - The on or off argument
  *
*/
export const toggle = (value, on, off) => {
  return (value === on) ? off : on;
};
assign(acid, {
  toggle
});
