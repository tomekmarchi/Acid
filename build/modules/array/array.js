//shared functions
//Flattens a nested array. Pass level to flatten up to a depth;
var _flatten_once = (arr) => {
        return arrayReduce(arr,(a, b) => {
            if (!isArray(a)) {
                a = [a];
            }
            if (!isArray(b)) {
                b = [b];
            }
            pushApply(a, b);
            return a;
        });
    },
    flatten = $.flatten = (array, level) => {
        if (level) {
            if (level === 1) {
                return _flatten_once(array);
            }
            for (var i = 0; i < level; i++) {
                array = arrayReduce(array,(previousValue, currentValue, index, array) =>{
                    return concatCall(previousValue,(isArray(currentValue)) ? currentValue : [currentValue]);
                }, []); //initial starting value is an amepty array []
            }
            return array;
        }
        return arrayReduce(array,(previousValue, currentValue, index, array) =>{
            return concatCall(previousValue,(isArray(currentValue)) ? flatten(currentValue) : currentValue);
        }, []); //initial starting value is an amepty array []
    },
    //cache for function that removes falsey values from array
    compact = (array) => {
        return eachArray(array,(item)=>{
            return item || undefined;
		});
    };
$.array=arrayNative;
