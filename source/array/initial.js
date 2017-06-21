const generateArrayRange = (method) => {
  const result = (array) => {
    array = cloneArray(array);
    method(array);
    return array;
  };
  return result;
};
const arrayInitial = generateArrayRange(popArray);
acid.initial = arrayInitial;
const arrayRest = generateArrayRange(shiftArray);
acid.rest = arrayRest;
