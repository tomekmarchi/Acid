var getLength = $.getLength = (item) => {
		return item.length;
	},
	indexOfCall = (string, index) => {
		return string.indexOf(index);
	},
	ensureArray = $.ensureArray = (object) => {
		return (isArray(object))? object : [object];
	},
	ifInvoke = $.ifInvoke = function(){
		var args=toArray(arguments),
			method=shiftArray(args);
		return isFunction(method)? apply(method,args) : undefinedNative;
	},
	ifNotEqual = $.ifNotEqual = function(root,property,equalThis){
		return property? ((root[property] = root[property] || equalThis),root[property]): root;
	},
	/*
		String related
	*/
	generatePrototype = (funct) => {
		return functionPrototype.call.bind(funct);
	},
	substringCall = generatePrototype(stringPrototype.substring),
	substrCall = generatePrototype(stringPrototype.substr),
	stringSliceCall = generatePrototype(stringPrototype.slice),
	toLowerCaseCall = generatePrototype(stringPrototype.toLowerCase),
	toUpperCaseCall = generatePrototype(stringPrototype.toUpperCase),
	splitCall = generatePrototype(stringPrototype.split),
	stringRepeatCall = generatePrototype(stringPrototype.repeat),
	charAtCall = generatePrototype(stringPrototype.charAt),
	stringMatchCall = generatePrototype(stringPrototype.match),
	stringReplaceCall = generatePrototype(stringPrototype.replace),
	/*
		Regex Helpers
	*/
	testRegex = generatePrototype(regExpPrototype.test),
	/*
		Array Helpers
	*/
	concatArray = generatePrototype(arrayPrototype.concat),
	popArray = generatePrototype(arrayPrototype.pop),
	pushArray = generatePrototype(arrayPrototype.push),
	pushApply = $.pushApply = (array, arrayToPush) => {
		return apply(arrayPrototype.push, array, arrayToPush);
	},
	arraySliceCall = generatePrototype(arrayPrototype.slice),
	spliceArray = generatePrototype(arrayPrototype.splice),
	shiftArray = generatePrototype(arrayPrototype.shift),
	unShiftArray = generatePrototype(arrayPrototype.unshift),
	unShiftApply = $.unShiftApply = (array, arrayToPush) => {
		return apply(arrayPrototype.unshift, array, arrayToPush);
	},
	joinArray = generatePrototype(arrayPrototype.join),
	/*
		Object Helpers
	*/
	toStringCall = (item) => {
		return item.toString();
	},
	/*
		Function calls
	*/
	bindTo = $.bindTo = generatePrototype(functionPrototype.bind),
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
	},
	count = 0,
	uuidFree = [],
	uuidClosed = {},
	uuid = $.uuid = function (max) {
		var result = shiftArray(uuidFree);
		if (!hasValue(result)) {
			result = count;
			uuidClosed[result] = True;
			count++;
		}
		return result;
	},
	uuidRemove = uuid.remove = (id) => {
		uuidClosed[id] = null;
		pushArray(uuidFree,id);
	};
