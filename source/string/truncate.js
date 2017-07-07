import acid from '../namespace/index';
import { assign } from '../internal/object';
const truncateDown = (string, maxLength, stringLength) => {
  const breakAll = string.split('');
  const breakAllLength = breakAll.length;
  let item;
  let index = stringLength - maxLength;
  for (; index < breakAllLength && index >= 0; index--) {
    item = breakAll[index];
    if (item === ' ') {
      break;
    }
  }
  return string.slice(0, index).trim();
};
const truncateUp = (string, maxLength, stringLength) => {
  const breakAll = string.split('');
  const breakAllLength = breakAll.length;
  let item;
  let index = maxLength;
  for (; index < breakAllLength && index > 0; index++) {
    item = breakAll[index];
    if (item === ' ') {
      break;
    }
  }
  return string.substr(index, stringLength).trim();
};
/**
  * Truncates the string, accounting for word placement and character count.
  *
  * @function truncate
  * @type {Function}
  * @param {string} string - String to be truncated.
  * @param {number} maxLength - The desired max length of the string.
  * @returns {string} - An upper case letter.
  *
  * @example
  * truncate('Where is Lucy?', 2);
  * // => Where
*/
export const truncate = (string, maxLength) => {
  const stringLength = string.length;
  return (stringLength > maxLength) ? truncateDown(string, maxLength, stringLength) : string;
};
/**
  * Truncates the string, accounting for word placement and character count from the right.
  *
  * @function truncateRight
  * @type {Function}
  * @param {string} string - String to be truncated.
  * @param {number} maxLength - The desired max length of the string.
  * @returns {string} - An upper case letter.
  *
  * @example
  * truncateRight('Where is Lucy?', 6);
  * // => Lucy?
*/
export const truncateRight = (string, maxLength) => {
  const stringLength = string.length;
  return (stringLength > maxLength) ? truncateUp(string, maxLength, stringLength) : string;
};
assign(acid, {
  truncate,
  truncateRight,
});
