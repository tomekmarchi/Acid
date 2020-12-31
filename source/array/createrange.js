import acid from '../namespace/index';
import { assign } from '../internal/object';
const rangeUp = (start, end, increment) => {
  const rangeArray = [];
  let position = start;
  while (position < end) {
    rangeArray.push(position);
    position += increment;
  }
  return rangeArray;
};
const rangeDown = (start, end, incrementArg) => {
  const increment = (incrementArg < 0) ? incrementArg * -1 : incrementArg;
  const rangeArray = [];
  let position = start;
  while (position > end) {
    rangeArray.push(position);
    position -= increment;
  }
  return rangeArray;
};
/**
  * Create a numbered list of integers.
  *
  * @type {Function} range
  * @category array
  * @param {number} start - Value which determines the start of the range.
  * @param {number} end - Value which determines the end of the range.
  * @param {number} increment - Value used to step between integers.
  * @returns {Array} An array of integers.
  *
  * @example
  * range(0, 30, 5);
  * // => [0, 5, 10, 15, 20, 25]
*/
export const range = (start, end, increment = 1) => {
  if (start < end) {
    return rangeUp(start, end, increment);
  } else {
    return rangeDown(start, end, increment);
  }
};
assign(acid, {
  range
});
