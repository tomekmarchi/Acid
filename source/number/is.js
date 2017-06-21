// is number zero
acid.isZero = (item) => {
  return item === 0;
};
// is strict equal to
acid.isNumberEqual = (item, num) => {
  return item === num;
};
// is In range of two numbers
acid.isNumberInRange = (num, start, end) => {
  if (isUndefined(end)) {
    end = start;
    start = 0;
  }
  return num > start && num < end;
};
