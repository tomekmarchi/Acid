import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
import { eachWhile } from '../array/each';
import { toPath } from '../utils/toPath';
const get = (propertyString, objectChain = acid) => {
  let link = objectChain;
  eachWhile(toPath(propertyString), (item) => {
    link = link[item];
    return hasValue(link);
  });
  return link;
};
assign(acid, {
  get
});
