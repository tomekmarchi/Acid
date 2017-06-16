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

((global) => {
	"use strict";

	let cacheSuper;
	let corePath;
	const $ = (...args) => {
		return cacheSuper(...args);
	};
	global.$ = $;
	global.ACID = $;
	$.super = (method) => {
		cacheSuper = method;
	};

	/*

		Native objects

	*/
	const arrayNative = Array;
	const objectNative = Object;
	const functionNative = Function;
	const stringNative = String;
	const json = JSON;
	const mathNative = Math;
	const booleanNative = Boolean;
	const weakMap = WeakMap;
	const mapNative = Map;
	const numberNative = Number;
	const regExp = RegExp;
	const parseIntNative = parseInt;
	const consoleNative = console.log.bind(console);
	/*

		Prototypes

	*/
	const prototypeString = 'prototype';
	const objectPrototype = objectNative[prototypeString];
	const arrayPrototype = arrayNative[prototypeString];
	const stringPrototype = stringNative[prototypeString];
	const functionPrototype = functionNative[prototypeString];
	const regExpPrototype = regExp[prototypeString];
	/*
		Array.prototype Functions
	*/
	const toArray = $.toArray = arrayNative.from.bind(arrayNative);
	/*
	    	Object Functions
	    */
	const objectKeys = $.keys = objectNative.keys;
	const objectIs = $.is = objectNative.is;
	const objectAssign = $.assign = objectNative.assign;
	const getOwnPropertyDescriptor = $.getPropDescrip = objectNative.getOwnPropertyDescriptor;
	const defineProperty = $.defineProperty = objectNative.defineProperty;
	const getOwnPropertyNames = $.getOwnPropertyNames = objectNative.getOwnPropertyNames;
	/*
		JSON
	*/
	const stringify = json.stringify;
	const jsonParse = json.parse;
	/*
		System Hardware Info
	*/
	const systemCores = navigator.hardwareConcurrency;

	let bodyNode;
	const selfWindow = window;
	const documentNode = document;

	const classTest = /^.[\w_-]+$/;
	const tagTest = /^[A-Za-z]+$/;
	const regexSpace = /\s/;
	const regexSpaceglobal = /\s/g;
	const regexDot = /\./g;
	const regexDash = /-/g;
	const regexToPath = /\.|\[/;
	const regexOpenBracket = /]/g;
	const regexFowardslash = /\//g;
	const regexUnderscore = /_/g;
	const isJSRegex = /\.js$/;
	const isCSSRegex = /\.css$/;
	const isJSONRegex = /\.json$/;
	const hasDotRegex = /\./;
	const rawURLDecodeRegex = /%(?![\da-f]{2})/gi;
	const andRegex = /&/g;
	const lessThanRegex = /</g;
	const moreThanRegex = />/g;
	const doubleQuoteRegex = /"/g;
	const decimalCheck = /\.|\+/;
	const fileExtension = /\.([0-9a-z]+)/;
	const slashRegex = /\//g;

	const dotString = '.';
	const emptyString = '';
	const slashString = '/';
	const dashString = '-';
	const underscoreString = '_';
	const questionMarkString = '?';
	const andString = '&';
	const poundString = '#';
	const spaceCharacter = ' ';

	const protocol = location.protocol;
	const protocolSocket = ('protocol' === 'http:') ? 'ws' : 'wss';
	const hostname = location.hostname;

	const getLength = (item) => {
		return item.length;
	};
	$.getLength = getLength;
	const indexOfCall = (string, index) => {
		return string.indexOf(index);
	};
	const ensureArray = (object) => {
		return (isArray(object)) ? object : [
			object
		];
	};
	$.ensureArray = ensureArray;
	const ifInvoke = (...args) => {
		const method = shiftArray(args);
		return isFunction(method) ? apply(method, args) : undefined;
	};
	$.ifInvoke = ifInvoke;
	const ifNotEqual = (rootObject, property, equalThis) => {
		if (property) {
			rootObject[property] = rootObject[property] || equalThis;
			return rootObject[property];
		}
		return rootObject;
	};
	$.ifNotEqual = ifNotEqual;
	/* String relate*/
	const generatePrototype = (funct) => {
		return functionPrototype.call.bind(funct);
	};
	const substringCall = generatePrototype(stringPrototype.substring);
	const substrCall = generatePrototype(stringPrototype.substr);
	const stringSliceCall = generatePrototype(stringPrototype.slice);
	const toLowerCaseCall = generatePrototype(stringPrototype.toLowerCase);
	const toUpperCaseCall = generatePrototype(stringPrototype.toUpperCase);
	const splitCall = generatePrototype(stringPrototype.split);
	const stringRepeatCall = generatePrototype(stringPrototype.repeat);
	const charAtCall = generatePrototype(stringPrototype.charAt);
	const stringMatchCall = generatePrototype(stringPrototype.match);
	const stringReplaceCall = generatePrototype(stringPrototype.replace);
	/* Regex Helper*/
	const testRegex = generatePrototype(regExpPrototype.test);
	/* Array Helper*/
	const concatArray = generatePrototype(arrayPrototype.concat);
	const popArray = generatePrototype(arrayPrototype.pop);
	const pushArray = generatePrototype(arrayPrototype.push);
	const pushApply = $.pushApply = (array, arrayToPush) => {
		return apply(arrayPrototype.push, array, arrayToPush);
	};
	const arraySliceCall = generatePrototype(arrayPrototype.slice);
	const arraySort = generatePrototype(arrayPrototype.sort);
	const spliceArray = generatePrototype(arrayPrototype.splice);
	const shiftArray = generatePrototype(arrayPrototype.shift);
	const unShiftArray = generatePrototype(arrayPrototype.unshift);
	const unShiftApply = $.unShiftApply = (array, arrayToPush) => {
		return apply(arrayPrototype.unshift, array, arrayToPush);
	};
	const joinArray = generatePrototype(arrayPrototype.join);
	const findIndexArray = generatePrototype(arrayPrototype.findIndex);
	const findArray = generatePrototype(arrayPrototype.find);
	$.find = findArray;
	/*
		Object Helpers
	*/
	const toStringCall = (item) => {
		return item.toString();
	};
	/*
		Function calls
	*/
	const bindTo = generatePrototype(functionPrototype.bind);
	$.bindTo = bindTo;
	const call = (method, bindTo, arg) => {
		if (!arg) {
			arg = bindTo;
			bindTo = method;
		}
		return method.call(bindTo, arg);
	};
	$.callFn = call;
	const apply = (method, bindTo, args) => {
		if (!args) {
			args = bindTo;
			bindTo = method;
		}
		return method.apply(bindTo, args);
	};
	$.applyFn = apply;
	let count = 0;
	const uuidFree = [];
	const uuidClosed = {};
	const uuid = (max) => {
		let result = shiftArray(uuidFree);
		if (!hasValue(result)) {
			result = count;
			uuidClosed[result] = true;
			count++;
		}
		return result;
	};
	$.uuid = uuid;
	const uuidRemove = (id) => {
		uuidClosed[id] = null;
		pushArray(uuidFree, id);
	};
	uuid.remove = uuidRemove;

	//acid platform information
	$.info = {
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

	const eventAdd = (obj, eventName, func, capture) => {
		obj.addEventListener(eventName, func, capture);
		return obj;
	};
	$.eventAdd = eventAdd;
	const eventRemove = (obj, eventName, func, capture) => {
		obj.removeEventListener(eventName, func, capture);
		return obj;
	};
	$.eventRemove = eventRemove;

	$.isEnter = (event) => {
		const keyCode = event.keyCode;
		if (keyCode === 13) {
			return true;
		}
		return false;
	};


	//get characters in a range in a string
	const insertInRange = $.insertInRange = (text, start, end, insert) => {
		return stringSliceCall(text, 0, start) + insert + stringSliceCall(text, end, getLength(text));
	};
	//start index from right of string
	const rightString = $.rightString = function(text, a) {
		return text[getLength(text) - 1 - a];
	};
	const chunkString = $.chunkString = (string, size) => {
		return stringMatchCall(string, new regExp(`(.|[\r\n]){1, ${size}}`, 'g'));
	};
	$.initialString = (string) => {
		return string.slice(0, -1);
	};
	$.restString = (string) => {
		return string.slice(1, getLength(string));
	};

	//replace all items in an array with a string
	const replaceWithList = $.replaceWithList = (string, array, toReplace) => {
		return stringReplaceCall(string, new regExp(`\\b${joinArray(array,'|')}\\b`, 'gi'), toReplace);
	};

	//raw URL encode
	const rawURLDecode = $.rawURLDecode = (string) => {
		return decodeURIComponent(stringReplaceCall(string, rawURLDecodeRegex, function() {
			return '%25';
		}));
	};
	//html entities
	const createHtmlEntities = $.htmlEntities = (string) => {
		string = stringReplaceCall(string, andRegex, '&amp;');
		string = stringReplaceCall(string, lessThanRegex, '&lt;');
		string = stringReplaceCall(string, moreThanRegex, '&gt;');
		string = stringReplaceCall(string, doubleQuoteRegex, '&quot;');
		return stringReplaceCall(string, slashRegex, '&quot;');
	};
	const sanitize = $.sanitize = (string) => {
		return createHtmlEntities(rawURLDecode(string));
	};
	//decode URI Component
	const duc = $.duc = decodeURIComponent;
	//encode URI Component
	const euc = $.euc = encodeURIComponent;

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
	};
	const addRest = $.restString = (string, num) => {
		return substrCall(string, num || 1);
	};
	const ucFirst = $.ucFirst = function(string) {
		return ucFirstChar(string) + addRest(string);
	};
	const ucFirstAll = $.ucFirstAll = function(string) {
		return joinArray(mapArray(splitCall(string, spaceCharacter), function(item) {
			return ucFirst(item);
		}), ' ');
	};
	//uppercase first letter lower case the rest
	const ucFirstOnly = $.ucFirstOnly = (string) => {
		return ucFirstChar(string) + toLowerCaseCall(addRest(string));
	};
	//uppercase first letter lower case the rest all
	const ucFirstOnlyAll = $.ucFirstOnlyAll = (string) => {
		return joinArray(mapArray(splitCall(string, spaceCharacter), function(item) {
			return ucFirstOnly(item);
		}), ' ');
	};
	//Returns the camel cased string
	const camelCase = $.camel = (string) => {
		string = ucFirstAll(
			stringReplaceCall(
				stringReplaceCall(string, regexUnderscore, spaceCharacter),
				regexDash, spaceCharacter)
		);
		return toLowerCaseCall(charAtCall(string, 0)) + stringReplaceCall(substrCall(string, 1), regexSpaceglobal, emptyString);
	};
	const setStringCase = (string, caseLetter) => {
		return stringReplaceCall(stringReplaceCall(toLowerCaseCall(string), regexUnderscore, spaceCharacter), regexSpaceglobal, caseLetter);
	};
	//Returns the kebab cased string
	const kebabCase = $.kebab = (string) => {
		return setStringCase(string, dashString);
	};
	//Returns the snake cased string
	const snakeCase = $.snake = (string) => {
		return setStringCase(string, dashString);
	};
	//returns the trunced version of the string
	const truncate = $.truncate = (string, amount) => {
		if (getLength(string) > amount) {
			string = stringSliceCall(string, 0, amount);
		}
		return string;
	};
	//returns the trunced version of the string starting from the right
	const truncateLeft = $.truncateLeft = (string, amount) => {
		var length = getLength(string);
		if (length > amount) {
			string = substrCall(string, amount, length);
		}
		return string;
	};
	//returns the trunced version of the string
	const truncateWord = $.truncateWord = (string, amount) => {
		var cut = indexOfCall(string, ' ', amount);
		if (amount != -1) {
			string = substringCall(string, 0, amount);
		}
		return string;
	};

	//add paramaters to a URL
	const addParam = $.addParam = (url, newItem) => {
		if (getLength(url) && has(url, questionMarkString)) {
			if (lastItem(url) === questionMarkString) {
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
	const flatten = (array, level) => {
		for (let i = 0; i < (level || 1); i++) {
			array = array.reduce((previousValue, currentValue, index, array) => {
				return concatArray(previousValue, (level) ?
					ensureArray(currentValue) : (isArray(currentValue)) ? flatten(currentValue) : currentValue);
			}, []);
		}
		return array;
	};
	$.flatten = flatten;
	//cache for function that removes falsey values from array or object
	const compact = (array) => {
		return filter(array, (item) => {
			return isString(item) && !getLength(item) ? undefined : item;
		});
	};
	$.compact = compact;
	const arraySortToObject = (func, array, sortedObject = {}) => {
		eachArray(array, (item, key) => {
			func(item, key, sortedObject);
		});
		return sortedObject;
	};

	// Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.
	const arrayChunk = (array, size = 1) => {
		const chunked = [];
		let index = 0;
		array.forEach((item, key) => {
			if (!(key % size)) {
				chunked.push([]);
				if (key) {
					index++;
				}
			}
			chunked[index].push(item);
		});
		return chunked;
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
	const clearArray = (array) => {
		array.length = 0;
		return array;
	};
	$.clear = clearArray;

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
	 * // -> [1, 2, 3] false
	 */
	const cloneArray = arraySliceCall;
	$.cloneArray = arraySliceCall;

	/*
	Sorts a list into groups and returns a count for the number of objects in each group.
	$.countBy([4.3, 6.1, 6.4],function(numb) {
	  return Math.floor(numb);
	});
	{ '4': 1, '6': 2 }
	*/
	const countBy = function(array, funct) {
		const object = {};
		let result;
		eachArray(array, (item) => {
			result = funct(item);
			if (!object[result]) {
				object[result] = 0;
			}
			object[result]++;
		});
		return object;
	};
	$.countBy = countBy;
	const countKey = function(array, keyName) {
		let count = 0;
		eachArray(array, (item) => {
			if (item[keyName]) {
				count++;
			}
		});
		return count;
	};
	$.countKey = countKey;
	const countNoKey = function(array, keyName) {
		let count = 0;
		eachArray(array, (item) => {
			if (!item[keyName]) {
				count++;
			}
		});
		return count;
	};
	$.countNoKey = countNoKey;

	// Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.
	const rangeUp = (start, stop, increment) => {
		const rangeArray = [];
		let position = start;
		while (start < stop) {
			rangeArray.push(position);
			position += increment;
		}
		return rangeArray;
	};
	const rangeDown = (start, stop, incrementArg) => {
		const increment = (incrementArg < 0) ? incrementArg * -1 : incrementArg;
		const rangeArray = [];
		let position = start;
		while (start < stop) {
			rangeArray.push(position);
			position -= increment;
		}
		return rangeArray;
	};
	const range = (start, stop, increment = 1) => {
		if (start < stop) {
			return rangeUp(start, stop, increment);
		} else {
			return rangeDown(start, stop, increment);
		}
	};
	$.range = range;
	const rangeRight = (start, stop, increment = 1) => rangeDown(stop, start, increment);
	$.rangeRight = rangeRight;

	// Creates an array excluding all values of the provided arrays using SameValueZero for equality comparisons.
	const arrayDifference = (array, compare) => {
		const result = filterArray(array, (item) => {
			if (!has(item, compare)) {
				return item;
			}
		});
		return result;
	};
	$.difference = arrayDifference;

	// Removes elements from array corresponding to the given indexes and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
	const drop = (array, amount, length) => spliceArray(array, amount, length || getLength(array));
	$.drop = drop;
	// Removes elements from array corresponding to the given indexes (from right) and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
	const dropRight = (array, amount) => drop(array, 0, getLength(array) - amount);
	$.dropRight = dropRight;

	const safeModeCall = (safeMode) => {
		if (safeMode) {
			if (safeMode.halt) {
				return false;
			} else if (safeMode.skip) {
				safeMode.skip = false;
				return true;
			}
		}
	};
	const whileGenerator = (mainFunc, optBool) => {
		function compiled(array, fn, includeLastResult) {
			return mainFunc(array, function(item, index, array, length, results, safeMode) {
				if (!safeMode) {
					safeMode = results;
				}
				const result = apply(fn, fn, arguments);
				if (result === optBool) {
					safeMode.halt = true;
					if (includeLastResult) {
						return result;
					}
				} else {
					return result;
				}
			}, true);
		}
		return compiled;
	};
	const generateMap = function(method) {
		return function(array, fn, safeMode) {
			const results = [];
			let returned;
			eachArray(array, function(item, index, array, length, safe) {
				returned = fn(item, index, array, length, results, safe);
				(hasValue(returned) ? results[index] = returned : false)
			}, safeMode);
			return results;
		};
	};
	const filterArray = function(array, fn, safeMode) {
		const results = [];
		let returned;
		eachArray(array, (item, index, array, length, safe) => {
			returned = fn(item, index, array, length, results, safe);
			(hasValue(returned) ? pushArray(results, returned) : false)
		}, safeMode);
		return results;
	};
	$.filterArray = filterArray;
	// loop while the count is less than the length of the array
	const whileLength = function(array, fn) {
		// an array of results will be returned
		const results = [];
		let length = getLength(array);
		let index = 0;
		while (length) {
			results[index] = fn(array[index], index, array, length, results);
			length = getLength(array);
			index++;
		}
		return results;
	};
	$.whileLength = whileLength;
	// loop through based on number
	const times = function(start, end, fn) {
		if (!fn) {
			let fn = end;
			let end = start;
			let start = 0;
		}
		const results = [];
		for (let returned; start < end; start++) {
			// call function get result
			returned = fn(start, end, results);
			(hasValue(returned) ? pushArray(results, returned) : false)
		}
		return results;
	};
	$.times = times;
	const eachArrayRight = (array, fn, safeMode) => {
		safeMode = (safeMode) ? {} : safeMode;
		for (safeModeResult, length = getLength(array), i = length - 1; i >= 0; i--) {
			safeModeResult = safeModeCall(safeMode);
			if (safeModeResult) {
				continue;
			} else if (safeModeResult === false) {
				break;
			}
			fn(array[i], i, array, length, safeMode);
		}
	};
	$.eachArrayRight = eachArrayRight;
	const eachArray = (array, fn, safeMode) => {
		safeMode = (safeMode) ? {} : safeMode;
		const length = getLength(array);
		for (let safeModeResult, i = 0; i < length; i++) {
			safeModeResult = safeModeCall(safeMode);
			if (safeModeResult) {
				continue;
			} else if (safeModeResult === false) {
				break;
			}
			fn(array[i], i, array, length, safeMode);
		}
	};
	$.eachArray = eachArray;
	const mapArray = generateMap(eachArray);
	$.mapArray = mapArray;
	const mapArrayRight = generateMap(eachArrayRight);
	$.mapArrayRight = mapArrayRight;
	// loop while the returned result is false
	const eachWhilefalse = whileGenerator(eachArray, true);
	$.eachWhilefalse = eachWhilefalse;
	// each while the check function is true
	const eachWhile = whileGenerator(eachArray, false);
	$.eachWhile = eachWhile;
	// loop while the returned result is false
	const whilefalse = whileGenerator(mapArray, true);
	$.mapWhilefalse = whilefalse;
	// loop through array backwards aka from the right while true
	const mapArrayRightWhile = whileGenerator(mapArrayRight, false);
	$.mapArrayRightWhile = mapArrayRightWhile;
	// each while the check function is true
	const mapWhile = whileGenerator(mapArray, false);
	$.mapWhile = mapWhile;

	/*
	 	Determines if the arrays are equal by doing a shallow comparison of their elements using strict equality.
	*/
	const isEqualArray = (original, array) => {
		let result = true;
		if (getLength(array) !== getLength(original)) {
			result = false;
		} else {
			eachWhile(array, (item, index) => {
				if (original[index] !== item) {
					result = false;
					return result;
				}
			});
		}
		return result;
	};
	$.isEqualArray = isEqualArray;
	/*
		Performs a deep comparison between object and source to determine if object contains equivalent property values.
	*/
	const isEqualArrayDeep = (original, array) => {
		let result = true;
		if (getLength(array) !== getLength(original)) {
			result = false;
		} else {
			eachWhile(array, (item, index) => {
				result = isMatch(item, original[index])
				return result;
			});
		}
		return result;
	};
	$.isEqualArrayDeep = isEqualArrayDeep;

	const findDifference = function(array, sum) {
		const returnedObject = {};
		const len = getLength(array);
		let item;
		let end;
		let check;
		for (let i = 0; i < len; i++) {
			item = array[i];
			end = sum - item;
			check = array.indexOf(end);
			if (check !== -1 && check !== i) {
				returnedObject.start = item;
				returnedObject.end = end;
				returnedObject.startIndex = i;
				returnedObject.endIndex = check;
				break;
			}
		}
		return returnedObject;
	};
	$.findDifference = findDifference;

	const findIndexCache = (element, index, array, indexMatch, propertyName) => {
		if (element[propertyName] === indexMatch) {
			return true;
		}
	};
	const findItem = (array, indexMatch, propertyName = 'id') => {
		const result = findArray(array, (element, index) => findIndexCache(element, index, array, indexMatch, propertyName));
		return (result === -1) ? false : result;
	};
	$.findItem = findItem;
	const findIndex = (array, indexMatch, propertyName = 'id') => {
		const result = findIndexArray(array, (element, index) => findIndexCache(element, index, array, indexMatch, propertyName));
		return (result === -1) ? false : result;
	};
	$.findIndex = findIndex;

	const findSum = function(array, sum) {
		const returnedObject = {};
		const len = getLength(array);
		let item;
		let end;
		let check;

		for (let i = 0; i < len; i++) {
			item = array[i];
			end = sum - item;
			check = array.indexOf(end);

			if (check !== -1 && check !== i) {
				returnedObject.start = item;
				returnedObject.end = end;
				returnedObject.startIndex = i;
				returnedObject.endIndex = check;
				break;
			}
		}

		return returnedObject;
	};
	$.findSum = findSum;

	// Returns the first element of an array. Passing num will return the first n elements of the array.
	const firstItem = (array, num) => {
		return (num) ? arraySliceCall(array, 0, num) : array[0];
	};
	$.first = firstItem;

	const returnFlow = function(method) {
		return function(...mainArgs) {
			const funcs = flatten(toArray(mainArgs));
			return function wrapped(...wrapArgs) {
				const args = toArray(wrapArgs);
				const value = [];
				method(funcs, (item) => {
					value[0] = apply(item, wrapped, value[0] ? value : args);
				});
				return value[0];
			};
		};
	};
	// Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
	$.flow = returnFlow(eachArray);
	// Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
	$.flowRight = returnFlow(eachArrayRight);

	/*
		Splits a collection into sets, grouped by the result of running each value through iteratee.
	*/
	const groupBy = function(array, funct) {
		return arraySortToObject((item, index, objectArg) => {
			const results = funct(item);
			if (!objectArg[results]) {
				objectArg[results] = [];
			}
			pushArray(objectArg[results], item);
		}, array);
	};
	$.groupBy = groupBy;

	// Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know your keys are unique.
	const indexBy = function(array, index) {
		return arraySortToObject((item, key, object) => {
			object[item[index]] = item;
		}, array);
	};
	$.indexBy = indexBy;

	const generateArrayRange = (method) => {
		const result = (array) => {
			array = cloneArray(array);
			method(array);
			return array;
		};
		return result;
	};
	const arrayInitial = generateArrayRange(popArray);
	$.initial = arrayInitial;
	const arrayRest = generateArrayRange(shiftArray);
	$.rest = arrayRest;

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
	const intersection = function(...args) {
		let yes;
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
	$.intersect = intersection;

	// Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
	const invoke = function(array, method, args) {
		return mapArray(array, item => apply(item[method], item, args));
	};
	$.invoke = invoke;

	// get largest number from array
	const largest = array => apply(mathNativeMax, mathNative, array);
	$.largest = largest;

	// Returns the last element of an array. Passing n will return the last n elements of the array.
	const lastItem = function(array, indexFrom) {
		const length = getLength(array);
		return (indexFrom) ? arraySliceCall(array, length - indexFrom, length) : array[length - 1];
	};
	$.last = lastItem;

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
	const numSort = function(array) {
		return array.sort(numericalCompare);
	};
	$.numSort = numSort;

	// Converts arrays into objects.
	const arrayToObject = function(values, keys) {
		return arraySortToObject((item, index, objectArg) => {
			objectArg[keys[index]] = item;
		}, values);
	};
	$.object = arrayToObject;

	// Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
	const partition = (array, funct) => {
		const temp = [];
		return [
			filterArray(array, (item, index) => funct(item) ? item : pushArray(temp, item) && undefined),
			temp,
		];
	};
	$.partition = partition;

	// Pluck an attribute from each object in an array.
	const pluck = function(array, pluckThis) {
		let pluckMethod;
		if (isArray(pluckThis)) {
			pluckMethod = (item, index) => arraySortToObject((pluckItem, pluckKey, object) => {
				object[pluckItem] = item[pluckItem];
			}, pluckThis);
		} else {
			pluckMethod = (item) => {
				const result = item[pluckThis];
				return result;
			};
		}
		return mapArray(array, pluckMethod);
	};
	$.pluck = pluck;

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
	const rNumSort = function(array) {
		return array.sort(numericalCompareReverse);
	};
	$.rNumSort = rNumSort;

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
	const remove = function(array, functArgs) {
		const isFN = isFunction(args);
		const args = ensureArray(functArgs);
		eachArray(array, (item, index) => {
			if ((isFN) ? args(item) : has(args, item)) {
				spliceArray(array, index, 1);
			}
		});
		return array;
	};
	$.remove = remove;

	// start from end array using a as index
	const right = function(array, amount) {
		return array[getLength(array) - 1 - amount];
	};
	$.right = right;

	/*
	  Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
	  $.sample([1,2,3,4] , 2);
	*/
	const sample = (array, amount = 1) => {
		const sampleArray = toArray(array);
		let count = 0;
		let index;
		let value;
		while (count < amount) {
			index = randomInt(sampleArray.length - 1, 0);
			value = sampleArray[count];
			sampleArray[count] = sampleArray[index];
			sampleArray[index] = value;
			count++;
		}
		return sampleArray;
	};
	$.sample = sample;

	// shuffle an array and return a new array
	const shuffle = (array) => {
		return sample(array, array.length);
	};
	$.shuffle = shuffle;

	// get smallest number from array
	const smallest = function(item) {
		return apply(mathNative.min, mathNative, item);
	};
	$.smallest = smallest;

	/*
		Perform alphabetical sort on collection on provided key name
	*/
	const sortAlpha = (collection, key) => {
		let currentKey;
		let nextKey;
		collection.sort((current, next) => {
			currentKey = current[key];
			nextKey = next[key];
			return (currentKey < nextKey) ? -1 : (currentKey > nextKey) ? 1 : 0;
		});
		return collection;
	};
	$.sortAlpha = sortAlpha;

	// Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order.
	const sortedIndex = function(array, n) {
		let min = 0;
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
	$.sortedIndex = sortedIndex;

	/**
	 * Adds all values in an array
	 * @param      {Array}   Array of numbers or numbers as string.
	 * @param      {Number}   Starting number
	 * @return     {Number} returns the sum of the array
	 */
	const sumOf = function(array, result = 0) {
		each(array, (item, key) => {
			result = (item) ? result + (isString(item) ? numberNative(item) : item) : result;
		});
		return result;
	};
	$.sumOf = sumOf;

	// Creates a slice of array with n elements taken from the beginning.
	const take = function(array, amount) {
		return arraySliceCall(array, 0, amount);
	};
	$.take = take;
	// Creates a slice of array with n elements taken from the end.
	const takeRight = function(array, amount) {
		return spliceArray(array, getLength(array) - amount, amount);
	};
	$.takeRight = takeRight;

	// Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
	const union = function() {
		const result = [];
		eachArray(arguments, (array) => {
			eachArray(array, (item) => {
				if (has(result, item)) {
					pushArray(result, item);
				}
			});
		});
		return result;
	};
	$.union = union;

	const chunkSlice = (array, start, end) => {
		return mapArray(new arrayNative(mathNative.min(end, getLength(array)) - start), (item, index) => {
			return array[start + index];
		});
	};
	const numericalCompare = (a, b) => {
		return a - b;
	};
	const numericalCompareReverse = (a, b) => {
		return b - a;
	};
	const xorBase = (a, b) => {
		return mapArray(concatArray(a, b), (item, index, array) => {
			if (!has(b, item) && indexOfCall(array, item) < 0) {
				return item;
			}
		});
	};
	const onlyUnique = (value, index, self) => {
		return self.indexOf(value) === index;
	};
	const uniqueArray = (array, isSorted) => {
		return (isSorted) ? mapArray(array, (item, index) => {
			if (item !== array[index - 1]) {
				return item;
			}
		}) : array.filter(onlyUnique);
	};
	$.uniq = uniqueArray;

	// Returns a copy of the array with all instances of the values removed.
	const without = function(array, functArgs) {
		const isFN = isFunction(functArgs);
		const args = ensureArray(functArgs);
		return mapArray(array, (item, index) => {
			if ((isFN) ? args(item) : has(args, item)) {
				return item;
			}
		});
	};
	$.without = without;

	// Creates an array that is the symmetric difference of the provided arrays. See Wikipedia for more details.
	const xor = function(arrayOG) {
		const args = arguments;
		const numArgs = getLength(args);
		let result;
		if (!numArgs) {
			return uniqueArray(arrayOG);
		}
		result = xorBase(arrayOG, args[0]);
		eachArray(args, (item) => {
			result = xorBase(result, item);
		});
		return result;
	};
	$.xor = xor;

	// Merges together the values of each of the arrays with the values at the corresponding position.
	const zip = function() {
		const args = arguments;
		return mapArray(args[0], function(arraySet) {
			return mapArray(args, arraySet => shiftArray(arraySet));
		});
	};
	$.zip = zip;
	// unzip the array of zipped arrays [["fred",30,true],["barney",40,false]]
	const unZip = function(array) {
		return mapArray(array[0], item => mapArray(array, arraySet => shiftArray(arraySet)));
	};
	$.unZip = unZip;

	/*
	const array = [async function(...args){
	  console.log(1,args);
	}, async function(...args){
	  console.log(2,args);
	}];
	$.asyncEach(array,[3,4]);
	*/
	const asyncEach = async(array, args, indexArg = 0, arrayLength = array.length) => {
		let index = indexArg;
		if (index < length) {
			const item = array[index];
			await item(args, index);
			index++;
			await asyncEach(array, args, index, arrayLength);
		}
	};
	$.asyncEach = asyncEach;
	const eachAsync = async(array, funct, indexArg = 0, arrayLength = array.length) => {
		let index = indexArg;
		if (index < length) {
			const item = array[index];
			await funct(item, index);
			index++;
			await eachAsync(array, funct, index, arrayLength);
		}
	};
	$.eachAsync = eachAsync;

	const sortNewest = (arrayArg, key, pureMode) => {
		const array = (pureMode) ? arrayArg : [...arrayArg];
		return arraySort(array, (previous, next) => {
			if (!next[key]) {
				return -1;
			} else if (!previous[key]) {
				return 1;
			} else if (previous[key] < next[key]) {
				return 1;
			} else if (previous[key] > next[key]) {
				return -1;
			}
			return 0;
		});
	};
	$.sortNewest = sortNewest;
	$.getNewest = (array, key) => {
		return sortNewest(array, key)[0];
	};

	const sortOldest = (arrayArg, key, pureMode) => {
		const array = (pureMode) ? arrayArg : [...arrayArg];
		return arraySort(array, (previous, next) => {
			if (!next[key]) {
				return -1;
			} else if (!previous[key]) {
				return 1;
			} else if (previous[key] < next[key]) {
				return 1;
			} else if (previous[key] > next[key]) {
				return -1;
			}
			return 0;
		});
	};
	$.sortOldest = sortOldest;
	$.getOldest = (array, key) => {
		return sortOldest(array, key)[0];
	};


	const assignDeep = $.assignDeep = (object, otherObject, mergeArrays) => {
		eachObject(otherObject, (item, key) => {
			if (isPlainObject(item) && isPlainObject(object[key])) {
				assignDeep(object[key], item, mergeArrays);
			} else if (mergeArrays && isArray(item) && isArray(object[key])) {
				pushApply(object[key], item);
			} else {
				object[key] = item
			}
		});
		return object;
	};

	const objectStringGenerate = function(name) {
		return `[object ${name}]`;
	};
	const isSameObjectGenerator = (type) => {
		return (obj) => {
			return (hasValue(obj)) ? toStringCall(obj) === type : false;
		}
	};
	const isDecimal = $.isDecimal = function(string) {
		return stringMatchCall(toStringCall(string), decimalCheck);
	};
	const hasValue = $.hasValue = function(item) {
		return !isUndefined(item) && !isNull(item);
	};
	const isUndefined = $.isUndefined = function(obj) {
		return obj === undefined;
	};
	const isNull = $.isNull = function(obj) {
		return obj === null;
	};
	const isAll = $.isAll = function() {
		const args = toArray(arguments);
		const method = shiftArray(args);
		let result = true;
		eachArray(args, (item, index, array, length, safe) => {
			result = method(item);
			if (!result) {
				safe.halt = true;
			}
		}, true);
		return result;
	};
	const isArray = $.isArray = arrayNative.isArray;
	const isConstructor = $.isConstructor = (constructor) => {
		return (obj) => {
			return (hasValue(obj)) ? obj.constructor === constructor : false;
		};
	};
	const isString = $.isString = isConstructor(stringNative);
	const isNumber = $.isNumber = isConstructor(numberNative);
	const isPlainObject = $.isPlainObject = function(obj) {
		return (hasValue(obj)) ? stringSliceCall(toStringCall(obj.constructor)
			.trim(), 9, 16) === 'Object(' : false;
	};
	const isFunction = $.isFunction = function(obj) {
		return (hasValue(obj)) ? obj instanceof functionNative : false;
	};
	const has = $.has = (string, search) => {
		return (isArray(search)) ? apply(string.includes, string, search) : string.includes(search);
	};
	const hasLength = $.hasLength = function(obj) {
		return !!getLength(obj);
	};
	const isEmpty = $.isEmpty = function(obj) {
		if (isString(obj) || isArray(obj)) {
			return !hasLength(obj);
		} else if (isPlainObject(obj)) {
			return !objectSize(obj);
		}
		return !hasValue(obj);
	};
	const regexGenerator = (regexType) => {
		return (item) => {
			return (hasValue(item)) ? regexType.test(item) : false;
		};
	};
	const isFileCSS = $.isFileCSS = regexGenerator(isCSSRegex);
	const isFileJSON = $.isFileJSON = regexGenerator(isJSONRegex);
	const isFileJS = $.isFileJS = regexGenerator(isJSRegex);
	const extension = $.extension = (string) => {
		return stringMatchCall(string, /\.([0-9a-z]+)/);
	};
	const hasDot = $.hasDot = regexGenerator(hasDotRegex);
	const getModelRootName = $.getModelRootName = function(string) {
		return splitCall(string, dotString)[0];
	};
	const getModelProperty = $.getModelProperty = function(string) {
		return lastItem(splitCall(string, slashString));
	};
	const getModelName = $.getModelName = function(string) {
		return get(lastItem(splitCall(string, slashString))
			.replace(/\.js$/, ''), modelMethod);
	};

	$.compactKeys = (object) => {
		const keys = [];
		each(object, (item, key) => {
			if (item) {
				pushArray(keys, key);
			}
		});
		return keys;
	};

	//loop through an object
	const mapObject = (object, fn) => {
		const results = {};
		eachObject(object, function(item, key) {
			results[key] = apply(fn, arguments);
		});
		return results;
	};
	$.mapObject = mapObject;
	const filterObject = (object, fn) => {
		const results = {};
		let result;
		eachObject(object, function(item, key) {
			result = apply(fn, arguments);
			if (hasValue(result)) {
				results[key] = result;
			}
		});
		return results;
	};
	$.filterObject = filterObject;
	const eachObject = (object, fn) => {
		eachArray(objectKeys(object), (key, index, array, len) => {
			fn(object[key], key, object, len);
		});
	};
	$.eachObject = eachObject;
	const forEach = (array, funct, optional) => {
		array.forEach(funct, optional);
		return array;
	};
	$.forEach = forEach;
	const mapProperty = (array, funct) => {
		const object = {};
		eachArray(getOwnPropertyNames(array), (item, key, length) => {
			object[item] = funct(array[item], item, array, length, object);
		});
		return object;
	};
	$.mapProperty = mapProperty;
	const forIn = (object, fn) => {
		const results = {};
		for (let key in object) {
			results[key] = fn(object[key], key, object, results);
		}
		return results;
	};
	$.forIn = forIn;

	/*
		Perform check on object to ensure all keys listed are present on the object.
	*/
	const hasKeys = (object, keys) => {
		let flag = false;
		eachWhile(keys, (key) => {
			flag = hasValue(object[key]);
			return flag;
		});
		return flag;
	};
	$.hasKeys = hasKeys;
	/*
		Perform check on object to ensure any of the keys listed are present on the object.
	*/
	const hasAnyKeys = (object, keys) => {
		let flag = false;
		eachWhilefalse(keys, (key) => {
			flag = hasValue(object[key]);
			return flag;
		});
		return flag;
	};
	$.hasAnyKeys = hasAnyKeys;

	/*
		Returns a copy of the object where the keys have become the values and the values the keys. For this to work, all of your object's values should be unique and string serializable.
	*/
	const invert = (thisObject, invertedObject = {}) => {
		eachObject(thisObject, (item, key) => {
			invertedObject[item] = key;
		});
		return invertedObject;
	};
	$.invert = invert;

	/*
		Performs a deep comparison on listed property values
		props will default to first objects
	*/
	const isPropsEqual = (object, compareObject, props) => {
		let result = false;
		const keys = props || objectKeys(object);
		eachWhile(keys, (key) => {
			result = isMatch(object[key], compareObject[key]);
			return result;
		});
		return result;
	};
	$.isPropsEqual = isPropsEqual;
	/*
	  Creates a function that performs a partial deep comparison between a given object and source, returning true if the given object has equivalent property values, else false.
	*/
	$.matches = (object) => {
		const keys = objectKeys(object);
		return (compareObject) => {
			return isPropsEqual(object, compareObject, keys);
		};
	};

	/*
		Performs a deep comparison between object and source to determine if object contains equivalent property values.
	*/

	const isPropsEqualDeep = $.isPropsEqualDeep = (object, compareObject) => {
		let result = false;
		if (isEqualArray(objectKeys(object), objectKeys(compareObject))) {
			eachWhile(objectKeys(object), (key) => {
				result = isMatch(object[key], compareObject[key]);
				return result;
			});
		}
		return result;
	};

	/*
		Performs a deep comparison between object and source to determine if object contains equivalent property values.
	*/

	const isMatch = (object, compareObject) => {
		let result = false;
		if (object === compareObject) {
			result = true;
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
	$.isMatch = isMatch;

	/*
		Return a copy of the object, filtered to omit the blacklisted keys (or array of keys). Alternatively accepts a predicate indicating which keys to omit.
	*/
	const omit = $.omit = (originalObject, array) => {
		return filterObject(originalObject, (item, key) => {
			if (!has(array, key)) {
				return item;
			}
		});
	};

	/*
		pick specific properties, listed in an array, from an object and a new object is returned with those specfic properties.
	*/
	const pick = $.pick = (array, originalObject, newObject) => {
		return arraySortToObject((item, key, object) => {
			object[item] = originalObject[item];
		}, array, newObject);
	};

	/*
		Return the number of values in the list.
	*/
	const objectSize = $.size = (object) => {
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
		const keys = [];
		const values = [];
		eachObject(object, (item, key) => {
			pushArray(keys, key);
			pushArray(values, item);
		});
		return [keys, values];
	};


	// Creates a function that accepts up to n arguments ignoring any additional arguments. The 2nd argument will be binded if none the initial new function will be.
	$.ary = (funct, amount, bind) => {
		return function() {
			return apply(funct, bind || funct, toArray(arguments).splice(0, amount));
		};
	};

	/*
		Replace mode will overwrite the original plainObject or Array
	*/
	const bindAll = (bindThese, withThis, replaceMode) => {
		let result;
		if (replaceMode) {
			result = each(bindThese, (item, key) => {
				if (isFunction(item)) {
					bindThese[key] = bindTo(item, withThis);
				}
			});
		} else {
			result = map(bindThese, (item) => {
				return isFunction(item) ? bindTo(item, withThis) : item;
			});
		}
		return result;
	};
	$.bindAll = bindAll;

	const addChain = (chain, addToChain) => {
		each(addToChain, (item, key) => {
			chain.methods[key] = (...args) => {
				unShiftArray(args, chain.value);
				apply(item, args);
				return chain.methods;
			};
		});
		return chain;
	};
	$.chain = (methods) => {
		const chain = (value) => {
			chain.value = value;
			return chain.methods;
		};
		objectAssign(chain, {
			methods: {},
			add(addToChain) {
				return addChain(chain, addToChain);
			},
			done() {
				const value = chain.value;
				chain.value = null;
				return value;
			}
		});
		chain.add(methods);
		return chain;
	};

	$.curry = (funts) => {
		const argsLength = getLength(funts);
		const args = [];
		const curry = (...curryArgs) => {
			eachArray(curryArgs, (item) => {
				pushArray(args, item);
			});
			return curry;
		};
		curry.result = () => {
			const results = apply(funts, curry, args);
			clearArray(args);
			return results;
		};
		return curry;
	};
	/*
		const curried=curry(function(a,b,c){
			return [a,b,c];
		});

		curried(1)(2)(3);
		curried.result(); [1, 2, 3]

	*/
	$.curryRight = function(funts) {
		const argsLength = getLength(funts);
		const args = [];
		const curry = function(...curryArgs) {
			eachArray(curryArgs, (item) => {
				unShiftArray(args, item);
			});
			return curry;
		};
		curry.result = () => {
			const results = apply(funts, curry, args);
			clearArray(args);
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

	// Creates a function that negates the result of the predicate func. The func predicate is invoked with the this binding and arguments of the created function.
	$.negate = (func) => {
		return (...args) => {
			return !apply(func, func, args);
		};
	};

	$.nthArg = (numArg) => {
		let num = numArg;
		return (...args) => {
			if (num < 0) {
				num = args.length - (num * -1);
			}
			return args[num];
		};
	};

	// Creates a function that is restricted to execute func once. Repeat calls to the function will return the value of the first call. The func is executed with the this binding of the created function.
	$.once = (fn) => {
		let value;
		const onlyOnce = (...args) => {
			if (!value) {
				value = apply(fn, onlyOnce, args);
			}
			return value;
		};
		return onlyOnce;
	};
	// Creates a function that executes func, with the this binding and arguments of the created function, only after being called n times.
	const afterFn = (amountArg, fn) => {
		let amount = amountArg;
		const onlyAfter = (...args) => {
			amount--;
			if (amount < 0) {
				return apply(fn, onlyAfter, args);
			}
		};
		return onlyAfter;
	};
	$.after = afterFn;
	// Creates a function that executes func, with the this binding and arguments of the created function, only before being called n times.
	const beforeFn = (amountArg, fn) => {
		let amount = amountArg;
		const onlyBefore = (...args) => {
			amount--;
			if (amount > 0) {
				return apply(fn, onlyBefore, args);
			}
		};
		return onlyBefore;
	};
	$.before = beforeFn;
	// Creates a function that executes func, with the this binding and arguments of the created function, only after or equal to being called n times.
	$.onAfter = (amount, fn) => {
		return afterFn(amount - 1, fn);
	};
	// Creates a function that executes func, with the this binding and arguments of the created function, only before or equal to being called n times.
	$.onBefore = (amount, fn) => {
		return beforeFn(amount + 1, fn);
	};

	// Creates a function that invokes func with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.
	$.reArg = (funct, list) => {
		return function named(...args) {
			return apply(funct, named, mapArray(list, (item) => {
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

	// Launch functions in sync
	$.inSync = (fns, params) => {
		return map(fns, (item) => {
			apply(item, params);
		});
	};

	const clearTimer = clearTimeout;
	const timerMethod = (fn, time) => {
		return setTimeout(fn, time);
	};
	$.clearTimers = generateClear(timerMethod, clearTimer);
	$.clearIntervals = generateClear(intervalMethod, clearInterval);
	$.timer = timerMethod;
	const intervalMethod = (fn, time) => {
		return setInterval(fn, time);
	};
	$.interval = intervalMethod;
	const generateClear = (method, clearMethod) => {
		return (max) => {
			times(0, method(() => {}, max || 1000), (index) => {
				clearMethod(index);
			});
		};
	};
	$.debounce = (original, time) => {
		let timeout = false;
		const fn = (...args) => {
			if (timeout !== false) {
				clearTimer(timeout);
			}
			timeout = timerMethod(() => {
				apply(original, fn, args);
				timeout = false;
			}, time);
		};
		fn.clear = () => {
			if (timeout) {
				clearTimeout(timeout);
				timeout = false;
			}
		};
		return fn;
	};
	$.throttle = (func, time) => {
		let timeout = false;
		let shouldThrottle;
		const fn = (...args) => {
			if (timeout) {
				shouldThrottle = true;
				return;
			}
			apply(func, fn, args);
			timeout = timerMethod(() => {
				if (shouldThrottle) {
					apply(func, fn, args);
				}
				timeout = false;
			}, time);
		};
		fn.clear = () => {
			clearTimer(timeout);
			timeout = false;
		};
		return fn;
	};
	$.inAsync = async(fns, params) => {
		await eachAsync(fns, async(item) => {
			await apply(item, params);
		});
	};

	const returnWraped = (method, fliptrue) => {
		return () => {
			const list = [];
			const wrapped = (...wrappedArgs) => {
				return mapArray(list, (item) => {
					return apply(item, wrapped, wrappedArgs);
				});
			};
			objectAssign(wrapped, {
				list,
				add(...addTheseArg) {
					const addThese = flatten(addTheseArg);
					method(list, (fliptrue) ? addThese.reverse() : addThese);
				},
			});
			wrapped.add(args);
			return wrapped;
		};
	};
	const wrapCall = returnWraped(pushApply);
	$.wrap = wrapCall;
	const wrapBefore = returnWraped(unShiftApply, true);
	$.wrapBefore = wrapBefore;

	// is number zero
	$.isZero = function(item) {
		return item === 0;
	};
	// is strict equal to
	$.isNumberEqual = function(item, num) {
		return item === num;
	};
	// is In range of two numbers
	$.isNumberInRange = function(num, start, end) {
		if (isUndefined(end)) {
			end = start;
			start = 0;
		}
		return num > start && num < end;
	};

	// cache math functions
	const floorMethod = mathNative.floor;
	const randomMethod = mathNative.random;
	const mathNativeMax = mathNative.max;
	const ceilMethod = mathNative.ceil;
	const roundMethod = mathNative.round;

	$.math = mathNative;

	// add this and value
	$.add = function(number, value) {
		return number + value;
	};
	// minus this and value
	$.minus = function(number, value) {
		return number - value;
	};
	// divide this and value
	$.divide = function(number, value) {
		return number / value;
	};
	// multiply this and value
	$.multiply = function(number, value) {
		return number * value;
	};
	// The modulo function is the integer remainder of dividing this by value
	$.remainder = function(number, value) {
		return number % value;
	};
	// add 1
	$.increment = function(number) {
		return number + 1;
	};
	// minus 1
	$.deduct = function(number) {
		return number - 1;
	};
	// Returns a random number between min (inclusive) and max (exclusive)
	$.randomArbitrary = (max, min = 0) => {
		return randomMethod() * (max - min) + min;
	};
	// Returns a random integer between min (included) and max (excluded)
	const randomInt = (max, min = 0) => {
		return floorMethod(randomMethod() * (max - min)) + min;
	};
	$.randomInt = randomInt;

	const appState = {
		screenHeight: screen.height,
		screenWidth: screen.width
	};
	$.appState = appState;

	//console.log
	const acidConsole = $.cnsl = (data, theme) => {
		data = isString(data) ? data : stringify(data);
		apply(consoleNative, [`%c${data}`, `${logTheme[theme]}font-size:13px;padding:2px 5px;border-radius:2px;`]);
	};
	const generateLogTheme = (color, bg) => {
		return `color:${color};background:${bg};`;
	};
	const logTheme = {
		notify: generateLogTheme('#fff', '#651FFF'),
		warning: generateLogTheme('#000', '#FFEA00'),
		important: generateLogTheme('#fff', '#E91E63'),
		alert: generateLogTheme('#fff', '#f44336')
	};
	const addTheme = $.addConsoleTheme = (name, color, bg) => {
		logTheme[name] = generateLogTheme(color, bg);
	};

	/**
	 * Create a lazy contract using an array of strings required to satisfy the contract. After the contract is completed an async callback is executed.
	 * @param      {Array,String}   Contract array when setting & String if satisfying a portion of the contract
	 * @param      {String}   Contract name must be unique from other contracts
	 * @param      {Function} callback
	 * @return     {Undefined} returns nothing from the function
	 */
	const contract = (arry, name, callback) => {
		if (!callback) {
			contract[name](arry);
		} else {
			contract[name] = (part) => {
				return has(arry, part) && shiftArray(arry) && !getLength(arry) && asyncMethod(callback);
			};
		}
	};
	$.contract = contract;

	const generateCheckLoops = (first, second) => {
		return (object, funct, optional, rawProp) => {
			let returned;
			if (!hasValue(object)) {
				return;
			} else if (isArray(object)) {
				returned = first;
			} else if (isPlainObject(object) || isFunction(object)) {
				returned = second;
			} else if (isNodeList(object) || isHTMLCollection(object)) {
				object = toArray(object);
				returned = first;
			} else if (rawProp) {
				returned = mapProperty;
			} else if (object.forEach) {
				returned = forEach;
			} else {
				returned = second;
			}
			return returned(object, funct, optional);
		};
	};
	const map = $.map = generateCheckLoops(mapArray, mapObject);
	const each = $.each = generateCheckLoops(eachArray, eachObject);
	const filter = $.filter = generateCheckLoops(filterArray, filterObject);

	/*

		Navigate down an object's chain via a string.

	*/
	const get = (name, objectChain) => {
		let link = objectChain || $;
		const stringChain = splitCall(lastItem(splitCall(name, slashString)), dotString);
		eachWhile(stringChain, (item) => {
			link = link[item];
			return hasValue(link) ? true : false;
		});
		return link;
	};
	$.get = get;

	/*
		Create a new function from a string and bind it to itself.
			Return
	*/
	const newFunction = (string, optional) => {
		try {
			const funct = eval(`(function(){"use strict";${string}})`).bind(optional || funct);
			return funct;
		} catch (e) {
			return false;
		}
	};
	$.newFunction = function(string, optional = {}) {
		return newFunction(`${string} return this;`, optional);
	};
	// for inline JS object notion.
	const inlineJson = function(string) {
		return eval(`(${string})`);
	};
	$.iJson = inlineJson;

	//convert from json string to json object cache it to use across lib
	const jsonWithCatch = (str) => {
		try {
			return jsonParse(str);
		} catch (e) {
			return false;
		}
	};
	$.jsonParse = jsonWithCatch;

	const modelMethod = (modelName, object) => {
		if (hasValue(object)) {
			modelMethod[modelName] = object;
		}
		return get(modelName, modelMethod);
	};
	$.model = modelMethod;
	$.super(modelMethod);

	const promise = (callback) => {
		return new Promise(callback);
	};
	$.promise = promise;

	$.toggle = (value, a, b) => {
		return (value === a) ? b : a;
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
		$.times(2, $.stubfalse);
		// => [false, false]
	*/
	$.stubfalse = () => {
		return false;
	};
	/*
		This method returns true.
		$.times(2, $.stubtrue);
		// => [true, true]
	*/
	$.stubtrue = () => {
		return true;
	};
	/*
		This method returns undefined.
		$.times(2, _.noop);
		// => [undefined, undefined]
	*/
	$.noop = () => {
		return undefined;
	};

	$.toPath = (string) => {
		return string.replace(regexOpenBracket, emptyString).split(regexToPath);
	};

	const clsSelector = bindTo(documentNode.getElementsByClassName, documentNode);
	const tagSelector = bindTo(documentNode.getElementsByTagName, documentNode);
	$.getClass = clsSelector;
	$.getTag = tagSelector;

	const idSelector = bindTo(documentNode.getElementById, documentNode);
	$.getId = idSelector;

	const qsSelector = bindTo(documentNode.querySelector, documentNode);
	$.querySelector = qsSelector;

	const qsaSelector = bindTo(documentNode.querySelectorAll, documentNode);
	$.querySelectorAll = qsaSelector;

	const selector = (select) => {
		const firstLetter = select[0];
		switch (firstLetter) {
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
	$.selector = selector;

	// Get useragent info
	const isAgent = (name) => {
		return (name) ? isAgent[name] : objectKeys(isAgent);
	};
	eachArray(splitCall(stringReplaceCall(stringReplaceCall(toLowerCaseCall(navigator.userAgent), /_/g, dotString), /[#_,;()]/g, ''), / |\//), (item) => {
		isAgent[item] = true;
	});
	$.isAgent = isAgent;

	const raf = requestAnimationFrame.bind(selfWindow);
	const caf = cancelAnimationFrame.bind(selfWindow);
	$.raf = raf;
	$.caf = caf;

	const append = (node, child) => {
		node.appendChild(child);
		return node;
	};

	let batchCancelFrame = false;
	const batchChanges = [];
	const batchLoop = () => {
		eachArray(batchChanges, ifInvoke);
		clearArray(batchChanges);
		batchCancelFrame = false;
	};
	const batchAdd = (item) => {
		pushApply(batchChanges, ensureArray(item));
		if (!batchCancelFrame) {
			batchCancelFrame = raf(batchLoop);
		}
	};
	$.batch = batchAdd;

	// create fragment
	const createFragment = bindTo(documentNode.createDocumentFragment, documentNode);
	$.createFragment = createFragment;

	// create node
	let domHeadNode;
	const nodeAttribute = (node, keys, value) => {
		let results;
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
	};
	const createTag = bindTo(documentNode.createElement, documentNode);
	$.createTag = createTag;
	const nodeAttachLoadingEvents = (node, data) => {
		const loaded = (event) => {
			data.accept(event);
			end();
		};
		const onerror = (event) => {
			data.reject(event);
			end();
		};
		const end = () => {
			eventRemove(eventRemove(node, 'error', onerror, true), 'load', loaded, true);
		};
		eventAdd(eventAdd(node, 'error', onerror, true), 'load', loaded, true);
		append(domHeadNode, node);
	};
	const importcss = (url) => {
		return promise((accept, reject) => {
			nodeAttachLoadingEvents(nodeAttribute(createTag('link'), {
				type: 'text/css',
				rel: 'stylesheet',
				href: `${url}.css`
			}), {
				accept,
				reject
			});
		});
	};
	$.importcss = importcss;
	const importjs = (urlArg) => {
		return promise((accept, reject) => {
			let url = urlArg;
			if (!url.includes('//')) {
				url = `${corePath}${url}`;
			}
			if (lastItem(url) === '/') {
				url = `${url}index`;
			}
			nodeAttachLoadingEvents(nodeAttribute(createTag('script'), {
				async: emptyString,
				src: `${url}.js`,
				accept,
				reject
			}), {
				accept,
				reject
			});
		});
	};
	$.importjs = importjs;

	const isDocumentReady = (func) => {
		const state = documentNode.readyState;
		if (state === 'interactive' || state === 'completed' || state === 'complete') {
			return (func) ? func() : true;
		}
		if (func) {
			eventAdd(documentNode, 'DOMContentLoaded', func);
		}
		return false;
	};
	isDocumentReady(() => {
		domHeadNode = qsSelector('head');
	});
	$.isDocumentReady = isDocumentReady;

	const saveDimensions = () => {
		objectAssign(appState, {
			windowHeight: global.innerHeight,
			windowWidth: global.innerWidth,
			bodyWidth: bodyNode.offsetWidth,
			bodyHeight: bodyNode.offsetHeight
		});
	};
	$.updateDimensions = saveDimensions;
	isDocumentReady(() => {
		bodyNode = documentNode.body;
		raf(saveDimensions);
	});
	eventAdd(eventAdd(window, 'resize', saveDimensions, true), 'load', saveDimensions, true);

	$.isDocumentReady(() => {
		const acidLib = idSelector('acidjs');
		corePath = nodeAttribute(acidLib, 'data-model');
		if (corePath) {
			importjs('core');
		}
	});

	/*
		Object checking methods
	*/
	eachArray(['RegExp', 'Arguments', 'Boolean', 'Date', 'Error', 'Map', 'Object', 'Set', 'WeakMap', 'ArrayBuffer', 'Float32Array', 'Float64Array', 'Int8Array', 'Int16Array', 'Int32Array', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'HTMLCollection', 'NodeList'], (item) => {
		$[`is${item}`] = isSameObjectGenerator(objectStringGenerate(item));
	});
	const isHTMLCollection = $.isHTMLCollection;
	const isNodeList = $.isNodeList;

})(this);