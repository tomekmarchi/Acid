//Returns everything but the last entry of the array.
var arrayInitial = $.initial = function(array) {
        array = cloneArray(array);
        popArray(array);
        return array;
    },
    //Returns everything but the first entry of the array.
    arrayRest = $.rest = function(array) {
        array = cloneArray(array);
        shiftArray(array);
        return array;
    };
