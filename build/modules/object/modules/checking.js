/*
			This is for object checking is or isnot
			*/
//checking
var objectStringGenerate = function(name) {
        return `[object ${name}]`;
    },
    isSameObjectGenerator = (type) => {
        return (obj) => {
            return toStringCall(obj) === type;
        }
    },
    isDecimal = $.isDecimal = function() {
        return stringMatchCall(toStringCall(string), decimalCheck);
    },
    isNative = $.isNative = function(obj) {
        return hasValue(obj) ? has(toLowerCaseCall(toStringCall(obj)), 'native') : False;
    },
    hasValue = $.hasValue = function(item) {
        return !isUndefined(item) && !isNull(item);
    },
    isUndefined = $.isUndefined = function(obj) {
        return obj === undefined;
    },
    isNull = $.isNull = function(obj) {
        return obj === null;
    },
    isArray = $.isArray = arrayNative.isArray,
    isConstructor = $.isConstructor = (constructor) => {
        return (obj) => {
            return (hasValue(obj)) ? obj.constructor === constructor : False;
        };
    },
    isString = $.isString = isConstructor(stringNative),
    isNumber = $.isNumber = isConstructor(numberNative),
    isPlainObject = $.isPlainObject = function(obj) {
        return (hasValue(obj)) ? stringSliceCall(toStringCall(obj.constructor).trim(), 9, 16) === 'Object(' : False;
    },
    isFunction = $.isFunction = function(obj) {
        return (hasValue(obj)) ? obj instanceof functionNative : False;
    },
    has = $.has = (string, search) => {
        return (isArray(search))? apply(string.includes, string, search) : string.includes(search);
    },
    isLength = $.isLength = function(obj) {
        return !getLength(obj);
    },
    isEmpty = $.isEmpty = function(obj) {
        if (hasValue(obj)) {
            return (isPlainObject(obj))? !objectSize(obj) : !isLength(obj);
        }
        return True;
    },
    regexGenerator = (regexType) => {
        return (item) => {
            return (hasValue(item)) ? regexType.test(item) : False;
        };
    },
    isFileCSS = $.isFileCSS = regexGenerator(isCSSRegex),
    isFileJSON = $.isFileJSON = regexGenerator(isJSONRegex),
    isFileJS = $.isFileJS = regexGenerator(isJSRegex),
    hasDot = $.hasDot = regexGenerator(hasDotRegex),
    getModelRootName = $.getModelRootName = function(string) {
        return splitCall(string, dotString)[0];
    },
    getModelProperty = $.getModelProperty = function(string) {
        return arrayLastItem(splitCall(string, slashString));
    },
    getModelName = $.getModelName = function(string) {
        return find(arrayLastItem(splitCall(string, slashString)).replace(/\.js$/, ''), modelMethod);
    };
