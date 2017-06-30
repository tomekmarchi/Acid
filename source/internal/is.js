import acid from '../namespace/index';
import { eachArray } from '../array/each';
import { assign, objectSize } from './object';
export const objectStringGenerate = (objectName) => {
  return `[object ${objectName}]`;
};
export const isUndefined = function(obj) {
  return obj === undefined;
};
export const isNull = (obj) => {
  return obj === null;
};
export const hasValue = (item) => {
  return !isUndefined(item) && !isNull(item);
};
export const isSameObjectGenerator = (type) => {
  return (obj) => {
    return (hasValue(obj)) ? obj.toString() === type : false;
  };
};
export const isConstructor = (nativeObject) => {
  return (obj) => {
    return (hasValue(obj)) ? obj.constructor === nativeObject : false;
  };
};
export const decimalCheck = /\.|\+/;
export const isDecimal = (string) => {
  return string.toString().match(decimalCheck);
};
export const isArray = Array.isArray;
export const isString = isConstructor(String);
export const isNumber = isConstructor(Number);
export const isPlainObject = (obj) => {
  if (hasValue(obj)) {
    return obj.constructor.toString().trim()
      .slice(9, 16) === 'Object(';
  }
  return false;
};
export const isFunction = (obj) => {
  return (hasValue(obj)) ? obj instanceof Function : false;
};
export const has = (string, ...search) => {
  return string.includes(...search);
};
export const hasLength = (obj) => {
  return Boolean(obj.length);
};
export const isEmpty = (obj) => {
  if (isString(obj) || isArray(obj)) {
    return !hasLength(obj);
  } else if (isPlainObject(obj)) {
    return !objectSize(obj);
  }
  return !hasValue(obj);
};
export const regexGenerator = (regexType) => {
  return (item) => {
    return (hasValue(item)) ? regexType.test(item) : false;
  };
};
export const isFileCSS = regexGenerator(/\.css$/);
export const isFileJSON = regexGenerator(/\.json$/);
export const isFileJS = regexGenerator(/\.js$/);
export const hasDot = regexGenerator(/\./);
export const getExtensionRegex = /\.([0-9a-z]+)/;
export const getFileExtension = (string) => {
  return string.match(getExtensionRegex);
};
const nativeObjectNames = ['RegExp', 'Arguments', 'Boolean', 'Date', 'Error', 'Map', 'Object', 'Set', 'WeakMap',
  'ArrayBuffer', 'Float32Array', 'Float64Array', 'Int8Array', 'Int16Array', 'Int32Array',
  'Uint8Array', 'Uint8ClampedArray',
  'Uint16Array', 'Uint32Array'];
eachArray(nativeObjectNames, (item) => {
  acid[`is${item}`] = isSameObjectGenerator(objectStringGenerate(item));
});
assign(acid, {
  getFileExtension,
  has,
  hasLength,
  hasValue,
  isArray,
  isDecimal,
  isEmpty,
  isFileCSS,
  isFileJS,
  isFileJSON,
  isFunction,
  isNull,
  isNumber,
  isPlainObject,
  isString,
  isUndefined,
});
