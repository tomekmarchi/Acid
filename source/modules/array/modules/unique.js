const chunkSlice = (array, start, end) => {
  return mapArray(new arrayNative(mathNative.min(end, getLength(array)) - start), (item, index) => {
    return array[start + index];
  });
};
const numericalCompare = (a, b) => {
  return a - b;
};
const numericalCompareReverse = (a, b) => {
  return b - a;
};
const xorBase = (a, b) => {
  return mapArray(concatArray(a, b), (item, index, array) => {
    if (!has(b, item) && indexOfCall(array, item) < 0) {
      return item;
    }
  });
};
const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};
const uniqueArray = (array, isSorted) => {
  return (isSorted) ? mapArray(array, (item, index) => {
    if (item !== array[index - 1]) {
      return item;
    }
  }) : array.filter(onlyUnique);
};
$.uniq = uniqueArray;
