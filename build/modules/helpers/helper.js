var getLength = $.getLength = (item) => {
		return item.length;
	},
	indexOfCall = (string, index) => {
		return string.indexOf(index);
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
	pushApply = $.pushApply = (array, arrayToPush) => {
		return apply(arrayPushMethod, array, arrayToPush);
	},
	pushArray = generatePrototype(arrayPrototype.push),
	arraySliceCall = generatePrototype(arrayPrototype.slice),
	spliceArray = generatePrototype(arrayPrototype.splice),
	unShiftArray = generatePrototype(arrayPrototype.unshift),
	shiftArray = generatePrototype(arrayPrototype.shift),
	popArray = generatePrototype(arrayPrototype.pop),
	joinArray = generatePrototype(arrayPrototype.join),
	arrayReduce = generatePrototype(arrayPrototype.reduce),
	arrayReduceRight = generatePrototype(arrayPrototype.reduceRight),
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
		var result = uuidFree.shift();
		if (!hasValue(result)) {
			result = count;
			uuidClosed[result] = True;
			count++;
		}
		return result;
	},
	uuidRemove = uuid.remove = (id) => {
		uuidClosed[id] = null;
		uuidFree.push(id);
	};
