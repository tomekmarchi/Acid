import acid from '../namespace/index';
import { eachArray } from '../array/each';
import { isSameObjectGenerator, objectStringGenerate } from '../internal/is';
eachArray(['HTMLCollection', 'NodeList'], (item) => {
  acid[`is${item}`] = isSameObjectGenerator(objectStringGenerate(item));
});
/**
 * Checks if the value is a HTMLCollection.
 *
 * @function isHTMLCollection
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
 * @param {*} value - Object to be checked.
 * @returns {boolean} True or false.
 *
 * @example
 * isNodeList(document.querySelectorAll('.test'));
 * // => true
*/
