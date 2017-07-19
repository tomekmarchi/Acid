import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Checks if the keycode of the event is strictly equal to 13.
  *
  * @function isEnter
  * @type {Function}
  * @param {Object} eventObject - Object to be checked.
  * @returns {boolean} Returns true if the keycode property of the object equals thirteen and vice versa.
  *
  * @example
  * isEnter('click')
  * // => false
*/
export const isEnter = (eventObject) => {
  return eventObject.keyCode === 13;
};
assign(acid, {
  isEnter
});
