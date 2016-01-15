//Creates an array excluding all values of the provided arrays using SameValueZero for equality comparisons.
var arrayDifference = $.difference = function(array, compare) {
    return _each_array(array, (item) => {
        var indexof = compare.indexOf(item);
        if (indexof === -1) {
            return item;
        }
    });
};
