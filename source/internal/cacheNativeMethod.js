import { $ } from '../../../namespace/index';
const functionPrototype = Function.prototype;
export function cacheNativeMethod(funct) {
  return functionPrototype.call.bind(funct);
}
$.cacheNativeMethod = cacheNativeMethod;
