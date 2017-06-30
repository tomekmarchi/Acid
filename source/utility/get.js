import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachWhile } from '../array/each';
import { hasValue } from '../internal/is';
import { toPath } from '../utility/toPath';
/**
get uses a string to go down an object chain and returns an object
@property {propertyString} - takes a string which is used to go down an objectChain
@property {objectChain} - takes an object
*/
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
