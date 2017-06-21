import acid from '../namespace/index';
import { assign, objectSize } from './object';
import { apply } from './function';
import { isArray } from './array';
import { isConstructor } from './isConstructor';
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
export const decimalCheck = /\.|\+/;
export const isDecimal = (string) => {
  return string.toString().match(decimalCheck);
};
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
export const has = (string, search) => {
  return (isArray(search)) ? apply(string.includes, string, search) : string.includes(search);
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
assign(acid, {
  isFileCSS,
  isFileJSON,
  isFileJS,
  getFileExtension,
  isEmpty,
  hasLength,
  has,
  isFunction,
  isPlainObject,
  isUndefined,
  isNull,
  hasValue,
  isDecimal,
  isString,
  isNumber,
});