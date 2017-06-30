import acid from '../namespace/index';
import { assign } from '../internal/object';
const functionPrototype = Function.prototype;
/**
cacheNativeMethod takes a prototype method and returns a cached version of that method.
* @property {funct} -takes a function to be cached
 * @example
 const fooFunction() =>{
  console.log();
};
 cacheNativeMethod(fooFunction)
*/
export function cacheNativeMethod(funct) {
  return functionPrototype.call.bind(funct);
}
assign(acid, {
  cacheNativeMethod
});
