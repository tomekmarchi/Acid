//Returns a copy of the array with all instances of the values removed.
$.without = function (array,args) {
	var result = [],
      i,
      j;

    next: for (i = 0; i < getLength(array); i++) {
      for (j = 0; j < getLength(arguments); j++) {
        if (array[i] === arguments[j]) {
          continue next;
        }
      }
      pushArray(result,array[i]);
    }

    return result;
};
