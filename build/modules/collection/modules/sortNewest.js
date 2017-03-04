const sortNewest = $.sortNewest = function (arrayArg, key, pureMode) {
  const array = (pureMode) ? arrayArg : [...arrayArg];
  return array.sort((previous, next) => {
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
$.getNewest = (array, key) => {
  return sortNewest(array, key)[0];
};
