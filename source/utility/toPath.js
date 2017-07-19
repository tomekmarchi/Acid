import acid from '../namespace/index';
import { assign } from '../internal/object';
const regexToPath = /\.|\[/;
const regexCloseBracket = /]/g;
const emptyString = '';
/**
  * Breaks up string into object chain list.
  *
  * @function toPath
  * @type {Function}
  * @param {string} string - String to be broken up.
  * @returns {Array} - Array used to go through object chain.
  * 
  * @example
  * toPath('post.like[2]');
  * // => ['post', 'like', '2']
*/
export const toPath = (string) => {
  return string.replace(regexCloseBracket, emptyString).split(regexToPath);
};
assign(acid, {
  toPath,
});
