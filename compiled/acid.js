/**
 * @name ACIDjs
 * @version 1.0 Stable
 * @authors
	 Thomas Marchi
		 @github https://github.com/tomekmarchi/
	 Nathan Woltman
		 @github https://github.com/woollybogger
 * @copyright 2015 Thomas Marchi,Nathan Woltman
 * @site http://acidjs.com
 * @github https://github.com/tomekmarchi/ACID
 * @email tomekmarchi@gmail.com
 */
(function(global) {
	"use strict";
	var selector, $ = function $(string) {
		return selector(string);
	}; //avoid
	global.$ = $;
	global.ACID = $;
	var debugMode = false, //debug option
		extendAcidConfig = {
			credits: {}
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
		/*
		   	Array.prototype Functions cached
		   */
		_toArray = $.toArray = arrayNative.from,
		arrayPushMethod = arrayPrototype.push,
		objectKeys = objectNative.keys,
		objectIs = objectNative.is,
		objectAssign = objectNative.assign,
		getOwnPropertyDescriptor = objectNative.getOwnPropertyDescriptor,
		defineProperty = objectNative.defineProperty,
		getOwnPropertyNames = objectNative.getOwnPropertyNames,
		/*
		   	JSON
		   */
		stringify = json.stringify,
		jsonParse = json.parse,
		/*
		   	System Hardware Info
		   */
		systemCores = navigator.hardwareConcurrency;
	var bodyNode, selfWindow = window,
		documentNode = document,
		headNode = documentNode.head,
		htmlCollectionNative = HTMLCollection,
		htmlElementNative = HTMLElement,
		nodelistNative = NodeList,
		nodeNative = Node,
		elementNative = Element,
		nodePrototype = nodeNative[prototypeString],
		nodeListPrototype = nodelistNative[prototypeString],
		elementPrototype = elementNative[prototypeString],
		htmlCollectionPrototype = htmlCollectionNative[prototypeString],
		documentFragment = documentNode.createDocumentFragment,
		createElement = documentNode.createElement,
		generateNodeMethod = function generateNodeMethod(funct) {
			return function() {
				var args = _toArray(arguments);
				unShiftArray(args, this);
				return apply(funct, args);
			};
		},
		zipUpTo = function zipUpTo(object, functs, names, wrap) {
			eachArray(functs, function(item, index) {
				if (!object[names[index]]) {
					object[names[index]] = wrap(item);
				}
			});
		},
		domPropertyMethod = function domPropertyMethod(propertyName) {
			return function(node, value, other) {
				if (hasValue(value)) {
					if (isFunction(value)) {
						value = value(node);
					}
					node[propertyName] = value;
					return node;
				}
				return node[propertyName];
			};
		};
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
		isJSRegex = /\.js/,
		isCSSRegex = /\.css/,
		isJSONRegex = /\.json/,
		hasDotRegex = /\./,
		rawURLDecodeRegex = /%(?![\da-f]{2})/gi,
		andRegex = /&/g,
		lessThanRegex = /</g,
		moreThanRegex = />/g,
		doubleQuoteRegex = /"/g,
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
		lastItem = $.lastItem = function(array) {
			return array[getLength(array) - 1];
		},
		/*
		   	String related
		   */
		substringCall = function substringCall(string, start, end) {
			return string.substring(start, end);
		},
		substrCall = function substrCall(string, start, end) {
			return string.substr(start, end);
		},
		stringSliceCall = function stringSliceCall(string, start, end) {
			return string.slice(start, end);
		},
		toLowerCaseCall = function toLowerCaseCall(string) {
			return string.toLowerCase();
		},
		toUpperCaseCall = function toUpperCaseCall(string) {
			return string.toUpperCase();
		},
		splitCall = function splitCall(string, splitAt) {
			return string.split(splitAt);
		},
		stringRepeatCall = function stringRepeatCall(string, num) {
			return string.repeat(num);
		},
		charAtCall = function charAtCall(string, num) {
			return string.charAt(num);
		},
		stringMatchCall = function stringMatchCall(string, regexObject) {
			return string.match(regexObject);
		},
		stringReplaceCall = function stringReplaceCall(string, toReplace, replaceWith) {
			return string.replace(toReplace, replaceWith);
		},
		/*
		   	Regex Helpers
		   */
		testRegex = function testRegex(regexObject, string) {
			return regexObject.test(string);
		},
		/*
		   	Array Helpers
		   */
		newArray = $.newArray = function(num) {
			return new arrayNative(num);
		},
		concatArray = function concatArray(array, otherArray) {
			return array.concat(otherArray);
		},
		pushApply = $.pushApply = function(array, arrayToPush) {
			return apply(arrayPushMethod, array, arrayToPush);
		},
		pushArray = function pushArray(array, objectToPush) {
			return array[getLength(array)] = objectToPush;
		},
		spliceArray = function spliceArray(array, start, end) {
			return array.splice(start, end);
		},
		unShiftArray = function unShiftArray(array, item) {
			return array.unshift(item);
		},
		shiftArray = function shiftArray(array, item) {
			return array.shift(item);
		},
		joinArray = function joinArray(array, joinWith) {
			return array.join(joinWith);
		},
		arrayReduce = function arrayReduce(array, funct) {
			return array.reduce(funct);
		},
		arrayReduceRight = function arrayReduceRight(array, funct) {
			return array.reduceRight(funct);
		},
		/*
		   	Object Helpers
		   */
		toStringCall = function toStringCall(object) {
			return object.toString();
		},
		/*
		   	Function calls
		   */
		bindTo = $.bindTo = function(method, bindThis) {
			return method.bind(bindThis);
		},
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
		}; //make action on object via acid event
	var nodeAction = function nodeAction(node, type) {
		$['on' + type](node);
		return node;
	};
	var _afterNth = function _afterNth(node, newChild, position) {
		var child = node.children[position + 1];
		if (!child) {
			append(node, newChild);
		} else {
			node.insertBefore(newChild, child);
		}
		return node;
	};
	var append = function append(node, child) {
		node.appendChild(child);
		return node;
	}; //attr functions
	var nodeHasAttribute = function nodeHasAttribute(node, n) {
			return node.hasAttribute(n);
		}, //set/get attribute
		nodeAttribute = function nodeAttribute(node, keys, value) {
			var results;
			if (isString(keys)) {
				if (hasValue(value)) {
					node.setAttribute(keys, value);
				} else {
					return node.getAttribute(keys);
				}
			} else if (isPlainObject(keys)) {
				results = eachObject(keys, function(item, key) {
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
		};
	var _beforeNth = function _beforeNth(node, newChild, position) {
		var child = node.children[position];
		if (!child) {
			append(node, newChild);
		} else {
			node.insertBefore(newChild, child);
		}
		return node;
	}; //center object
	var centerNode = function centerNode(node, item) {
		var divW = owNode(node),
			divH = ohNode(node),
			w, h, left, top;
		if (item) {
			if (item === true) {
				item = node.parentNode;
			}
			w = owNode(item);
			h = ohNode(item);
		} else {
			w = Number(appState.bodyWidth);
			h = Number(appState.bodyHeight);
		}
		if (divH >= h) {
			nodeStyle(node, {
				'position': emptyString,
				'transform': emptyString
			});
		} else {
			left = parseInt((w - divW) / 2) + 'px';
			top = parseInt((h - divH) / 2) + 'px';
			nodeStyle(node, {
				'position': 'absolute',
				'top': '0px',
				'left': '0px',
				'transform': 'translate3d(' + left + ',' + top + ',0)'
			});
		}
		return node;
	};
	/*
METHODS FOR CLASS MODS
*/ //classname
	var nodeClassname = function nodeClassname(node, n) {
			if (hasValue(n)) {
				node.className = n;
				return node;
			}
			return getClassname(node);
		},
		getClassList = function getClassList(node) {
			return node.classList;
		},
		getClassname = function getClassname(node) {
			return node.className;
		}, //classlist
		nodeClassList = function nodeClassList(node, args) {
			var nodeClassList = getClassList(node);
			if (args) {
				if (!isArray(args)) {
					if (!nodeClassListHas(node, args)) {
						nodeClassList.add(args);
					}
				} else {
					eachArray(args, function(item) {
						if (!nodeClassListHas(node, item)) {
							nodeClassList.add(item);
						}
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
			var nodeClassList = getClassList(node);
			if (!isArray(args)) {
				if (nodeClassListHas(node, args)) {
					nodeClassList.remove(args);
				}
			} else {
				eachArray(args, function(item) {
					if (nodeClassListHas(node, item)) {
						nodeClassList.remove(item);
					}
				});
			}
			return node;
		},
		nodeClassListToggle = function nodeClassListToggle(node, args) {
			var nodeClassList = getClassList(node);;
			if (!isArray(args)) {
				nodeClassList.toggle(args);
			} else {
				eachArray(args, function(item) {
					nodeClassList.toggle(item);
				});
			}
			return node;
		}; //clear
	var clearNode = function clearNode(node) {
		while (node.firstChild) {
			node.firstChild.remove();
		}
		return node;
	};
	var clwNode = function clwNode(node) {
			return node.clientWidth;
		},
		clhNode = function clhNode(node) {
			return node.clientHeight;
		}; //copynode
	var cloneNode = function cloneNode(node, bool) {
		return node.cloneNode(bool);
	}; //btn + adding
	var addNode = function addNode(node, n) { //get number add 1 to it
			nodeTextContent(node, Number(nodeTextContent(node) || 0) + Number(n || 1));
			return node;
		},
		subNode = function subNode(node, n) { //get number subtract 1
			nodeTextContent(node, Number(nodeTextContent(node) || 0) - Number(n || 1));
			return node;
		}, //quick changes
		hideNode = function hideNode(node) { //hide class toggle
			nodeStyle(node, 'display', 'none');
			return node;
		},
		showNode = function showNode(node) { //show class toggle
			nodeStyle(node, 'display', emptyString);
			return node;
		},
		toggleNode = function toggleNode(node, classname) {
			if (classname) {
				nodeClassListToggle(node, classname);
			} else {
				if (nodeStyle(node, 'display') === 'none') {
					showNode(node);
				} else {
					hideNode(node);
				}
			}
			return node;
		};
	var innerHTML = domPropertyMethod('innerHTML'),
		ohtml = domPropertyMethod('outerHTML'); //insertAdjacentHTML
	var generateInsertAdjacentHTML = function generateInsertAdjacentHTML(type) {
			var returned = function returned(node, data) {
				node.insertAdjacentHTML(type, data);
				return node;
			};
			return returned;
		},
		beforeEndNode = generateInsertAdjacentHTML('beforeEnd'),
		afterBeginNode = generateInsertAdjacentHTML('afterbegin'),
		beforeBeginNode = generateInsertAdjacentHTML('beforeBegin'),
		afterEndNode = generateInsertAdjacentHTML('afterEnd');
	var insertAfter = function insertAfter(child, new_node) {
		child.parentNode.insertBefore(new_node, child.nextSibling);
		return new_node;
	};
	var insertBefore = function insertBefore(child, new_node) {
		child.parentNode.insertBefore(new_node, child);
		return new_node;
	}; //IE 11+ support
	if (elementPrototype.msMatchesSelector) {
		var matchesSelector = function matchesSelector(node, matchString) {
			return node.msMatchesSelector(matchString);
		};
	} else {
		var matchesSelector = function matchesSelector(node, matchString) {
			return node.matches(matchString);
		};
	}
	var nextNode = function nextNode(node) {
		return node.nextSibling;
	}; //offsets
	var owNode = function owNode(node) {
			return node.offsetWidth;
		},
		ohNode = function ohNode(node) {
			return node.offsetHeight;
		},
		otNode = function otNode(node) {
			return node.offsetTop;
		},
		offsetNode = function offsetNode(node) {
			var boundingClientRect = node.getBoundingClientRect();
			return {
				top: boundingClientRect.top + bodyNode.scrollTop,
				left: boundingClientRect.left + bodyNode.scrollLeft
			};
		};
	var lastNode = function lastNode(node) {
			return node.lastChild;
		},
		firstNode = function firstNode(node) {
			return node.firstChild;
		};
	var parNode = function parNode(node) {
		return node.parentNode;
	};
	var _plugInto = function _plugInto(node, string, object) {
		model = find(string, modelMethod);
		if (model) {
			return model(node, object);
		} else {
			ensure(string, function() {
				model = find(string, modelMethod);
				if (model) {
					model(node, object);
				}
				node = null;
			});
		}
		return node;
	};
	var prepend = function prepend(node, child) {
		var first = node.firstChild;
		if (first) {
			node.insertBefore(child, first);
		} else {
			append(node, child);
		}
		return node;
	};
	var previousNode = function previousNode(node) {
		return node.previousSibling;
	}; //props
	var nodeValue = domPropertyMethod('value'),
		nodeSelect = domPropertyMethod('selected'),
		nodeStyle = function nodeStyle(node, attr, value) {
			if (hasValue(value)) {
				node.style[attr] = value;
				return node;
			} else if (attr) {
				if (isPlainObject(attr)) {
					eachObject(attr, function(item, key) {
						nodeStyle(node, key, item);
					});
				} else {
					return node.style[attr];
				}
			} else {
				return node.style;
			}
			return node;
		}; //checks for native remove function
	var isremovenative = elementPrototype.remove ? true : false, //removes a node also checks if native is there
		removeNode = isremovenative ? null : function(node) {
			var par = node.parentNode;
			if (par) {
				par.removeChild(node);
			}
			par = null;
			return node;
		},
		removeNodeMethod = removeNode ? removeNode : function(node) {
			node.remove();
			return node;
		},
		removeNodesInRange = function removeNodesInRange(node, start, end) {
			if (!end) {
				var end = start,
					start = 0;
			}
			var nodes = _toArray(node),
				temp = [];
			for (; start < end; start++) {
				pushArray(temp, _removeNode(nodes[start]));
			}
			return temp;
		}; //replace a child node wrapper
	var replaceChild = function replaceChild(obj, born) {
		obj.parentNode.replaceChild(born, obj);
		return born;
	}; //resets html good for clearing uploaded item
	var resetHTML = function resetHTML(node) {
		var obj = node.parentNode;
		obj.innerHTML = obj.innerHTML;
		return obj;
	}; //scroll this node
	var _scrollIt = function _scrollIt(node, x, y) {
			if (hasValue(x)) {
				node.scrollTop = x;
			}
			if (hasValue(y)) {
				node.scrollLeft = y;
			}
			return node;
		}, //scroll info
		scrollInfo = function scrollInfo(node) {
			return {
				top: node.scrollTop,
				left: node.scrollLeft
			};
		}, //scroll
		scrollInto = function scrollInto(node, nodeToScrollIntoView) {
			node.scrollIntoView(nodeToScrollIntoView);
			return node;
		}; //selectors
	var idNode = function idNode(node, select) {
			return node.getElementById(select);
		},
		clsNode = function clsNode(node, select) {
			return node.getElementsByClassName(select);
		},
		tagNode = function tagNode(node, select) {
			return node.getElementsByTagName(select);
		},
		qsaNode = function qsaNode(node, select) {
			return node.querySelectorAll(select);
		},
		qsNode = function qsNode(node, select) {
			return node.querySelector(select);
		}; //text
	var nodeTextContent = domPropertyMethod('textContent'),
		nodeText = domPropertyMethod('innerText'),
		nodeValue = domPropertyMethod('nodeValue'),
		textValue = function textValue(node, value, other) {
			var child = firstNode(node, value, other);
			if (child) {
				return nodeValue(child, value, other);
			}
			return nodeTextContent(node, value, other);
		}; //transverse up based on a match or number
	var nodeUpToParentLevel = function nodeUpToParentLevel(node, i) {
			var i = i - 1,
				node = parNode(node);
			if (i) {
				while (i--) {
					node = parNode(node);
				}
			}
			i = null;
			return node;
		},
		nodeUpTo = function nodeUpTo(node, name) {
			if (isNumber(name)) {
				return upToParentLevel(node, name);
			}
			while (node = node.parentNode) {
				if (!node) {
					return false;
				} else if (!isDom(node)) {
					return false;
				} else if (matchesSelector(node, name)) {
					break;
				}
			}
			return node;
		};
	var idSelector = $.getById = bindTo(documentNode.getElementById, documentNode),
		clsSelector = $.getByClass = bindTo(documentNode.getElementsByClassName, documentNode),
		tagSelector = $.getByTag = bindTo(documentNode.getElementsByTagName, documentNode),
		qsaSelector = $.querySelector = bindTo(documentNode.querySelectorAll, documentNode),
		qsSelector = $.querySelectorAll = bindTo(documentNode.querySelector, documentNode),
		selector = $.selector = function(select) {
			var firtLetter = select[0];
			if (firtLetter === poundString) {
				if (!regexSpace.test(select)) {
					return idSelector(stringSliceCall(select, 1));
				}
			} else if (firtLetter === dotString) {
				if (testRegex(classTest, select)) {
					return clsSelector(stringSliceCall(select, 1));
				}
			} else if (testRegex(tagTest, select)) {
				return tagSelector(select);
			}
			return qsaSelector(select);
		},
		acidLib = idSelector('acidjs'),
		nodeMethodsValues = [toggleNode, showNode, hideNode, subNode, addNode, nodeAction, afterEndNode, beforeBeginNode, afterBeginNode, beforeEndNode, nodeRemoveAttribute, nodeClassListToggle, nodeClassListRemove, nodeHasAttribute, nodeClassList, nodeClassListHas, nodeUpTo, cloneNode, centerNode, innerHTML, ohtml, nodeTextContent, nodeText, textValue, nodeValue, nodeSelect, nodeClassname, matchesSelector, replaceChild, prepend, append, insertAfter, insertBefore, scrollInto, idNode, clsNode, tagNode, qsaNode, qsNode],
		nodeMethodsKeys = ['toggle', 'show', 'hide', 'sub', 'add', 'act', 'ae', 'bb', 'ab', 'be', 'removeAttr', 'clTog', 'clRemove', 'hasAttr', 'cl', 'clHas', 'upTo', 'clone', 'center', 'html', 'ohtml', 'tc', 'txt', 'textValue', 'val', 'sel', 'cn', 'isMatch', 'replace', 'prepend', 'ap', 'after', 'before', 'scrollInto', 'id', 'cls', 'tag', 'qsa', 'qs'],
		nodeOnlyMethodsReturn = [scrollInfo, resetHTML, nextNode, previousNode, parNode, lastNode, firstNode, owNode, ohNode, otNode, offsetNode, clwNode, clhNode, clearNode, removeNodeMethod],
		nodeOnlyMethodNamesReturn = ['scrollInfo', 'resetHTML', 'next', 'previous', 'parNode', 'last', 'first', 'ow', 'oh', 'ot', 'offset', 'clw', 'clh', 'clear', 'remove']; //sys info
	$.host = { // EX http https
		protocol: protocol, // ws or wss
		protocolSocket: protocolSocket, //hostname
		name: hostname
	}; //device info related to actual hardware
	$.hardware = { //core amount on system
		cores: systemCores
	}; //useragent info plus mobile
	var agentInfo = $.agent = {}; //acid platform information
	$.acid = {
		name: 'ACIDjs',
		version: 1
	};
	var eventAdd = $.eventAdd = function(obj, name, func, capture) {
			obj.addEventListener(name, func, capture || false);
			return obj;
		}, //remove event
		eventRemove = $.eventRemove = function(obj, name, func, capture) {
			obj.removeEventListener(name, func, capture || false);
			return obj;
		};
	$.isEnter = function(event) { //checks if this an enter key
		var i = event.keyCode;
		if (i == 13) {
			return true;
		}
		return false;
	};
	/*
STRING Prototype object
*/
	$.string = stringNative; //get characters in a range in a string
	var rangeString = $.rangeString = function(text, start, end, insert) {
			return stringSliceCall(text, 0, start) + insert + stringSliceCall(text, end, getLength(text));
		}, //start index from right of string
		rightString = $.rightString = function(text, a) {
			return text[getLength(text) - 1 - a];
		}, //start index from right of string pollyfill
		endsWithString = $.endsWithString = function(subjectString, searchString, position) {
			if (position === undefined || position > getLength(subjectString)) {
				position = getLength(subjectString);
			}
			position -= getLength(searchString);
			var lastIndex = indexOfCall(subjectString, searchString, position);
			return lastIndex !== -1 && lastIndex === position;
		},
		chunkString = $.chunkString = function(string, size) {
			return stringMatchCall(string, new RegExp('(.|[\r\n]){1,' + size + '}', 'g'));
		},
		firstString = $.firstString = function(string) {
			return string[0];
		}; //replace all items in an array with a string
	var replaceWithList = $.replaceWithList = function(string, array, toReplace) {
		return stringReplaceCall(string, new RegExp('\\b' + joinArray(array, '|') + '\\b', 'gi'), toReplace);
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
			return createHtmlEntities(_rawURLDecode(string));
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
		addRest = function addRest(string) {
			return substrCall(string, 1);
		},
		ucFirst = $.ucFirst = function(string) {
			return ucFirstChar(string) + addRest(string);
		},
		ucFirstAll = $.ucFirstAll = function(string) {
			return joinArray(eachArray(splitCall(string, spaceCharacter), function(item) {
				return ucFirst(item);
			}), ' ');
		}, //uppercase first letter lower case the rest
		ucFirstOnly = $.ucFirstOnly = function(string) {
			return ucFirstChar(item) + toLowerCaseCall(addRest(item));
		}, //uppercase first letter lower case the rest all
		ucFirstOnlyAll = $.ucFirstOnlyAll = function(string) {
			return joinArray(eachArray(splitCall(string, spaceCharacter), function(item) {
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
	var addParam = function addParam(url, newItem) {
		if (hasLength(url)) {
			if (has(url, questionMarkString)) {
				if (lastItem(url) === questionMarkString) {
					url = url + newItem;
				} else {
					url = url + andString + newItem;
				}
			}
		} else {
			url = questionMarkString + newItem;
		}
		return url;
	};
	$.addParam = addParam; //shared functions
	//Flattens a nested array. Pass level to flatten up to a depth;
	var _flatten_once = function _flatten_once(arr) {
			return arrayReduce(arr, function(a, b) {
				if (!isArray(a)) {
					a = [a];
				}
				if (!isArray(b)) {
					b = [b];
				}
				pushApply(a, b);
				return a;
			});
		},
		flatten = $.flatten = function(array, level) {
			if (level) {
				if (level === 1) {
					return _flatten_once(array);
				}
				for (var i = 0; i < level; i++) {
					array = arrayReduce(array, function(previousValue, currentValue, index, array) {
						return concatCall(previousValue, isArray(currentValue) ? currentValue : [currentValue]);
					}, []); //initial starting value is an amepty array []
				}
				return array;
			}
			return arrayReduce(array, function(previousValue, currentValue, index, array) {
				return concatCall(previousValue, isArray(currentValue) ? flatten(currentValue) : currentValue);
			}, []); //initial starting value is an amepty array []
		}, //cache for function that removes falsey values from array
		compact = function compact(array) {
			return eachArray(array, function(item) {
				return item || undefined;
			});
		};
	$.array = arrayNative;
	var arrayLastItem = function arrayLastItem(array, indexFrom) {
		var result;
		if (!indexFrom) {
			indexFrom = 1;
		}
		if (array) {
			result = spliceArray(array, getLength(array) - indexFrom, indexFrom);
		} else {
			result = array[getLength(array) - 1];
		}
		return result;
	};
	/**
	 * Finds the index of a value in a sorted array using a binary search algorithm.
	 *
	 * If no `compareFunction` is supplied, the `>` and `<` relational operators are used to compare values,
	 * which provides optimal performance for arrays of numbers and simple strings.
	 *
	 * @function Array#bsearch
	 * @param {*} value - The value to search for.
	 * @param {Function} [compareFunction] - The same type of comparing function you would pass to
	 *     [`.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
	 * @returns {number} The index of the value if it is in the array, or `-1` if it cannot be found.
	 *     If the search value can be found at multiple indexes in the array, it is unknown which of
	 *     those indexes will be returned.
	 *
	 * @example
	 * ['a', 'b', 'c', 'd'].bsearch('c');
	 * // -> 2
	 *
	 * [1, 1, 2, 2].bsearch(2);
	 * // -> 2 or 3
	 *
	 * [1, 2, 3, 4].bsearch(10);
	 * // -> -1
	 *
	 * [1, 2, 3, 4].bsearch(1, function(a, b) {
	 *   return a - b;
	 * });
	 * // -> 0
	 *
	 * ['img1', 'img2', 'img10', 'img13'].bsearch('img2', String.naturalCompare);
	 * // -> 1
	 * // `String.naturalCompare` is provided by the string-natural-compare npm module:
	 * // https://www.npmjs.com/package/string-natural-compare
	 */
	$.bsearch = function(item, value, compareFunction) {
		var low = 0,
			high = getLength(item),
			mid;
		if (compareFunction) {
			while (low < high) {
				mid = low + high >>> 1;
				var direction = compareFunction(item[mid], value);
				if (!direction) {
					return mid;
				}
				if (direction < 0) {
					low = mid + 1;
				} else {
					high = mid;
				}
			}
		} else {
			while (low < high) {
				mid = low + high >>> 1;
				if (item[mid] === value) {
					return mid;
				}
				if (item[mid] < value) {
					low = mid + 1;
				} else {
					high = mid;
				}
			}
		}
		return -1;
	}; //Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.
	var arrayChunk = function arrayChunk(array, size) {
		size = size || 1;
		var numChunks = ceilmethod(getLength(array) / size),
			index = 0;
		return eachArray(newArray(numChunks), function(item, i) {
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
	$.clear = function(array) {
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
	 * // -> [1, 2, 3] false
	 */
	$.cloneArray = function(item) {
		return stringSliceCall(item, 0);
	};
	/**
	 * Returns a new array with all falsey values removed. Falsey values
	 * are `false`, `0`, `""`, `null`, `undefined`, and `NaN`.
	 *
	 * @function Array#compact
	 * @returns {Array} The new array containing only the truthy values from the original array.
	 *
	 * @example
	 * [0, 1, false, 2, emptyString, 3].compact();
	 * // -> [1, 2, 3]
	 */
	$.compact = compact; //Sorts a list into groups and returns a count for the number of objects in each group.
	$.countBy = function(array, funct) {
		var object = {},
			result;
		eachObject(array, function(item) {
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
	$.createRange = function(array, start_arg, stop_arg, increment) {
		var stop = stop_arg ? stop_arg : start_arg,
			start = stop_arg ? start_arg : 0;
		for (var i = start; i < stop; i++) {
			if (increment) {
				if (i > 0) {
					var i = i - 1 + 5,
						i_check = i + increment;
				}
			}
			pushArray(array, i);
			if (increment) {
				if (i_check == stop) {
					break;
				}
			}
		}
		return array;
	}; //create an array from a range
	$.createRangeTo = function(array, start_arg, stop_arg, increment) {
		var stop = stop_arg ? stop_arg : start_arg,
			i, start = stop_arg ? start_arg : 0;
		for (var i = start; i <= stop; i++) {
			if (increment) {
				if (i > 0) {
					i = i - 1 + 5, i_check = i + increment;
				}
			}
			pushArray(array, i);
			if (increment) {
				if (i_check == stop) {
					break;
				}
			}
		}
		return array;
	}; //Creates an array excluding all values of the provided arrays using SameValueZero for equality comparisons.
	var arrayDifference = $.difference = function(array, compare) {
		return eachArray(array, function(item) {
			if (!has(item, compare)) {
				return item;
			}
		});
	}; //Removes elements from array corresponding to the given indexes and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
	$.drop = function(array, amount) {
		return spliceArray(array, amount, getLength(array));
	}; //Removes elements from array corresponding to the given indexes (from right) and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
	$.dropRight = function(array, amount) {
		return spliceArray(array, 0, getLength(array) - amount);
	};
	/*
Each Methods
Array
	each,eachDo,eachRaw,eachwhileFalse,eachWhile,whileLength,eachRight
Object
	Each
Number
	Each
*/ //loop through an array of items
	var eachArray = function eachArray(array, fn) {
			var returned, a = 0,
				length = getLength(array),
				results = [];
			for (var i = 0; i < length; i++) {
				returned = fn(array[i], i, length, array, results);
				if (hasValue(returned)) {
					results[a] = returned;
					a++;
				}
			}
			return results;
		},
		_eachRaw = function _eachRaw(array, fn) {
			var returned, a = 0,
				length = getLength(array),
				results = [];
			for (var i = 0; i < getLength(array); i++) {
				returned = fn(array[i], i, length, array, results);
				if (hasValue(returned)) {
					results[a] = returned;
					a++;
				}
			}
			return results;
		},
		_eachDo = function _eachDo(array, callback, safeIteration) {
			var i = 0;
			if (safeIteration)
				while (i < getLength(array) && (!(i in this) || callback(array[i], i, array) !== false)) ++i;
			else
				while (i < getLength(array) && callback(array[i], i++, array) !== false);
			return array;
		}, //loop while the returned result is false
		whileFalse = function whileFalse(array, fn) { //an array of results will be returned
			var result;
			for (var i = 0, results = [], len = getLength(array); i < len; i++) {
				result = fn(array[i], i, len);
				if (result) {
					break;
				}
				results[i] = result;
			}
			return results;
		}, //each while the check function is true
		eachWhile = function eachWhile(array, fn, check) { //an array of results will be returned
			var result;
			for (var i = 0, results = [], len = getLength(array); i < len; i++) {
				result = fn(array[i], i, len, array, results);
				if (!result) {
					break;
				}
				results[i] = result;
			}
			return results;
		}, //loop while the count is less than the length of the array
		whileLength = function whileLength(array, fn) { //an array of results will be returned
			var results = [],
				len = getLength(array),
				i = 0;
			while (i < len) {
				results[i] = fn(array[i], i, len, array, results);
				len = getLength(array);
				i++;
			}
			return results;
		}, //loop through array backwards aka from the right
		eachArrayFromRight = function eachArrayFromRight(array, fn) { //an array of results will be returned
			for (var results = [], len = getLength(array), i = len - 1; i >= 0; i--) {
				results[i] = fn(array[i], i, len, array, results);
			}
			return results;
		}, //loop through array backwards aka from the right
		eachArrayFromRightWhile = function eachArrayFromRightWhile(array, fn) { //an array of results will be returned
			for (var results = [], len = getLength(array), i = len - 1; i >= 0; i--) {
				result = fn(array[i], i, len, array, results);
				if (!result) {
					break;
				}
				results[i] = result;
			}
			return results;
		}, //loop through based on number
		eachNumber = function eachNumber(start, end, fn) {
			if (!fn) {
				var fn = end,
					end = start,
					start = 0;
			}
			var results = [];
			for (; start < end; start++) { //call function get result
				results[start] = fn(start, end);
			}
			return results;
		};
	$.eachArray = eachArray;
	$.eachRaw = _eachRaw;
	$.eachRight = eachArrayFromRight;
	$.eachDo = _eachDo;
	$.eachWhile = eachWhile;
	$.eachWhileFalse = whileFalse;
	$.eachRightWhile = eachArrayFromRightWhile;
	$.whileLength = whileLength;
	/**
	 * Determines if the arrays are equal by doing a shallow comparison of their elements using strict equality.
	 *
	 * __Note:__ The order of elements in the arrays __does__ matter. The elements must be found in the same order
	 * for the arrays to be considered equal.
	 *
	 * @function Array#equals
	 * @param {Array} array - An array to compare for equality.
	 * @returns {boolean} `true` if the arrays are equal, `false` otherwise.
	 *
	 * @example
	 * var array = [1, 2, 3];
	 *
	 * array.equals(array);
	 * // -> true
	 *
	 * array.equals([1, 2, 3]);
	 * // -> true
	 *
	 * array.equals([3, 2, 1]);
	 * // -> false
	 */
	$.isEqualArray = function(item, array) {
		if (array === item) {
			return true;
		}
		if (!array || getLength(array) !== getLength(item)) {
			return false;
		}
		for (var i = 0; i < getLength(array); i++) {
			if (array[i] !== item[i]) {
				return false;
			}
		}
		return true;
	}; //Returns the first element of an array. Passing n will return the first n elements of the array.
	$.first = function(array, n) {
		if (n) {
			return spliceArray(array, 0, n);
		}
		return array[getLength(array) - 1];
	}; //Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
	$.flow = function(array, args) {
		return function() {
			return eachArray(array, function(item) {
				return apply(array[i], null, isArray(args) ? args : [args]);
			});
		};
	}; //flowright is like flow except that it creates a function that invokes the provided functions from right to left.
	$.flowRight = function(array, args) {
		return function() {
			return eachArrayFromRight(array, function(item) {
				return apply(array[i], null, isArray(args) ? args : [args]);
			});
		};
	}; //Splits a collection into sets, grouped by the result of running each value through iteratee.
	$.groupBy = function(array, funct) {
		var object = {},
			results;
		eachArray(array, function(item, index) {
			results = funct(item);
			if (!object[results]) {
				object[results] = [];
			}
			pushArray(object[results], item);
		});
		return object;
	}; //Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know your keys are unique.
	$.indexBy = function(array, key) {
		var object = {};
		eachArray(array, function(item, index) {
			object[item[key]] = item;
		});
		return object;
	}; //Returns everything but the last entry of the array.
	$.initial = function(array, startFrom) {
		return eachArray(array, function(item, index, length) {
			if (!(index + 1) !== length) {
				return item;
			}
		});
	}; //Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
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
	$.intersect = function(array, args) {
		var result = [],
			numArgs = getLength(args);
		if (!numArgs) {
			return result;
		}
		next: for (var i = 0; i < getLength(array); i++) {
			var item = array[i],
				j;
			if (!has(result, item)) {
				for (j = 0; j < numArgs; j++) {
					if (!has(args[j], item)) {
						continue next;
					}
				}
				pushArray(result, item);
			}
		}
		return result;
	}; //Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
	$.invoke = function(array, method, args) {
		return eachArray(array, function(item) {
			return apply(item[method], item, args);
		});
	}; //checks if the array is empty
	$.isArrayEmpty = function(array) {
		return getLength(array) === 0;
	}; //get largest number from array
	$.largest = function(array) {
		return apply(mathNativeMax, mathNative, array);
	}; //Returns the last element of an array. Passing n will return the last n elements of the array.
	var arrayLastItem = $.last = function(array, indexFrom) {
		indexFrom = indexFrom || 1;
		return spliceArray(array, getLength(array) - indexFrom, indexFrom);
	}; //start from begining of array using argument as index
	$.left = function(item, a) {
		return item[a];
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
	}; //Converts arrays into objects. Keys as this and values as first argument
	$.object = function(array, value) {
		var object = {};
		eachArray(array, function(item, index) {
			object[item] = value[index];
		});
		return object;
	}; //Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
	$.partition = function(array, funct) {
		return [array, eachArray(array, function(item, index) {
			if (funct(item)) {
				return item;
			} else {
				spliceArray(array, index, 1);
			}
		})];
	}; //extracting a list of property values to an array
	$.pluck = function(array, pluck_item) {
		return eachArray(array, function(item, index) {
			return item[pluck_item];
		});
	};
	var chunkSlice = function chunkSlice(array, start, end) {
			return eachArray(newArray(mathNative.min(end, getLength(array)) - start), function() {
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
			return eachArray(concatArray(a, b), function(item) {
				if (!has(b, item) && indexOfCall(result, item) < 0) {
					return item;
				}
			});
		},
		uniqueArray = function uniqueArray(array, isSorted) {
			if (isSorted) {
				return eachArray(array, function(item, index) {
					if (item !== array[index - 1]) {
						return item;
					}
				});
			}
			return eachArray(array, function(item, index, length, original, newArray) {
				if (!has(newArray, item)) {
					return item;
				}
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
		if (isFunction(args)) {
			_eachRaw(array, function(item, index) {
				if (args(item)) {
					spliceArray(array, index, 1);
				}
			});
		} else {
			if (!isArray(args)) {
				args = [args];
			}
			_eachRaw(array, function(item, index) {
				if (has(args, item)) {
					spliceArray(array, index, 1);
				}
			});
		}
		return array;
	}; //Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result.
	$.rest = function(array, n) {
		if (n) {
			return first(array, n);
		}
		shiftArray(array);
		return array;
	}; //start from end array using a as index
	$.right = function(array, a) {
		return array[getLength(array) - 1 - a];
	}; //Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
	$.sample = function(array, setAmount) {
		if (setAmount) {
			var temp = _toArray(array);
			return whileEach(temp, function(item, index, length) {
				return spliceArray(temp, roundMethod(randomMethod() * (length - 1)), 1)[0];
			});
		}
		return array[roundMethod(randomMethod() * getLength(array))];
	}; //shuffle an array and return a new array
	$.shuffle = function(array) {
		var temp = _toArray(array);
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
		return stringSliceCall(array, 0, amount);
	}; //Creates a slice of array with n elements taken from the end.
	$.takeRight = function(array, amount) {
		return spliceArray(array, getLength(array) - amount, amount);
	}; //Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
	$.union = function(arrayOG) {
		var result = uniqueArray(arrayOG);
		eachArray(arguments, function(array) {
			eachArray(array, function(item) {
				if (indexOfCall(result, item) < 0) {
					pushArray(result, item);
				}
			});
		});
		return result;
	}; //Produces a duplicate-free version of the array, using === to test object equality.
	$.uniq = uniqueArray; //Returns a copy of the array with all instances of the values removed.
	$.without = function(array, args) {
		var result = [],
			i, j;
		next: for (i = 0; i < getLength(array); i++) {
			for (j = 0; j < getLength(arguments); j++) {
				if (array[i] === arguments[j]) {
					continue next;
				}
			}
			pushArray(result, array[i]);
		}
		return result;
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
		return eachArray(arguments[0], function(arraySet) {
			return eachArray(arguments, function(arraySet) {
				return shiftArray(arraySet);
			});
		});
	}; //unzip the array of zipped arrays [["fred",30,true],["barney",40,false]]
	$.unZip = function(array) {
		return eachArray(array[0], function(item) {
			return eachArray(array, function(arraySet) {
				return shiftArray(arraySet);
			});
		});
	};
	$.object = objectNative;
	/*
				This is for object checking is or isnot
				*/ //checking
	var objectStringGenerate = function objectStringGenerate(name) {
			return '[object ' + name + ']';
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
		isSameObjectGenerator = function isSameObjectGenerator(type) {
			return function(obj) {
				return toStringCall(obj) === type;
			};
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
		isNative = function isNative(obj) {
			return hasValue(obj) ? has(toLowerCaseCall(toStringCall(obj)), 'native') : false;
		},
		hasValue = function hasValue(n) {
			return n !== undefined && n !== null;
		},
		isUndefined = function isUndefined(obj) {
			return obj === undefined;
		},
		isInt = numberNative.isInteger ? numberNative.isInteger : function(num) {
			if (num % 1 === 0) {
				return true;
			}
			return false;
		},
		isNull = function isNull(obj) {
			return obj === null;
		},
		isArray = function isArray(object) {
			return object instanceof arrayNative;
		},
		isString = function isString(obj) {
			return hasValue(obj) ? obj.constructor === stringNative : false;
		},
		isNumber = function isNumber(obj) {
			return hasValue(obj) ? obj.constructor == numberNative : false;
		},
		isPlainObject = function isPlainObject(obj) {
			return hasValue(obj) ? stringSliceCall(toStringCall(obj.constructor).trim(), 9, 16) === 'Object(' : false;
		},
		isFunction = function isFunction(obj) {
			return hasValue(obj) ? obj instanceof functionNative : false;
		},
		has = function has(string, search) {
			var value, loopValue;
			if (!isString(search)) {
				each(search, function(item, key) {
					loopValue = indexOfCall(string, item) != -1;
					if (loopValue) {
						value = loopValue;
					}
				});
			} else {
				value = indexOfCall(string, search) != -1;
			}
			return value;
		},
		islength = function islength(obj) {
			return !getLength(obj);
		},
		isEmpty = function isEmpty(obj) {
			if (hasValue(obj)) {
				if (isPlainObject(obj)) {
					return !islength(objectKeys(obj));
				} else {
					return !islength(obj);
				}
			}
			return true;
		},
		isFileCSS = function isFileCSS(item) {
			return hasValue(item) ? isCSSRegex.test(item) : false;
		},
		isFileJSON = function isFileJSON(item) {
			return hasValue(item) ? isJSONRegex.test(item) : false;
		},
		isFileJS = function isFileJS(item) {
			return hasValue(item) ? isJSRegex.test(item) && !isFileJSON(item) : false;
		},
		hasDot = function hasDot(item) {
			return hasValue(item) ? hasDotRegex.test(item) : false;
		},
		getModelRootName = function getModelRootName(string) {
			return splitCall(string, dotString)[0];
		},
		getModelProperty = function getModelProperty(string) {
			return arrayLastItem(splitCall(string, slashString))[0];
		},
		getModelName = function getModelName(string) {
			var splitIt = splitCall(string, slashString);
			return find(splitCall(splitIt[getLength(splitIt) - 1], '.js')[0], modelMethod);
		}; //export all checking functions
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
	$.has = has; //loop through an object
	var eachObject = $.eachObject = function(object, fn) { //an object with matching keys with results will be returned
			var results = {},
				key;
			for (var i = 0, keys = objectKeys(object), len = getLength(keys); i < len; i++) { //object currect key
				key = keys[i]; //call function get result
				results[key] = fn(object[key], key, len, object, results);
			}
			return results;
		},
		forEach = $.forEach = function(array, funct) {
			var results = [],
				result;
			array.forEach(function(item, key, array) {
				result = funct(item, key, array);
				if (hasValue(result)) {
					pushArray(results, result);
				}
			});
			return results;
		},
		eachProperty = $.eachProperty = function(array, funct) {
			var object = {};
			eachArray(getOwnPropertyNames(array), function(item, key, length) {
				object[item] = funct(array[item], item, length, array, object);
			});
			return object;
		}; //copy an object ES6 + ES5
	$.stringify = stringify;
	$.zipObject = function(keys, values) {
		var object = {};
		eachArray(keys, function(item, index) {
			object[item] = values[index];
		});
		return object;
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
		var ary = function ary() {
			return apply(funct, bind || ary, _toArray(arguments).splice(0, amount));
		};
		return ary;
	};
	$.chain = function(funct, obj) { //chain functions together
		//add to chain
		if (funct.methods) {
			eachObject(obj, function(item, key) {
				funct.methods[key] = (function(item, key) {
					return function() {
						funct.results[key] = apply(item, item, _toArray(arguments));
						return funct.methods;
					};
				})(item, key);
			});
			return funct;
		} //create chain
		var chain = function chain() {
			chain.results.first = apply(funct, chain, _toArray(arguments));
			return chain.methods;
		}; //remove chain item
		chain.removeChain = function(obj) {
			chain.results[obj] = null;
			return chain;
		}; //remove all chains
		chain.removeAllChains = function() {
			chain.methods = {};
			return chain;
		}; //return chain values
		chain.values = function(obj) {
			if (!obj) {
				return chain.results;
			}
			var array = [],
				chain_results = chain.results;
			eachObject(chain_results, function(item, key) {
				pushArray(array, item);
			});
			return array;
		}; //original function
		chain.original = function() {
			return apply(funct, chain, _toArray(arguments));
		};
		chain.results = {}; //chain results
		chain.methods = {}; //chain methods
		//add chained functions
		eachObject(obj, function(item, key) {
			chain.methods[key] = (function(item, key) {
				return function() {
					chain.results[key] = apply(item, item, _toArray(arguments));
					return chain.methods;
				};
			})(item, key);
		}); //return new chained function
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
			if (apply(func, func, _toArray(arguments))) {
				return false;
			}
			return true;
		};
	}; //Creates a function that is restricted to execute func once. Repeat calls to the function will return the value of the first call. The func is executed with the this binding of the created function.
	$.once = function(fn) {
		var value, amount = false;
		return function() {
			if (!amount) {
				amount = true;
				value = apply(fn, this, _toArray(arguments));
				fn = null; //null func to free up mem
			}
			return value;
		};
	}; //Creates a function that executes func, with the this binding and arguments of the created function, only after being called n times.
	$.after = function(fn, amount) {
		var called_amount = 0,
			value = 0;
		return function() {
			if (amount < called_amount) {
				amount = 1;
				value = apply(fn, this, _toArray(arguments));
				fn = null; //null func to free up mem
			}
			return value;
		};
	}; //Creates a function that executes func, with the this binding and arguments of the created function, only before being called n times.
	$.before = function(fn, amount) {
		var called_amount = 0,
			value = 0;
		return function() {
			if (amount > called_amount) {
				amount = 1;
				value = apply(fn, this, _toArray(arguments));
				fn = null; //null func to free up mem
			}
			return value;
		};
	}; //Creates a function that invokes func with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.
	$.reArg = function(funct, list) {
		return function() {
			return apply(funct, eachArray(_toArray(arguments), function(item, index) {
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
		return eachArray(functions, function(functionObject) {
			return functionObject();
		});
	};
	/*
	This is for async promises & timer functions
*/ //haspromises
	var promiseAsync = Promise.resolve(), //async function call
		asyncMethod = promiseAsync.then.bind(promiseAsync), //timeing
		clearTimer = $.timerClear = clearTimeout,
		intervalClear = clearInterval,
		timerMethod = $.timer = setTimeout,
		intervalMethod = $.interval = setInterval; //debounce function
	$.debounce = function(original, time) {
		var timeout = false,
			fn = function fn() {
				if (timeout !== false) {
					clearTimer(timeout);
				}
				var args = _toArray(arguments);
				timeout = timerMethod(function() {
					apply(original, fn, args);
					timeout = false;
				}, time);
			};
		fn.run = function() {
			if (timeout) {
				clearTimeout(timeout);
			}
			apply(original, fn, _toArray(arguments));
		};
		fn.clear = function() {
			if (timeout) {
				clearTimeout(timeout);
				timeout = false;
			}
		};
		fn.og = original;
		return fn;
	}; //throttle function
	$.throttle = function(func, time) {
		var timeout = false,
			fn = function fn() {
				if (timeout !== false) {
					return false;
				}
				var args = _toArray(arguments);
				timeout = timerMethod(function() {
					apply(func, fn, args);
					timeout = false;
				}, time);
			};
		fn.clear = function() {
			clearTimer(timeout);
			timeout = false;
		};
		fn.run = function() {
			clearTimer(timeout);
			timeout = false;
			apply(func, fn, _toArray(arguments));
		};
		fn.og = original;
		return fn;
	};
	$.clearTimers = function() { //clear all timers
		eachNumber(0, timerMethod(function() {}, 1000), function(index) {
			clearTimer(index);
		});
	};
	$.clearIntervals = function() {
		eachNumber(0, intervalMethod(function() {}, 1000), function(index) {
			clearInterval(index);
		});
	};
	$.inAsync = function(fns) {
		if (isFunction(fns)) {
			asyncMethod(fns);
		} else if (isArray(fns)) {
			eachArray(fns, asyncMethod);
		} else {
			eachObject(fns, asyncMethod);
		}
	}; //wrap 2 functions 'this' is launched after the argument function(s)
	var wrapCall = $.wrap = function(funct, object, bind) {
			if (isFunction(object)) {
				return function() {
					var args = _toArray(arguments);
					return [apply(object, bind, args), apply(funct, bind, args)];
				};
			} else if (isPlainObject(object)) {
				eachObject(object, function(item, key) {
					object[key] = apply(wrapCall, funct, funct, [item, bind]);
				});
			}
			return object;
		}, //wrap 2 functions 'this' is launched before the argument function(s)
		wrapBefore = $.wrapBefore = function(funct, object, bind) {
			if (isFunction(object)) {
				return function() {
					var args = _toArray(arguments);
					return [apply(funct, bind, args), apply(object, bind, args)];
				};
			} else if (isPlainObject(object)) {
				eachObject(object, function(item, key) {
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
		if (end === undefinedNative) {
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
	$.randomInt = function(number, min) {
		min = min || 0;
		return floorMethod(randomMethod() * (number - min)) + min;
	}; //save browser info plus add class to body
	var agentInfo = $.acid.agentInfo = function() {
		var str = agentInfo.string = toLowerCaseCall(global.navigator.userAgent),
			cl = nodeClassList(documentNode.body),
			list = ['windows', 'macintosh', 'linux', 'ipad', 'iphone', 'chrome', 'safari', 'firefox', 'msie', 'trident', 'mobile', 'android', 'edge/', 'webkit', 'blink'],
			addcls, agent = agentInfo;
		eachArray(list, function(item, key) {
			agentInfo[item] = has(str, item);
		});
		addcls = eachObject(agentInfo, function(item, key) {
			if (key === 'string') {
				return;
			} else if (key === 'mobile') {
				if (!item) {
					return 'desktop';
				}
			}
			if (item) {
				return key;
			}
		});
		eachArray(addcls, function(item) {
			cl.add(item);
		});
	}; //Get useragent info
	$.isAgent = function(name) {
		if (!name) {
			return agentInfo;
		}
		return agentInfo[name];
	};
	var raf = $.raf = requestAnimationFrame.bind(selfWindow),
		caf = $.caf = cancelAnimationFrame.bind(selfWindow);
	var appState = $.appState = {
		screenHeight: screen.height,
		screenWidth: screen.width
	};
	var batchCancelFrame = false,
		batchCount = 0,
		batchChanges = [],
		batchLoop = function batchLoop() {
			eachArray(batchChanges, function(item) {
				item();
			});
			batchCount = 0;
			batchChanges = [];
			batchCancelFrame = false;
		},
		batchCheck = function batchCheck() {
			if (!batchCancelFrame) {
				batchCancelFrame = raf(batchLoop);
			}
		},
		batchAdd = $.batch = function(func) {
			batchChanges[batchCount] = func;
			batchCount = batchCount + 1;
			batchCheck();
		};
	var cacheMethod = function cacheMethod(key, value) {
		if (!key) {
			return cacheMethod;
		} else if (hasValue(value)) {
			return cacheMethod[key] = value;
		}
		return cacheMethod[key];
	};
	$.cache = cacheMethod; //toggle a cache item with two values
	$.cacheToggle = function(key, a, b) {
		if (cacheMethod[key] === a) {
			return cacheMethod[key] = b;
		}
		return cacheMethod[key] = a;
	};
	var userConfig = $.acid.config = function(config) {
			if (config) {
				acidConfig(config);
			}
			isDocumentReady(acidConfig);
		},
		acidConfig = function acidConfig(config) { //save config
			$.cache.config = config; //extend config settings to acid
			eachObject(config, function(item, key) {
				if (!extendAcidConfig[key]) {
					extendAcidConfig[key] = {};
				}
				extendAcidConfig[key] = objectAssign(extendAcidConfig[key], item);
			});
		}; //console.log
	var acidConsole = function acidConsole(data, theme) {
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
		addTheme = function addTheme(name, color, bg) {
			logThemes[name] = generateLogTheme(color, bg);
		};
	$.console = acidConsole;
	$.addConsoleTheme = addTheme; //turn acid logs on/off
	$.debug = function(state) {
		return debugMode = state;
	};
	var each = function each(object, funct, fn) {
		var returned;
		if (!hasValue(object)) {
			returned = function() {};
		} else if (isArray(object)) {
			returned = eachArray;
		} else if (isPlainObject(object) || isFunction(object)) {
			returned = eachObject;
		} else if (isNodeList(object) || isHTMLCollection(object)) {
			object = _toArray(object);
			returned = eachArray;
		} else if (isNumber(object)) {
			returned = eachNumber;
		} else {
			if (fn) {
				returned = eachProperty;
			} else if (object.forEach) {
				returned = forEach;
			}
		}
		return returned(object, funct, fn);
	};
	$.each = each;
	$.exec = function() {
		return apply(documentNode.execCommand, documentNode, _toArray(arguments));
	};
	/*

This is for finding an object method via a string used througout events

*/ //find method
	var find = $.get = function(name, obj) {
		var obj = obj ? obj : $,
			name = splitCall(name, slashString),
			name = name[getLength(name) - 1];
		if (hasDot(name)) {
			eachWhile(splitCall(name, dotString), function(item, index) {
				obj = obj[item];
				if (hasValue(obj)) {
					return true;
				}
			});
		} else {
			obj = obj[name];
		}
		return obj || false;
	};

	function inlineJson(str) {
		try {
			return new Function('"use strict";return' + str + ';')();
		} catch (e) {
			return false;
		}
	} //for inline JS object notion.
	$.iJson = inlineJson;

	function jsonWithCatch(str) {
		try {
			return jsonParse(str);
		} catch (e) {
			return false;
		}
	} //convert from json string to json object cache it to use across lib
	$.jsonParse = jsonWithCatch;
	$.weakMap = function(items) {
		return new weakMap(items);
	};
	$.map = function(items) {
		return new mapNative(items);
	};
	var modelMethod = $.model = function(modelName, object, bool) {
		if (hasValue(object)) {
			var model = modelMethod[modelName] = object;
			if (isFunction(model)) {
				model = model.bind(model);
			} else if (isPlainObject(model)) {
				eachObject(model, function(item, key) {
					if (isFunction(item)) {
						model[key] = item.bind(model);
					}
				});
			}
			model.modelName = modelName;
			return model;
		} else if (hasDot(modelName)) {
			return find(modelName, modelMethod);
		}
		return modelMethod[modelName];
	}; //export native functions
	$.keys = objectKeys;
	$.getPropDescrip = getOwnPropertyDescriptor; //make a promise
	var promiseMethods = $.promises = {},
		promiseMethod = $.promise = function(arry, name, callback, calls) {
			var arrayLength = getLength(arry);
			promiseMethods[name] = function() {
				var fn = promiseMethods[name],
					go = 0;
				eachArray(arry, function(item) {
					if (fn[item] === 1) {
						go = go + 1;
					}
				}); //if amount of promises made were same as needed then launch callback
				if (go === arrayLength) {
					asyncMethod(callback);
					promiseMethods[name] = null;
					return true;
				}
				return false;
			};
			call(promiseMethods[name], {});
			if (calls) {
				call(promiseMethods[name], calls);
			}
		}, //promised
		promisedMethod = $.promised = function(self, fn) {
			var val = promiseMethods[fn];
			promiseMethods[fn][self] = 1;
			if (val) {
				if (val()) {
					promiseMethods[fn] = null;
				}
			}
			return false;
		};
	/*
		A service is an object that holds a set of processes that
		can be added over time.
		Then this service can run said processes.
*/
	var acidService = $.service = function(name) {
			return acidService[name];
		},
		acidCreateService = $.createService = function(name, optionalObjects) {
			var service = acidService[name] = {},
				serviceProcess = service.process = optionalObjects || {},
				serviceRun = service.run = function(optionalNameOfProcess) {
					if (optionalNameOfProcess) {
						serviceProcess[optionalNameOfProcess]();
					} else {
						eachObject(serviceProcess, function(item) {
							item();
						});
					}
				},
				serviceAdd = service.add = function(object) {
					eachObject(object, function(item, key) {
						serviceProcess[key] = item.bind(service);
					});
				},
				serviceEnd = service.end = function() {
					service = null;
					serviceProcess = null;
					serviceRun = null;
					serviceEnd = null;
					serviceAdd = null;
					service[name] = null;
				};
			eachObject(service, function(item, key) {
				if (isFunction(item)) {
					service[key] = item.bind(service);
				}
			});
			eachObject(serviceProcess, function(item, key) {
				if (isFunction(item)) {
					serviceProcess[key] = item.bind(service);
				}
			});
		};
	var localstorage = $.local = localStorage,
		sessionstorage = $.session = sessionStorage; //localstorage clear
	$.clearLocal = function() {
		return localstorage.clear();
	}; //session storage clear
	$.clearSession = function() {
		return sessionstorage.clear();
	};
	$.toggle = function(value, a, b) {
		if (value === a) {
			return b;
		}
		return a;
	}; //xhr functions
	$.xhr = {};
	extendAcidConfig.xhr = {};
	var xhrLoaded = function xhrLoaded(evt) {
			if (debugMode) {
				consoleNative(evt);
			}
			var xhr = evt.target,
				status = xhr.status,
				type = xhr.getResponseHeader('content-type'),
				data = xhr.responseText,
				callback;
			if (status === 200) {
				if (type === 'application/json') {
					data = jsonWithCatch(data);
				}
				callback = xhr.callback;
			} else if (status > 200) {
				callback = xhr.fail;
			}
			if (callback) {
				callback(evt);
			}
			eventRemove(xhr, 'load', xhrLoaded);
		},
		xhr = $.xhr = function(config) {
			var xhr = new XMLHttpRequest(),
				url = config.url,
				data = config.data || false,
				jsonData = config.json || false,
				type = config.type || 'GET',
				contentType = config.contentType,
				callback = config.callback,
				success = config.success,
				fail = config.fail,
				abort = config.abort,
				progress = config.progress,
				credits = extendAcidConfig.credits.url,
				analytics = extendAcidConfig.xhr.analytics,
				newData = emptyString;
			if (!contentType) {
				if (jsonData) {
					contentType = 'application/json; charset=utf-8';
				} else if (type == 'GET') {
					contentType = 'text/plain';
				} else {
					contentType = "application/x-www-form-urlencoded";
				}
			}
			if (data) {
				if (isPlainObject(data)) {
					eachObject(data, function(item, key) {
						if (hasValue(item)) {
							newData = addParam(newData, key + '=' + item);
						}
					});
				} else if (isArray(data)) {
					eachArray(data, function(item, key) {
						if (hasValue(item)) {
							newData = addParam(newData, item);
						}
					});
				}
			}
			if (analytics) {
				analytics(url, newData);
			}
			if (callback) {
				xhr.callback = callback;
			}
			if (fail) {
				xhr.fail = fail;
				eventAdd(xhr, 'error', fail);
			}
			if (progress) {
				eventAdd(xhr, 'progress', progress);
			}
			if (abort) {
				eventAdd(xhr, 'abort', abort);
			}
			eventAdd(xhr, 'load', xhrLoaded);
			if (type === 'GET') {
				if (newData) {
					url = addParam(url, newData);
					newData = emptyString;
				}
			}
			if (credits) {
				url = addParam(url, credits());
			}
			if (jsonData) {
				newData = jsonData;
			}
			xhr.open(type, url, true);
			xhr.setRequestHeader("Content-type", contentType);
			xhr.send(newData);
			return xhr;
		};
	var nodeOnly = {
		scrollIt: function scrollIt(x, y) {
			return _scrollIt(this, x, y);
		},
		prependTo: function prependTo(parent) {
			return prepend(parent, this);
		},
		apTo: function apTo(parent) {
			return append(parent, this);
		},
		afterNth: function afterNth(newChild, position) {
			return _afterNth(this, newChild, position);
		},
		beforeNth: function beforeNth(newChild, position) {
			return _beforeNth(this, newChild, position);
		},
		sty: function sty(attr, value) {
			return nodeStyle(this, attr, value);
		}, //set/get attribute
		attr: function attr(key, value) {
			return nodeAttribute(this, key, value);
		},
		plugInto: function plugInto(string, object) {
			return _plugInto(this, string, object);
		}
	};
	zipUpTo(nodeOnly, nodeMethodsValues, nodeMethodsKeys, generateNodeMethod);
	var generateLoopSingleArgReturnSelfCloneNodeSecondArg = function generateLoopSingleArgReturnSelfCloneNodeSecondArg(funct) {
			return function(node) {
				eachArray(this, function(item) {
					funct(item, node.cloneNode(true));
				});
				return this;
			};
		},
		generateLoopSingleArgReturnSelfCloneNodeFirstArg = function generateLoopSingleArgReturnSelfCloneNodeFirstArg(funct) {
			return function(node) {
				eachArray(this, function(item) {
					funct(item.cloneNode(true), node);
				});
				return this;
			};
		},
		generateLoopSingleArgReturnSelf = function generateLoopSingleArgReturnSelf(funct) {
			return function(node) {
				eachArray(this, function(item) {
					funct(node, item);
				});
				return this;
			};
		},
		generateLoopSingleArgReturnData = function generateLoopSingleArgReturnData(funct) {
			return function(arg) {
				return eachArray(this, function(item) {
					return funct(item, arg);
				});
			};
		},
		generateLoopReturnData = function generateLoopReturnData(funct) {
			return function(node) {
				return eachArray(this, function(item) {
					return funct(item);
				});
			};
		}, //not as fast but works for extra methods
		generateLoopReturnDataMultipleArgs = function generateLoopReturnDataMultipleArgs(funct) {
			return function() {
				var newArgs, args = _toArray(arguments);
				return eachArray(this, function(item) {
					newArgs = stringSliceCall(args, 0);
					unShiftArray(newArgs, item);
					return apply(funct, null, args);
				});
			};
		},
		generateLoopForNthMethods = function generateLoopForNthMethods(funct) {
			return function(newChild, position) {
				return eachArray(this, function(item) {
					return funct(item, newChild.cloneNode(true), position);
				});
			};
		}, //live list operations meaning nodes can be removed from DOM and the loop is internal
		listOnly = {
			each: function each(funct) {
				eachArray(this, funct);
				return this;
			},
			eachRaw: function eachRaw(funct) {
				_eachRaw(this, funct);
				return this;
			},
			eachDo: function eachDo(funct) {
				_eachDo(this, funct);
				return this;
			},
			eachWhileTrue: function eachWhileTrue(funct) {
				eachWhile(this, funct);
				return this;
			},
			eachWhileFalse: function eachWhileFalse(funct) {
				whileFalse(this, funct);
				return this;
			},
			eachFromRight: function eachFromRight(funct) {
				eachArrayFromRight(this, funct);
				return this;
			},
			lastIn: function lastIn() {
				return lastItem(this);
			},
			firstIn: function firstIn() {
				return this[0];
			},
			toArray: function toArray() {
				return _toArray(this);
			},
			replace: generateLoopSingleArgReturnSelfCloneNodeSecondArg(replaceChild),
			scrollIt: generateLoopReturnDataMultipleArgs(_scrollIt),
			prepend: generateLoopSingleArgReturnSelfCloneNodeSecondArg(prepend),
			prependTo: generateLoopSingleArgReturnSelf(prepend),
			ap: generateLoopSingleArgReturnSelfCloneNodeSecondArg(append),
			apTo: generateLoopSingleArgReturnSelf(append),
			after: generateLoopSingleArgReturnSelfCloneNodeSecondArg(insertAfter), //$('a').after($('.after'))
			before: generateLoopSingleArgReturnSelfCloneNodeSecondArg(insertBefore), //$('a').before($('.before'))
			afterNth: generateLoopForNthMethods(_afterNth),
			beforeNth: generateLoopForNthMethods(_beforeNth),
			removeRange: generateLoopReturnDataMultipleArgs(removeNodesInRange),
			attr: generateLoopReturnDataMultipleArgs(nodeAttribute),
			plugInto: generateLoopReturnDataMultipleArgs(_plugInto)
		};
	zipUpTo(listOnly, nodeMethodsValues, nodeMethodsKeys, generateLoopSingleArgReturnData);
	zipUpTo(listOnly, nodeOnlyMethodsReturn, nodeOnlyMethodNamesReturn, generateLoopReturnData); //checks to see if object is a dom node returns true or false
	var isDom = function isDom(obj) {
			if (!hasValue(obj)) {
				return false;
			}
			var nodetype = obj.nodeType;
			return typeof nodetype == "number" && nodetype != 9;
		}, //checks to see if object is a HTMLCollection returns true or false
		isHTMLCollection = function isHTMLCollection(obj) {
			return hasValue(obj) ? obj.constructor.name == "HTMLCollection" : false;
		}, //checks to see if object is a NodeList returns true or false
		isNodeList = function isNodeList(obj) {
			return hasValue(obj) ? obj.constructor.name == "NodeList" : false;
		};
	$.isDom = isDom;
	$.isHTMLCollection = isHTMLCollection;
	$.isNodeList = isNodeList;
	var domListToArray = $.domListToArray = function(collection) {
		return eachArray(collection, function(item) {
			if (isHTMLCollection(item) || isNodeList(item)) {
				item = domListToArray(item);
			}
			return item;
		});
	};
	var ensure = function ensure(models, call) {
		var models = isString(models) ? [models] : models,
			importData = eachArray(models, function(item) {
				return item + '.js';
			});
		importMethod(importData, call);
	};
	$.ensure = ensure; //create fragment
	var createFragment = $.createFragment = function() {
		return call(documentFragment, documentNode);
	}; //create node
	var domHeadNode, createTag = function createTag(name) {
			return documentNode.createElement(name);
		},
		emptyNodeDiv = call(createElement, documentNode, 'div'), //string to DOM
		toDom = function toDom(html, childNumber) {
			var frag = innerHTML(createFragment(), html),
				children = frag.childNodes,
				first;
			while (first = emptyNodeDiv.firstChild) {
				append(frag, first);
			}
			if (getLength(children) === 1) {
				childNumber = 0;
			}
			if (hasValue(childNumber)) {
				frag = children[childNumber];
			}
			return frag;
		},
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
					eventRemove(eventRemove(node, 'error', onerror, true), 'load', onload, true);
				};
			eventAdd(eventAdd(node, 'error', onerror, true), 'load', onload, true);
			if (data.append) {
				append(domHeadNode, node);
			}
			return node;
		},
		createCss = function createCss(url, data) {
			return nodeAttachLoadingEvents(nodeAttribute(createTag('link'), {
				'type': 'text/css',
				'rel': 'stylesheet',
				'href': url
			}), data);
		},
		createScript = function createScript(url, data) {
			return nodeAttachLoadingEvents(nodeAttribute(createTag('script'), {
				'async': emptyString,
				'src': url
			}), data);
		};
	$.createScript = createScript;
	$.createCss = createCss;
	$.createTag = createTag;
	$.toDOM = toDom;
	/*
	This imports any type of file.
	It works just like require in the browser.

	The main concern here is to
		remove event listeners
		null to ensure absolutely no leaks
		condense the code
*/
	var directoryNames = function directoryNames(name) {
			return directoryNames[name] || emptyString;
		},
		imported = $.imported = {},
		importId = function importId(id) {
			return replaceWithList(id, [dotString, slashString, dashString], underscoreString) + 'importMethod';
		},
		importMainCallback = function importMainCallback(node, call, remove) {
			if (isString(call)) {
				call = find(call, modelMethod);
			}
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
						remove = true;
					}
					importMainCallback(node, data.call, remove);
					node = null;
				},
				append: true
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
				remove, node, parent, model;
			if (!has(url, '//')) {
				url = directoryNames(type) + url;
			}
			if (!data.remove) {
				if (isJS) {
					remove = true;
				}
			}
			if (!imported[id]) { //mark as imported already
				imported[id] = true; //create node type
				node = nodeTypes[type](url, importEvents(id, data, remove)); //append
				append(headNode, node);
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
			if (isString(item)) {
				if (isFileJS(item)) {
					item = getModelName(item);
				} else if (isFileCSS(item)) {
					item = qsSelector('[href="' + item + '"]');
				} else {
					item = find(item, $);
				}
			}
			return item;
		},
		defineMethod = $.define = function(data) {
			var modelName = data.name,
				wrapFunct = bindTo(function() {
					var freshArgs = eachArray(data['import'], orderArgumentObjects);
					if (getLength(arguments) > 0) {
						pushApply(freshArgs, arguments);
					}
					return apply(data.invoke, wrapFunct, freshArgs);
				}, wrapFunct);
			if (modelName) {
				modelMethod[modelName] = wrapFunct;
			}
			return wrapFunct;
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
			var name = importId(joinArray(array, emptyString)),
				error = data.error,
				call = data.call,
				callback = function callback() {
					apply(call, call, eachArray(array, orderArgumentObjects));
				},
				stringArray = eachArray(array, function(item, index) {
					if (isFileJS(item) || isFileCSS(item)) {
						return item;
					}
				});
			if (getLength(stringArray) > 0) {
				promiseMethod(stringArray, name, function() {
					callback();
				}); //make imports
				eachArray(stringArray, function(item, index) {
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
			value = value || function() {};
			if (isFunction(value)) {
				value = {
					call: value
				};
			}
			if (isString(key)) {
				key = [key];
			}
			return arrayImport(key, value);
		}, //Save CSS and JS files directories
		directoryNames = function directoryNames(name) {
			return directoryNames[name] || emptyString;
		};
	directoryNames.css = emptyString;
	directoryNames.js = emptyString;
	$.dir = directoryNames; //create a function that takes an object that is apart of the main $ and applies/calls it to the functions arguments useful for caching functions
	var moduleMethod = $.module = function(data) {
		var fn = data.invoke,
			callback = data.callback,
			modelName = data.name,
			importData = data['import'],
			compiled = function compiled(callbackOptional) {
				importMethod(importData, {
					call: bindTo(fn, compiled)
				});
			};
		if (modelName) {
			modelMethod[modelName] = compiled;
		}
		return compiled;
	};
	var isDocumentReady = $.isDocumentReady = function(func) {
		var state = document.readyState;
		if (state === 'interactive' || state === 'completed' || state === 'complete') {
			if (func) {
				func();
			}
			return true;
		}
		if (func) {
			eventAdd(document, "DOMContentLoaded", func);
		}
		return false;
	};
	isDocumentReady(function() {
		domHeadNode = qsSelector('head');
	});
	var saveDimensions = function saveDimensions() {
		appState.windowHeight = global.innerHeight;
		appState.windowWidth = global.innerWidth;
		appState.bodyWidth = bodyNode.offsetWidth;
		appState.bodyHeight = bodyNode.offsetHeight;
	};
	isDocumentReady(function() {
		bodyNode = documentNode.body;
		raf(saveDimensions);
	});
	$.updateDimensions = saveDimensions;
	eventAdd(window, 'load', saveDimensions, true); //a tag DOM element used to parse URL
	var aNode = createTag('a'); //parse a URL
	$.linkParse = function(data) {
		aNode.href = data;
		var root = splitCall(aNode.hostname, dotString),
			pathName = aNode.pathname,
			len = getLength(root),
			root = root[len - 2] + dotString + root[len - 1];
		return {
			url: aNode.href,
			protocol: aNode.protocol,
			hostname: aNode.hostname,
			port: aNode.port,
			path: pathName[0] !== slashString ? slashString + pathName : pathName,
			pathroot: pathName[0] !== slashString ? splitCall(pathName, slashString)[0] : splitCall(pathName, slashString)[1],
			ssl: data.protocol === 'http:' ? false : true,
			search: aNode.search,
			hash: aNode.hash,
			domain: root,
			host: aNode.host
		};
	}; //single node only operations
	var acidLibPrefix = acidLib ? nodeAttribute(acidLib, 'data-prefix') || emptyString : emptyString,
		extendDom = function extendDom(obj, ext) {
			eachObject(obj, function(item, key) {
				if (item) {
					Object.defineProperty(ext, acidLibPrefix + key, {
						enumerable: false,
						configurable: true,
						writable: true,
						value: item
					});
				}
			});
		};
	extendDom(nodeOnly, nodePrototype); //lists without looping
	extendDom(listOnly, nodeListPrototype);
	extendDom(listOnly, htmlCollectionPrototype);
	var _eventNames = $.eventNames = [],
		eventsArrayForWindow = ["wheel", "copy", "cut", "paste", "beforescriptexecute", "afterscriptexecute", "abort", "change", "ctextmenu", "input", "progress", "ratechange", "reset", "select", "submit", "blur", "error", "focus", "load", "scroll"],
		eventsArrayForBody = ["mouseenter", "mouseleave", "click", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "keydown", "keypress", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "blur", "focus"];
	var ensureItem = function ensureItem(action, analytics, obj, e, type, extra) {
			if (action) {
				var fn = find(action, modelMethod);
				if (fn) {
					if (debugMode) {
						consoleNative(action);
					}
					fn(obj, e, extra);
					fn = null;
					action = null;
					obj = null;
					e = null;
					extra = null;
				}
				if (analytics) {
					asyncMethod(function() {
						analytics(type, action);
					});
				}
			}
		},
		domNodeEvent = function domNodeEvent(obj, e, analytics, fn, type, attr) {
			var action, extra, hasExtra, ismodel, multi, length;
			if (debugMode) {
				consoleNative(e);
			}
			if (!action) {
				if (obj.getAttribute) {
					action = obj.getAttribute(attr);
				}
			}
			if (!action) {
				if (obj !== bodyNode) {
					while (obj = obj.parentNode) {
						if (!obj) {
							return;
						} else if (obj.nodeType != 1) {
							return;
						}
						if (!action) {
							action = obj.getAttribute(attr);
						}
						if (action) {
							break;
						}
					}
				}
			}
			if (action) {
				e.stopPropagation();
				multi = splitCall(action, ',');
				eachArray(multi, function(action) {
					hasExtra = stringMatchCall(action, /\((.*?)\)/);
					if (hasExtra) {
						action = stringReplace(action, hasExtra[0], emptyString);
						extra = hasExtra[1];
					}
					ismodel = find(action, modelMethod);
					if (ismodel) {
						ismodel(obj, e, extra);
					} else {
						ensure(splitCall(action, dotString)[0], function() {
							ensureItem(action, analytics, obj, e, type, extra);
							e = null;
							type = null;
							analytics = null;
							action = null;
						});
					}
					extra = emptyString;
					hasExtra = false;
				});
			}
		},
		syntheticEvent = function syntheticEvent(e, analytics, fn, type, attr) {
			var isdom = isDom(e),
				obj, nonenode = false;
			if (fn) {
				fn();
			}
			if (isdom) {
				obj = e;
			} else {
				obj = e.target;
				if (!isDom(obj)) {
					nonenode = true;
				}
			}
			if (obj) {
				if (!nonenode) {
					domNodeEvent(obj, e, analytics, fn, type, attr);
				}
			}
		}, //create events from config
		getEventsOnObject = function getEventsOnObject(object, node, data) {
			var new_name;
			eachObject(object, function(item, key) {
				new_name = 'on' + key;
				data.type = key;
				data.fn = item.fn;
				$[new_name] = _eventGenerate(data);
				eventAdd(node, key, $[new_name], true);
			});
		},
		eventMethod = $.acid.event = function(event) {
			getEventsOnObject(event.window, window, {
				analytics: event.analytics
			});
			getEventsOnObject(event.body, document.body, {
				analytics: event.analytics
			});
		}, //generate the onevent function
		_eventGenerate = $.acid.event.generate = function(data) {
			var type = data.type,
				fn = data.fn,
				analytics = data.analytics,
				data = null,
				attr = 'data-' + type,
				syntheticEventWrap = function syntheticEventWrap(e) {
					syntheticEvent(e, analytics, fn, type, attr);
				};
			return syntheticEventWrap;
		},
		listenOnAllEvents = function listenOnAllEvents() {
			var windowObject = {},
				bodyObject = {};
			eachArray(eventsArrayForWindow, function(item, key) {
				windowObject[item] = {};
			});
			eachArray(eventsArrayForBody, function(item, key) {
				bodyObject[item] = {};
			});
			windowObject.resize = {
				fn: function fn() {
					saveDimensions();
				}
			};
			eventMethod({
				window: windowObject,
				body: bodyObject
			});
		};
	isDocumentReady(listenOnAllEvents);
	if (acidLib) { //get model directory -> save prefix to prefix
		var coreModel = nodeAttribute(acidLib, 'data-model');
		$.dir.js = coreModel;
		if (acidLib.onload) {
			acidLib.onload();
			acidLib.onload = null;
		} else if (coreModel) { //create core script and append to head
			isDocumentReady(function() {
				ensure('core', function(core) {
					if (core) {
						asyncMethod(core);
					}
				});
			});
		}
	} //clean up
	acidLib = null; //log out the ACID version
	acidConsole('Acidjs v' + $.acid.version, 'notify');
	isDocumentReady(agentInfo);
	eachArray([
		[arrayNative, arrayPrototype, 'array'],
		[objectNative, objectPrototype, 'object'],
		[stringNative, stringPrototype, 'string']
	], function(proto) {
		var name = proto[2],
			extendToGlobal = function extendToGlobal(key, name, funct) {
				$['' + name + ucFirst(key)] = funct;
			};
		$[name] = proto[0];
		eachProperty(proto[1], function(item, key) {
			if (isFunction(item)) {
				extendToGlobal(key, name, function(that) {
					var args = _toArray(arguments);
					shiftArray(args);
					return apply(item, that, args);
				});
			}
		});
	});
})(this);