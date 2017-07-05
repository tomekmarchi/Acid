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
  * Returns the first letter capitalized.
  *
  * @function upperFirstLetter
  * @type {Function}
  * @param {string} string - String to extract first letter from.
  * @returns {string} An upper case letter.
  *
  * @example
  * upperFirstLetter('upper');
  * // => U
*/
const truncate = (string, maxLength) => {
  const stringLength = string.length;
  return (stringLength > maxLength) ? truncateDown(string, maxLength, stringLength) : string;
};
/**
  * Returns the first letter capitalized.
  *
  * @function upperFirstLetter
  * @type {Function}
  * @param {string} string - String to extract first letter from.
  * @returns {string} An upper case letter.
  *
  * @example
  * upperFirstLetter('upper');
  * // => U
*/
const truncateRight = (string, maxLength) => {
  const stringLength = string.length;
  return (stringLength > maxLength) ? truncateUp(string, maxLength, stringLength) : string;
};
assign(acid, {
  truncate,
  truncateRight,
});
