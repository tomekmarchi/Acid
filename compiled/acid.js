/**
 * @name ACIDjs
 * @version 2.0 Stable
 * @authors
	Thomas Marchi
		@github https://github.com/tomekmarchi/
		@site https://tommarchi.com/
 * @copyright 2015 Thomas Marchi
 * @site http://acidjs.com
 * @github https://github.com/tomekmarchi/ACID
 * @email tomekmarchi@gmail.com
 */

(function(global) {
	"use strict";

	var $ = function(name, data) {
			return (cacheSuper || data ? data.import ? moduleMethod : modelMethod : get)(name, data || modelMethod);
		},
		cacheSuper;
	//avoid
	global.$ = global.ACID = $;

	$.super = (method) => {
		cacheSuper = method;
	};

	/*

		Native objects

	*/
	var arrayNative = Array,
		objectNative = Object,
		functionNative = Function,
		stringNative = String,
		json = JSON,
		mathNative = Math,
		booleanNative = Boolean,
		undefinedNative = undefined,
		weakMap = global.WeakMap,
		mapNative = global.Map,
		numberNative = Number,
		regExp = RegExp,
		parseIntNative = parseInt,
		consoleNative = console.log.bind(console),
		/*

			Prototypes

		*/
		prototypeString = 'prototype',
		objectPrototype = objectNative[prototypeString],
		arrayPrototype = arrayNative[prototypeString],
		stringPrototype = stringNative[prototypeString],
		functionPrototype = functionNative[prototypeString],
		regExpPrototype = regExp[prototypeString],
		/*
			Array.prototype Functions
		*/
		toArray = $.toArray = arrayNative.from.bind(arrayNative),
		/*
    	Object Functions
    */
		objectKeys = $.keys = objectNative.keys,
		objectIs = $.is = objectNative.is,
		objectAssign = $.assign = objectNative.assign,
		getOwnPropertyDescriptor = $.getPropDescrip = objectNative.getOwnPropertyDescriptor,
		defineProperty = $.defineProperty = objectNative.defineProperty,
		getOwnPropertyNames = $.getOwnPropertyNames = objectNative.getOwnPropertyNames,
		/*
			Boolean
		*/
		False = false,
		True = true,
		/*
			JSON
		*/
		stringify = json.stringify,
		jsonParse = json.parse,
		/*
			System Hardware Info
		*/
		systemCores = navigator.hardwareConcurrency;

	var bodyNode,
		selfWindow = window,
		documentNode = document;

	var classTest = /^.[\w_-]+$/,
		tagTest = /^[A-Za-z]+$/,
		regexSpace = /\s/,
		regexSpaceglobal = /\s/g,
		regexDot = /\./g,
		regexDash = /-/g,
		regexToPath = /\.|\[/,
		regexOpenBracket = /]/g,
		regexFowardslash = /\//g,
		regexUnderscore = /_/g,
		isJSRegex = /\.js$/,
		isCSSRegex = /\.css$/,
		isJSONRegex = /\.json$/,
		hasDotRegex = /\./,
		rawURLDecodeRegex = /%(?![\da-f]{2})/gi,
		andRegex = /&/g,
		lessThanRegex = /</g,
		moreThanRegex = />/g,
		doubleQuoteRegex = /"/g,
		decimalCheck = /\.|\+/,
		fileExtension = /\.([0-9a-z]+)/,
		slashRegex = /\//g;

	var dotString = '.',
		emptyString = '',
		slashString = '/',
		dashString = '-',
		underscoreString = '_',
		questionMarkString = '?',
		andString = '&',
		poundString = '#',
		spaceCharacter = ' ';

	var protocol = location.protocol,
		//websocket protocol type
		protocolSocket = ('protocol' === 'http:') ? 'ws' : 'wss',
		hostname = location.hostname;

	var getLength = $.getLength = (item) => {
			return item.length;
		},
		indexOfCall = (string, index) => {
			return string.indexOf(index);
		},
		ensureArray = $.ensureArray = (object) => {
			return (isArray(object)) ? object : [object];
		},
		ifInvoke = $.ifInvoke = function() {
			var args = toArray(arguments),
				method = shiftArray(args);
			return isFunction(method) ? apply(method, args) : undefinedNative;
		},
		ifNotEqual = $.ifNotEqual = function(root, property, equalThis) {
			return property ? ((root[property] = root[property] || equalThis), root[property]) : root;
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
		uuid = $.uuid = function(max) {
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
			pushArray(uuidFree, id);
		};

	//acid platform information
	$.info = {
		version: 2,
		host: {
			// EX http https
			protocol: protocol,
			// ws or wss
			protocolSocket: protocolSocket,
			//hostname
			name: hostname
		},
		hardware: {
			cores: systemCores
		}
	};

	var eventAdd = $.eventAdd = function(obj, name, func, capture) {
			obj.addEventListener(name, func, capture);
			return obj;
		},
		//remove event
		eventRemove = $.eventRemove = function(obj, name, func, capture) {
			obj.removeEventListener(name, func, capture);
			return obj;
		};

	$.isEnter = function(event) { //checks if this an enter key
		var i = event.keyCode;
		if (i == 13) {
			return True;
		}
		return False;
	}


	//get characters in a range in a string
	var insertInRange = $.insertInRange = (text, start, end, insert) => {
			return stringSliceCall(text, 0, start) + insert + stringSliceCall(text, end, getLength(text));
		},
		//start index from right of string
		rightString = $.rightString = function(text, a) {
			return text[getLength(text) - 1 - a];
		},
		chunkString = $.chunkString = (string, size) => {
			return stringMatchCall(string, new regExp('(.|[\r\n]){1,' + size + '}', 'g'));
		};

	//replace all items in an array with a string
	var replaceWithList = $.replaceWithList = (string, array, toReplace) => {
		return stringReplaceCall(string, new regExp('\\b' + joinArray(array, '|') + '\\b', 'gi'), toReplace);
	};

	//raw URL encode
	var rawURLDecode = $.rawURLDecode = (string) => {
			return decodeURIComponent(stringReplaceCall(string, rawURLDecodeRegex, function() {
				return '%25';
			}));
		},
		//html entities
		createHtmlEntities = $.htmlEntities = (string) => {
			string = stringReplaceCall(string, andRegex, '&amp;');
			string = stringReplaceCall(string, lessThanRegex, '&lt;');
			string = stringReplaceCall(string, moreThanRegex, '&gt;');
			string = stringReplaceCall(string, doubleQuoteRegex, '&quot;');
			return stringReplaceCall(string, slashRegex, '&quot;');
		},
		sanitize = $.sanitize = (string) => {
			return createHtmlEntities(rawURLDecode(string));
		},
		//decode URI Component
		duc = $.duc = decodeURIComponent,
		//encode URI Component
		euc = $.euc = encodeURIComponent;

	//tokenize split by groups of characters that are not whitespace
	$.tokenize = function(string) {
		return stringMatchCall(string, /\S+/g) || [];
	};
	//match by alphanumeric+underscore
	$.words = function(string) {
		return stringMatchCall(string, /\w+/g) || [];
	};

	//uppercase first letter for all
	var ucFirstChar = (string) => {
			return toUpperCaseCall(charAtCall(string, 0));
		},
		addRest = $.restString = (string, num) => {
			return substrCall(string, num || 1);
		},
		ucFirst = $.ucFirst = function(string) {
			return ucFirstChar(string) + addRest(string);
		},
		ucFirstAll = $.ucFirstAll = function(string) {
			return joinArray(mapArray(splitCall(string, spaceCharacter), function(item) {
				return ucFirst(item);
			}), ' ');
		},
		//uppercase first letter lower case the rest
		ucFirstOnly = $.ucFirstOnly = function(string) {
			return ucFirstChar(string) + toLowerCaseCall(addRest(string));
		},
		//uppercase first letter lower case the rest all
		ucFirstOnlyAll = $.ucFirstOnlyAll = function(string) {
			return joinArray(mapArray(splitCall(string, spaceCharacter), function(item) {
				return ucFirstOnly(item);
			}), ' ');
		},
		//Returns the camel cased string
		camelCase = $.camel = (string) => {
			string = ucFirstAll(
				stringReplaceCall(
					stringReplaceCall(string, regexUnderscore, spaceCharacter),
					regexDash, spaceCharacter)
			);
			return toLowerCaseCall(charAtCall(string, 0)) + stringReplaceCall(substrCall(string, 1), regexSpaceglobal, emptyString);
		},
		setStringCase = (string, caseLetter) => {
			return stringReplaceCall(stringReplaceCall(toLowerCaseCall(string), regexUnderscore, spaceCharacter), regexSpaceglobal, caseLetter);
		},
		//Returns the kebab cased string
		kebabCase = $.kebab = (string) => {
			return setStringCase(string, dashString);
		},
		//Returns the snake cased string
		snakeCase = $.snake = (string) => {
			return setStringCase(string, dashString);
		},
		//returns the trunced version of the string
		truncate = $.truncate = (string, amount) => {
			if (getLength(string) > amount) {
				string = stringSliceCall(string, 0, amount);
			}
			return string;
		},
		//returns the trunced version of the string starting from the right
		truncateLeft = $.truncateLeft = (string, amount) => {
			var length = getLength(string);
			if (length > amount) {
				string = substrCall(string, amount, length);
			}
			return string;
		},
		//returns the trunced version of the string
		truncateWord = $.truncateWord = (string, amount) => {
			var cut = indexOfCall(string, ' ', amount);
			if (amount != -1) {
				string = substringCall(string, 0, amount);
			}
			return string;
		};

	//add paramaters to a URL
	var addParam = $.addParam = (url, newItem) => {
		if (getLength(url) && has(url, questionMarkString)) {
			if (arrayLastItem(url) === questionMarkString) {
				url = url + newItem;
			} else {
				url = url + andString + newItem;
			}
		} else {
			url = questionMarkString + newItem;
		}
		return url;
	};

	//shared functions
	//Flattens a nested array. Pass level to flatten up to a depth;
	var flatten = $.flatten = (array, level) => {
			for (var i = 0; i < (level || 1); i++) {
				array = array.reduce((previousValue, currentValue, index, array) => {
					return concatArray(previousValue, (level) ?
						ensureArray(currentValue) : (isArray(currentValue)) ? flatten(currentValue) : currentValue);
				}, []);
			}
			return array;
		},
		//cache for function that removes Falsey values from array or object
		compact = $.compact = (array) => {
			return filter(array, (item) => {
				return isString(item) && !getLength(item) ? undefinedNative : item;
			});
		},
		arraySortToObject = (func, array, object) => {
			var object = object || {};
			eachArray(array, (item, key) => {
				func(item, key, object);
			});
			return object;
		};

	//Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.
	var arrayChunk = $.chunk = (array, size = 1, index = 0) => {
		return filterArray(new arrayNative(ceilMethod(getLength(array) / size)), (item, i) => {
			return chunkSlice(array, index, (index += size));
		});
	};

	/**
	 * Removes all elements from the array.
	 *
	 * @function Array#clear
	 *
	 * @example
	 * var array = [1, 2, 3];
	 * array.clear();
	 * console.log(array);
	 * // -> []
	 */
	var clearArray = $.clear = function(array) {
		array.length = 0;
		return array;
	};

	/**
	 * Creates a shallow copy of the array.
	 *
	 * @function Array#clone
	 * @returns {Array} A clone of the array.
	 *
	 * @example
	 * var a = [1, 2, 3];
	 * var b = a.clone();
	 * console.log(b, b === a);
	 * // -> [1, 2, 3] False
	 */
	var cloneArray = $.cloneArray = arraySliceCall;

	//Sorts a list into groups and returns a count for the number of objects in each group.
	$.countBy = function(array, funct) {
		var object = {},
			result;
		mapObject(array, (item) => {
			result = funct(item);
			if (!object[result]) {
				object[result] = 0;
			}
			object[result]++;
		});
		return object;
	};

	/*

	$.countBy([4.3, 6.1, 6.4],function(numb) {
	  return Math.floor(numb);
	});

	//{ '4': 1, '6': 2 }


	*/

	//create an array from a range
	var range = $.range = function(start, stop, increment = 1, fliped) {
		if (increment === 0) {
			return sameRange(start, stop);
		}
		if (!hasValue(stop)) {
			stop = start;
			start = 0;
		}
		var array = (fliped) ? [] : [start];
		if (start > stop) {
			while (start > stop) {
				start = start - increment;
				if (start > stop) {
					pushArray(array, start);
				}
			}
		} else if (start < stop) {
			while (start < stop) {
				start = start + increment;
				if (start < stop) {
					pushArray(array, start);
				}
			}
		}
		if (fliped) {
			pushArray(array, start);
		}
		return array;
	};

	var sameRange = (start, stop) => {
		stop = (stop < 0) ? stop * -1 : stop;
		var array = [],
			i = 1;
		while (i < stop) {
			i++;
			pushArray(array, start);
		}
		return array;
	};

	var rangeRight = $.rangeRight = function(start = 0, stop, increment) {
		if (increment === 0) {
			return sameRange(start, stop);
		}
		if (!stop) {
			stop = start;
			start = 0;
		} else if (increment < 0 && start > stop) {
			increment = increment * -1;
		}
		return range(stop, start, increment, True);
	}

	//create an array from a range
	$.rangeTo = function(start, stop, increment) {
		return range(start, stop + (increment || 1), increment);
	};

	//Creates an array excluding all values of the provided arrays using SameValueZero for equality comparisons.
	var arrayDifference = $.difference = function(array, compare) {
		return filterArray(array, (item) => {
			if (!has(item, compare)) {
				return item;
			}
		});
	};

	//Removes elements from array corresponding to the given indexes and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
	var drop = $.drop = function(array, amount, length) {
		return spliceArray(array, amount, length || getLength(array));
	};

	//Removes elements from array corresponding to the given indexes (from right) and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
	$.dropRight = function(array, amount) {
		return drop(array, 0, getLength(array) - amount);
	};

	/*
		Each Methods
		Array
			each,eachWhileFalse,eachWhile,whileLength,eachRight
		Object
			Each
		Number
			Each
	*/
	//loop through an array of items
	var safeModeCall = (safeMode) => {
			if (safeMode) {
				if (safeMode.halt) {
					return False;
				} else if (safeMode.skip) {
					safeMode.skip = false;
					return True;
				}
			}
		},
		whileGenerator = (mainFunc, optBool) => {
			return function(array, fn, includeLastResult) {
				return mainFunc(array, function(item, index, array, length, results, safeMode) {
					if (!safeMode) {
						safeMode = results;
					}
					var result = apply(fn, fn, arguments);
					if (result === optBool) {
						safeMode.halt = True;
						if (includeLastResult) {
							return result;
						}
					} else {
						return result;
					}
				}, True);
			}
		},
		generateMap = (method) => {
			return function(array, fn, safeMode) {
				var results = [],
					returned;
				eachArray(array, function(item, index, array, length, safe) {
					returned = fn(item, index, array, length, results, safe);
					(hasValue(returned) ? results[index] = returned : False)
				}, safeMode);
				return results;
			};
		},
		filterArray = $.filterArray = function(array, fn, safeMode) {
			var results = [],
				returned;
			eachArray(array, function(item, index, array, length, safe) {
				returned = fn(item, index, array, length, results, safe);
				(hasValue(returned) ? pushArray(results, returned) : False)
			}, safeMode);
			return results;
		},
		//loop while the count is less than the length of the array
		whileLength = $.mapWhileLength = function(array, fn) {
			//an array of results will be returned
			var results = [],
				length = getLength(array),
				index = 0;
			while (length) {
				results[index] = fn(array[index], index, array, length, results);
				length = getLength(array);
				index++;
			}
			return results;
		},
		//loop through based on number
		times = $.times = function(start, end, fn) {
			if (!fn) {
				var fn = end,
					end = start,
					start = 0;
			}
			for (var results = [], returned; start < end; start++) {
				//call function get result
				returned = fn(start, end, results);
				(hasValue(returned) ? pushArray(results, returned) : False)
			}
			return results;
		},
		eachArrayRight = $.eachArrayRight = function(array, fn, safeMode) {
			safeMode = (safeMode) ? {} : safeMode;
			for (var safeModeResult, length = getLength(array), i = length - 1; i >= 0; i--) {
				safeModeResult = safeModeCall(safeMode);
				if (safeModeResult) {
					continue;
				} else if (safeModeResult === False) {
					break;
				}
				fn(array[i], i, array, length, safeMode);
			}
		},
		eachArray = $.eachArray = function(array, fn, safeMode) {
			safeMode = (safeMode) ? {} : safeMode;
			for (var safeModeResult, length = getLength(array), i = 0; i < length; i++) {
				safeModeResult = safeModeCall(safeMode);
				if (safeModeResult) {
					continue;
				} else if (safeModeResult === False) {
					break;
				}
				fn(array[i], i, array, length, safeMode);
			}
		},
		mapArray = $.mapArray = generateMap(eachArray),
		mapArrayRight = $.mapArrayRight = generateMap(eachArrayRight),
		//loop while the returned result is False
		eachWhileFalse = $.eachWhileFalse = whileGenerator(eachArray, True),
		//each while the check function is True
		eachWhile = $.eachWhile = whileGenerator(eachArray, False),
		//loop while the returned result is False
		whileFalse = $.mapWhileFalse = whileGenerator(mapArray, True),
		//loop through array backwards aka from the right while true
		mapArrayRightWhile = $.mapArrayRightWhile = whileGenerator(mapArrayRight, False),
		//each while the check function is True
		mapWhile = $.mapWhile = whileGenerator(mapArray, False);

	/*
	 	Determines if the arrays are equal by doing a shallow comparison of their elements using strict equality.
	*/
	var isEqualArray = $.isEqualArray = (original, array) => {
		var result = True;
		if (getLength(array) !== getLength(original)) {
			result = False;
		} else {
			eachWhile(array, (item, index) => {
				if (original[index] !== item) {
					result = False;
					return result;
				}
			});
		}
		return result;
	};

	/*
		Performs a deep comparison between object and source to determine if object contains equivalent property values.
	*/

	var isEqualArrayDeep = $.isEqualArrayDeep = (original, array) => {
		var result = True;
		if (getLength(array) !== getLength(original)) {
			result = False;
		} else {
			eachWhile(array, (item, index) => {
				result = isMatch(item, original[index])
				return result;
			});
		}
		return result;
	};

	var find = $.find = (array, func) => {
			var result;
			eachWhileFalse(array, (item, key) => {
				return result = func(item, key);
			});
			return result;
		},
		findItem = $.findItem = (array, index, name = 'id', returnKey) => {
			return find(array, (item, key) => {
				if (item[name] == index) {
					return (returnKey) ? key : item;
				}
			});
		},
		findIndex = $.findIndex = (array, index, name = 'id') => {
			return findItem(array, index, name, True);
		};

	//Returns the first element of an array. Passing num will return the first n elements of the array.
	var firstItem = $.first = function(array, num) {
		return (num) ? arraySliceCall(array, 0, num) : array[0];
	};

	function returnFlow(method) {
		return function() {
			var funcs = flatten(toArray(arguments));
			console.log(funcs);
			return function wrapped() {
				var args = toArray(arguments),
					value = [];
				method(funcs, (item) => {
					value[0] = apply(item, wrapped, value[0] ? value : args);
				});
				return value[0];
			};
		};
	}
	//Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
	$.flow = returnFlow(eachArray),
		//Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
		$.flowRight = returnFlow(eachArrayRight);

	/*
		Splits a collection into sets, grouped by the result of running each value through iteratee.
	*/
	$.groupBy = function(array, funct) {
		return arraySortToObject = ((item, index, object) => {
			let results = funct(item);
			if (!object[results]) {
				object[results] = [];
			}
			pushArray(object[results], item);
		}, array);
	};

	//Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know your keys are unique.
	$.indexBy = function(array, index) {
		return arraySortToObject = ((item, key, object) => {
			object[item[index]] = item;
		}, array);
	};

	var generateArrayRange = (method) => {
			return (array) => {
				array = cloneArray(array);
				method(array);
				return array;
			};
		},
		arrayInitial = $.initial = generateArrayRange(popArray),
		arrayRest = $.rest = generateArrayRange(shiftArray);

	//Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
	/**
	 * Returns an new array that is the [set intersection](http://en.wikipedia.org/wiki/Intersection_(set_theory))
	 * of the array and the input array(s).
	 *
	 * @function Array#intersect
	 * @param {...Array} *arrays - A variable number of arrays.
	 * @returns {Array} The new array of unique values shared by all of the arrays.
	 *
	 * @example
	 * [1, 2, 3].intersect([2, 3, 4]);
	 * // -> [2, 3]
	 *
	 * [1, 2, 3].intersect([101, 2, 50, 1], [2, 1]);
	 * // -> [1, 2]
	 */
	$.intersect = function() {
		var yes, args = arguments;
		return filterArray(args[0], (item) => {
			yes = true;
			eachArray(args, (otherItem) => {
				if (!has(otherItem, item)) {
					yes = false;
				}
			});
			if (yes) {
				return item;
			}
		});
	};

	//Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
	$.invoke = function(array, method, args) {
		return mapArray(array, (item) => {
			return apply(item[method], item, args);
		});
	};

	//get largest number from array
	$.largest = (array) => {
		return apply(mathNativeMax, mathNative, array);
	};

	//Returns the last element of an array. Passing n will return the last n elements of the array.
	var arrayLastItem = $.last = function(array, indexFrom) {
		var length = getLength(array);
		return (indexFrom) ? arraySliceCall(array, length - indexFrom, length) : array[length - 1];
	};

	/**
	 * Sorts an array in place using a numerical comparison algorithm
	 * (sorts numbers from lowest to highest) and returns the array.
	 *
	 * @function Array#numsort
	 * @returns {Array} The array this method was called on.
	 *
	 * @example
	 * var files = [10, 0, 2, 1];
	 * files.numsort();
	 * console.log(files);
	 * // -> [0, 1, 2, 3]
	 */
	$.numSort = function(array) {
		return array.sort(numericalCompare);
	};

	//Converts arrays into objects.
	$.object = function(values, keys) {
		return arraySortToObject((item, index, object) => {
			object[keys[index]] = item;
		}, values);
	};

	//Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
	$.partition = (array, funct) => {
		var temp = [];
		return [filterArray(array, (item, index) => {
			return funct(item) ? item : pushArray(temp, item) && undefinedNative;
		}), temp];
	};

	//Pluck an attribute from each object in an array.
	var pluck = $.pluck = function(array, pluckThis) {
		return mapArray(array, (item, index) => {
			return isArray(pluckThis) ? arraySortToObject((pluckItem, pluckKey, object) => {
				object[pluckItem] = item[pluckItem];
			}, pluckThis) : item[pluckThis];
		});
	};

	/**
	 * Sorts an array in place using a reverse numerical comparison algorithm
	 * (sorts numbers from highest to lowest) and returns the array.
	 *
	 * @function Array#rnumsort
	 * @returns {Array} The array this method was called on.
	 *
	 * @example
	 * var files = [10, 0, 2, 1];
	 * files.rnumsort();
	 * console.log(files);
	 * // -> [3, 2, 1, 0]
	 */
	$.rNumSort = function(array) {
		return array.sort(numericalCompareReverse);
	};
	/**
	 * Removes all occurrences of the passed in items from the array and returns the array.
	 *
	 * __Note:__ Unlike {@link Array#without|`.without()`}, this method mutates the array.
	 *
	 * @function Array#remove
	 * @param {...*} *items - Items to remove from the array.
	 * @returns {Array} The array this method was called on.
	 *
	 * @example
	 * var array = [1, 2, 3, 3, 4, 3, 5];
	 *
	 * remove(array,1);
	 * // -> [2, 3, 3, 4, 3, 5]
	 *
	 * remove(array,3);
	 * // -> [2, 4, 5]
	 *
	 * remove(array,[2, 5]);
	 * // -> [4]
	 */
	$.remove = function(array, args) {
		var isFN = isFunction(args);
		args = ensureArray(args);
		eachArray(array, (item, index) => {
			if ((isFN) ? args(item) : has(args, item)) {
				spliceArray(array, index, 1);
			}
		});
		return array;
	};

	//start from end array using a as index
	$.right = function(array, a) {
		return array[getLength(array) - 1 - a];
	};

	//Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
	$.sample = function(array, setAmount) {
		if (setAmount) {
			var temp = toArray(array);
			return mapWhile(temp, (item, index, length) => {
				return spliceArray(temp, roundMethod(randomMethod() * (length - 1)), 1)[0];
			});
		}
		return array[roundMethod(randomMethod() * (getLength(array)))];
	};

	//shuffle an array and return a new array
	$.shuffle = function(array) {
		var temp = toArray(array);
		return whileLength(temp, () => {
			return spliceArray(temp, randomMethod(randomMethod() * (getLength(temp) - 1)), 1)[0];
		});
	};

	//get smallest number from array
	$.smallest = function(item) {
		return apply(mathNative.min, mathNative, item);
	};
	/*
		Perform alphabetical sort on collection on provided key name
	*/
	$.sortAlpha = (collection, key) => {
		var currentKey,
			nextKey;
		collection.sort((current, next) => {
			currentKey = current[key];
			nextKey = next[key];
			return (currentKey < nextKey) ? -1 : (currentKey > nextKey) ? 1 : 0;
		});
		return collection;
	};

	//Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order.
	$.sortedIndex = function(array, n) {
		var min = 0;
		eachArray(array, (item, index) => {
			if (n > item) {
				min = index;
			}
		});
		if (min > 0) {
			min = min + 1;
		}
		return min;
	};

	/**
	 * Adds all values in an array
	 * @param      {Array}   Array of numbers or numbers as string.
	 * @param      {Number}   Starting number
	 * @return     {Number} returns the sum of the array
	 */
	var sumOf = $.sumOf = function(array, result = 0) {
		each(array, (item, key) => {
			result = (item) ? result + (isString(item) ? numberNative(item) : item) : result;
		});
		return result;
	};

	//Creates a slice of array with n elements taken from the beginning.
	$.take = function(array, amount) {
		return arraySliceCall(array, 0, amount);
	};

	//Creates a slice of array with n elements taken from the end.
	$.takeRight = function(array, amount) {
		return spliceArray(array, getLength(array) - amount, amount);
	};

	//Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
	$.union = function() {
		var result = [];

		eachArray(arguments, (array) => {
			eachArray(array, (item) => {
				if (has(result, item)) {
					pushArray(result, item);
				}
			});
		});

		return result;
	};

	var chunkSlice = (array, start, end) => {
			return mapArray(new arrayNative(mathNative.min(end, getLength(array)) - start), (item, index) => {
				return array[start + index];
			});
		},
		numericalCompare = (a, b) => {
			return a - b;
		},
		numericalCompareReverse = (a, b) => {
			return b - a;
		},
		xorBase = (a, b) => {
			return mapArray(concatArray(a, b), (item, index, array) => {
				if (!has(b, item) && indexOfCall(array, item) < 0) {
					return item;
				}
			});
		},
		onlyUnique = (value, index, self) => {
			return self.indexOf(value) === index;
		},
		uniqueArray = $.uniq = (array, isSorted) => {
			return (isSorted) ? mapArray(array, (item, index) => {
				if (item !== array[index - 1]) {
					return item;
				}
			}) : array.filter(onlyUnique);
		};

	//Returns a copy of the array with all instances of the values removed.
	$.without = function(array, args) {
		var isFN = isFunction(args);
		args = ensureArray(args);
		return mapArray(array, (item, index) => {
			if ((isFN) ? args(item) : has(args, item)) {
				return item;
			}
		});
	};

	//Creates an array that is the symmetric difference of the provided arrays. See Wikipedia for more details.
	$.xor = function(arrayOG) {
		var numArgs = getLength(arguments),
			result;

		if (!numArgs) {
			return uniqueArray(arrayOG);
		}

		result = xorBase(arrayOG, arguments[0]);

		eachArray(arguments, (item) => {
			result = xorBase(result, item);
		});

		return result;
	};

	//Merges together the values of each of the arrays with the values at the corresponding position.
	$.zip = function() {
		var args = arguments;
		return mapArray(args[0], function(arraySet) {
			return mapArray(args, (arraySet) => {
				return shiftArray(arraySet);
			});
		});
	};
	//unzip the array of zipped arrays [["fred",30,True],["barney",40,False]]
	$.unZip = function(array) {
		return mapArray(array[0], (item) => {
			return mapArray(array, (arraySet) => {
				return shiftArray(arraySet);
			});
		});
	};


	var assignDeep = $.assignDeep = (object, otherObject, mergeArrays) => {
		eachObject(otherObject, (item, key) => {
			(isPlainObject(item) && isPlainObject(object[key]) ? assignDeep(object[key], item, mergeArrays) : mergeArrays && isArray(item) && isArray(object[key]) ? pushApply(object[key], item) : object[key] = item);
		});
		return object;
	};

	/*
				This is for object checking is or isnot
				*/
	//checking
	var objectStringGenerate = function(name) {
			return `[object ${name}]`;
		},
		isSameObjectGenerator = (type) => {
			return (obj) => {
				return (hasValue(obj)) ? toStringCall(obj) === type : False;
			}
		},
		isDecimal = $.isDecimal = function(string) {
			return stringMatchCall(toStringCall(string), decimalCheck);
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
		isAll = $.isAll = function() {
			var args = toArray(arguments),
				result = true,
				method = shiftArray(args);
			eachArray(args, (item, index, array, length, safe) => {
				result = method(item);
				if (!result) {
					safe.halt = True;
				}
			}, True);
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
		isPlainObject = $.isPlainObject = function(obj) {
			return (hasValue(obj)) ? stringSliceCall(toStringCall(obj.constructor).trim(), 9, 16) === 'Object(' : False;
		},
		isFunction = $.isFunction = function(obj) {
			return (hasValue(obj)) ? obj instanceof functionNative : False;
		},
		has = $.has = (string, search) => {
			return (isArray(search)) ? apply(string.includes, string, search) : string.includes(search);
		},
		isLength = $.isLength = function(obj) {
			return !getLength(obj);
		},
		isEmpty = $.isEmpty = function(obj) {
			if (isString(obj) || isArray(obj)) {
				return isLength(obj)
			} else if (isPlainObject(obj)) {
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
		extension = $.extension = (string) => {
			return stringMatchCall(string, /\.([0-9a-z]+)/);
		},
		hasDot = $.hasDot = regexGenerator(hasDotRegex),
		getModelRootName = $.getModelRootName = function(string) {
			return splitCall(string, dotString)[0];
		},
		getModelProperty = $.getModelProperty = function(string) {
			return arrayLastItem(splitCall(string, slashString));
		},
		getModelName = $.getModelName = function(string) {
			return get(arrayLastItem(splitCall(string, slashString)).replace(/\.js$/, ''), modelMethod);
		};

	$.compactKeys = (object) => {
		var keys = [];
		each(object, (item, key) => {
			if (item) {
				pushArray(keys, key);
			}
		});
		return keys;
	};

	//loop through an object
	var mapObject = $.mapObject = (object, fn) => {
			var results = {};
			eachObject(object, function(item, key) {
				results[key] = apply(fn, arguments);
			});
			return results;
		},
		filterObject = $.filterObject = (object, fn) => {
			var results = {},
				result;
			eachObject(object, function(item, key) {
				result = apply(fn, arguments);
				if (hasValue(result)) {
					results[key] = result;
				}
			});
			return results;
		},
		eachObject = $.eachObject = (object, fn) => {
			eachArray(objectKeys(object), (key, index, array, len) => {
				fn(object[key], key, object, len);
			});
		},
		forEach = $.forEach = (array, funct, optional) => {
			array.forEach(funct, optional);
			return array;
		},
		mapProperty = $.mapProperty = (array, funct) => {
			var object = {};
			eachArray(getOwnPropertyNames(array), (item, key, length) => {
				object[item] = funct(array[item], item, array, length, object);
			});
			return object;
		},
		forIn = $.forIn = (object, fn) => {
			var results = {};
			for (var key in object) {
				results[key] = fn(object[key], key, object, results);
			}
			return results;
		};

	/*
		Perform check on object to ensure all keys listed are present on the object.
	*/
	var hasKeys = $.hasKeys = (object, keys) => {
		var flag = False;
		eachWhile(keys, (key) => {
			flag = hasValue(object[key]);
			return flag
		});
		return flag;
	};
	/*
		Perform check on object to ensure any of the keys listed are present on the object.
	*/
	var hasAnyKeys = $.hasAnyKeys = (object, keys) => {
		var flag = False;
		eachWhileFalse(keys, (key) => {
			flag = hasValue(object[key]);
			return flag
		});
		return flag;
	};

	/*
		Returns a copy of the object where the keys have become the values and the values the keys. For this to work, all of your object's values should be unique and string serializable.
	*/
	var invert = $.invert = (thisObject, object) => {
		object = object || {};
		eachObject(thisObject, (item, key) => {
			object[item] = key;
		});
		return object;
	};

	/*
		Performs a deep comparison on listed property values
		props will default to first objects
	*/
	var isPropsEqual = $.isPropsEqual = (object, compareObject, props) => {
		var result = False;
		eachWhile(props || objectKeys(object), (key) => {
			result = isMatch(object[key], compareObject[key])
			return result;
		});
		return result;
	};

	/*
		Creates a function that performs a partial deep comparison between a given object and source, returning true if the given object has equivalent property values, else false.
	*/
	$.matches = (object) => {
		var objectsKeys = objectKeys(object);
		return (compareObject) => {
			return isPropsEqual(object, compareObject, objectsKeys);
		};
	};

	/*
		Performs a deep comparison between object and source to determine if object contains equivalent property values.
	*/

	var isPropsEqualDeep = $.isPropsEqualDeep = (object, compareObject) => {
		var result = False;
		if (isEqualArray(objectKeys(object), objectKeys(compareObject))) {
			eachWhile(objectKeys(object), (key) => {
				result = isMatch(object[key], compareObject[key])
				return result;
			});
		}
		return result;
	};

	/*
		Performs a deep comparison between object and source to determine if object contains equivalent property values.
	*/

	var isMatch = $.isMatch = (object, compareObject) => {
		var result = False;
		if (object === compareObject) {
			result = True;
		}
		if (toStringCall(object) === toStringCall(compareObject)) {
			if (isPlainObject(object)) {
				result = isPropsEqualDeep(object, compareObject);
			} else if (isArray(object)) {
				result = isEqualArrayDeep(object, compareObject);
			}
		}
		return result;
	};

	/*
		Return a copy of the object, filtered to omit the blacklisted keys (or array of keys). Alternatively accepts a predicate indicating which keys to omit.
	*/
	var omit = $.omit = (originalObject, array) => {
		return filterObject(originalObject, (item, key) => {
			if (!has(array, key)) {
				return item;
			}
		});
	};

	/*
		pick specific properties, listed in an array, from an object and a new object is returned with those specfic properties.
	*/
	var pick = $.pick = (array, originalObject, newObject) => {
		return arraySortToObject((item, key, object) => {
			object[item] = originalObject[item];
		}, array, newObject);
	};

	/*
		Return the number of values in the list.
	*/
	var objectSize = $.size = (object) => {
		return getLength(objectKeys(object));
	};

	//copy an object ES6 + ES5
	$.stringify = stringify;

	$.zipObject = function(keys, values, object) {
		return arraySortToObject((item, index, object) => {
			object[item] = values[index];
		}, keys, object);
	};
	$.unZipObject = function(object) {
		var keys = [],
			values = [];
		eachObject(object, (item, key) => {
			pushArray(keys, key);
			pushArray(values, item);
		});
		return [keys, values];
	};


	//Creates a function that accepts up to n arguments ignoring any additional arguments. The 2nd argument will be binded if none the initial new function will be.
	$.ary = function(funct, amount, bind) {
		return function() {
			return apply(funct, bind || funct, toArray(arguments).splice(0, amount));
		};
	};

	/*
		Replace mode will overwrite the original plainObject or Array
	*/
	var bindAll = $.bindAll = (bindThese, withThis, replaceMode) => {
		return replaceMode ? (each(bindThese, (item, key) => {
			if (isFunction(item)) {
				bindThese[key] = bindTo(item, withThis);
			}
		}), bindThese) : map(bindThese, (item) => {
			return isFunction(item) ? bindTo(item, withThis) : item;
		});
	};

	let addChain = (chain, addToChain) => {
		each(addToChain, (item, key) => {
			chain.methods[key] = function() {
				var args = toArray(arguments);
				unShiftArray(args, chain.value);
				apply(item, args);
				return chain.methods;
			};
		});
		return chain;
	};
	$.chain = function(methods) {
		var chain = (value) => {
			chain.value = value;
			return chain.methods;
		};
		objectAssign(chain, {
			methods: {},
			add: (addToChain) => {
				return addChain(chain, addToChain);
			},
			done: () => {
				var value = chain.value;
				chain.value = null;
				return value;
			}
		});
		chain.add(methods);
		return chain;
	};

	$.curry = function(funts) {
		var argsLength = getLength(funts),
			args = [],
			curry = function() {
				eachArray(arguments, (item) => {
					pushArray(args, item);
				});
				return curry;
			};
		curry.result = () => {
			var results = apply(funts, curry, args);
			args = [];
			return results;
		};
		return curry;
	};

	/*

		var curried=function(a,b,c){
			return [a,b,c];
		}.curry();

		curried(1)(2)(3);
		// → [1, 2, 3]

		curried(1, 2)(3);
		// → [1, 2, 3]

		curried(1, 2, 3);
		// → [1, 2, 3]

	*/

	$.curryRight = function(funts) {
		var argsLength = getLength(funts),
			args = [],
			curry = function() {
				eachArray(arguments, (item) => {
					unShiftArray(args, item);
				});
				return curry;
			};
		curry.result = () => {
			var results = apply(funts, curry, args);
			args = [];
			return results;
		};
		return curry;
	};

	/*

		curried(1)(2)(3);
		// → [1, 2, 3]

		curried(1, 2)(3);
		// → [1, 2, 3]

		curried(1, 2, 3);
		// → [1, 2, 3]

	*/

	$.method = (string) => {
		return (item) => {
			return get(isArray(string) ? joinArray(string, dotString) : string, item);
		};
	};

	//Creates a function that negates the result of the predicate func. The func predicate is invoked with the this binding and arguments of the created function.
	$.negate = (func) => {
		return function() {
			return apply(func, func, toArray(arguments)) ? False : True;
		};
	};

	$.nthArg = (num) => {
		return function() {
			var args = arguments;
			if (num < 0) {
				num = args.length - (num * -1);
			}
			return args[num];
		}
	};

	//Creates a function that is restricted to execute func once. Repeat calls to the function will return the value of the first call. The func is executed with the this binding of the created function.
	$.once = (fn) => {
		var value;
		return function named() {
			if (!value) {
				value = apply(fn, named, arguments);
			}
			return value;
		};
	};

	//Creates a function that executes func, with the this binding and arguments of the created function, only after being called n times.
	var afterFn = $.after = (amount, fn) => {
		return function named() {
			if (--amount < 0) {
				return apply(fn, named, arguments);
			}
		};
	};

	//Creates a function that executes func, with the this binding and arguments of the created function, only before being called n times.
	var beforeFn = $.before = (amount, fn) => {
		return function named() {
			if (--amount > 0) {
				return apply(fn, named, arguments);
			}
		};
	};

	//Creates a function that executes func, with the this binding and arguments of the created function, only after or equal to being called n times.
	$.onAfter = (amount, fn) => {
		return afterFn(amount - 1, fn);
	};

	//Creates a function that executes func, with the this binding and arguments of the created function, only before or equal to being called n times.
	$.onBefore = (amount, fn) => {
		return beforeFn(amount + 1, fn);
	};

	//Creates a function that invokes func with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.
	$.reArg = (funct, list) => {
		return function named() {
			var args = arguments;
			return apply(funct, named, mapArray(list, function(item, index) {
				return args[item];
			}));
		};
	};

	/*

	var rearg=(function(a, b, c) {
	  return [a, b, c];
	},[1,2,0]);

	rearg(1,2,3);
	-> [2, 3, 1]


	*/

	//Launch functions in sync
	$.inSync = function(fns, params) {
		params = ensureArray(params);
		return mapArray(ensureArray(fns), (item) => {
			apply(item, params);
		});
	};

	/*
		This is for async promises & timer functions
	*/
	//haspromises
	var promiseAsync = Promise.resolve(),
		//async function call
		asyncMethod = promiseAsync.then.bind(promiseAsync),
		//timeing
		clearTimer = clearTimeout,
		timerMethod = $.timer = function(fn, time) {
			return setTimeout(fn, time);
		},
		intervalMethod = $.interval = function(fn, time) {
			return setInterval(fn, time);
		};


	//debounce function
	$.debounce = (original, time) => {
		var timeout = False,
			fn = () => {
				if (timeout !== False) {
					clearTimer(timeout);
				}
				var args = toArray(arguments);
				timeout = timerMethod(function() {
					apply(original, fn, args);
					timeout = False;
				}, time);
			};

		fn.clear = function() {
			if (timeout) {
				clearTimeout(timeout);
				timeout = False;
			}
		};
		return fn;
	};

	//throttle function
	$.throttle = function(func, time) {
		var timeout = False,
			shouldThrottle,
			fn = () => {
				if (timeout) {
					shouldThrottle = True;
					return;
				}
				var args = toArray(arguments);
				apply(func, fn, args);
				timeout = timerMethod(function() {
					if (shouldThrottle) {
						apply(func, fn, args);
					}
					timeout = False;
				}, time);
			};

		fn.clear = () => {
			clearTimer(timeout);
			timeout = False;
		};
		return fn;
	};

	function generateClear(method, clearMethod) {
		return () => {
			times(0, method(() => {}, 1000), (index) => {
				clearMethod(index);
			});
		};
	}

	$.clearTimers = generateClear(timerMethod, clearTimer);
	$.clearIntervals = generateClear(intervalMethod, clearInterval);


	$.inAsync = function(fns, params) {
		params = ensureArray(params);
		eachArray(ensureArray(fns), (item) => {
			asyncMethod(() => {
				apply(item, params);
			});
		});
	};

	var returnWraped = (method, flipTrue) => {
		return function() {
			var functs = [];

			function wrapped() {
				var args = toArray(arguments);
				return mapArray(functs, (item) => {
					return apply(item, wrapped, args);
				});
			}
			objectAssign(wrapped, {
				list: functs,
				add: function() {
					var args = flatten(toArray(arguments));
					method(functs, (flipTrue) ? args.reverse() : args);
				},
			});
			wrapped.add(toArray(arguments));
			return wrapped;
		};
	};
	var wrapCall = $.wrap = returnWraped(pushApply),
		wrapBefore = $.wrapBefore = returnWraped(unShiftApply, true);

	//is number zero
	$.isZero = function(item) {
		return item === 0;
	};
	//is strict equal to
	$.isNumberEqual = function(item, num) {
		return item === num;
	};
	//is In range of two numbers
	$.isNumberInRange = function(num, start, end) {
		if (isUndefined(end)) {
			end = start;
			start = 0;
		}
		return num > start && num < end;
	};

	//cache math functions
	var floorMethod = mathNative.floor,
		randomMethod = mathNative.random,
		mathNativeMax = mathNative.max,
		ceilMethod = mathNative.ceil,
		roundMethod = mathNative.round;

	$.math = mathNative;

	//add this and value
	$.add = function(number, value) {
		return number + value;
	};
	//minus this and value
	$.minus = function(number, value) {
		return number - value;
	};
	//divide this and value
	$.divide = function(number, value) {
		return number / value;
	};
	//multiply this and value
	$.multiply = function(number, value) {
		return number * value;
	};
	//The modulo function is the integer remainder of dividing this by value
	$.remainder = function(number, value) {
		return number % value;
	};
	//add 1
	$.increment = function(number) {
		return number + 1;
	};
	//minus 1
	$.deduct = function(number) {
		return number - 1;
	};
	//Returns a random number between min (inclusive) and max (exclusive)
	$.randomArbitrary = function(number, min) {
		min = min || 0;
		return randomMethod() * (number - min) + min;
	};
	// Returns a random integer between min (included) and max (excluded)
	var randomInt = $.randomInt = function(number, min) {
		min = min || 0;
		return floorMethod(randomMethod() * (number - min)) + min;
	};

	var appState = $.appState = {
		screenHeight: screen.height,
		screenWidth: screen.width
	};



	//console.log
	var acidConsole = $.console = (data, theme) => {
			data = isString(data) ? data : stringify(data);
			apply(consoleNative, ['%c' + data, `${logTheme[theme]}font-size:13px;padding:2px 5px;border-radius:2px;`]);
		},
		generateLogTheme = (color, bg) => {
			return `color:${color};background:${bg};`;
		},
		logTheme = {
			notify: generateLogTheme('#01c690', '#0e2a36'),
			warning: generateLogTheme('#ebb227', '#262626'),
			important: generateLogTheme('#ffe4ea', '#dc3153')
		},
		addTheme = $.addConsoleTheme = (name, color, bg) => {
			logTheme[name] = generateLogTheme(color, bg);
		};

	/**
	 * Create a lazy contract using an array of strings required to satisfy the contract. After the contract is completed an async callback is executed.
	 * @param      {Array,String}   Contract array when setting & String if satisfying a portion of the contract
	 * @param      {String}   Contract name must be unique from other contracts
	 * @param      {Function} callback
	 * @return     {Undefined} returns nothing from the function
	 */

	var contract = $.contract = (arry, name, callback) => {
		(!callback) ? contract[name](arry): (contract[name] = (part) => {
			return has(arry, part) && shiftArray(arry) && !getLength(arry) && asyncMethod(callback);
		});
	};

	var generateCheckLoops = (first, second) => {
			return (object, funct, optional, rawProp) => {
				var returned;
				if (!hasValue(object)) {
					return;
				} else if (isArray(object)) {
					returned = first;
				} else if (isPlainObject(object) || isFunction(object)) {
					returned = second;
				} else if (isNodeList(object) || isHTMLCollection(object)) {
					object = toArray(object);
					returned = first;
				} else {
					if (rawProp) {
						returned = mapProperty;
					} else if (object.forEach) {
						returned = forEach;
					} else {
						returned = second;
					}
				}
				return returned(object, funct, optional);
			};
		},
		map = $.map = generateCheckLoops(mapArray, mapObject),
		each = $.each = generateCheckLoops(eachArray, eachObject),
		filter = $.filter = generateCheckLoops(filterArray, filterObject);

	/*

		Navigate down an object's chain via a string.

	*/
	var get = $.get = (name, obj) => {
		obj = obj || $;
		eachWhile(splitCall(arrayLastItem(splitCall(name, slashString)), dotString), (item, index) => {
			obj = obj[item];
			return hasValue(obj) ? True : False;
		});
		return obj;
	};

	//for inline JS object notion.
	var inlineJson = $.iJson = (str) => {
		try {
			return new functionNative(`"use strict";return ${str};`)();
		} catch (e) {
			return False;
		}
	};

	//convert from json string to json object cache it to use across lib
	var jsonWithCatch = $.jsonParse = (str) => {
		try {
			return jsonParse(str);
		} catch (e) {
			return False;
		}
	};

	var modelMethod = $.model = (modelName, object) => {
		if (hasValue(object)) {
			modelMethod[modelName] = assignDeep(isFunction(object) ? bindTo(object, object) : bindAll(object, object, true), {
				_: {
					name: modelName
				}
			});
		}
		return get(modelName, modelMethod);
	};

	var promise = $.promise = (callback) => {
		return new Promise(callback);
	};

	$.toggle = function(value, a, b) {
		return (value === a) ? b : a;
	};

	//xhr functions
	var xhrLoaded = (evt) => {
			let xhr = evt.target,
				data = xhr.responseText;
			evt.data = (xhr.getResponseHeader('content-type') === 'application/json') ? jsonWithCatch(data) : data;
		},
		appType = 'application/',
		xhr = $.xhr = (config) => {
			let {
				url,
				data,
				contentType,
				progress
			} = config;
			let xhr = new XMLHttpRequest(),
				jsonData = config.json,
				type = config.type || 'GET',
				newData = emptyString;

			contentType = !contentType ? (jsonData) ? `${appType}json; charset=utf-8` : (type == 'GET') ? 'text/plain' : `${appType}x-www-form-urlencoded` : contentType;

			if (data) {
				each(data, (item, key) => {
					newData = hasValue(item) ? addParam(newData, isString(key) ? key + '=' + item : item) : newData;
				});
			}

			if (type === 'GET' && newData) {
				url = addParam(url, newData);
				newData = emptyString;
			}

			if (jsonData) {
				newData = jsonData;
			}

			xhr.open(type, url, True);
			xhr.setRequestHeader("Content-type", contentType);

			return promise(function(accept, reject) {
				eventAdd(xhr, 'error', reject);
				eventAdd(xhr, 'abort', reject);
				if (progress) {
					eventAdd(xhr, 'progress', progress);
				}
				eventAdd(xhr, 'load', (event) => {
					xhrLoaded(event);
					accept(event);
				});
				xhr.send(newData);
			});
		};

	$.matchesProperty = (path, srcValue) => {
		return function(item) {
			return get(path, item) === srcValue;
		};
	};

	/*
		Creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.
		Arguments

		[predicates=[_.identity]] (...(Function|Function[])): The predicates to check.
		Returns

		(Function): Returns the new function.
	*/
	$.overEvery = function(array) {
		return function() {
			var result,
				args = arguments;
			eachWhile(array, (item) => {
				return apply(item, args);
			});
			return !!result;
		}
	};
	/*
		Creates a function that invokes iteratees with the arguments it receives and returns their results.
	*/
	$.over = function(array) {
		return function() {
			var args = arguments;
			return mapArray(array, (item) => {
				return apply(item, args);
			});
		}
	};

	/*
		This method returns an empty object.
		$.times(2, $.stubObject);
		// => [{}, {}]
	*/
	$.stubObject = () => {
		return {};
	};
	/*
		This method returns an empty array.
		$.times(2, $.stubArray);
		// => [[], []]
	*/
	$.stubArray = () => {
		return [];
	};
	/*
		This method returns an empty string.
		$.times(2, $.stubString);
		// => ['', '']
	*/
	$.stubString = () => {
		return '';
	};
	/*
		This method returns false.
		$.times(2, $.stubFalse);
		// => [false, false]
	*/
	$.stubFalse = () => {
		return False;
	};
	/*
		This method returns True.
		$.times(2, $.stubTrue);
		// => [true, true]
	*/
	$.stubTrue = () => {
		return True;
	};
	/*
		This method returns undefined.
		$.times(2, _.noop);
		// => [undefined, undefined]
	*/
	$.noop = () => {
		return undefinedNative;
	};

	$.toPath = (string) => {
		return string.replace(regexOpenBracket, emptyString).split(regexToPath);
	};

	var clsSelector = $.getClass = bindTo(documentNode.getElementsByClassName, documentNode),
		tagSelector = $.getTag = bindTo(documentNode.getElementsByTagName, documentNode);

	var idSelector = $.getId = bindTo(documentNode.getElementById, documentNode);

	var qsSelector = $.querySelector = bindTo(documentNode.querySelector, documentNode);

	var qsaSelector = $.querySelectorAll = bindTo(documentNode.querySelectorAll, documentNode);

	var selector = $.selector = (select) => {
		var firtLetter = select[0];
		switch (firtLetter) {
			case poundString:
				if (!testRegex(regexSpace, select)) {
					return idSelector(stringSliceCall(select, 1));
				}
				break;
			case dotString:
				if (testRegex(classTest, select)) {
					return clsSelector(stringSliceCall(select, 1));
				}
				break;
			default:
				if (testRegex(tagTest, select)) {
					return tagSelector(select);
				}
		}
		return qsaSelector(select);
	};

	//Get useragent info
	var isAgent = $.isAgent = (name) => {
		return (!name) ? objectKeys(isAgent) : isAgent[name];
	};

	eachArray(splitCall(stringReplaceCall(stringReplaceCall(toLowerCaseCall(navigator.userAgent), /_/g, dotString), /[#_\,\;\(\)]/g, ''), / |\//), (item) => {
		isAgent[item] = True;
	});

	var raf = $.raf = requestAnimationFrame.bind(selfWindow),
		caf = $.caf = cancelAnimationFrame.bind(selfWindow);

	var append = function(node, child) {
		node.appendChild(child);
		return node;
	};

	var batchCancelFrame = False,
		batchChanges = [],
		batchLoop = () => {
			eachArray(batchChanges, ifInvoke);
			clearArray(batchChanges);
			batchCancelFrame = False;
		},
		batchAdd = $.batch = (item) => {
			pushApply(batchChanges, ensureArray(item));
			if (!batchCancelFrame) {
				batchCancelFrame = raf(batchLoop);
			}
		};

	//checks to see if object is a dom node returns True or False
	var isDom = $.isDom = (obj) => {
		return (!obj) ? False : obj.nodeType != 9;
	};

	/*
	METHODS FOR CLASS MODS
	*/
	//classname
	var getClassList = (node) => {
			return node.classList;
		},
		nodeClassList = (node, args, mode) => {
			var nodeClassList = getClassList(node);
			mode = nodeClassList.add || mode;
			return (args) ? apply(mode, nodeClassList, ensureArray(args)) : nodeClassList;
		},
		//classlist functions
		nodeClassListHas = (node, key) => {
			return getClassList(node).contains(key);
		},
		nodeClassListRemove = (node, args) => {
			nodeClassList(node, args, getClassList(node).remove)
			return node;
		};

	var defineMethod = $.define = (data, otherData) => {
		data = setupModelData(data, otherData);
		var wrapFunct = function() {
			var freshArgs = mapArray(data.import, orderArgumentObjects);
			if (getLength(arguments)) {
				pushApply(freshArgs, arguments);
			}
			return apply(data.invoke, wrapFunct, freshArgs);
		};
		return setUpModel(wrapFunct, data);
	};

	var domListToArray = $.domListToArray = (collection) => {
		return mapArray(collection, (item) => {
			return (isHTMLCollection(item) || isNodeList(item)) ? domListToArray(item) : item;
		});
	};

	var ensure = $.ensure = function(models, funct) {
		importMethod(mapArray(ensureArray(models), (item) => {
			return `${item}.js`;
		}), funct);
	};

	$.exec = bindTo(documentNode.execCommand, documentNode);

	//create fragment
	var createFragment = $.createFragment = bindTo(documentNode.createDocumentFragment, documentNode);

	//create node
	var domHeadNode,
		nodeHasAttribute = function(node, n) {
			return node.hasAttribute(n);
		},
		//set/get attribute
		nodeAttribute = function(node, keys, value) {
			var results;
			if (isString(keys)) {
				if (hasValue(value)) {
					node.setAttribute(keys, value);
				} else {
					return node.getAttribute(keys);
				}
			} else if (isPlainObject(keys)) {
				results = mapObject(keys, (item, key) => {
					return nodeAttribute(node, key, item);
				});
				if (value) {
					return results;
				}
			}
			return node;
		},
		nodeRemoveAttribute = function(node, n) {
			node.removeAttribute(n);
			return node;
		},
		createTag = $.createTag = bindTo(documentNode.createElement, documentNode),
		nodeAttachLoadingEvents = (node, data) => {
			var launchEvent = (fnct, node, event) => {
					if (fnct) {
						fnct(node, event);
					}
				},
				onload = (event) => {
					launchEvent(data.load, node, event);
					end();
				},
				onerror = (event) => {
					launchEvent(data.error, node, event);
					end();
				},
				end = () => {
					eventRemove(eventRemove(node, 'error', onerror, True), 'load', onload, True);
				};

			eventAdd(eventAdd(node, 'error', onerror, True), 'load', onload, True);

			if (data.append) {
				append(domHeadNode, node);
			}
			return node;
		},
		createCss = $.createCss = (url, data, options) => {
			return nodeAttachLoadingEvents(nodeAttribute(createTag('link'), objectAssign({
				'type': 'text/css',
				'rel': 'stylesheet',
				'href': url
			}, options)), data);
		},
		createScript = $.createScript = (url, data, options) => {
			return nodeAttachLoadingEvents(nodeAttribute(createTag('script'), objectAssign({
				'async': emptyString,
				'src': url
			}, options)), data);
		};
	$.toDOM = (html) => {
		var div = createTag('div');
		div.innerHTML = html;
		return div;
	};

	/*
		This imports any type of file & just like require in the browser.
	*/
	var directoryNames = $.importDirectory = (name) => {
			return directoryNames[name] || emptyString;
		},
		imported = $.imported = {},
		importMainCallback = (node, call, remove) => {
			ifInvoke(call);
			if (remove) {
				node.remove();
			}
		},
		importEvents = (url, data, remove) => {
			return {
				load: function(node, event) {
					imported[url] = 1;
					importMainCallback(node, data.call, remove);
				},
				append: True
			};
		},
		/*
			NODE TYPE OBJECT
		*/
		nodeTypes = {
			js: createScript,
			css: createCss
		},
		//importMethod a single item
		importIt = (url, data, ismultiple) => {
			var type = arrayLastItem(splitCall(url, dotString)),
				remove = (isFileJS(url)) ? True : isFileCSS(url) ? False : data.remove,
				node;
			url = (!has(url, '//')) ? directoryNames(type) + url : url;
			((!imported[url]) ?
				(imported[url] = True, node = nodeTypes[type](url, importEvents(url, data, remove)), append(domHeadNode, node)) :
				(node = qsSelector(`[href="${url}"]`),
					(node && imported[url] !== 1) ?
					nodeAttachLoadingEvents(node, importEvents(url, data, remove)) : data.call()));
		},
		orderArgumentObjects = (item) => {
			var original = item;
			return isString(item) ? (isFileJS(item) ? getModelName(item) : (isFileCSS(item) ? qsSelector('[href="' + item + '"]') : item = get(item, $), hasValue(item) ? item : get(original, modelMethod))) : item;
		},
		setUpModel = (wrapFunct, data) => {
			objectAssign(wrapFunct, data.invoke);
			wrapFunct._ = objectAssign({}, data);
			wrapFunct._.invoke = null;
			ifNotEqual(modelMethod, data.name, wrapFunct);
			return wrapFunct;
		},
		setupModelData = (data, otherData) => {
			if (otherData) {
				if (isFunction(otherData)) {
					otherData = objectAssign({
						invoke: otherData
					}, otherData);
				}
				otherData.name = data;
				data = otherData;
			}
			ifNotEqual(data, 'import', []);
			ifNotEqual(data, 'invoke', () => {});
			return data;
		},
		arrayImportLoop = (item, name, error) => {
			importIt(item, {
				call: () => {
					ifInvoke(error, item, name);
					contract(item, name);
				}
			});
		},
		arrayImport = (array, data) => {
			var {
				error,
				call
			} = data;
			var name = uuid(),
				callback = function() {
					if (call) {
						apply(call, call, mapArray(array, orderArgumentObjects));
					}
				},
				stringArray = filterArray(array, (item, index) => {
					return (isFileJS(item) || isFileCSS(item)) ? item : undefinedNative;
				});
			(getLength(stringArray)) ? (
				uuidRemove(name),
				contract(stringArray, name, callback),
				//make imports
				eachArray(stringArray, (item) => {
					arrayImportLoop(item, name, error);
				})) : asyncMethod(callback);

		},
		importMethod = $.require = (key, value) => {
			return arrayImport(ensureArray(key), isPlainObject(value) ? value : {
				call: value
			});
		};

	//create a function that takes an object that is apart of the main $ and applies/calls it to the functions arguments useful for caching functions
	var moduleMethod = $.module = (data, otherData) => {
		data = setupModelData(data, otherData);
		return setUpModel(function compiled() {
			importMethod(data.import, {
				call: bindTo(data.invoke, compiled)
			});
		}, data);
	};

	var isDocumentReady = $.isDocumentReady = (func) => {
		var state = documentNode.readyState;
		if (state === 'interactive' || state === 'completed' || state === 'complete') {
			return (func) ? func() : True;
		}
		if (func) {
			eventAdd(documentNode, "DOMContentLoaded", func);
		}
		return False;
	};

	isDocumentReady(() => {
		domHeadNode = qsSelector('head');
	});

	var saveDimensions = $.updateDimensions = () => {
		objectAssign(appState, {
			windowHeight: global.innerHeight,
			windowWidth: global.innerWidth,
			bodyWidth: bodyNode.offsetWidth,
			bodyHeight: bodyNode.offsetHeight
		});
	};

	isDocumentReady(() => {
		bodyNode = documentNode.body;
		raf(saveDimensions);
	});

	eventAdd(eventAdd(window, 'resize', saveDimensions, True), 'load', saveDimensions, True);

	//a tag DOM element used to parse URL
	var aNode = createTag('a');
	//parse a URL
	$.linkParse = function(data) {
		aNode.href = data;
		var root = splitCall(aNode.hostname, dotString),
			pathName = aNode.pathname,
			len = getLength(root);
		root = root[len - 2] + dotString + root[len - 1];
		return pick(aNode, ['href', 'protocol', 'hostname', 'port', 'search', 'hash', 'host'], {
			path: (pathName[0] !== slashString) ? slashString + pathName : pathName,
			pathroot: (pathName[0] !== slashString) ? splitCall(pathName, slashString)[0] : splitCall(pathName, slashString)[1],
			ssl: (data.protocol === 'http:') ? False : True,
			domain: root
		});
	};

	var acidLib = idSelector('acidjs');
	if (acidLib) {
		//get model directory
		directoryNames.js = nodeAttribute(acidLib, 'data-model');
		if (directoryNames.js) {
			isDocumentReady(() => {
				ensure('core', ifInvoke);
			});
		}
	}
	//clean up
	acidLib = null;

	/*
		Object checking methods
	*/
	eachArray(['RegExp', 'Arguments', 'Boolean', 'Date', 'Error', 'Map', 'Object', 'Set', 'WeakMap', 'ArrayBuffer', 'Float32Array', 'Float64Array', 'Int8Array', 'Int16Array', 'Int32Array', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'HTMLCollection', 'NodeList'], (item) => {
		$[`is${item}`] = isSameObjectGenerator(objectStringGenerate(item));
	});

	var isHTMLCollection = $.isHTMLCollection,
		isNodeList = $.isNodeList;

})(this);