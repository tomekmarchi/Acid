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
  while (position < end) {
    rangeArray.push(position);
    position -= increment;
  }
  return rangeArray;
};
/**
  *
  *
  * @type {Function} range
  * @category array
  * @param {Number} start - Value which determines the start of the range.
  * @param {Number} end - Value which determines the end of the range.
  * @param {Number} increment - Value which determines the rate of incrementation.
  * @returns {Array}
  *
  * @example
  * range([1,'B', Cat, false, null, 0 , '', undefined, NaN]);
  * // => [1, 'B', Cat]
*/
export const range = (start, end, increment = 1) => {
  if (start < end) {
    return rangeUp(start, end, increment);
  } else {
    return rangeDown(start, end, increment);
  }
};
/**
  *
  *
  * @type {Function} rangeRight
  * @param {Number} start - Value which determines the start of the range.
  * @param {Number} end - Value which determines the end of the range.
  * @param {Number} increment - Value which determines the rate of incrementation.
  * @returns {Array}
  *
  * @example
  * rangeRight([1,'B', Cat, false, null, 0 , '', undefined, NaN]);
  * // => [1, 'B', Cat]
*/
export const rangeRight = (start, end, increment = 1) => {
  return rangeDown(end, start, increment);
};
assign(acid, {
  range,
  rangeRight
});
