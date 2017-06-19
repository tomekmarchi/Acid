const generateArrayRange = (method) => {
  const result = (array) => {
    array = cloneArray(array);
    method(array);
    return array;
  };
  return result;
};
const arrayInitial = generateArrayRange(popArray);
$.initial = arrayInitial;
const arrayRest = generateArrayRange(shiftArray);
$.rest = arrayRest;
