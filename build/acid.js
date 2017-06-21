(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.$ = factory());
}(this, (function () { 'use strict';

let cacheSuper;
const $$1 = (...args) => {
  return cacheSuper(...args);
};
$$1.superMethod = (method) => {
  cacheSuper = method;
};

const functionPrototype = Function.prototype;
function cacheNativeMethod(funct) {
  return functionPrototype.call.bind(funct);
}
$$1.cacheNativeMethod = cacheNativeMethod;

const objectNative$1 = Object;
const keys = objectNative$1.keys;
const is = objectNative$1.is;
const assign = objectNative$1.assign;
const getOwnPropertyDescriptor = objectNative$1.getOwnPropertyDescriptor;
const defineProperty = objectNative$1.defineProperty;
const getOwnPropertyNames = objectNative$1.getOwnPropertyNames;
assign($$1, {
  keys,
  is,
  assign,
  getOwnPropertyDescriptor,
  defineProperty,
  getOwnPropertyNames,
});

const apply = Reflect.apply;
assign($$1, {
  apply
});

const arrayNative = Array;
const toArray = arrayNative.from;
assign($$1, {
  toArray,
});

/**
 * @name Acid.js
 * @version 2.0 Stable
 * @site http://acidjs.com
 */

return $$1;

})));
//# sourceMappingURL=acid.js.map
