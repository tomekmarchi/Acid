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
export const range = (start, end, increment = 1) => {
  if (start < end) {
    return rangeUp(start, end, increment);
  } else {
    return rangeDown(start, end, increment);
  }
};
export const rangeRight = (start, end, increment = 1) => {
  return rangeDown(end, start, increment);
};
assign(acid, {
  range,
  rangeRight
});
