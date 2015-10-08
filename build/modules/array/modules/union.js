//Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
$.union = function(arrayOG) {
  var result = _uniq(arrayOG),
    array,
    i,
    j;
    
  for (i = 0; i < arguments.length; i++) {
    array = arguments[i];
    for (j = 0; j < array.length; j++) {
      if (result.indexOf(array[j]) < 0) {
        result.push(array[j]);
      }
    }
  }

  return result;
};