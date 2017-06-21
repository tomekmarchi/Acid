const findDifference = function (array, sum) {
  const returnedObject = {};
  const len = getLength(array);
  let item;
  let end;
  let check;
  for (let i = 0; i < len; i++) {
    item = array[i];
    end = sum - item;
    check = array.indexOf(end);
    if (check !== -1 && check !== i) {
      returnedObject.start = item;
      returnedObject.end = end;
      returnedObject.startIndex = i;
      returnedObject.endIndex = check;
      break;
    }
  }
  return returnedObject;
};
acid.findDifference = findDifference;
