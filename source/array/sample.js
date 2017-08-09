import acid from '../namespace/index';
import { assign } from '../internal/object';
import { randomInt } from '../number/math';
import { shuffle } from './shuffle';
/**
  * Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
  *
  * @function sample
  * @category array
  * @param {Array} array - Array to pull sample(s).
  * @returns {Array} An array of randomly pulled samples.
  *
  * @test
  * (async () => {
  *   const tempResult = sample([1, 2] , 2);
  *   return assert(tempResult.includes(1) && tempResult.includes(2), true);
  * });
  *
  * @example
  * sample([1, 2, 3, 4] , 2);
  * // => [1, 3]
*/
export const sample = (array, amount = 1) => {
  if (!array) {
    return false;
  }
  const arrayLength = array.length;
  if (arrayLength === amount || amount > arrayLength) {
    return shuffle(array);
  }
  if (amount === 1) {
    return [array[randomInt(arrayLength - 1, 0)]];
  }
  const sampleArray = [];
  const used = {};
  let count = 0;
  let index;
  while (count < amount) {
    index = randomInt(array.length - 1, 0);
    if (!used[index]) {
      sampleArray.push(array[index]);
      used[index] = true;
      count++;
    }
  }
  return sampleArray;
};
assign(acid, {
  sample
});
