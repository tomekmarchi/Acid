const sortOldest = (arrayArg, key, pureMode) => {
  const array = (pureMode) ? arrayArg : [...arrayArg];
  return arraySort(array, (previous, next) => {
    if (!next[key]) {
      return -1;
    } else if (!previous[key]) {
      return 1;
    } else if (previous[key] < next[key]) {
      return 1;
    } else if (previous[key] > next[key]) {
      return -1;
    }
    return 0;
  });
};
acid.sortOldest = sortOldest;
acid.getOldest = (array, key) => {
  return sortOldest(array, key)[0];
};
