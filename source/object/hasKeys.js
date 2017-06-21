import acid from '../namespace/index';
import { assign, keys } from '../internal/object';
import { eachWhile } from '../array/each';
export const hasKeys = (object, properties) => {
  let flag = false;
  const objectKeys = keys(object);
  eachWhile(properties, (item) => {
    flag = objectKeys.include(item);
    return flag;
  });
  return flag;
};
export const hasAnyKeys = (object, properties) => {
  const objectKeys = keys(object);
  const flag = properties.find((item) => {
    return objectKeys.include(item);
  });
  return flag;
};
assign(acid, {
  hasKeys,
  hasAnyKeys,
});
