import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachWhile } from '../utility/each';
/**
  * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
  *
  * @function every
  * @category function
  * @type {Function}
  * @param {Array|Object} collection - The collection to iterate over.
  * @param {Function} predicate - The function invoked per iteration.
  * @returns {boolean} Returns true if all elements pass the predicate check, else false.
  *
  * @example
  * every([[], true, 1, null, 'string'], Boolean);
  * // => false
*/
export const every = eachWhile;
assign(acid, {
  every,
});
