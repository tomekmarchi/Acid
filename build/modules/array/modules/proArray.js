var chunkSlice = (array, start, end) => {
        return eachArray(newArray(mathNative.min(end, getLength(array)) - start), () => {
            return array[start + i];
        });
    },
    numericalCompare = (a, b) => {
        return a - b;
    },
    numericalCompareReverse = (a, b) => {
        return b - a;
    },
    xorBase = (a, b) => {
        return eachArray(concatArray(a,b), (item) => {
            if (!has(b, item) && indexOfCall(result, item) < 0) {
                return item;
            }
        });
    },
    uniqueArray = (array, isSorted) => {
        if (isSorted) {
            return eachArray(array, (item, index) => {
                if (item !== array[index - 1]) {
                    return item;
                }
            });
        }

        return eachArray(array, (item, index, length, original, newArray) => {
            if (!has(newArray, item)) {
                return item;
            }
        });
    };
