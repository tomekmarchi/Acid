//shared functions
//Flattens a nested array. Pass level to flatten up to a depth;
var _flatten_once = function(arr) {
        return arr.reduce(function(a, b) {
            if (!_isArray(a)) {
                a = [a];
            }
            if (!_isArray(b)) {
                b = [b];
            }
            pushApply(a, b);
            return a;
        });
    },
    flatten = function(array, level) {
        if (level) {
            if (level === 1) {
                return _flatten_once(array);
            }
            for (var i = 0; i < level; i++) {
                    array = array.reduce(function(previousValue, currentValue, index, array) {
                    return previousValue.concat((_isArray(currentValue)) ? currentValue : [currentValue]);
                }, []); //initial starting value is an amepty array []
            }
            return array;
        }
        return array.reduce(function(previousValue, currentValue, index, array) {
            return previousValue.concat((_isArray(currentValue)) ? flatten(currentValue) : currentValue);
        }, []); //initial starting value is an amepty array []
    },
    //cache for function that removes falsey values from array
    compact = function(self) {
        var result = [];

        for (var i = 0; i < self.length; i++) {
            if (self[i]) {
                result.push(self[i]);
            }
        }

        return result;
    };
$.array=Array;
