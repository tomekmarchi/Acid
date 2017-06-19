// Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order.
const sortedIndex = function (array, n) {
  let min = 0;
  eachArray(array, (item, index) => {
    if (n > item) {
      min = index;
    }
  });
  if (min > 0) {
    min = min + 1;
  }
  return min;
};
$.sortedIndex = sortedIndex;
