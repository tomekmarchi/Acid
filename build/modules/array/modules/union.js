//Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
$.union = function(arrayOG) {
    var result = _uniq(arrayOG);

    _each_array(arguments, (array) => {
        _each_array(array, (item) => {
            if (result.indexOf(item) < 0) {
                result.push(item);
            }
        });
    });

    return result;
};
