import acid from '../namespace/index';
import { eachArray } from '../array/each';
import { isSameObjectGenerator, objectStringGenerate } from '../internal/isGenerate';
/**
 * Checks if value is a plain DOM Node.
 *
 * @function isDom
 * @category browser
 * @ignoreTest
 * @param {*} value - Object to be checked.
 * @returns {boolean} True or false.
 *
 * @example
 * isDom(document.querySelectorAll('.test'));
 * // => true
*/
export const isDom = (value) => {
  return value && value.nodeType !== 9;
};
acid.isDom = isDom;
eachArray(['HTMLCollection', 'NodeList'], (item) => {
  acid[`is${item}`] = isSameObjectGenerator(objectStringGenerate(item));
});
/**
 * Checks if the value is a HTMLCollection.
 *
 * @function isHTMLCollection
 * @category browser
 * @ignoreTest
 * @param {*} value - Object to be checked.
 * @returns {boolean} True or false.
 *
 * @example
 * isHTMLCollection(document.getElementsByClassName('test'));
 * // => true
*/
/**
 * Checks if the value is a NodeList.
 *
 * @function isNodeList
 * @category browser
 * @ignoreTest
 * @param {*} value - Object to be checked.
 * @returns {boolean} True or false.
 *
 * @example
 * isNodeList(document.querySelectorAll('.test'));
 * // => true
*/
