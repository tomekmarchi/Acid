import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
let count = 0;
const uuidFree = [];
const uuidClosed = {};
/**
  * uuid returns a unique id
*/
export const uuid = () => {
  let result = uuidFree.shift(uuidFree);
  if (!hasValue(result)) {
    result = count;
    uuidClosed[result] = true;
    count++;
  }
  return result;
};
uuid.remove = (id) => {
  uuidClosed[id] = null;
  uuidFree.push(id);
};
assign(acid, {
  uuid,
});
