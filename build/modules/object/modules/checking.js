const objectStringGenerate = (objectName) => {
  return `[object ${objectName}]`;
};
const isSameObjectGenerator = (type) => {
  return (obj) => {
    return (hasValue(obj)) ? toStringCall(obj) === type : false;
  };
};
const isDecimal = (string) => {
  return stringMatchCall(toStringCall(string), decimalCheck);
};
$.isDecimal = isDecimal;
const hasValue = (item) => {
  return !isUndefined(item) && !isNull(item);
};
$.hasValue = hasValue;
const isUndefined = function(obj) {
  return obj === undefined;
};
$.isUndefined = isUndefined;
const isNull = (obj) => {
  return obj === null;
};
$.isNull = isNull;
const isAll = (...args) => {
  const method = shiftArray(args);
  let result = true;
  eachArray(args, (item, index, array, length, safe) => {
    result = method(item);
    if (!result) {
      safe.halt = true;
    }
  }, true);
  return result;
};
$.isAll = isAll;
const isArray = arrayNative.isArray;
$.isArray = isArray;
const isConstructor = (constructor) => {
  return (obj) => {
    return (hasValue(obj)) ? obj.constructor === constructor : false;
  };
};
$.isConstructor = isConstructor;
const isString = isConstructor(stringNative);
$.isString = isString;
const isNumber = isConstructor(numberNative);
$.isNumber = isNumber;
const isPlainObject = (obj) => {
  return (hasValue(obj)) ? stringSliceCall(toStringCall(obj.constructor)
    .trim(), 9, 16) === 'Object(' : false;
};
$.isPlainObject = isPlainObject;
const isFunction = (obj) => {
  return (hasValue(obj)) ? obj instanceof functionNative : false;
};
$.isFunction = isFunction;
const has = (string, search) => {
  return (isArray(search)) ? apply(string.includes, string, search) : string.includes(search);
};
$.has = has;
const hasLength = (obj) => {
  return Boolean(getLength(obj));
};
$.hasLength = hasLength;
const isEmpty = (obj) => {
  if (isString(obj) || isArray(obj)) {
    return !hasLength(obj);
  } else if (isPlainObject(obj)) {
    return !objectSize(obj);
  }
  return !hasValue(obj);
};
$.isEmpty = isEmpty;
const regexGenerator = (regexType) => {
  return (item) => {
    return (hasValue(item)) ? regexType.test(item) : false;
  };
};
const isFileCSS = regexGenerator(isCSSRegex);
$.isFileCSS = isFileCSS;
const isFileJSON = regexGenerator(isJSONRegex);
$.isFileJSON = isFileJSON;
const isFileJS = regexGenerator(isJSRegex);
$.isFileJS = isFileJS;
const extension = (string) => {
  return stringMatchCall(string, /\.([0-9a-z]+)/);
};
$.extension = extension;
const hasDot = regexGenerator(hasDotRegex);
$.hasDot = hasDot;
