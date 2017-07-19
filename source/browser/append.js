/**
<<<<<<< HEAD
  * Checks to see of the browser agent has a string.
  *
  * @function append
  * @type {Function}
  * @param {string} node - The string to search for.
  * @param {string} child - The string to search for.
  * @returns {boolean} Returns true or false.
  *
  * @example
  * isAgent('mobile');
  * // => false
*/
export const append = (node, child) => {
  node.appendChild(child);
  return node;
=======
  * Append a DOM node.
  *
  * @function append
  * @type {Function}
  * @ignore
  * @param {Node} parentNode - The parent node.
  * @param {Node} child - The node to be appended.
  * @returns {undefined} Returns the child.
*/
export const append = (parentNode, child) => {
  parentNode.appendChild(child);
  return child;
>>>>>>> origin/master
};
