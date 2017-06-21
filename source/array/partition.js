// Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
const partition = (array, funct) => {
  const temp = [];
  return [
    filterArray(array, (item, index) => funct(item) ? item : pushArray(temp, item) && undefined),
    temp,
  ];
};
acid.partition = partition;
