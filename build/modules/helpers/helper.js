var getLength = $.getLength = (item) => {
        return item.length;
    },
    indexOfCall = (string, index) => {
        return string.indexOf(index);
    },
    lastItem = $.lastItem = (array) => {
        return array[getLength(array) - 1];
    },
    /*
    	String related
    */
    substringCall = (string, start, end) => {
        return string.substring(start, end);
    },
    substrCall = (string, start, end) => {
        return string.substr(start, end);
    },
    stringSliceCall = (string, start, end) => {
        return string.slice(start, end);
    },
    toLowerCaseCall = (string) => {
        return string.toLowerCase();
    },
    toUpperCaseCall = (string) => {
        return string.toUpperCase();
    },
    splitCall = (string, splitAt) => {
        return string.split(splitAt);
    },
    stringRepeatCall = (string, num) => {
        return string.repeat(num);
    },
    charAtCall = (string, num) => {
        return string.charAt(num);
    },
    stringMatchCall = (string, regexObject) => {
        return string.match(regexObject);
    },
    stringReplaceCall = (string, toReplace, replaceWith) => {
        return string.replace(toReplace, replaceWith);
    },
    /*
    	Regex Helpers
    */
    testRegex = (regexObject, string) => {
        return regexObject.test(string);
    },
    /*
    	Array Helpers
    */
    newArray = $.newArray = (num) => {
        return new arrayNative(num);
    },
    concatArray = (array, otherArray) => {
        return array.concat(otherArray);
    },
    pushApply = $.pushApply = (array, arrayToPush) => {
        return apply(arrayPushMethod, array, arrayToPush);
    },
    pushArray =  (array, objectToPush) => {
        return array[getLength(array)]=objectToPush;
    },
    spliceArray =  (array, start, end) => {
        return array.splice(start, end);
    },
	unShiftArray =  (array, item) => {
        return array.unshift(item);
    },
	shiftArray = (array, item) => {
        return array.shift(item);
    },
    joinArray =  (array, joinWith) => {
        return array.join(joinWith);
    },
	arrayReduce =  (array,funct) =>{
		return array.reduce(funct);
	},
	arrayReduceRight = (array,funct) =>{
		return array.reduceRight(funct);
	},
    /*
    	Object Helpers
    */
    toStringCall = (object) =>{
		return object.toString();
	},
    /*
    	Function calls
    */
    bindTo = $.bindTo = (method, bindThis) => {
        return method.bind(bindThis);
    },
    call = $.callFn = (method, bindTo, arg) => {
        if (!arg) {
            arg = bindTo;
            bindTo = method;
        }
        return method.call(bindTo, arg);
    },
    apply = $.applyFn = (method, bindTo, args) => {
        if (!args) {
            args = bindTo;
            bindTo = method;
        }
        return method.apply(bindTo, args);
    };
