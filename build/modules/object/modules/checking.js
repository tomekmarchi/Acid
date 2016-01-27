	/*
				This is for object checking is or isnot
				*/
	//checking
	var objectStringGenerate = function(name) {
	        return `[object ${name}]`;
	    },
	    regexptype = objectStringGenerate('RegExp'),
	    argsTag = objectStringGenerate('Arguments'),
	    arrayTag = objectStringGenerate('Array'),
	    boolTag = objectStringGenerate('Boolean'),
	    dateTag = objectStringGenerate('Date'),
	    errorTag = objectStringGenerate('Error'),
	    funcTag = objectStringGenerate('Function'),
	    mapTag = objectStringGenerate('Map'),
	    numberTag = objectStringGenerate('Number'),
	    objectTag = objectStringGenerate('Object'),
	    setTag = objectStringGenerate('Set'),
	    stringTag = objectStringGenerate('String'),
	    weakMapTag = objectStringGenerate('WeakMap'),
	    arrayBufferTag = objectStringGenerate('ArrayBuffer'),
	    float32Tag = objectStringGenerate('Float32Array'),
	    float64Tag = objectStringGenerate('Float64Array'),
	    int8Tag = objectStringGenerate('Int8Array'),
	    int16Tag = objectStringGenerate('Int16Array'),
	    int32Tag = objectStringGenerate('Int32Array'),
	    unit8Tag = objectStringGenerate('unit8Array'),
	    unit8ClampedTag = objectStringGenerate('unit8ClampedArray'),
	    unit16Tag = objectStringGenerate('unit16Array'),
	    unit32Tag = objectStringGenerate('unit32Array'),
	    isSameObjectGenerator = (type) => {
	        return (obj) => {
	            return toStringCall(obj) === type;
	        }
	    },
	    isRegex = isSameObjectGenerator(regexptype),
	    isArgs = isSameObjectGenerator(argsTag),
	    isBool = isSameObjectGenerator(boolTag),
	    isDate = isSameObjectGenerator(dateTag),
	    isError = isSameObjectGenerator(errorTag),
	    isMap = isSameObjectGenerator(mapTag),
	    isObject = isSameObjectGenerator(objectTag),
	    isSet = isSameObjectGenerator(setTag),
	    isWeakMap = isSameObjectGenerator(weakMapTag),
	    isFloat32 = isSameObjectGenerator(float32Tag),
	    isFloat64 = isSameObjectGenerator(float64Tag),
	    isInt8 = isSameObjectGenerator(int8Tag),
	    isInt16 = isSameObjectGenerator(int16Tag),
	    isInt32 = isSameObjectGenerator(int32Tag),
	    isUnit8 = isSameObjectGenerator(unit8Tag),
	    isUnit8clamped = isSameObjectGenerator(unit8ClampedTag),
	    isUnit16 = isSameObjectGenerator(unit16Tag),
	    isUnit32 = isSameObjectGenerator(unit32Tag),
	    isNative = function(obj) {
	        return hasValue(obj) ? has(toLowerCaseCall(toStringCall(obj)),'native') : false;
	    },
	    hasValue = function(n) {
	        return n !== undefined && n !== null;
	    },
	    isUndefined = function(obj) {
	        return obj === undefined;
	    },
	    isInt = (numberNative.isInteger) ? numberNative.isInteger : function(num) {
	        if (num % 1 === 0) {
	            return true;
	        }
	        return false;
	    },
	    isNull = function(obj) {
	        return obj === null;
	    },
	    isArray = function(object) {
	        return object instanceof arrayNative
	    },
	    isString = function(obj) {
	        return (hasValue(obj)) ? obj.constructor === stringNative : false;
	    },
	    isNumber = function(obj) {
	        return (hasValue(obj)) ? obj.constructor == numberNative : false;
	    },
	    isPlainObject = function(obj) {
	        return (hasValue(obj)) ? stringSliceCall(toStringCall(obj.constructor).trim(),9, 16) === 'Object(' : false;
	    },
	    isFunction = function(obj) {
	        return (hasValue(obj)) ? obj instanceof functionNative : false;
	    },
	    has = function(string, search) {
	        var value,
	            loopValue;
	        if (!isString(search)) {
	            each(search, function(item, key) {
	                loopValue = indexOfCall(string,item) != -1;
	                if (loopValue) {
	                    value = loopValue;
	                }
	            });
	        } else {
	            value = indexOfCall(string,search) != -1;
	        }
	        return value;
	    },
	    islength = function(obj) {
	        return !getLength(obj);
	    },
	    isEmpty = function(obj) {
	        if (hasValue(obj)) {
	            if (isPlainObject(obj)) {
	                return !islength(objectKeys(obj));
	            } else {
	                return !islength(obj);
	            }
	        }
	        return true;
	    },
	    isFileCSS = function(item) {
	        return (hasValue(item)) ? isCSSRegex.test(item) : false;
	    },
	    isFileJSON = function(item) {
	        return (hasValue(item)) ? isJSONRegex.test(item) : false;
	    },
	    isFileJS = function(item) {
	        return (hasValue(item)) ? isJSRegex.test(item) && !isFileJSON(item) : false;
	    },
	    hasDot = function(item) {
	        return (hasValue(item)) ? hasDotRegex.test(item) : false;
	    },
	    getModelRootName = function(string) {
	        return splitCall(string, dotString)[0];
	    },
	    getModelProperty = function(string) {
	        return arrayLastItem(splitCall(string, slashString))[0];
	    },
	    getModelName = function(string) {
	        var splitIt = splitCall(string, slashString);
	        return find(splitCall(splitIt[getLength(splitIt) - 1], '.js')[0], modelMethod);
	    };

	//export all checking functions
	$.isArray = isArray;
	$.isString = isString;
	$.isNumber = isNumber;
	$.isObject = isObject;
	$.isPlainObject = isPlainObject;
	$.isFunction = isFunction;
	$.isRegex = isRegex;
	$.isArgs = isArgs;
	$.isBool = isBool;
	$.isDate = isDate;
	$.isError = isError;
	$.isMap = isMap;
	$.isSet = isSet;
	$.isWeakMap = isWeakMap;
	$.isFloat32 = isFloat32;
	$.isFloat64 = isFloat64;
	$.isInt8 = isInt8;
	$.isInt16 = isInt16;
	$.isInt32 = isInt32;
	$.isUnit8 = isUnit8;
	$.isUnit8clamped = isUnit8clamped;
	$.isUnit16 = isUnit16;
	$.isUnit32 = isUnit32;
	$.isNative = isNative;
	$.isUndefined = isUndefined;
	$.isNaN = isNaN;
	$.isInt = isInt;
	$.isNull = isNull;
	$.isEmpty = isEmpty;
	$.isFileCSS = isFileCSS;
	$.isFileJSON = isFileJSON;
	$.isFileJS = isFileJS;
	$.hasDot = hasDot;
	$.getModelProperty = getModelProperty;
	$.getModelRootName = getModelRootName;
	$.hasValue = hasValue;
	$.has = has;
