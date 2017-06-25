import acid from '../namespace/index';
import { assign } from '../internal/object';
const functionPrototype = Function.prototype;
export function cacheNativeMethod(funct) {
  return functionPrototype.call.bind(funct);
}
assign(acid, {
  cacheNativeMethod
});
