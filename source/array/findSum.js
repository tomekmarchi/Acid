import acid from '../namespace/index';
import { assign } from '../internal/object';
export const findSum = (array, sum) => {
  const returnedObject = {};
  const arrayLength = array.length;
  let item;
  let end;
  let check;
  for (let index = 0; index < arrayLength; index++) {
    item = array[index];
    end = sum - item;
    check = array.indexOf(end);
    if (check !== -1 && check !== index) {
      returnedObject.start = item;
      returnedObject.end = end;
      returnedObject.startIndex = index;
      returnedObject.endIndex = check;
      break;
    }
  }
  return returnedObject;
};
assign(acid, {
  findSum
});
