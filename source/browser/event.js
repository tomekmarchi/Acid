import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Attaches an event listener to a node.
  *
  * @function eventAdd
  * @category browser
  * @ignoreTest
  * @type {Function}
  * @param {Node} node - Given node.
  * @param {string} type - A string representing the event type.
  * @param {Object|Function} listener - The object which receives a notification when an event of the specified type occurs.
  * @param {Object} options - An options object that specifies characteristics about the event listener.
  * @returns {Node} - Returns given node.
  *
  * @example
  * eventAdd(document.body, 'click', () => {console.log('CLICKED');});
  * // = > document.body
*/
export const eventAdd = (node, ...args) => {
  node.addEventListener(...args);
  return node;
};
/**
  * Attaches an event listener to a node.
  *
  * @function eventRemove
  * @category browser
  * @ignoreTest
  * @type {Function}
  * @param {Node} node - Given node.
  * @param {string} type - A string representing the event type.
  * @param {Object|Function} listener - An object|function representing the listener.
  * @param {Object} options - An options object that specifies characteristics about the event listener.
  * @returns {undefined} - Undefined.
  *
  * @example
  * eventRemove(document.body, () => {console.log('CLICKED');});
  * // = > Undefined
*/
export const eventRemove = (node, ...args) => {
  node.removeEventListener(...args);
  return node;
};
assign(acid, {
  eventAdd,
  eventRemove,
});
