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
acid.isDecimal = isDecimal;
const hasValue = (item) => {
  return !isUndefined(item) && !isNull(item);
};
acid.hasValue = hasValue;
const isUndefined = function(obj) {
  return obj === undefined;
};
acid.isUndefined = isUndefined;
const isNull = (obj) => {
  return obj === null;
};
acid.isNull = isNull;
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
acid.isAll = isAll;
const isArray = arrayNative.isArray;
acid.isArray = isArray;
const isConstructor = (constructor) => {
  return (obj) => {
    return (hasValue(obj)) ? obj.constructor === constructor : false;
  };
};
acid.isConstructor = isConstructor;
const isString = isConstructor(stringNative);
acid.isString = isString;
const isNumber = isConstructor(numberNative);
acid.isNumber = isNumber;
const isPlainObject = (obj) => {
  return (hasValue(obj)) ? stringSliceCall(toStringCall(obj.constructor)
    .trim(), 9, 16) === 'Object(' : false;
};
acid.isPlainObject = isPlainObject;
const isFunction = (obj) => {
  return (hasValue(obj)) ? obj instanceof functionNative : false;
};
acid.isFunction = isFunction;
const has = (string, search) => {
  return (isArray(search)) ? apply(string.includes, string, search) : string.includes(search);
};
acid.has = has;
const hasLength = (obj) => {
  return Boolean(getLength(obj));
};
acid.hasLength = hasLength;
const isEmpty = (obj) => {
  if (isString(obj) || isArray(obj)) {
    return !hasLength(obj);
  } else if (isPlainObject(obj)) {
    return !objectSize(obj);
  }
  return !hasValue(obj);
};
acid.isEmpty = isEmpty;
const regexGenerator = (regexType) => {
  return (item) => {
    return (hasValue(item)) ? regexType.test(item) : false;
  };
};
const isFileCSS = regexGenerator(isCSSRegex);
acid.isFileCSS = isFileCSS;
const isFileJSON = regexGenerator(isJSONRegex);
acid.isFileJSON = isFileJSON;
const isFileJS = regexGenerator(isJSRegex);
acid.isFileJS = isFileJS;
const extension = (string) => {
  return stringMatchCall(string, /\.([0-9a-z]+)/);
};
acid.extension = extension;
const hasDot = regexGenerator(hasDotRegex);
acid.hasDot = hasDot;
