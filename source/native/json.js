import acid from '../namespace/index';
import { assign } from '../internal/object';
const jsonNative = JSON;
export const jsonParse = jsonNative.jsonParse;
export const stringify = jsonNative.stringify;
assign(acid, {
  jsonParse,
  stringify
});
