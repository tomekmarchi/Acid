//make a promise
var promiseMethods = $.promises = {},
	promiseMethod = $.promise = function(arry, name, callback, calls) {
		var arrayLength=getLength(arry);
        promiseMethods[name] = function() {
            var fn = promiseMethods[name],
                go = 0;
            eachArray(arry, (item) => {
                if (fn[item] === 1) {
                    go = go + 1;
                }
            });
            //if amount of promises made were same as needed then launch callback
            if (go === arrayLength) {
                asyncMethod(callback);
                promiseMethods[name] = null;
                return true;
            }
            return false;
        };
        call(promiseMethods[name],{});
        if (calls) {
			call(promiseMethods[name],calls);
        }
    },
    //promised
    promisedMethod = $.promised = function(self, fn) {
        var val = promiseMethods[fn];
        promiseMethods[fn][self] = 1;
        if (val) {
            if (val()) {
                promiseMethods[fn] = null;
            }
        }
        return false;
    };
