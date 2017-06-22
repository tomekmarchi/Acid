import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
import { dotString, emptyString } from '../internal/shared';
import { eachWhile } from '../array/each';
const openBracket = '[';
const closeBracket = ']';
const get = (propertyString, objectChain = acid) => {
  let link = objectChain;
  const normalizeProperty = propertyString.replace(openBracket, dotString)
    .replace(closeBracket, emptyString);
  const stringChain = normalizeProperty.split(dotString);
  eachWhile(stringChain, (item) => {
    link = link[item];
    return hasValue(link);
  });
  return link;
};
assign(acid, {
  get
});
