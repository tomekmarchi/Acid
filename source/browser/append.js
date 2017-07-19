/**
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
};
