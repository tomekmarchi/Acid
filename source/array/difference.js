// Creates an array excluding all values of the provided arrays using SameValueZero for equality comparisons.
const arrayDifference = (array, compare) => {
  const result = filterArray(array, (item) => {
    if (!has(item, compare)) {
      return item;
    }
  });
  return result;
};
acid.difference = arrayDifference;
