import $ from '../../../namespace/index';
const objectNative = Object;
export const keys = objectNative.keys;
export const is = objectNative.is;
export const assign = objectNative.assign;
export const getOwnPropertyDescriptor = objectNative.getOwnPropertyDescriptor;
export const defineProperty = objectNative.defineProperty;
export const getOwnPropertyNames = objectNative.getOwnPropertyNames;
Object.assign($, {
  keys,
  is,
  assign,
  getOwnPropertyDescriptor,
  defineProperty,
  getOwnPropertyNames,
});
