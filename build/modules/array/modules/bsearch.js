/**
   * Finds the index of a value in a sorted array using a binary search algorithm.
   *
   * If no `compareFunction` is supplied, the `>` and `<` relational operators are used to compare values,
   * which provides optimal performance for arrays of numbers and simple strings.
   *
   * @function Array#bsearch
   * @param {*} value - The value to search for.
   * @param {Function} [compareFunction] - The same type of comparing function you would pass to
   *     [`.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
   * @returns {number} The index of the value if it is in the array, or `-1` if it cannot be found.
   *     If the search value can be found at multiple indexes in the array, it is unknown which of
   *     those indexes will be returned.
   *
   * @example
   * ['a', 'b', 'c', 'd'].bsearch('c');
   * // -> 2
   *
   * [1, 1, 2, 2].bsearch(2);
   * // -> 2 or 3
   *
   * [1, 2, 3, 4].bsearch(10);
   * // -> -1
   *
   * [1, 2, 3, 4].bsearch(1, function(a, b) {
   *   return a - b;
   * });
   * // -> 0
   *
   * ['img1', 'img2', 'img10', 'img13'].bsearch('img2', String.naturalCompare);
   * // -> 1
   * // `String.naturalCompare` is provided by the string-natural-compare npm module:
   * // https://www.npmjs.com/package/string-natural-compare
   */
  $.bsearch= function(item,value, compareFunction) {
    var low = 0;
    var high = item.length;
    var mid;

    if (compareFunction) {
      while (low < high) {
        mid = (low + high) >>> 1;
        var direction = compareFunction(item[mid], value);
        if (!direction) {
          return mid;
        }
        if (direction < 0) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
    } else {
      while (low < high) {
        mid = (low + high) >>> 1;
        if (item[mid] === value) {
          return mid;
        }
        if (item[mid] < value) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
    }

    return -1;
  };