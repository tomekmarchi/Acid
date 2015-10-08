(function () {
	var api = $.model.api = {};
	//globals
	$.model.api.global = {
		$: {
			descrip: 'Main Namespace & Main CSS selector with optimizations',
			example: '$(\'div a\')'
		},
		$$: {
			descrip: 'Main CSS selector without optimizations',
			example: '$$(\'div a\')'
		},
		$tag: {
			descrip: 'Get elements by tag name',
			example: '$tag(\'div\')'
		},
		$cls: {
			descrip: 'Get elements by class name',
			example: '$cls(\'box\')'
		},
		$id: {
			descrip: 'Get element by id',
			example: '$id(\'scroll_wrap\')'
		},
		$qs: {
			descrip: 'querySelector returns a single first match',
			example: '$qs(\'div a\')'
		},
		$qsa: {
			descrip: 'querySelector returns all matchs',
			example: '$qsa(\'div a\')'
		}
	};
	//math operations cached
	$.model.api.math_wrapers = {
		e: {
			descrip: 'Euler\'s constant and the base of natural logarithms, approximately 2.718',
			example: '$.e'
		},
		ln2: {
			descrip: 'Natural logarithm of 2, approximately 0.693',
			example: '$.ln2'
		},
		ln10: {
			descrip: 'Natural logarithm of 10, approximately 2.303',
			example: '$.ln10'
		},
		log2e: {
			descrip: 'Base 2 logarithm of E, approximately 1.443',
			example: '$.log2e'
		},
		log10e: {
			descrip: 'Base 10 logarithm of E, approximately 0.434',
			example: '$.log10e'
		},
		pi: {
			descrip: 'Ratio of the circumference of a circle to its diameter, approximately 3.14159',
			example: '$.pi'
		},
		sqrt1_2: {
			descrip: 'Square root of 1/2; equivalently, 1 over the square root of 2, approximately 0.707',
			example: '$.sqrt1_2'
		},
		sqrt2: {
			descrip: 'Square root of 2, approximately 1.414',
			example: '$.sqrt2'
		}
	};
	$.model.api.checking = {
		isArray: {
			descrip: 'Check if object is array',
			example: '$.isArray(obj)'
		},
		isString: {
			descrip: 'Check if object is string',
			example: '$.isString(obj)'
		},
		isDom: {
			descrip: 'Check if object is node',
			example: '$.isDom(obj)'
		},
		isNumber: {
			descrip: 'Check if object is number',
			example: '$.isNumber(obj)'
		},
		isObject: {
			descrip: 'Check if thing is an object',
			example: '$.isObject(obj)'
		},
		isPlainObject: {
			descrip: 'Check if object is plainobject',
			example: '$.isPlainObject(obj)'
		},
		isFunction: {
			descrip: 'Check if object is function',
			example: '$.isFunction(obj)'
		},
		toArray: {
			descrip: 'Convert list to array',
			example: '$.toArray(arguments)'
		},
		isRegex: {
			descrip: 'Check if object is regex',
			example: '$.isRegex(obj)'
		},
		isArgs: {
			descrip: 'Check if object is arguments',
			example: '$.isArgs(obj)'
		},
		isBool: {
			descrip: 'Check if object is bool',
			example: '$.isBool(obj)'
		},
		isDate: {
			descrip: 'Check if object is date',
			example: '$.isDate(obj)'
		},
		isError: {
			descrip: 'Check if object is error',
			example: '$.isError(obj)'
		},
		isMap: {
			descrip: 'Check if object is map',
			example: '$.isMap(obj)'
		},
		isSet: {
			descrip: 'Check if object is a set',
			example: '$.isSet(obj)'
		},
		isWeakMap: {
			descrip: 'Check if object is weakmap',
			example: '$.isWeakMap(obj)'
		},
		isFloat32: {
			descrip: 'Check if object is float32',
			example: '$.isFloat32(obj)'
		},
		isFloat64: {
			descrip: 'Check if object is float64',
			example: '$.isFloat64(obj)'
		},
		isInt8: {
			descrip: 'Check if object is int8',
			example: '$.isInt8(obj)'
		},
		isInt16: {
			descrip: 'Check if object is int16',
			example: '$.isInt16(obj)'
		},
		isInt32: {
			descrip: 'Check if object is int32',
			example: '$.isInt32(obj)'
		},
		isUnit8: {
			descrip: 'Check if object is unit8',
			example: '$.isUnit8(obj)'
		},
		isUnit8clamped: {
			descrip: 'Check if object is unit8clamped',
			example: '$.isUnit8clamped(obj)'
		},
		isUnit16: {
			descrip: 'Check if object is unit16',
			example: '$.isUnit16(obj)'
		},
		isUnit32: {
			descrip: 'Check if object is unit32',
			example: '$.isUnit32(obj)'
		},
		isNative: {
			descrip: 'Check if object is native',
			example: '$.isNative(obj)'
		},
		isUndefined: {
			descrip: 'Check if object is undefined',
			example: '$.isUndefined(obj)'
		},
		isNaN: {
			descrip: 'Check if object is NaN',
			example: '$.isNaN(obj)'
		},
		isNaN: {
			descrip: 'Check if object is NaN',
			example: '$.isNaN(obj)'
		},
		isFinite: {
			descrip: 'Check if object is Finite',
			example: '$.isFinite(obj)'
		},
		isAgent: {
			descrip: 'Check user agent',
			example: '$.agent(\'chrome\')'
		},
		hasValue: {
			descrip: 'Check if object has value',
			example: '$.hasValue(obj)'
		},
		isEmpty: {
			descrip: 'Check if an object is empty',
			example: '$.isEmpty(obj)'
		},
		has: {
			descrip: 'Check if an object has something via indexof',
			example: '$.has(\'acid\',\'a\')'
		}
	};
	//storage
	$.model.api.storage = {
		local: {
			descrip: 'localstorage set/get',
			example: '$.local.name'
		},
		clearLocal: {
			descrip: 'clear localstorage',
			example: '$.clearLocal()'
		},
		session: {
			descrip: 'sessionstorage set/get',
			example: '$.session.name'
		},
		clearSession: {
			descrip: 'clear sessionstorage',
			example: '$.clearSession()'
		}
	};
	$.model.api.global_dom = {
		frag: {
			descrip: 'Returns a document fragment',
			example: '$.frag()'
		},
		tag: {
			descrip: 'Makes a dom node from string name',
			example: '$.tag(\'div\')'
		},
		dom: {
			descrip: 'Makes a dom node from string name and object syntax',
			example: '$.dom(\'div\',obj)'
		},
		html: {
			descrip: 'Makes a HTML string from string name and object syntax',
			example: '$.html(\'div\',obj)'
		},
		toDOM: {
			descrip: 'Makes string into live DOM',
			example: '$.toDOM(\'<div></div>\')'
		}
	};
	$.model.api.timing = {
		caf: {
			descrip: 'Cancel Animation Frame',
			example: '$.caf(number_of_raf)'
		},
		raf: {
			descrip: 'Request Animation Frame',
			example: '$.caf(number_of_raf)'
		},
		async: {
			descrip: 'Launch functions in async accepts an array',
			example: '$.async([fn1,fn2])'
		},
		timerClear: {
			descrip: 'Clear a settimeout function',
			example: '$.timerclear(number)'
		},
		batch: {
			descrip: 'Batch add functions for improved rendering perfomance via RAF',
			example: '$.batch(function)'
		}
	};
	//$ methods
	$.model.api.$ = {
		acid: {
			descrip: 'Access the ACID engine. Info & functions',
			example: '$.acid.start $.acid.version'
		},
		debug: {
			descrip: 'Turn debugging on 1 or 0',
			example: '$.debug(1)'
		},
		console: {
			descrip: 'Console.log',
			example: '$.console(obj)'
		},
		socket: {
			descrip: 'Open a web socket',
			example: '$.socket(obj_syntax)'
		},
		cache: {
			descrip: 'set/get Cache an object',
			example: '$.cache(key,value) $.cache(key)'
		},
		cacheToggle: {
			descrip: 'Toggle Cache object between two values',
			example: '$.cacheToggle(key,value,value2)'
		},
		ensure: {
			descrip: 'Ensure a model is loaded',
			example: '$.ensure(\'plugins/tip\')'
		},
		ensureInvoke:{
			descrip: 'Ensure a model is loaded and invoke the model if it is a function ASAP',
			example: '$.ensureInvoke(\'modelLocation\')'
		},
		exec: {
			descrip: 'execCommand',
			example: '$.exec(String aCommandName, Boolean aShowDefaultUI, String aValueArgument)'
		},
		faceplate: {
			descrip: 'Used to save function or object that is used to place template data',
			example: '$.faceplate(name,fnc)'
		},
		get: {
			descrip: 'Get object property from string',
			example: '$.get(\'acid.name\',$)'
		},
		import: {
			descrip: 'Import from a URL with object syntax - Accepts an array to import',
			example: '$.import(\'plugins/tip.js\',obj)'
		},
		plugin: {
			descrip: 'Import & extend extrernal libraries to the acid namespace',
			example: '$.plugin({pluginsObject},callback)'
		},
		json: {
			descrip: 'Convert string to JSON object',
			example: '$.json(\'{"acid":1}\')'
		},
		promise: {
			descrip: 'Create a promise from an array or complete a item in a promise',
			example: '$.promise([\'css\',\'js\'],\'promise_name\',function) $.promise(\'css\',\'promise_name\')'
		},
		service: {
			descrip: 'Get a service',
			example: '$.service(\'service_name\')'
		},
		serviceCreate: {
			descrip: 'Create a service',
			example: '$.serviceCreate(\'service_name\')'
		},
		template: {
			descrip: 'Create a template',
			example: '$.template(\'template_name\',node/string/function)'
		},
		xhr: {
			descrip: 'XHR request',
			example: '$.worker(object_syntax)'
		},
		fetch: {
			descrip: 'XHR request simple',
			example: '$.get(url,callback)'
		},
		linkParse: {
			descrip: 'Parse a URL into an object with seperated info',
			example: '$.linkParse(\'http://lnkit.com/signup\')'
		},
		view: {
			descrip: 'Create a simple view combine a faceplate and a template used for live DOM fast templating',
			example: '$.view(name,template_node,function)'
		},
		module: {
			descrip: 'Creates a module takes [acid ($[*]) methods,css files,js files] as strings and uses them as arguments in a function. This returns a compiled function as a module.',
			example: '$.module([\'model\',\'post.js\'],function(model,post){ console.log(model);},callback);'
		},
		define: {
			descrip: 'Creates a module with ASAP execution.',
			example: '$.define(\'model\',function(model){ console.log(model);});'
		},
		model: {
			descrip: 'Set/get a Model',
			example: '$.model(\'key\',object || fn)'
		},
		eventAdd: {
			descrip: 'Add an event listener',
			example: 'obj.eventadd(type, listener[, useCapture])'
		},
		eventRemove: {
			descrip: 'Remove an event listener',
			example: 'obj.eventadd(type, listener[, useCapture])'
		}
	};

	$.module.module={
		save: {
			descrip: 'Get/Save a compiled module.',
			example: '$.module([\'model\',\'post.js\'],function(model,post){ console.log(model);},callback).save(\'moduleName\'); $.module(\'moduleName\');'
		}
	};

	//object prototype
	$.model.api.object = {
		clone: {
			descrip: 'Return a clone of an object',
			example: 'object.clone()'
		},
		copy: {
			descrip: 'Return a copy of an object',
			example: 'object.copy()'
		},
		extend: {
			descrip: 'Extend an objects prototype',
			example: 'obj.extend(object)'
		},
		eachObject: {
			descrip: 'Loop through an object',
			example: 'obj.each(function(item,key){})'
		},
		isEqual: {
			descrip: 'Compares two objects ES6 Object.is',
			example: 'obj.isEqual(obj2)'
		},
		merge: {
			descrip: 'Merge objects',
			example: 'obj.merge(obj2)'
		},
		obsrv: {
			descrip: 'Observe an object',
			example: 'obj.obsrv(function)'
		},
		unObsrv: {
			descrip: 'Unobserve an object',
			example: 'obj.unobsrv(observer)'
		}
	};
	$.model.api.node = {
		ab: {
			descrip: 'AfterBegin insert HTML',
			example: 'document.body.ab(\"<div></div>\")'
		},
		ae: {
			descrip: 'AfterEnd insert HTML',
			example: 'document.body.ae(\"<div></div>\")'
		},
		bb: {
			descrip: 'BeforeBegin insert HTML',
			example: 'document.body.bb(\"<div></div>\")'
		},
		be: {
			descrip: 'BeforeEnd insert HTML',
			example: 'document.body.be(\"<div></div>\")'
		},
		ap: {
			descrip: 'Append a node',
			example: 'document.body.ap(node)'
		},
		prepend: {
			descrip: 'Prepend a node',
			example: 'document.body.prepend(node)'
		},
		act: {
			descrip: 'Execute an acid event on a node',
			example: 'node.act(\'click\')'
		},
		add: {
			descrip: 'Get text number in node and add to it',
			example: 'node_counter.add(2)'
		},
		minus: {
			descrip: 'Get text number in node and minus it',
			example: 'node_counter.minus(2)'
		},
		after: {
			descrip: 'Insert node after',
			example: 'node.after(other_node)'
		},
		afterNth: {
			descrip: 'Insert node after child number',
			example: 'document.body.afternth(node,1)'
		},
		beforeNth: {
			descrip: 'Insert node before child number',
			example: 'document.body.beforeNth(node,1)'
		},
		apTo: {
			descrip: 'Append Node to another Node',
			example: 'node.apTo(document.body)'
		},
		plugInto: {
			descrip: 'This allows models to take DOM nodes and chain them. Think chainable plugins.',
			example: 'node.plugInto(\'change_color\',object_sytnax)'
		},
		first: {
			descrip: 'Get first child',
			example: 'nodes.first()'
		},
		last: {
			descrip: 'Get last child optional arg for from last',
			example: 'nodes.last()'
		},
	};
	$.model.api.dom_lists = {
		each: {
			descrip: 'Loop through each node',
			example: 'nodes.each(function(node){})'
		},
		firstIn: {
			descrip: 'Get first item in collection',
			example: 'nodes.firstIn()'
		},
		lastIn: {
			descrip: 'Get last item in collection',
			example: 'nodes.lastIn()'
		},
		toArray: {
			descrip: 'Convert list to an array',
			example: 'nodes.toarray()'
		},
		removeRange: {
			descrip: 'Remove nodes from DOM with a start index and end index',
			example: 'nodes.removeRange(startIndex,endIndex)'
		}

	};
	$.model.api.array = {
		eachArray: {
			descrip: 'Loop through an array',
			example: 'array.each(function(item,i){})'
		},
		chunk: {
			example: '[1,2,3,4,5].chunk(2)',
			produce: '[[1,2],[3,4],[5]]',
			descrip: 'Creates an array of elements split into groups',
			descriplong: 'Creates an array of elements split into groups the length of size. If collection can\'t be split evenly, the final chunk will be the remaining elements.'
		},
		clone: {
			example: '[1,2,3,4,5].clone()',
			result: '[1,2,3,4,5]',
			descrip: 'Clone an array via the slize method',
			descriplong: 'Creates an array of elements split into groups the length of size. If collection can\'t be split evenly, the final chunk will be the remaining elements.'
		},
		compact: {
			example: '[0,2,3,4,5].compact()',
			result: '[2,3,4,5]',
			descrip: 'Return new array with falsey values removed',
			descriplong: 'return new array with falsey values removed (false,0,\'\',null,Nan,undefined)'
		},
		countBy: {
			example: '[4.3, 6.1, 6.4].countBy(function(n) {return n.floor();});',
			result: '{ \'4\': 1, \'6\': 2 }',
			descrip: 'Sorts a list into groups and returns a count for the number of objects in each group.',
			descriplong: 'Creates an object composed of keys generated from the results of running each element of collection through iteratee. The corresponding value of each key is the number of times the key was returned by iteratee.'
		},
		createRange: {
			example: '[].createrange(1,5);',
			result: '[1, 2, 3, 4]',
			descrip: 'Returns a list of integers from start (inclusive) to stop (exclusive), incremented (or decremented) by step, exclusive.',
			descriplong: 'Returns a list of integers from start (inclusive) to stop (exclusive), incremented (or decremented) by step, exclusive.'
		},
		createRangeTo: {
			example: '[].createrange(1,5);',
			result: '[1, 2, 3, 4, 5]',
			descrip: 'Returns a list of integers from start (inclusive) to stop equal to (exclusive), incremented (or decremented) by step, exclusive.',
			descriplong: 'Returns a list of integers from start (inclusive) to stop equal to (exclusive), incremented (or decremented) by step, exclusive.'
		},
		difference: {
			example: '[[1, 2, 3, 4, 5], [5, 2, 10]].difference();',
			result: '[1, 3, 4]',
			descrip: 'Similar to without, but returns the values from array that are not present in the other arrays.',
			descriplong: 'Similar to without, but returns the values from array that are not present in the other arrays.'
		},
		drop: {
			example: '[1, 2, 3].drop(2);',
			result: '[3]',
			descrip: 'Removes elements from array corresponding to the given indexes and returns an array of the removed elements.',
			descriplong: 'Removes elements from array corresponding to the given indexes and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.'
		},
		dropRight: {
			example: '[1, 2, 3].dropright(2);',
			result: '[1]',
			descrip: '(FROM RIGHT) Removes elements from array corresponding to the given indexes and returns an array of the removed elements.',
			descriplong: '(FROM RIGHT) Removes elements from array corresponding to the given indexes and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.'
		},
		dropWhile: {
			example: '[1, 2, 3].dropwhile(function(n) {return n < 3;});',
			result: '[3]',
			descrip: 'Creates a an array with elements taken from the beginning. Elements are taken until predicate returns falsey.',
			descriplong: 'Creates a an array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is bound to thisArg and invoked with three arguments; (value, index, array).'
		},
		dropRightWhile: {
			example: '[1, 2, 3].dropwhile(function(n) {return n > 1;});',
			result: '[1]',
			descrip: 'Creates a an array with elements taken from the end. Elements are taken until predicate returns falsey.',
			descriplong: 'Creates a an array with elements taken from the end. Elements are taken until predicate returns falsey. The predicate is bound to thisArg and invoked with three arguments; (value, index, array).'
		},
		flow: {
			example: '[f,g,h].flow()',
			result: 'flowfn',
			returns: 'f(g(h()))',
			descrip: 'Returns the composition of a list of functions. f(), g(), h() -> f(g(h()))',
			descriplong: 'Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).'
		},
		flowRight: {
			example: '[f,g,h].flowright()',
			result: 'flowrightfn',
			returns: 'h(g(f()))',
			descrip: 'Flowright is like flow except that it creates a function that invokes the provided functions from right to left. h(g(f()))',
			descriplong: 'flowright is like flow except that it creates a function that invokes the provided functions from right to left. h(g(f()))'
		},
		last: {
			descrip: 'Get last item in an array',
			descriplong: 'Return the last item in an array. If argument is supplied it will get last amount from right.',
			example: '[1,2,3].last()',
			result: '3'
		},
		right: {
			descrip: 'Get item in an array with argument as index from the right.',
			descriplong: 'Return item in an array with argument as index from the right.',
			example: '[1,2,3].right(0)',
			result: '3'
		},
		left: {
			descrip: 'Get item in an array with argument as index',
			descriplong: 'Return item in an array with argument as index.',
			example: '[1,2,3].left(0)',
			result: '3'
		},
		first: {
			descrip: 'Get first item in an array',
			descriplong: 'Return the last item in an array. If argument is supplied it will get first amount.',
			example: '[1,2,3].first()',
			result: '1'
		},
		difference: {
			descrip: 'Creates an array excluding all values of the provided arrays using SameValueZero for equality comparisons.',
			descriplong: 'Creates an array excluding all values of the provided arrays using SameValueZero for equality comparisons.',
			note: 'SameValueZero comparisons are like strict equality comparisons, e.g. ===, except that NaN matches NaN. See the ES spec for more details.',
			returns: '(Array): Returns the new array of filtered values.',
			example: '[1, 2, 3].difference([4, 2])',
			result: '[1, 3]'
		},
		differenceAll: {
			descrip: 'Creates an array excluding all values of all arrays using SameValueZero for equality comparisons.',
			descriplong: 'Creates an array excluding all values of all arrays using SameValueZero for equality comparisons.',
			note: 'SameValueZero comparisons are like strict equality comparisons, e.g. ===, except that NaN matches NaN. See the ES spec for more details.',
			returns: '(Array): Returns the new array of filtered values.',
			example: '[[1, 2, 3],[4, 2]].differenceall()',
			result: '[1, 3, 4]'
		},
		firstFalse: {
			descrip: 'Returns the first false item',
			descriplong: 'returns the first false item in an array of items',
			example: '[1,2,3].firstfalse(function(n){return n===2})',
			result: '1'
		},
		firstTrue: {
			descrip: 'Returns the first true item.',
			descriplong: 'Returns the first true item in an array.',
			example: '[1,2,3].firstfalse(function(n){return n===2})',
			result: '2'
		},
		flatten: {
			descrip: 'Flattens a nested array.',
			descriplong: 'Flattens a nested array if argument is provided it will flatten to that depth.',
			args: {
				'this': {
					type: 'array',
					descrip: 'The array to flatten'
				},
				'depth': {
					descrip: 'The depth to flatten',
					type: 'number'
				},
			},
			returns: '(Array): Returns the new flattened array.',
			example: '[[1, 2, 3],[4, 2]].flatten()',
			result: '[1, 2, 3, 4, 2]'
		},
		groupBy: {
			descrip: 'Creates an object composed of keys generated from the results of running each element of collection through iteratee.',
			descriplong: 'Creates an object composed of keys generated from the results of running each element of collection through iteratee. The corresponding value of each key is an array of the elements responsible for generating the key.',
			args: {
				'this': {
					type: 'array',
					descrip: 'The collection to iterate over'
				},
				'function': {
					descrip: 'The function invoked per iteration',
					type: 'function'
				},
			},
			returns: '(Object): Returns the composed aggregate object.',
			example: '[4.2, 6.1, 6.4].groupby(function(n) {return Math.floor(n);})',
			result: '{ \'4\': [4.2], \'6\': [6.1, 6.4] }'
		},
		indexBy: {
			descrip: 'Creates an object composed of keys generated from the results of running each element of collection through iteratee.',
			descriplong: 'Creates an object composed of keys generated from the results of running each element of collection through iteratee. The corresponding value of each key is the last element responsible for generating the key.',
			args: {
				'this': {
					type: 'array',
					descrip: 'The collection to iterate over'
				},
				'function': {
					descrip: '(Function|Object|string): The function invoked per iteration.',
					type: 'Function|Object|string'
				}
			},
			returns: '(Object): Returns the composed aggregate object.',
			example: '[{ \'dir\': \'left\', \'code\': 97 },{ \'dir\': \'right\', \'code\': 100 }].indexby(\'dir\')',
			result: '{ \'left\': { \'dir\': \'left\', \'code\': 97 }, \'right\': { \'dir\': \'right\', \'code\': 100 } }'
		},
		initial: {
			descrip: 'Gets all but the last element of array.',
			descriplong: 'Gets all but the last element of array.',
			args: {
				'this': {
					type: 'array',
					descrip: 'The array to query.'
				},
			},
			returns: '(Array): Returns all but last element',
			example: '[1, 2, 3].initial()',
			result: '[1, 2]'
		},
		intersection: {
			descrip: 'Creates an array of unique values in all provided arrays using === for equality comparisons. ',
			descriplong: 'Creates an array of unique values in all provided arrays using SameValueZero for equality comparisons. ',
			args: {
				'this': {
					type: 'array',
					descrip: 'The arrays to inspect.'
				},
			},
			returns: '(Array): Returns the new array of shared values.',
			example: '[[1, 2], [4, 2], [2, 1]].intersection()',
			result: '[2]'
		},
		invoke: {
			descrip: 'Run method on array set.',
			descriplong: 'Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.',
			args: {
				'this': {
					type: 'array',
					descrip: 'The arrays to inspect.'
				},
				'Method': {
					type: 'string',
					descrip: 'The method to be invoked on each array.'
				},
			},
			returns: 'Returns that which the invoked function returns',
			example: '[[5, 1, 7], [3, 2, 1]].invoke(\'sort\')',
			result: '[[1, 5, 7], [1, 2, 3]]'
		},
		largest: {
			descrip: 'Return the largest number in the array.',
			descriplong: 'Return the largest number in the array.',
			args: {
				'this': {
					type: 'array',
					descrip: 'The arrays to inspect.'
				}
			},
			returns: 'Return the largest number in the array.',
			example: '[5, 1, 7, 3, 2, 1].largest()',
			result: '7'
		},
		smallest: {
			descrip: 'Return the smallest number in the array.',
			descriplong: 'Return the smallest number in the array.',
			args: {
				'this': {
					type: 'array',
					descrip: 'The arrays to inspect.'
				}
			},
			returns: 'Return the smallest number in the array.',
			example: '[5, 1, 7, 3, 2, 1].smallest()',
			result: '1'
		},
		object: {
			descrip: 'Converts arrays into objects.',
			descriplong: 'Converts arrays into objects. Pass either a single list of [key, value] pairs, or a list of keys, and a list of values. If duplicate keys exist, the last value wins.',
			args: {
				'this': {
					type: 'array',
					descrip: 'The arrays to inspect.'
				}
			},
			returns: 'Returns an object',
			example: '[\'moe\', \'larry\', \'curly\'].object([30, 40, 50])',
			result: '{moe: 30, larry: 40, curly: 50}'
		}
	};
	//string prototype
	$.model.api.string = {};
	//number prototype
	$.model.api.number = {};
	$.model.api['function'] = {
		async: {
			descrip: 'Launch function in async',
			descriplong: 'If .next is not supported timeout 0 will be used',
			example: 'function.async()'
		},
		timer: {
			descrip: 'setTimeout wrapper',
			example: 'function.timer(300)'
		},
		debounce: {
			descrip: 'setTimeout wrapper with clearTimeout everytime it is called while the timer is still ticking',
			example: 'function.debounce(300)'
		},
		throttle: {
			descrip: 'setTimeout wrapper that will allow the function to be called when a wait period is not in progress',
			example: 'function.throttle(300)'
		},
		raf: {
			descrip: 'Request animation frame wrapper',
			returns: 'Number: Returns requested animation frame number',
			example: 'function.raf()'
		},
		once: {
			descrip: 'Returns a new function that is only be launched once and return the same output after it is called again',
			example: 'function.once()'
		}
	};
	//event
	$.model.api.event = {
		isEnter: {
			descrip: 'Checks if enter was pressed with the event returns true/false',
			example: 'event.isEnter()'
		}
	};
	//array to display for HTML pages
	$.model.api.display = [{
		obj: api.global,
		name: 'Globals',
		id:'gloabls'
	}, {
		obj: api.$,
		name: '$'
	}, {
		obj: api.math_wrapers,
		name: '$[Math]',
		id:'math$'
	}, {
		obj: api.checking,
		name: '$[Checking]',
		id:'Checking$'
	}, {
		obj: api.storage,
		name: '$[Storage]',
		id:'Storage$'
	}, {
		obj: api.global_dom,
		name: '$[DOM]',
		id:'DOM$'
	}, {
		obj: api.timing,
		name: '$[Timing]',
		id:'Timing$'
	}, {
		obj: api.object,
		name: 'Object',
		id:'object'
	}, {
		obj: api.dom_lists,
		name: 'DOM Collection & List',
		id:'collections'
	}, {
		obj: api.event,
		name: 'Events',
		id:'Events'
	}];
})();
