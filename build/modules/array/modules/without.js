//Returns a copy of the array with all instances of the values removed.
array_extend.without = function (args) {
	var result = [];

    next: for (var i = 0; i < this.length; i++) {
      for (var j = 0; j < arguments.length; j++) {
        if (this[i] === arguments[j]) {
          continue next;
        }
      }
      result.push(this[i]);
    }

    return result;
};