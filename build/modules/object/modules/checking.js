/*
			This is for object checking is or isnot
			*/
//checking
var objectStringGenerate = function (name) {
		return `[object ${name}]`;
	},
	isSameObjectGenerator = (type) => {
		return (obj) => {
			return (hasValue(obj)) ? toStringCall(obj) === type : False;
		}
	},
	isDecimal = $.isDecimal = function (string) {
		return stringMatchCall(toStringCall(string), decimalCheck);
	},
	hasValue = $.hasValue = function (item) {
		return !isUndefined(item) && !isNull(item);
	},
	isUndefined = $.isUndefined = function (obj) {
		return obj === undefined;
	},
	isNull = $.isNull = function (obj) {
		return obj === null;
	},
	isAll = $.isAll = function(){
		var args=toArray(arguments),
			result=true,
			method=shiftArray(args);
		eachArray(args,(item, index, array, length, safe)=>{
			result=method(item);
			if(!result){
				safe.halt=True;
			}
		},True);
		return result;
	},
	isArray = $.isArray = arrayNative.isArray,
	isConstructor = $.isConstructor = (constructor) => {
		return (obj) => {
			return (hasValue(obj)) ? obj.constructor === constructor : False;
		};
	},
	isString = $.isString = isConstructor(stringNative),
	isNumber = $.isNumber = isConstructor(numberNative),
	isPlainObject = $.isPlainObject = function (obj) {
		return (hasValue(obj)) ? stringSliceCall(toStringCall(obj.constructor).trim(), 9, 16) === 'Object(' : False;
	},
	isFunction = $.isFunction = function (obj) {
		return (hasValue(obj)) ? obj instanceof functionNative : False;
	},
	has = $.has = (string, search) => {
		return (isArray(search)) ? apply(string.includes, string, search) : string.includes(search);
	},
	hasLength = $.hasLength = function (obj) {
		return !!getLength(obj);
	},
	isEmpty = $.isEmpty = function (obj) {
		if(isString(obj) || isArray(obj)){
			return hasLength(obj);
		}else if(isPlainObject(obj)){
			return !objectSize(obj);
		}
		return !hasValue(obj);
	},
	regexGenerator = (regexType) => {
		return (item) => {
			return (hasValue(item)) ? regexType.test(item) : False;
		};
	},
	isFileCSS = $.isFileCSS = regexGenerator(isCSSRegex),
	isFileJSON = $.isFileJSON = regexGenerator(isJSONRegex),
	isFileJS = $.isFileJS = regexGenerator(isJSRegex),
	extension = $.extension = (string) =>{
		return stringMatchCall(string,/\.([0-9a-z]+)/);
	},
	hasDot = $.hasDot = regexGenerator(hasDotRegex),
	getModelRootName = $.getModelRootName = function (string) {
		return splitCall(string, dotString)[0];
	},
	getModelProperty = $.getModelProperty = function (string) {
		return arrayLastItem(splitCall(string, slashString));
	},
	getModelName = $.getModelName = function (string) {
		return  get(arrayLastItem(splitCall(string, slashString)).replace(/\.js$/, ''), modelMethod);
	};
