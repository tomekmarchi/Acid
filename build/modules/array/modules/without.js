//Returns a copy of the array with all instances of the values removed.
$.without = function (array,args) {
	var result = [],
      i,
      j;

    next: for (i = 0; i < array.length; i++) {
      for (j = 0; j < arguments.length; j++) {
        if (array[i] === arguments[j]) {
          continue next;
        }
      }
      result.push(array[i]);
    }

    return result;
};