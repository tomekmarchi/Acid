// Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.
const rangeUp = (start, stop, increment) => {
  const rangeArray = [];
  let position = start;
  while (start < stop) {
    rangeArray.push(position);
    position += increment;
  }
  return rangeArray;
};
const rangeDown = (start, stop, incrementArg) => {
  const increment = (incrementArg < 0) ? incrementArg * -1 : incrementArg;
  const rangeArray = [];
  let position = start;
  while (start < stop) {
    rangeArray.push(position);
    position -= increment;
  }
  return rangeArray;
};
const range = (start, stop, increment = 1) => {
  if (start < stop) {
    return rangeUp(start, stop, increment);
  } else {
    return rangeDown(start, stop, increment);
  }
};
acid.range = range;
const rangeRight = (start, stop, increment = 1) => rangeDown(stop, start, increment);
acid.rangeRight = rangeRight;
