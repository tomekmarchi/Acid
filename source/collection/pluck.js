import acid from '../namespace/index';
import { assign } from '../internal/object';
import { mapArray } from '../array/each';
/**
  * Returns an array of the plucked values from the collection.
  *
  * @function pick
  * @type {Function}
  * @param {Array} collection - Array used to determine what values to be plucked.
  * @param {string} pluckThis - Property name.
  * @returns {Array} - An array of plucked values.
  *
  * @example
  * pick([{lucy: 'Ants moving around on the walls.'}, {lucy: 'In the sky with diamonds.'}], ['a','b']);
  * // => ['Ants moving around on the walls.', 'In the sky with diamonds.']
*/
export const pluck = (collection, pluckThis) => {
  return mapArray(collection, (item) => {
    const result = item[pluckThis];
    return result;
  });
};
assign(acid, {
  pluck
});
