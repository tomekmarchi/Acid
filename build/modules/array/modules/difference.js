//Creates an array excluding all values of the provided arrays using SameValueZero for equality comparisons.
var arrayDifference = $.difference = function(array, compare) {
    return filterArray(array, (item) => {
        if (!has(item,compare)) {
            return item;
        }
    });
};
