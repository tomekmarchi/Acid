import acid from '../namespace/index';
import { assign } from '../internal/object';
const jsonNative = JSON;
/**
   * jsonParse is a wrapped version of the forEach function
*/
export const jsonParse = jsonNative.jsonParse;
/**
   * stringify is a wrapped version of the forEach function
*/
export const stringify = jsonNative.stringify;
assign(acid, {
  jsonParse,
  stringify
});
