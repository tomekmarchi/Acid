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
	var $ = function $(string, object) {
		return find(string, object || modelMethod);
	}; //avoid
	global.$ = global.ACID = $;
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
		consoleNative = console,
		consoleNative = consoleNative.log.bind(consoleNative),
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
		   	Array.prototype Functions cached
		   */
		toArray = $.toArray = arrayNative.from.bind(arrayNative),
		arrayPushMethod = arrayPrototype.push,
		objectKeys = objectNative.keys,
		objectIs = objectNative.is,
		objectAssign = $.assign = objectNative.assign,
		getOwnPropertyDescriptor = objectNative.getOwnPropertyDescriptor,
		defineProperty = objectNative.defineProperty,
		getOwnPropertyNames = objectNative.getOwnPropertyNames,
		/*
		   	JSON
		   */
		False = false,
		True = true,
		stringify = json.stringify,
		jsonParse = json.parse,
		/*
		   	System Hardware Info
		   */
		systemCores = navigator.hardwareConcurrency;
	var bodyNode, selfWindow = window,
		documentNode = document;
	var classTest = /^.[\w_-]+$/,
		tagTest = /^[A-Za-z]+$/,
		regexSpace = /\s/,
		regexSpaceglobal = /\s/g,
		regexDot = /\./g,
		regexDash = /-/g,
		regexFowardslash = /\//g,
		replaceTemplateString = /\{(.*?)\}/g,
		regexExt = /\.[0-9a-z]+$/i,
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
	var protocol = location.protocol, //websocket protocol type
		protocolSocket = 'protocol' === 'http:' ? 'ws' : 'wss',
		hostname = location.hostname;
	var getLength = $.getLength = function(item) {
			return item.length;
		},
		indexOfCall = function indexOfCall(string, index) {
			return string.indexOf(index);
		},
		/*
		String related
	*/
		generatePrototype = function generatePrototype(funct) {
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
		pushApply = $.pushApply = function(array, arrayToPush) {
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
		toStringCall = function toStringCall(item) {
			return item.toString();
		},
		/*
		Function calls
	*/
		bindTo = $.bindTo = generatePrototype(functionPrototype.bind),
		call = $.callFn = function(method, bindTo, arg) {
			if (!arg) {
				arg = bindTo;
				bindTo = method;
			}
			return method.call(bindTo, arg);
		},
		apply = $.applyFn = function(method, bindTo, args) {
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
			var result = uuidFree.shift();
			if (!hasValue(result)) {
				result = count;
				uuidClosed[result] = True;
				count++;
			}
			return result;
		},
		uuidRemove = uuid.remove = function(id) {
			uuidClosed[id] = null;
			uuidFree.push(id);
		}; //acid platform information
	$.info = {
		version: 2,
		host: { // EX http https
			protocol: protocol, // ws or wss
			protocolSocket: protocolSocket, //hostname
			name: hostname
		},
		hardware: {
			cores: systemCores
		}
	};
	var eventAdd = $.eventAdd = function(obj, name, func, capture) {
			obj.addEventListener(name, func, capture);
			return obj;
		}, //remove event
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
	}; //get characters in a range in a string
	var insertInRange = $.insertInRange = function(text, start, end, insert) {
			return stringSliceCall(text, 0, start) + insert + stringSliceCall(text, end, getLength(text));
		}, //start index from right of string
		rightString = $.rightString = function(text, a) {
			return text[getLength(text) - 1 - a];
		},
		chunkString = $.chunkString = function(string, size) {
			return stringMatchCall(string, new regExp('(.|[\r\n]){1,' + size + '}', 'g'));
		}; //replace all items in an array with a string
	var replaceWithList = $.replaceWithList = function(string, array, toReplace) {
		return stringReplaceCall(string, new regExp('\\b' + joinArray(array, '|') + '\\b', 'gi'), toReplace);
	}; //raw URL encode
	var rawURLDecode = $.rawURLDecode = function(string) {
			return decodeURIComponent(stringReplaceCall(string, rawURLDecodeRegex, function() {
				return '%25';
			}));
		}, //html entities
		createHtmlEntities = $.htmlEntities = function(string) {
			string = stringReplaceCall(string, andRegex, '&amp;');
			string = stringReplaceCall(string, lessThanRegex, '&lt;');
			string = stringReplaceCall(string, moreThanRegex, '&gt;');
			string = stringReplaceCall(string, doubleQuoteRegex, '&quot;');
			return stringReplaceCall(string, slashRegex, '&quot;');
		},
		sanitize = $.sanitize = function(string) {
			return createHtmlEntities(rawURLDecode(string));
		}, //decode URI Component
		duc = $.duc = decodeURIComponent, //encode URI Component
		euc = $.euc = encodeURIComponent; //tokenize split by groups of characters that are not whitespace
	$.tokenize = function(string) {
		return stringMatchCall(string, /\S+/g) || [];
	}; //match by alphanumeric+underscore
	$.words = function(string) {
		return stringMatchCall(string, /\w+/g) || [];
	}; //uppercase first letter for all
	var ucFirstChar = function ucFirstChar(string) {
			return toUpperCaseCall(charAtCall(string, 0));
		},
		addRest = $.restString = function(string, num) {
			return substrCall(string, num || 1);
		},
		ucFirst = $.ucFirst = function(string) {
			return ucFirstChar(string) + addRest(string);
		},
		ucFirstAll = $.ucFirstAll = function(string) {
			return joinArray(mapArray(splitCall(string, spaceCharacter), function(item) {
				return ucFirst(item);
			}), ' ');
		}, //uppercase first letter lower case the rest
		ucFirstOnly = $.ucFirstOnly = function(string) {
			return ucFirstChar(item) + toLowerCaseCall(addRest(item));
		}, //uppercase first letter lower case the rest all
		ucFirstOnlyAll = $.ucFirstOnlyAll = function(string) {
			return joinArray(mapArray(splitCall(string, spaceCharacter), function(item) {
				return ucFirstOnly(item);
			}), ' ');
		}, //Returns the camel cased string
		camelCase = $.camel = function(string) {
			string = ucFirstAll(stringReplaceCall(stringReplaceCall(string, regexUnderscore, spaceCharacter), regexDash, spaceCharacter));
			return toLowerCaseCall(charAtCall(string, 0)) + stringReplaceCall(substrCall(string, 1), regexSpaceglobal, emptyString);
		},
		setStringCase = function setStringCase(string, caseLetter) {
			return stringReplaceCall(stringReplaceCall(toLowerCaseCall(string), regexUnderscore, spaceCharacter), regexSpaceglobal, caseLetter);
		}, //Returns the kebab cased string
		kebabCase = $.kebab = function(string) {
			return setStringCase(string, dashString);
		}, //Returns the snake cased string
		snakeCase = $.snake = function(string) {
			return setStringCase(string, dashString);
		}, //returns the trunced version of the string
		truncate = $.truncate = function(string, amount) {
			if (getLength(string) > amount) {
				string = stringSliceCall(string, 0, amount);
			}
			return string;
		}, //returns the trunced version of the string starting from the right
		truncateLeft = $.truncateLeft = function(string, amount) {
			var length = getLength(string);
			if (length > amount) {
				string = substrCall(string, amount, length);
			}
			return string;
		}, //returns the trunced version of the string
		truncateWord = $.truncateWord = function(string, amount) {
			var cut = indexOfObject(string, ' ', amount);
			if (amount != -1) {
				string = substringCall(string, 0, amount);
			}
			return string;
		}; //add paramaters to a URL
	var addParam = $.addParam = function(url, newItem) {
		if (hasLength(url) && has(url, questionMarkString)) {
			if (arrayLastItem(url) === questionMarkString) {
				url = url + newItem;
			} else {
				url = url + andString + newItem;
			}
		} else {
			url = questionMarkString + newItem;
		}
		return url;
	}; //shared functions
	//Flattens a nested array. Pass level to flatten up to a depth;
	var flatten = $.flatten = function(array, level) {
			for (var i = 0; i < (level || 1); i++) {
				array = arrayReduce(array, function(previousValue, currentValue, index, array) {
					return concatArray(previousValue, level ? isArray(currentValue) ? currentValue : [currentValue] : isArray(currentValue) ? flatten(currentValue) : currentValue);
				}, []);
			}
			return array;
		}, //cache for function that removes Falsey values from array or object
		compact = $.compact = function(array) {
			return filter(array, function(item) {
				return item;
			});
		},
		arraySortToObject = function arraySortToObject(func, array, object) {
			var object = object || {};
			eachArray(array, function(item, key) {
				func(item, key, object);
			});
			return object;
		}; //Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.
	var arrayChunk = function arrayChunk(array, size) {
		size = size || 1;
		var numChunks = ceilmethod(getLength(array) / size),
			index = 0;
		return filterArray(newArray(numChunks), function(item, i) {
			return chunkSlice(array, index, index += size);
		});
	};
	$.chunk = arrayChunk;
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
	var cloneArray = $.cloneArray = arraySliceCall; //Sorts a list into groups and returns a count for the number of objects in each group.
	$.countBy = function(array, funct) {
		var object = {},
			result;
		mapObject(array, function(item) {
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


*/ //create an array from a range
	var createRange = $.createRange = function(start, stop, increment) {
		var array = [];
		increment = increment || 1;
		while (start < stop) {
			pushArray(array, start);
			start = start + increment;
		}
		return array;
	}; //create an array from a range
	$.createRangeTo = function(start, stop, increment) {
		return createRange(start, stop + (increment || 1), increment);
	}; //Creates an array excluding all values of the provided arrays using SameValueZero for equality comparisons.
	var arrayDifference = $.difference = function(array, compare) {
		return filterArray(array, function(item) {
			if (!has(item, compare)) {
				return item;
			}
		});
	}; //Removes elements from array corresponding to the given indexes and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
	var drop = $.drop = function(array, amount, length) {
		return spliceArray(array, amount, length || getLength(array));
	}; //Removes elements from array corresponding to the given indexes (from right) and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
	$.dropRight = function(array, amount) {
		return drop(array, 0, getLength(array) - amount);
	};
	/*
	Each Methods
	Array
		each,eachSafe,eachRaw,eachwhileFalse,eachWhile,whileLength,eachRight
	Object
		Each
	Number
		Each
*/ //loop through an array of items
	var safeModeCall = function safeModeCall(safeMode) {
			if (safeMode) {
				if (safeMode.halt) {
					return False;
				} else if (safeMode.skip) {
					safeMode.skip = false;
					return True;
				}
			}
		},
		mapArray = $.mapArray = function(array, fn, safeMode) {
			var results = [],
				returned;
			eachArray(array, function(item, index, array, length, safe) {
				returned = fn(item, index, array, length, results, safe);
				hasValue(returned) ? results[index] = returned : False;
			}, safeMode);
			return results;
		},
		filterArray = $.filterArray = function(array, fn, safeMode) {
			var results = [],
				returned;
			eachArray(array, function(item, index, array, length, safe) {
				returned = fn(item, index, array, length, results, safe);
				hasValue(returned) ? pushArray(results, returned) : False;
			}, safeMode);
			return results;
		},
		mapRaw = $.mapRaw = function(array, fn) {
			for (var returned, length = getLength(array), results = [], i = 0; i < length; i++) {
				returned = fn(array[i], i, array, length, results);
				hasValue(returned) ? results[i] = returned : False;
				length = getLength(array);
			}
			return results;
		},
		whileGenerator = function whileGenerator(mainFunc, optBool) {
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
			};
		}, //loop while the returned result is False
		whileFalse = $.mapWhileFalse = whileGenerator(mapArray, True), //each while the check function is True
		mapWhile = $.mapWhile = whileGenerator(mapArray, False), //loop while the count is less than the length of the array
		whileLength = $.mapWhileLength = function(array, fn) { //an array of results will be returned
			var results = [],
				len = getLength(array),
				i = 0;
			while (i < len) {
				results[i] = fn(array[i], i, array, len, results);
				len = getLength(array);
				i++;
			}
			return results;
		}, //loop through array backwards aka from the right
		mapArrayFromRight = $.mapRight = function(array, fn, safeMode) {
			safeMode = safeMode ? {} : safeMode;
			for (var safeModeResult, returned, results = [], len = getLength(array), i = len - 1; i >= 0; i--) {
				safeModeResult = safeModeCall(safeMode);
				if (safeModeResult) {
					continue;
				} else if (safeModeResult === False) {
					break;
				}
				returned = fn(array[i], i, array, len, results, safeMode);
				hasValue(returned) ? pushArray(results, returned) : False;
			}
			return results;
		}, //loop through array backwards aka from the right while true
		mapArrayFromRightWhile = $.mapRightWhile = whileGenerator(mapArrayFromRight, False), //loop through based on number
		mapNumber = $.mapNumber = function(start, end, fn) {
			if (!fn) {
				var fn = end,
					end = start,
					start = 0;
			}
			for (var results = [], returned; start < end; start++) { //call function get result
				returned = fn(start, end, results);
				hasValue(returned) ? pushArray(results, returned) : False;
			}
			return results;
		},
		eachArray = $.eachArray = function(array, fn, safeMode) {
			safeMode = safeMode ? {} : safeMode;
			for (var safeModeResult, length = getLength(array), i = 0; i < length; i++) {
				safeModeResult = safeModeCall(safeMode);
				if (safeModeResult) {
					continue;
				} else if (safeModeResult === False) {
					break;
				}
				fn(array[i], i, array, length, safeMode);
			}
		}, //loop while the returned result is False
		eachWhileFalse = $.eachWhileFalse = whileGenerator(eachArray, True), //each while the check function is True
		eachWhile = $.eachWhile = whileGenerator(eachArray, False);
	/*
	   Determines if the arrays are equal by doing a shallow comparison of their elements using strict equality.
	*/
	$.isEqualArray = function(item, array) {
		var result = True;
		if (getLength(array) !== getLength(item)) {
			result = False;
		} else if (array === item) {
			result = True;
		} else {
			eachArray(array, function(item, index, length, safe) {
				if (array[i] !== item[i]) {
					safe.halt = true;
					result = False;
				}
			}, true);
		}
		return result;
	}; //Returns the first element of an array. Passing num will return the first n elements of the array.
	var firstItem = $.first = function(array, num) {
		return num ? sliceArray(array, 0, num) : array[0];
	}; //Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
	$.flow = function(array, args) {
		return function() {
			return mapArray(array, function(item) {
				return apply(array[i], null, isArray(args) ? args : [args]);
			});
		};
	}; //flowright is like flow except that it creates a function that invokes the provided functions from right to left.
	$.flowRight = function(array, args) {
		return function() {
			return mapArrayFromRight(array, function(item) {
				return apply(array[i], null, isArray(args) ? args : [args]);
			});
		};
	}; //Splits a collection into sets, grouped by the result of running each value through iteratee.
	$.groupBy = function(array, funct) {
		return arraySortToObject = (function(item, index, object) {
			var results = funct(item);
			if (!object[results]) {
				object[results] = [];
			}
			pushArray(object[results], item);
		}, array);
	}; //Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know your keys are unique.
	$.indexBy = function(array, key) {
		return arraySortToObject = (function(item, key, object) {
			object[item[key]] = item;
		}, array);
	};
	var generateArrayRange = function generateArrayRange(method) {
			return function(array) {
				array = cloneArray(array);
				method(array);
				return array;
			};
		}, //Returns everything but the last entry of the array.
		arrayInitial = $.initial = generateArrayRange(popArray), //Returns everything but the first entry of the array.
		arrayRest = $.rest = generateArrayRange(shiftArray); //Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
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
		return filterArray(args[0], function(item) {
			yes = true;
			eachArray(args, function(otherItem) {
				if (!has(otherItem, item)) {
					yes = false;
				}
			});
			if (yes) {
				return item;
			}
		});
	}; //Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
	$.invoke = function(array, method, args) {
		return mapArray(array, function(item) {
			return apply(item[method], item, args);
		});
	}; //get largest number from array
	$.largest = function(array) {
		return apply(mathNativeMax, mathNative, array);
	}; //Returns the last element of an array. Passing n will return the last n elements of the array.
	var arrayLastItem = $.last = function(array, indexFrom) {
		var length = getLength(array);
		return indexFrom ? sliceArray(array, length - indexFrom, length) : array[length - 1];
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
	}; //Converts arrays into objects.
	$.object = function(values, keys) {
		return arraySortToObject(function(item, index, object) {
			object[keys[index]] = item;
		}, values);
	}; //Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
	$.partition = function(array, funct) {
		var temp = [];
		return [filterArray(array, function(item, index) {
			return funct(item) ? item : pushArray(temp, item) && undefinedNative;
		}), temp];
	}; //Pluck an attribute from each object in an array.
	var pluck = $.pluck = function(array, pluckThis) {
		return mapArray(array, function(item, index) {
			return isArray(pluckThis) ? arraySortToObject(function(pluckItem, pluckKey, object) {
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
		var isFN = isFunction(args),
			args = isArray(args) ? args : [args];
		eachArray(array, function(item, index) {
			if (isFN ? args(item) : has(args, item)) {
				spliceArray(array, index, 1);
			}
		});
		return array;
	}; //start from end array using a as index
	$.right = function(array, a) {
		return array[getLength(array) - 1 - a];
	}; //Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
	$.sample = function(array, setAmount) {
		if (setAmount) {
			var temp = toArray(array);
			return mapWhile(temp, function(item, index, length) {
				return spliceArray(temp, roundMethod(randomMethod() * (length - 1)), 1)[0];
			});
		}
		return array[roundMethod(randomMethod() * getLength(array))];
	}; //shuffle an array and return a new array
	$.shuffle = function(array) {
		var temp = toArray(array);
		return whileLength(temp, function() {
			return spliceArray(temp, randomMethod(randomMethod() * (getLength(temp) - 1)), 1)[0];
		});
	}; //get smallest number from array
	$.smallest = function(item) {
		return apply(mathNative.min, mathNative, item);
	}; //Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order.
	$.sortedIndex = function(array, n) {
		var min = 0;
		eachArray(array, function(item, index) {
			if (n > item) {
				min = index;
			}
		});
		if (min > 0) {
			min = min + 1;
		}
		return min;
	}; //sum of values in an array
	$.sumOf = function(array) {
		var sumof = 0;
		eachArray(array, function(item) {
			sumof = sumof + item;
		});
		return sumof;
	}; //Creates a slice of array with n elements taken from the beginning.
	$.take = function(array, amount) {
		return arraySliceCall(array, 0, amount);
	}; //Creates a slice of array with n elements taken from the end.
	$.takeRight = function(array, amount) {
		return spliceArray(array, getLength(array) - amount, amount);
	}; //Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
	$.union = function() {
		var result = [];
		eachArray(arguments, function(array) {
			eachArray(array, function(item) {
				if (has(result, item)) {
					pushArray(result, item);
				}
			});
		});
		return result;
	};
	var chunkSlice = function chunkSlice(array, start, end) {
			return mapArray(newArray(mathNative.min(end, getLength(array)) - start), function() {
				return array[start + i];
			});
		},
		numericalCompare = function numericalCompare(a, b) {
			return a - b;
		},
		numericalCompareReverse = function numericalCompareReverse(a, b) {
			return b - a;
		},
		xorBase = function xorBase(a, b) {
			return mapArray(concatArray(a, b), function(item) {
				if (!has(b, item) && indexOfCall(result, item) < 0) {
					return item;
				}
			});
		},
		onlyUnique = function onlyUnique(value, index, self) {
			return self.indexOf(value) === index;
		},
		uniqueArray = $.uniq = function(array, isSorted) {
			return isSorted ? mapArray(array, function(item, index) {
				if (item !== array[index - 1]) {
					return item;
				}
			}) : array.filter(onlyUnique);
		}; //Returns a copy of the array with all instances of the values removed.
	$.without = function(array, args) {
		var isFN = isFunction(args),
			args = isArray(args) ? args : [args];
		return mapArray(array, function(item, index) {
			if (isFN ? args(item) : has(args, item)) {
				return item;
			}
		});
	}; //Creates an array that is the symmetric difference of the provided arrays. See Wikipedia for more details.
	$.xor = function(arrayOG) {
		var numArgs = getLength(arguments),
			result;
		if (!numArgs) {
			return uniqueArray(arrayOG);
		}
		result = xorBase(arrayOG, arguments[0]);
		eachArray(arguments, function(item) {
			result = xorBase(result, item);
		});
		return result;
	}; //Merges together the values of each of the arrays with the values at the corresponding position.
	$.zip = function() {
		var args = arguments;
		return mapArray(args[0], function(arraySet) {
			return mapArray(args, function(arraySet) {
				return shiftArray(arraySet);
			});
		});
	}; //unzip the array of zipped arrays [["fred",30,True],["barney",40,False]]
	$.unZip = function(array) {
		return mapArray(array[0], function(item) {
			return mapArray(array, function(arraySet) {
				return shiftArray(arraySet);
			});
		});
	};
	var assignDeep = $.assignDeep = function(object, otherObject, mergeArrays) {
		eachObject(otherObject, function(item, key) {
			isPlainObject(item) && isPlainObject(object[key]) ? assignDeep(object[key], item, mergeArrays) : mergeArrays && isArray(item) && isArray(object[key]) ? pushApply(object[key], item) : object[key] = item;
		});
		return object;
	};
	/*
			This is for object checking is or isnot
			*/ //checking
	var objectStringGenerate = function objectStringGenerate(name) {
			return '[object ' + name + ']';
		},
		isSameObjectGenerator = function isSameObjectGenerator(type) {
			return function(obj) {
				return hasValue(obj) ? toString.call(obj) === type : False;
			};
		},
		isDecimal = $.isDecimal = function() {
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
			eachArray(args, function(item, index, array, length, safe) {
				result = method(item);
				if (!result) {
					safe.halt = True;
				}
			}, True);
			return result;
		},
		isArray = $.isArray = arrayNative.isArray,
		isConstructor = $.isConstructor = function(constructor) {
			return function(obj) {
				return hasValue(obj) ? obj.constructor === constructor : False;
			};
		},
		isString = $.isString = isConstructor(stringNative),
		isNumber = $.isNumber = isConstructor(numberNative),
		isPlainObject = $.isPlainObject = function(obj) {
			return hasValue(obj) ? stringSliceCall(toStringCall(obj.constructor).trim(), 9, 16) === 'Object(' : False;
		},
		isFunction = $.isFunction = function(obj) {
			return hasValue(obj) ? obj instanceof functionNative : False;
		},
		has = $.has = function(string, search) {
			return isArray(search) ? apply(string.includes, string, search) : string.includes(search);
		},
		isLength = $.isLength = function(obj) {
			return !getLength(obj);
		},
		isEmpty = $.isEmpty = function(obj) {
			return hasValue(obj) ? isPlainObject(obj) ? !objectSize(obj) : !isLength(obj) : False;
		},
		regexGenerator = function regexGenerator(regexType) {
			return function(item) {
				return hasValue(item) ? regexType.test(item) : False;
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
	$.compactKeys = function(object) {
		return objectKeys(compact(object));
	}; //loop through an object
	var mapObject = $.mapObject = function(object, fn) {
			var results = {};
			eachObject(object, function(item, key) {
				results[key] = apply(fn, arguments);
			});
			return results;
		},
		filterObject = $.filterObject = function(object, fn) {
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
		eachObject = $.eachObject = function(object, fn) {
			eachArray(objectKeys(object), function(key, index, array, len) {
				fn(object[key], key, object, len);
			});
		},
		forEach = $.forEach = function(array, funct, optional) {
			array.forEach(funct, optional);
			return results;
		},
		mapProperty = $.mapProperty = function(array, funct) {
			var object = {};
			eachArray(getOwnPropertyNames(array), function(item, key, length) {
				object[item] = funct(array[item], item, array, length, object);
			});
			return object;
		},
		forIn = $.forIn = function(object, fn) {
			var results = {};
			for (var key in object) {
				results[key] = fn(object[key], key, object, results);
			}
			return results;
		};
	/*
	Returns a copy of the object where the keys have become the values and the values the keys. For this to work, all of your object's values should be unique and string serializable.
*/
	var invert = $.invert = function(thisObject, object) {
		object = object || {};
		eachObject(originalObject, function(item, key) {
			object[item] = key;
		});
		return object;
	};
	/*
	Return a copy of the object, filtered to omit the blacklisted keys (or array of keys). Alternatively accepts a predicate indicating which keys to omit.
*/
	var omit = $.omit = function(originalObject, array) {
		return mapObject(originalObject, function(item, key) {
			if (!has(array, key)) {
				return item;
			}
		});
	};
	/*
	pick specific properties, listed in an array, from an object and a new object is returned with those specfic properties.
*/
	var pick = $.pick = function(array, originalObject, newObject) {
		return arraySortToObject(function(item, key, object) {
			object[item] = originalObject[item];
		}, array, newObject);
	};
	/*
	Return the number of values in the list.
*/
	var objectSize = $.size = function(object) {
		return getLength(objectKeys(object));
	}; //copy an object ES6 + ES5
	$.stringify = stringify;
	$.zipObject = function(keys, values, object) {
		return arraySortToObject(function(item, index, object) {
			object[item] = values[index];
		}, keys, object);
	};
	$.unZipObject = function(object) {
		var keys = [],
			values = [];
		eachObject(object, function(item, key) {
			pushArray(keys, key);
			pushArray(values, item);
		});
		return [keys, values];
	}; //Creates a function that accepts up to n arguments ignoring any additional arguments. The 2nd argument will be binded if none the initial new function will be.
	$.ary = function(funct, amount, bind) {
		return function() {
			return apply(funct, bind || funct, toArray(arguments).splice(0, amount));
		};
	};
	/*
	Replace mode will overwrite the original plainObject or Array
*/
	var bindAll = $.bindAll = function(bindThese, withThis, replaceMode) {
		return replaceMode ? (each(bindThese, function(item, key) {
			if (isFunction(item)) {
				bindThese[key] = bindTo(item, withThis);
			}
		}), bindThese) : map(bindThese, function(item) {
			return isFunction(item) ? bindTo(item, withThis) : item;
		});
	};
	var addChain = function addChain(chain, addToChain) {
		each(addToChain, function(item, key) {
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
		var chain = function chain(value) {
			chain.value = value;
			return chain.methods;
		};
		chain.methods = {};
		chain.add = function(addToChain) {
			return addChain(chain, addToChain);
		};
		chain.done = function() {
			var value = chain.value;
			chain.value = null;
			return value;
		};
		chain.add(methods);
		return chain;
	};
	$.curry = function(funts) {
		var argsLength = getLength(funts),
			args = [],
			curry = function curry() {
				eachArray(arguments, function(item) {
					pushArray(args, item);
				});
				return curry;
			};
		curry.result = function() {
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
			curry = function curry() {
				eachArray(arguments, function(item) {
					unShiftArray(args, item);
				});
				return curry;
			};
		curry.result = function() {
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

*/ //Creates a function that negates the result of the predicate func. The func predicate is invoked with the this binding and arguments of the created function.
	$.negate = function(func) {
		return function() {
			return apply(func, func, toArray(arguments)) ? False : True;
		};
	}; //Creates a function that is restricted to execute func once. Repeat calls to the function will return the value of the first call. The func is executed with the this binding of the created function.
	$.once = function(fn) {
		var value;
		return function named() {
			if (!value) {
				value = apply(fn, named, arguments);
			}
			return value;
		};
	}; //Creates a function that executes func, with the this binding and arguments of the created function, only after being called n times.
	var afterFn = $.after = function(amount, fn) {
		return function named() {
			if (--amount < 0) {
				return apply(fn, named, arguments);
			}
		};
	}; //Creates a function that executes func, with the this binding and arguments of the created function, only before being called n times.
	var beforeFn = $.before = function(amount, fn) {
		return function named() {
			if (--amount > 0) {
				return apply(fn, named, arguments);
			}
		};
	}; //Creates a function that executes func, with the this binding and arguments of the created function, only after or equal to being called n times.
	$.onAfter = function(amount, fn) {
		return afterFn(amount - 1, fn);
	}; //Creates a function that executes func, with the this binding and arguments of the created function, only before or equal to being called n times.
	$.onBefore = function(amount, fn) {
		return beforeFn(amount + 1, fn);
	}; //Creates a function that invokes func with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.
	$.reArg = function(funct, list) {
		return function() {
			return apply(funct, eachArray(arguments, function(item, index) {
				pushArray(args, order[list[index]]);
			}));
		};
	};
	/*

var rearg=(function(a, b, c) {
  return [a, b, c];
},[1,2,0]);

rearg(1,2,3);
-> [2, 3, 1]


*/ //Launch functions in sync
	$.inSync = function(functions) {
		return mapArray(functions, function(functionObject) {
			return functionObject();
		});
	};
	/*
	This is for async promises & timer functions
*/ //haspromises
	var promiseAsync = Promise.resolve(), //async function call
		asyncMethod = promiseAsync.then.bind(promiseAsync), //timeing
		clearTimer = clearTimeout,
		timerMethod = $.timer = function(fn, time) {
			return setTimeout(fn, time);
		},
		intervalMethod = $.interval = function(fn, time) {
			return setInterval(fn, time);
		}; //debounce function
	$.debounce = function(original, time) {
		var timeout = False;

		function fn() {
			if (timeout !== False) {
				clearTimer(timeout);
			}
			var args = toArray(arguments);
			timeout = timerMethod(function() {
				apply(original, fn, args);
				timeout = False;
			}, time);
		}
		fn.clear = function() {
			if (timeout) {
				clearTimeout(timeout);
				timeout = False;
			}
		};
		return fn;
	}; //throttle function
	$.throttle = function(func, time) {
		var timeout = False,
			shouldThrottle;

		function fn() {
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
		}
		fn.clear = function() {
			clearTimer(timeout);
			timeout = False;
		};
		return fn;
	};

	function generateClear(method, clearMethod) {
		return function() {
			mapNumber(0, method(function() {}, 1000), function(index) {
				clearMethod(index);
			});
		};
	}
	$.clearTimers = generateClear(timerMethod, clearTimer);
	$.clearIntervals = generateClear(intervalMethod, clearInterval);
	$.inAsync = function(fns) {
		eachArray(isFunction(fns) ? [fns] : fns, asyncMethod);
	}; //wrap 2 functions 'this' is launched after the argument function(s)
	var wrapCall = $.wrap = function(funct, object, bind) {
			if (isFunction(object)) {
				return function() {
					var args = toArray(arguments);
					return [apply(object, bind, args), apply(funct, bind, args)];
				};
			} else if (isPlainObject(object)) {
				mapObject(object, function(item, key) {
					object[key] = apply(wrapCall, funct, funct, [item, bind]);
				});
			}
			return object;
		}, //wrap 2 functions 'this' is launched before the argument function(s)
		wrapBefore = $.wrapBefore = function(funct, object, bind) {
			if (isFunction(object)) {
				return function() {
					var args = toArray(arguments);
					return [apply(funct, bind, args), apply(object, bind, args)];
				};
			} else if (isPlainObject(object)) {
				mapObject(object, function(item, key) {
					object[key] = call(wrapBefore, bind, funct, item, bind);
				});
			}
			return object;
		}; //is number zero
	$.isZero = function(item) {
		return item === 0;
	}; //is strict equal to
	$.isNumberEqual = function(item, num) {
		return item === num;
	}; //is In range of two numbers
	$.isNumberInRange = function(num, start, end) {
		if (isUndefined(end)) {
			var end = start,
				start = 0;
		}
		return num > start && num < end;
	}; //cache math functions
	var floorMethod = mathNative.floor,
		randomMethod = mathNative.random,
		mathNativeMax = mathNative.max,
		ceilMethod = mathNative.ceil,
		roundMethod = mathNative.round;
	$.math = mathNative; //add this and value
	$.add = function(number, value) {
		return number + value;
	}; //minus this and value
	$.minus = function(number, value) {
		return number - value;
	}; //divide this and value
	$.divide = function(number, value) {
		return number / value;
	}; //multiply this and value
	$.multiply = function(number, value) {
		return number * value;
	}; //The modulo function is the integer remainder of dividing this by value
	$.remainder = function(number, value) {
		return number % value;
	}; //add 1
	$.increment = function(number) {
		return number + 1;
	}; //minus 1
	$.deduct = function(number) {
		return number - 1;
	}; //Returns a random number between min (inclusive) and max (exclusive)
	$.randomArbitrary = function(number, min) {
		min = min || 0;
		return randomMethod() * (number - min) + min;
	}; // Returns a random integer between min (included) and max (excluded)
	var randomInt = $.randomInt = function(number, min) {
		min = min || 0;
		return floorMethod(randomMethod() * (number - min)) + min;
	};
	var appState = $.appState = {
		screenHeight: screen.height,
		screenWidth: screen.width
	};
	var cacheMethod = $.cache = function(key, value) {
		return !key ? cacheMethod : hasValue(value) ? cacheMethod[key] = value : cacheMethod[key];
	}; //toggle a cache item with two values
	$.cacheToggle = function(key, a, b) {
		cacheMethod[key] === a ? cacheMethod[key] = b : cacheMethod[key] = a;
	}; //console.log
	var acidConsole = $.console = function(data, theme) {
			data = isString(data) ? data : stringify(data);
			apply(consoleNative, ['%c' + data, LTs[theme] + 'font-size:13px;padding:2px 5px;border-radius:3px;']);
		},
		generateLogTheme = function generateLogTheme(color, bg) {
			return 'color:' + color + ';background:' + bg + ';';
		},
		LTs = {
			notify: generateLogTheme('#01c690', '#0e2a36'),
			warning: generateLogTheme('#ebb227', '#262626'),
			important: generateLogTheme('#ffe4ea', '#dc3153')
		},
		addTheme = $.addConsoleTheme = function(name, color, bg) {
			logThemes[name] = generateLogTheme(color, bg);
		};
	var contract = $.contract = function(callback) {
		return new Promise(callback);
	};
	var generateCheckLoops = function generateCheckLoops(first, second) {
			return function(object, funct, optional, rawProp) {
				var returned;
				if (!hasValue(object)) {
					return False;
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
		filter = $.filter = function(object, funct, safeMode) {
			var returned;
			if (!hasValue(object)) {
				return False;
			} else if (isArray(object)) {
				returned = filterArray;
			} else if (isPlainObject(object) || isFunction(object)) {
				returned = filterObject;
			}
			return returned(object, funct, safeMode);
		};
	/*

	Navigate down an object's chain via a string.

*/
	var find = $.get = function(name, obj) {
		obj = obj || $;
		eachWhile(splitCall(arrayLastItem(splitCall(name, slashString)), dotString), function(item, index) {
			obj = obj[item];
			return hasValue(obj) ? True : False;
		});
		return obj;
	}; //for inline JS object notion.
	var inlineJson = $.iJson = function(str) {
		try {
			return new functionNative('"use strict";return' + str + ';')();
		} catch (e) {
			return False;
		}
	}; //convert from json string to json object cache it to use across lib
	var jsonWithCatch = $.jsonParse = function(str) {
		try {
			return jsonParse(str);
		} catch (e) {
			return False;
		}
	};
	var modelMethod = $.model = function(modelName, object) {
		if (hasValue(object)) {
			modelMethod[modelName] = assignDeep(isFunction(object) ? bindTo(object, object) : bindAll(object, object, true), {
				_: {
					name: modelName
				}
			});
		}
		return find(modelName, modelMethod);
	}; //export native functions
	$.keys = objectKeys;
	$.getPropDescrip = getOwnPropertyDescriptor; //make a promise
	var promiseMethods = $.promises = {},
		promiseMethod = $.promise = function(arry, name, callback, calls) {
			var arrayLength = getLength(arry);
			var fn = promiseMethods[name] = function() {
				var go = 0;
				eachArray(arry, function(item) {
					if (fn[item] === 1) {
						go = go + 1;
					}
				}); //if amount of promises made were same as needed then launch callback
				if (go === arrayLength) {
					asyncMethod(callback);
					promiseMethods[name] = null;
					return True;
				}
				return False;
			};
		}, //promised
		promisedMethod = $.promised = function(self, fn) {
			promiseMethods[fn][self] = 1;
			promiseMethods[fn]();
		};
	$.toggle = function(value, a, b) {
		return value === a ? b : a;
	}; //xhr functions
	var xhrLoaded = function xhrLoaded(evt) {
			var xhr = evt.target,
				data = xhr.responseText;
			evt.data = xhr.getResponseHeader('content-type') === 'application/json' ? jsonWithCatch(data) : data;
		},
		appType = 'application/',
		xhr = $.xhr = function(config) {
			var xhr = new XMLHttpRequest(),
				url = config.url,
				data = config.data,
				jsonData = config.json,
				type = config.type || 'GET',
				contentType = config.contentType,
				progress = config.progress,
				newData = emptyString;
			if (!contentType) {
				if (jsonData) {
					contentType = appType + 'json; charset=utf-8';
				} else if (type == 'GET') {
					contentType = 'text/plain';
				} else {
					contentType = appType + 'x-www-form-urlencoded';
				}
			}
			if (data) {
				each(data, function(item, key) {
					newData = hasValue(item) ? addParam(newData, isString(key) ? key + '=' + item : item) : newData;
				});
			}
			if (type === 'GET') {
				if (newData) {
					url = addParam(url, newData);
					newData = emptyString;
				}
			}
			if (jsonData) {
				newData = jsonData;
			}
			xhr.open(type, url, True);
			xhr.setRequestHeader("Content-type", contentType);
			return contract(function(accept, reject) {
				eventAdd(xhr, 'error', reject);
				eventAdd(xhr, 'abort', reject);
				if (progress) {
					eventAdd(xhr, 'progress', progress);
				}
				eventAdd(xhr, 'load', function(event) {
					xhrLoaded(event);
					accept(event);
				});
				xhr.send(newData);
			});
		};
	var clsSelector = $.getClass = bindTo(documentNode.getElementsByClassName, documentNode);
	var idSelector = $.getId = bindTo(documentNode.getElementById, documentNode);
	var qsSelector = $.querySelector = bindTo(documentNode.querySelector, documentNode);
	var qsaSelector = $.querySelectorAll = bindTo(documentNode.querySelectorAll, documentNode);
	var selector = $.selector = function(select) {
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
	}; //Get useragent info
	var isAgent = $.isAgent = function(name) {
		return !name ? agentInfo : agentInfo[name];
	};
	var agentInfo = function agentInfo() {
		agentInfo.string = toLowerCaseCall(navigator.userAgent);
		eachArray(splitCall(stringReplaceCall(stringReplaceCall(agentInfo.string, /_/g, '.'), /[#_\,\;\(\)]/g, ''), / |\//), function(item) {
			isAgent[item] = True;
		});
	};
	var raf = $.raf = requestAnimationFrame.bind(selfWindow),
		caf = $.caf = cancelAnimationFrame.bind(selfWindow);
	var append = function append(node, child) {
		node.appendChild(child);
		return node;
	};
	var batchCancelFrame = False,
		batchChanges = [],
		batchLoop = function batchLoop() {
			eachArray(batchChanges, function(item) {
				item();
			});
			clearArray(batchChanges);
			batchCancelFrame = False;
		},
		batchCheck = function batchCheck() {
			if (!batchCancelFrame) {
				batchCancelFrame = raf(batchLoop);
			}
		},
		batchAdd = $.batch = function(item) {
			if (isArray(item)) {
				eachArray(item, batchAdd);
			} else {
				pushArray(batchChanges, item);
				batchCheck();
			}
		}; //checks to see if object is a dom node returns True or False
	var isDom = $.isDom = function(obj) {
		if (!obj) {
			return False;
		}
		var nodetype = obj.nodeType;
		return nodetype && nodetype != 9;
	};
	/*
METHODS FOR CLASS MODS
*/ //classname
	var getClassList = function getClassList(node) {
			return node.classList;
		},
		nodeClassList = function nodeClassList(node, args, mode) {
			var nodeClassList = getClassList(node),
				mode = nodeClassList.add || mode;
			if (args) {
				if (!isArray(args)) {
					mode.call(nodeClassList, args);
				} else {
					eachArray(args, function(item) {
						nodeClassList(node, item);
					});
				}
				return node;
			}
			return nodeClassList;
		}, //classlist functions
		nodeClassListHas = function nodeClassListHas(node, key) {
			return getClassList(node).contains(key);
		},
		nodeClassListRemove = function nodeClassListRemove(node, args) {
			nodeClassList(node, getClassList(node).remove);
			return node;
		};
	var domListToArray = $.domListToArray = function(collection) {
		return mapArray(collection, function(item) {
			return isHTMLCollection(item) || isNodeList(item) ? domListToArray(item) : item;
		});
	};
	var ensure = function ensure(models, funct) {
		importMethod(mapArray(isString(models) ? [models] : models, function(item) {
			return item + '.js';
		}), funct);
	};
	$.ensure = ensure;
	$.exec = bindTo(documentNode.execCommand, documentNode); //create fragment
	var createFragment = $.createFragment = bindTo(documentNode.createDocumentFragment, documentNode); //create node
	var domHeadNode, nodeHasAttribute = function nodeHasAttribute(node, n) {
			return node.hasAttribute(n);
		}, //set/get attribute
		nodeAttribute = $.nodeAttribute = function(node, keys, value) {
			var results;
			if (isString(keys)) {
				if (hasValue(value)) {
					node.setAttribute(keys, value);
				} else {
					return node.getAttribute(keys);
				}
			} else if (isPlainObject(keys)) {
				results = mapObject(keys, function(item, key) {
					return nodeAttribute(node, key, item);
				});
				if (value) {
					return results;
				}
			}
			return node;
		},
		nodeRemoveAttribute = function nodeRemoveAttribute(node, n) {
			node.removeAttribute(n);
			return node;
		},
		createTag = $.createTag = bindTo(documentNode.createElement, documentNode),
		nodeAttachLoadingEvents = function nodeAttachLoadingEvents(node, data) {
			var launchEvent = function launchEvent(fnct, node, event) {
					if (isString(fnct)) {
						fnct = find(fnc, $);
					}
					if (fnct) {
						fnct(node, event);
					}
				},
				onload = function onload(event) {
					launchEvent(data.load, node, event);
					end();
				},
				onerror = function onerror(event) {
					launchEvent(data.error, node, event);
					end();
				},
				end = function end() {
					eventRemove(eventRemove(node, 'error', onerror, True), 'load', onload, True);
				};
			eventAdd(eventAdd(node, 'error', onerror, True), 'load', onload, True);
			if (data.append) {
				append(domHeadNode, node);
			}
			return node;
		},
		createCss = $.createCss = function(url, data, options) {
			return nodeAttachLoadingEvents(nodeAttribute(createTag('link'), objectAssign({
				'type': 'text/css',
				'rel': 'stylesheet',
				'href': url
			}, options)), data);
		},
		createScript = $.createScript = function(url, data, options) {
			return nodeAttachLoadingEvents(nodeAttribute(createTag('script'), objectAssign({
				'async': emptyString,
				'src': url
			}, options)), data);
		};
	/*
	This imports any type of file & just like require in the browser.
*/
	var directoryNames = function directoryNames(name) {
			return directoryNames[name] || emptyString;
		},
		imported = $.imported = {},
		importId = function importId(id) {
			return replaceWithList(id, [dotString, slashString, dashString], underscoreString) + 'importMethod';
		},
		importMainCallback = function importMainCallback(node, call, remove) {
			if (call) {
				asyncMethod(call);
			}
			if (remove) {
				node.remove();
			}
			node = null;
		},
		importEvents = function importEvents(id, data, remove) {
			return {
				load: function load(node, event) {
					imported[id] = 1;
					event.stopPropagation();
					if (event.type != 'load') {
						remove = True;
					}
					importMainCallback(node, data.call, remove);
					node = null;
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
		}, //importMethod a single item
		importIt = function importIt(url, data, ismultiple) {
			var isJS = isFileJS(url),
				id = importId(url),
				type = stringReplaceCall(stringMatchCall(url, regexExt)[0], dotString, emptyString),
				remove = !data.remove && isJS ? True : undefinedNative,
				node, parent, model;
			url = !has(url, '//') ? directoryNames(type) + url : url;
			if (!imported[id]) { //mark as imported already
				imported[id] = True; //create node type
				node = nodeTypes[type](url, importEvents(id, data, remove)); //append
				append(domHeadNode, node);
			} else { //if already there attach events
				node = qsSelector('[href="' + url + '"]');
				if (node && imported[id] !== 1) {
					nodeAttachLoadingEvents(node, importEvents(id, data, remove));
				} else {
					asyncMethod(data.call);
				}
			}
		},
		orderArgumentObjects = function orderArgumentObjects(item) {
			var original = item;
			if (isString(item)) {
				if (isFileJS(item)) {
					item = getModelName(item);
				} else if (isFileCSS(item)) {
					item = qsSelector('[href="' + item + '"]');
				} else {
					item = find(item, $);
					if (!hasValue(item)) {
						item = find(original, modelMethod);
					}
				}
			}
			return item || False;
		},
		setUpModel = function setUpModel(wrapFunct, data) {
			objectAssign(wrapFunct, data.invoke);
			var modelName = data.name;
			wrapFunct._ = objectAssign({}, data);
			wrapFunct._.invoke = null;
			if (modelName) {
				modelMethod[modelName] = wrapFunct;
			}
			return wrapFunct;
		},
		setupModelData = function setupModelData(data, otherData) {
			if (otherData) {
				if (isFunction(otherData)) {
					otherData = objectAssign({
						invoke: otherData
					}, otherData);
				}
				otherData.name = data;
				return otherData;
			}
			return data;
		},
		defineMethod = $.define = function(data, otherData) {
			data = setupModelData(data, otherData);
			var wrapFunct = function wrapFunct() {
				var freshArgs = mapArray(data['import'], orderArgumentObjects);
				if (getLength(arguments)) {
					pushApply(freshArgs, arguments);
				}
				return apply(data.invoke, wrapFunct, freshArgs);
			};
			return setUpModel(wrapFunct, data);
		},
		arrayImportLoop = function arrayImportLoop(item, name, error) {
			importIt(item, {
				call: function call() {
					if (error) {
						error(item, name);
					}
					promisedMethod(item, name);
				}
			});
		},
		arrayImport = function arrayImport(array, data) {
			var name = uuid(),
				error = data.error,
				call = data.call,
				callback = function callback() {
					apply(call, call, mapArray(array, orderArgumentObjects));
				},
				stringArray = filterArray(array, function(item, index) {
					if (isFileJS(item) || isFileCSS(item)) {
						return item;
					}
				});
			if (getLength(stringArray) > 0) {
				uuidRemove(name);
				promiseMethod(stringArray, name, function() {
					callback();
				}); //make imports
				eachArray(stringArray, function(item) {
					arrayImportLoop(item, name, error);
				});
			} else {
				asyncMethod(function() {
					callback();
				});
			}
			name = null;
			data = null;
			error = null;
		},
		importMethod = $.require = function(key, value) {
			if (isFunction(value)) {
				value = {
					call: value
				};
			}
			if (isString(key)) {
				key = [key];
			}
			return arrayImport(key, value || function() {});
		}, //Save CSS and JS files directories
		directoryNames = function directoryNames(name) {
			return directoryNames[name] || emptyString;
		};
	directoryNames.css = emptyString;
	directoryNames.js = emptyString;
	$.dir = directoryNames; //create a function that takes an object that is apart of the main $ and applies/calls it to the functions arguments useful for caching functions
	var moduleMethod = $.module = function(data, otherData) {
		data = setupModelData(data, otherData);
		return setUpModel(function compiled() {
			importMethod(data['import'], {
				call: bindTo(data.invoke, compiled)
			});
		}, data);
	};
	var isDocumentReady = $.isDocumentReady = function(func) {
		var state = document.readyState;
		if (state === 'interactive' || state === 'completed' || state === 'complete') {
			return func ? func() : True;
		}
		if (func) {
			eventAdd(document, "DOMContentLoaded", func);
		}
		return False;
	};
	isDocumentReady(function() {
		domHeadNode = qsSelector('head');
	});
	var saveDimensions = $.updateDimensions = function() {
		objectAssign(appState, {
			windowHeight: global.innerHeight,
			windowWidth: global.innerWidth,
			bodyWidth: bodyNode.offsetWidth,
			bodyHeight: bodyNode.offsetHeight
		});
	};
	isDocumentReady(function() {
		bodyNode = documentNode.body;
		raf(saveDimensions);
	});
	eventAdd(eventAdd(window, 'resize', saveDimensions, True), 'load', saveDimensions, True); //a tag DOM element used to parse URL
	var aNode = createTag('a'); //parse a URL
	$.linkParse = function(data) {
		aNode.href = data;
		var root = splitCall(aNode.hostname, dotString),
			pathName = aNode.pathname,
			len = getLength(root),
			root = root[len - 2] + dotString + root[len - 1];
		return pick(aNode, ['href', 'protocol', 'hostname', 'port', 'search', 'hash', 'host'], {
			path: pathName[0] !== slashString ? slashString + pathName : pathName,
			pathroot: pathName[0] !== slashString ? splitCall(pathName, slashString)[0] : splitCall(pathName, slashString)[1],
			ssl: data.protocol === 'http:' ? False : True,
			domain: root
		});
	};
	var acidLib = idSelector('acidjs');
	if (acidLib) { //get model directory -> save prefix to prefix
		var coreModel = nodeAttribute(acidLib, 'data-model');
		$.dir.js = coreModel;
		if (!acidLib.onload && coreModel) { //create core script and append to head
			isDocumentReady(function() {
				ensure('core', function(core) {
					if (core) {
						core();
					}
				});
			});
		}
	} //clean up
	acidLib = null;
	/*
	Object checking methods
*/
	eachArray(['RegExp', 'Arguments', 'Boolean', 'Date', 'Error', 'Map', 'Object', 'Set', 'WeakMap', 'ArrayBuffer', 'Float32Array', 'Float64Array', 'Int8Array', 'Int16Array', 'Int32Array', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'HTMLCollection', 'NodeList'], function(item) {
		$['is' + item] = isSameObjectGenerator(objectStringGenerate(item));
	});
	var isHTMLCollection = $.isHTMLCollection,
		isNodeList = $.isNodeList;
})(this);