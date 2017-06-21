const generateCheckLoops = (first, second) => {
  return (object, funct, optional, rawProp) => {
    let returned;
    if (!hasValue(object)) {
      return;
    } else if (isArray(object)) {
      returned = first;
    } else if (isPlainObject(object) || isFunction(object)) {
      returned = second;
    } else if (isNodeList(object) || isHTMLCollection(object)) {
      object = toArray(object);
      returned = first;
    } else if (rawProp) {
      returned = mapProperty;
    } else if (object.forEach) {
      returned = forEach;
    } else {
      returned = second;
    }
    return returned(object, funct, optional);
  };
};
const map = acid.map = generateCheckLoops(mapArray, mapObject);
const each = acid.each = generateCheckLoops(eachArray, eachObject);
const filter = acid.filter = generateCheckLoops(filterArray, filterObject);
