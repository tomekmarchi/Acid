// is number zero
$.isZero = (item) => {
  return item === 0;
};
// is strict equal to
$.isNumberEqual = (item, num) => {
  return item === num;
};
// is In range of two numbers
$.isNumberInRange = (num, start, end) => {
  if (isUndefined(end)) {
    end = start;
    start = 0;
  }
  return num > start && num < end;
};
