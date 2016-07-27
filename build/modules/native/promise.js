//make a promise
var promiseMethods = $.promises = {},
	promiseMethod = $.promise = function (arry, name, callback, calls) {
		var arrayLength = getLength(arry);
		var fn = promiseMethods[name] = function () {
			var go = 0;
			eachArray(arry, (item) => {
				if (fn[item] === 1) {
					go = go + 1;
				}
			});
			//if amount of promises made were same as needed then launch callback
			if (go === arrayLength) {
				asyncMethod(callback);
				promiseMethods[name] = null;
				return True;
			}
			return False;
		};
	},
	//promised
	promisedMethod = $.promised = function (self, fn) {
        promiseMethods[fn][self] = 1;
		promiseMethods[fn]();
	};
