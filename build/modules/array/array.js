//shared functions
//Flattens a nested array. Pass level to flatten up to a depth;
var flattenOnce = (arr) => {
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
                return flattenOnce(array);
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
    //cache for function that removes Falsey values from array
    compact = (array) => {
		if(isArray(array)){
			return filterArray(array,(item)=>{
				return item || undefined;
			});
		}
		var object={};
		eachObject(array,(item,key)=>{
			if(item){
				object[key]=item;
			}
		});
		return object;
    };
