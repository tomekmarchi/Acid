import acid from '../../../namespace/index';
import { hasValue } from '../object/checking';
import { assign } from '..internal/object';
let count = 0;
const uuidFree = [];
const uuidClosed = {};
export const uuid = () => {
  let result = uuidFree.shift(uuidFree);
  if (!hasValue(result)) {
    result = count;
    uuidClosed[result] = true;
    count++;
  }
  return result;
};
export const remove = (id) => {
  uuidClosed[id] = null;
  uuidFree.push(id);
};
assign(acid, {
  uuid,
  remove,
});
