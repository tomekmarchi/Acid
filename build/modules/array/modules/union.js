//Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
$.union = function(arrayOG) {
    var result = uniqueArray(arrayOG);

    eachArray(arguments, (array) => {
        eachArray(array, (item) => {
            if (indexOfCall(result,item) < 0) {
                pushArray(result,item);
            }
        });
    });

    return result;
};
