//Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
 /**
   * Returns an new array that is the [set intersection](http://en.wikipedia.org/wiki/Intersection_(set_theory))
   * of the array and the input array(s).
   *
   * @function Array#intersect
   * @param {...Array} *arrays - A variable number of arrays.
   * @returns {Array} The new array of unique values shared by all of the arrays.
   *
   * @example
   * [1, 2, 3].intersect([2, 3, 4]);
   * // -> [2, 3]
   *
   * [1, 2, 3].intersect([101, 2, 50, 1], [2, 1]);
   * // -> [1, 2]
   */
array_extend.intersection = function() {
    var result = [];
    var array = this;
    var numArgs = arguments.length;

    if (!numArgs) {
        return result;
    }

    next: for (var i = 0; i < array.length; i++) {
        var item = array[i];

        if (result.indexOf(item) < 0) {
            for (var j = 0; j < numArgs; j++) {
                if (arguments[j].indexOf(item) < 0) {
                    continue next;
                }
            }
            result.push(item);
        }
    }

    return result;
};