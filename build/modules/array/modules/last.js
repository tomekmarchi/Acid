var _arrayLastItem = function(array, indexFrom) {
        var result;
        if (!indexFrom) {
            indexFrom = 1;
        }
        if (array) {
            result = array.splice(array.length - indexFrom, indexFrom);
        } else {
            result = collectionLastItem(array);
        }
        return result;
    },
    collectionLastItem = (array) => {
        return array[array.length - 1];
    };

//Returns the last element of an array. Passing n will return the last n elements of the array.
$.last = _arrayLastItem;
$.lastRaw = collectionLastItem;
