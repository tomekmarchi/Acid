import acid from '../namespace/index';
import { eachArray } from '../array/each';
import { assign, keys } from '../internal/object';
/**
  * Checks to see of the browser agent has a string.
  *
  * @function isAgent
  * @type {Function}
  * @param {string} value - The string to search for.
  * @returns {boolean} Returns true or false.
  *
  * @example
  * isAgent('mobile');
  * // => false
*/
export const isAgent = (value) => {
  return (value) ? isAgent[value] : keys(isAgent);
};
let userAgentNormalized = navigator.userAgent.toLowerCase();
userAgentNormalized = userAgentNormalized.replace(/_/g, '.');
userAgentNormalized = userAgentNormalized.replace(/[#_,;()]/g, '');
const userAgentSplit = userAgentNormalized.split(/ |\//);
eachArray(userAgentSplit, (item) => {
  isAgent[item] = true;
});
assign(acid, {
  isAgent
});
