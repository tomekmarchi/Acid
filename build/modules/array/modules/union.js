//Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
array_extend.union = function () {
	 var result = _uniq(this);

    for (var i = 0; i < arguments.length; i++) {
      var array = arguments[i];
      for (var j = 0; j < array.length; j++) {
        if (result.indexOf(array[j]) < 0) {
          result.push(array[j]);
        }
      }
    }

    return result;
};