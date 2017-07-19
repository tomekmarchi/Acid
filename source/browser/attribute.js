import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachObject } from '../object/each';
import { isArray } from '../internal/is';
import { mapArray } from '../array/each';
import { zipObject } from '../object/zip';
/**
  * Assign attributes to a DOM node.
  *
  * @function nodeAttribute
  * @type {Function}
  * @async
  * @param {Node} node - The DOM node.
  * @param {Object|Array} object - Object with key being the attribute name and the value being the attribute value. If an array is given it will get the values corresponding to the array items.
  * @returns {Object|Node} If using an array this returns an object of attribute names as keys and their values as the property value. If using an object this will return the provided node.
  *
  * @example
  * nodeAttribute(document.body, { 'data-example': 'test'});
*/
export const nodeAttribute = (node, object) => {
  if (isArray(object)) {
    return zipObject(object, mapArray(object, (item) => {
      return node.getAttribute(item);
    }));
  }
  eachObject(object, (item, key) => {
    node.setAttribute(key, item);
  });
  return node;
};
assign(acid, {
  nodeAttribute
});
