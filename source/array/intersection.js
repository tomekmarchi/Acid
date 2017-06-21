//Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
/**
 * Returns an new array that is the [set intersection](http://en.wikipedia.org/wiki/Intersection_(set_theory))
 * of the array and the input array(s).
 *
 * @function Array#intersect
 * @param {...Array} *arrays - A variable number of arrays.
 * @returns {Array} The new array of unique values shared by all of the arrays.
 *
 * @example
 * [1, 2, 3].intersect([2, 3, 4]);
 * // -> [2, 3]
 *
 * [1, 2, 3].intersect([101, 2, 50, 1], [2, 1]);
 * // -> [1, 2]
 */
const intersection = function (...args) {
  let yes;
  return filterArray(args[0], (item) => {
    yes = true;
    eachArray(args, (otherItem) => {
      if (!has(otherItem, item)) {
        yes = false;
      }
    });
    if (yes) {
      return item;
    }
  });
};
acid.intersect = intersection;
