/*
 	Determines if the arrays are equal by doing a shallow comparison of their elements using strict equality.
*/
const isEqualArray = (original, array) => {
  let result = true;
  if (getLength(array) !== getLength(original)) {
    result = false;
  } else {
    eachWhile(array, (item, index) => {
      if (original[index] !== item) {
        result = false;
        return result;
      }
    });
  }
  return result;
};
$.isEqualArray = isEqualArray;
/*
	Performs a deep comparison between object and source to determine if object contains equivalent property values.
*/
const isEqualArrayDeep = (original, array) => {
  let result = true;
  if (getLength(array) !== getLength(original)) {
    result = false;
  } else {
    eachWhile(array, (item, index) => {
      result = isMatch(item, original[index])
      return result;
    });
  }
  return result;
};
$.isEqualArrayDeep = isEqualArrayDeep;
