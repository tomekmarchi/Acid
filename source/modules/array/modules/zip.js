// Merges together the values of each of the arrays with the values at the corresponding position.
const zip = function () {
  const args = arguments;
  return mapArray(args[0], function (arraySet) {
    return mapArray(args, arraySet => shiftArray(arraySet));
  });
};
$.zip = zip;
// unzip the array of zipped arrays [["fred",30,true],["barney",40,false]]
const unZip = function (array) {
  return mapArray(array[0], item => mapArray(array, arraySet => shiftArray(arraySet)));
};
$.unZip = unZip;
