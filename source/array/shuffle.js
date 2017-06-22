import acid from '../namespace/index';
import { assign } from '../internal/object';
import { toArray } from '../internal/array';
import { randomInt } from '../number/math';
// shuffle an array and return a new array
export const shuffle = (array, amount = 1) => {
  const shuffleArray = toArray(array);
  let count = 0;
  let index;
  let value;
  while (count < amount) {
    index = randomInt(shuffleArray.length - 1, 0);
    value = shuffleArray[count];
    shuffleArray[count] = shuffleArray[index];
    shuffleArray[index] = value;
    count++;
  }
  return shuffleArray;
};
assign(acid, {
  shuffle
});
