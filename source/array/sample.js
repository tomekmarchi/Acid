import acid from '../namespace/index';
import { assign } from '../internal/object';
import { randomInt } from '../number/math';
/**
  * Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
  *
  * @function sample
  * @category Array
  * @param {Array} array - Array to pull sample(s).
  * @returns {Array} An array of randomly pulled samples.
  *
  * @example
  * sample([1, 2, 3, 4] , 2);
  * // => [1, 3]
*/
export const sample = (array, amount = 1) => {
  if (amount === 1) {
    return array[randomInt(array.length - 1, 0)];
  }
  const sampleArray = [];
  const used = {};
  let count = 0;
  let index;
  while (count < amount) {
    index = randomInt(array.length - 1, 0);
    if (!used[index]) {
      sampleArray.push(sampleArray[index]);
      used[index] = true;
      count++;
    }
  }
  return sampleArray;
};
assign(acid, {
  sample
});
