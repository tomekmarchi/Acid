import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachWhile, map } from '../utility/each';
/**
  * Creates a function that invokes iteratees with the arguments it receives and returns their results.
  *
  * @function over
  * @type {Function}
  * @param {Array|Object} iteratees - The iteratees to invoke.
  * @returns {Function} Returns the new function.
  *
  * @example
  * over([Math.max, Math.min])(1, 2, 3, 4);
  * // => [4, 1]
*/
export const over = (iteratees) => {
  return (...args) => {
    return map(iteratees, (item) => {
      return item(...args);
    });
  };
};
/**
  * Creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.
  *
  * @function overEvery
  * @type {Function}
  * @param {Array|Object} predicates -  The predicates to check.
  * @returns {Function} Returns the new function.
  *
  * @example
  * const overEveryThing = overEvery([Boolean, isFinite]);
  * overEveryThing('1');
  * // => true
  * overEveryThing(null);
  * // => false
*/
export const overEvery = (predicates) => {
  return (...args) => {
    return eachWhile(predicates, (item) => {
      return item(...args);
    });
  };
};
assign(acid, {
  over,
  overEvery
});
