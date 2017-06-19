const safeModeCall = (safeMode) => {
  if (safeMode) {
    if (safeMode.halt) {
      return false;
    } else if (safeMode.skip) {
      safeMode.skip = false;
      return true;
    }
  }
};
const whileGenerator = (mainFunc, optBool) => {
  function compiled(array, fn, includeLastResult) {
    return mainFunc(array, function (item, index, array, length, results, safeMode) {
      if (!safeMode) {
        safeMode = results;
      }
      const result = apply(fn, fn, arguments);
      if (result === optBool) {
        safeMode.halt = true;
        if (includeLastResult) {
          return result;
        }
      } else {
        return result;
      }
    }, true);
  }
  return compiled;
};
const generateMap = function (method) {
  return function (array, fn, safeMode) {
    const results = [];
    let returned;
    eachArray(array, function (item, index, array, length, safe) {
      returned = fn(item, index, array, length, results, safe);
      (hasValue(returned) ? results[index] = returned : false)
    }, safeMode);
    return results;
  };
};
const filterArray = function (array, fn, safeMode) {
  const results = [];
  let returned;
  eachArray(array, (item, index, array, length, safe) => {
    returned = fn(item, index, array, length, results, safe);
    (hasValue(returned) ? pushArray(results, returned) : false)
  }, safeMode);
  return results;
};
$.filterArray = filterArray;
// loop while the count is less than the length of the array
const whileLength = function (array, fn) {
  // an array of results will be returned
  const results = [];
  let length = getLength(array);
  let index = 0;
  while (length) {
    results[index] = fn(array[index], index, array, length, results);
    length = getLength(array);
    index++;
  }
  return results;
};
$.whileLength = whileLength;
// loop through based on number
const times = function (start, end, fn) {
  if (!fn) {
    let fn = end;
    let end = start;
    let start = 0;
  }
  const results = [];
  for (let returned; start < end; start++) {
    // call function get result
    returned = fn(start, end, results);
    (hasValue(returned) ? pushArray(results, returned) : false)
  }
  return results;
};
$.times = times;
const eachArrayRight = (array, fn, safeMode) => {
  safeMode = (safeMode) ? {} : safeMode;
  for (safeModeResult, length = getLength(array), i = length - 1; i >= 0; i--) {
    safeModeResult = safeModeCall(safeMode);
    if (safeModeResult) {
      continue;
    } else if (safeModeResult === false) {
      break;
    }
    fn(array[i], i, array, length, safeMode);
  }
};
$.eachArrayRight = eachArrayRight;
const eachArray = (array, fn, safeMode) => {
  safeMode = (safeMode) ? {} : safeMode;
  const length = getLength(array);
  for (let safeModeResult, i = 0; i < length; i++) {
    safeModeResult = safeModeCall(safeMode);
    if (safeModeResult) {
      continue;
    } else if (safeModeResult === false) {
      break;
    }
    fn(array[i], i, array, length, safeMode);
  }
};
$.eachArray = eachArray;
const mapArray = generateMap(eachArray);
$.mapArray =  mapArray;
const mapArrayRight = generateMap(eachArrayRight);
$.mapArrayRight = mapArrayRight;
// loop while the returned result is false
const eachWhilefalse = whileGenerator(eachArray, true);
$.eachWhilefalse = eachWhilefalse;
// each while the check function is true
const eachWhile = whileGenerator(eachArray, false);
$.eachWhile = eachWhile;
// loop while the returned result is false
const whilefalse = whileGenerator(mapArray, true);
$.mapWhilefalse = whilefalse;
// loop through array backwards aka from the right while true
const mapArrayRightWhile = whileGenerator(mapArrayRight, false);
$.mapArrayRightWhile = mapArrayRightWhile;
// each while the check function is true
const mapWhile =  whileGenerator(mapArray, false);
$.mapWhile = mapWhile;
