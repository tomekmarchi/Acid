/**
  * Append a DOM node.
  *
  * @function append
  * @category browser
  * @ignoreTest
  * @type {Function}
  * @ignore
  * @param {Node} parentNode - The parent node.
  * @param {Node} child - The node to be appended.
  * @returns {undefined} Returns the child.
*/
export const append = (parentNode, child) => {
  parentNode.appendChild(child);
  return child;
};
