/*
Sorts a list into groups and returns a count for the number of objects in each group.
$.countBy([4.3, 6.1, 6.4],function(numb) {
  return Math.floor(numb);
});
{ '4': 1, '6': 2 }
*/
const countBy = function (array, funct) {
  const object = {};
  let result;
  eachArray(array, (item) => {
    result = funct(item);
    if (!object[result]) {
      object[result] = 0;
    }
    object[result]++;
  });
  return object;
};
$.countBy = countBy;
const countKey = function (array, keyName) {
  let count = 0;
  eachArray(array, (item) => {
    if (item[keyName]) {
      count++;
    }
  });
  return count;
};
$.countKey = countKey;
const countNoKey = function (array, keyName) {
  let count = 0;
  eachArray(array, (item) => {
    if (!item[keyName]) {
      count++;
    }
  });
  return count;
};
$.countNoKey = countNoKey;
