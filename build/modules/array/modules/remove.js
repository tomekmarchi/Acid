/**
 * Removes all occurrences of the passed in items from the array and returns the array.
 *
 * __Note:__ Unlike {@link Array#without|`.without()`}, this method mutates the array.
 *
 * @function Array#remove
 * @param {...*} *items - Items to remove from the array.
 * @returns {Array} The array this method was called on.
 *
 * @example
 * var array = [1, 2, 3, 3, 4, 3, 5];
 *
 * array.remove(1);
 * // -> [2, 3, 3, 4, 3, 5]
 *
 * array.remove(3);
 * // -> [2, 4, 5]
 *
 * array.remove(2, 5);
 * // -> [4]
 */
array_extend.remove = function() {
    var remStartIndex = 0;
    var numToRemove = 0;

    for (var i = 0; i < this.length; i++) {
        var removeCurrentIndex = false;

        for (var j = 0; j < arguments.length; j++) {
            if (this[i] === arguments[j]) {
                removeCurrentIndex = true;
                break;
            }
        }

        if (removeCurrentIndex) {
            if (!numToRemove) {
                remStartIndex = i;
            }
            ++numToRemove;
        } else if (numToRemove) {
            this.splice(remStartIndex, numToRemove);
            i -= numToRemove;
            numToRemove = 0;
        }
    }

    if (numToRemove) {
        this.splice(remStartIndex, numToRemove);
    }

    return this;
};