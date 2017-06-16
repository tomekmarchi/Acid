/*
	Splits a collection into sets, grouped by the result of running each value through iteratee.
*/
const groupBy = function (array, funct) {
  return arraySortToObject((item, index, objectArg) => {
    const results = funct(item);
    if (!objectArg[results]) {
      objectArg[results] = [];
    }
    pushArray(objectArg[results], item);
  }, array);
};
$.groupBy = groupBy;
