const getLength = (item) => {
  return item.length;
};
$.getLength = getLength;
const indexOfCall = (string, index) => {
  return string.indexOf(index);
};
const ensureArray = (object) => {
  return (isArray(object)) ? object : [
    object
  ];
};
$.ensureArray = ensureArray;
const ifInvoke = (...args) => {
  const method = shiftArray(args);
  return isFunction(method) ? apply(method, args) : undefined;
};
$.ifInvoke = ifInvoke;
const ifNotEqual = (rootObject, property, equalThis) => {
  if (property) {
    rootObject[property] = rootObject[property] || equalThis;
    return rootObject[property];
  }
  return rootObject;
};
$.ifNotEqual = ifNotEqual;
/* String relate*/
const generatePrototype = (funct) => {
  return functionPrototype.call.bind(funct);
};
const substringCall = generatePrototype(stringPrototype.substring);
const substrCall = generatePrototype(stringPrototype.substr);
const stringSliceCall = generatePrototype(stringPrototype.slice);
const toLowerCaseCall = generatePrototype(stringPrototype.toLowerCase);
const toUpperCaseCall = generatePrototype(stringPrototype.toUpperCase);
const splitCall = generatePrototype(stringPrototype.split);
const stringRepeatCall = generatePrototype(stringPrototype.repeat);
const charAtCall = generatePrototype(stringPrototype.charAt);
const stringMatchCall = generatePrototype(stringPrototype.match);
const stringReplaceCall = generatePrototype(stringPrototype.replace);
/* Regex Helper*/
const testRegex = generatePrototype(regExpPrototype.test);
/* Array Helper*/
const concatArray = generatePrototype(arrayPrototype.concat);
const popArray = generatePrototype(arrayPrototype.pop);
const pushArray = generatePrototype(arrayPrototype.push);
const pushApply = $.pushApply = (array, arrayToPush) => {
  return apply(arrayPrototype.push, array, arrayToPush);
};
const arraySliceCall = generatePrototype(arrayPrototype.slice);
const arraySort = generatePrototype(arrayPrototype.sort);
const spliceArray = generatePrototype(arrayPrototype.splice);
const shiftArray = generatePrototype(arrayPrototype.shift);
const unShiftArray = generatePrototype(arrayPrototype.unshift);
const unShiftApply = $.unShiftApply = (array, arrayToPush) => {
  return apply(arrayPrototype.unshift, array, arrayToPush);
};
const joinArray = generatePrototype(arrayPrototype.join);
const findIndexArray = generatePrototype(arrayPrototype.findIndex);
const findArray = generatePrototype(arrayPrototype.find);
$.find = findArray;
/*
	Object Helpers
*/
const toStringCall = (item) => {
  return item.toString();
};
/*
	Function calls
*/
const bindTo = generatePrototype(functionPrototype.bind);
$.bindTo = bindTo;
const call = (method, bindTo, arg) => {
  if (!arg) {
    arg = bindTo;
    bindTo = method;
  }
  return method.call(bindTo, arg);
};
$.callFn = call;
const apply = (method, bindTo, args) => {
  if (!args) {
    args = bindTo;
    bindTo = method;
  }
  return method.apply(bindTo, args);
};
$.applyFn = apply;
let count = 0;
const uuidFree = [];
const uuidClosed = {};
const uuid = (max) => {
  let result = shiftArray(uuidFree);
  if (!hasValue(result)) {
    result = count;
    uuidClosed[result] = true;
    count++;
  }
  return result;
};
$.uuid = uuid;
const uuidRemove = (id) => {
  uuidClosed[id] = null;
  pushArray(uuidFree, id);
};
uuid.remove = uuidRemove;
