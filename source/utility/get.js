import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachWhile } from '../array/each';
import { hasValue } from '../internal/is';
import { toPath } from '../utility/toPath';

export const get = (propertyString, objectChain = acid) => {
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
