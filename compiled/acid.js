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

(function(_global) {
	"use strict";

	//debug option
	var $debug = false,

		//extend options
		$ext = {
			credits: {}
		};
	/*
 
 	Native objects
 
 */
	//String Object
	var _array = Array,

		//Object Object
		_object = Object,

		//Function Object
		_function = Function,

		//String Object
		_string = String,

		//JSON Object
		json = JSON,

		//Math Object
		_math = Math,

		//boolean object
		_boolean = Boolean,

		//undefined cache
		_undefined = undefined,

		//weakmap
		weak_map = _global.WeakMap,
		new_weak_map = function new_weak_map() {
			return new weak_map();
		},
		_historyPushState = history.pushState,

		//map
		_map = Map,

		//number
		number_object = Number,

		//worker object
		_worker = _global.Worker,

		//web socket
		_socket = _global.WebSocket,
		_RAF = _global.requestAnimationFrame,

		//storage
		//local
		_localstorage = localStorage,

		//session
		_sessionStorage = sessionStorage,

		//console.log wrapper
		_console = function _console(obj) {
			console.log(obj);
		},

		/*
  	Prototypes
  */
		$prototype = 'prototype',

		//prototypes
		object_prototype = _object[$prototype],

		//array prototype
		array_prototype = _array[$prototype],

		//string
		string_prototype = _string[$prototype],

		//websocket
		websocket_prototype = WebSocket[$prototype],

		//webworker
		worker_prototype = Worker[$prototype],

		/*
 	Array.prototype Functions cached
 */
		//array push
		_array_push = array_prototype.push,

		//object keys cached
		_object_keys = _object.keys,
		_objectIs = _object.is,

		//object assign cached
		_object_assign = _object.assign,

		//getOwnPropertyDescriptor
		_object_getOwnPropertyDescriptor = _object.getOwnPropertyDescriptor,
		_defineProperty = _object.defineProperty,

		/*
 	Function methods cache
 */
		_bind = Function.bind,
		_bind_call = function _bind_call(object, data) {
			return _bind.call(object, data);
		},

		/*
 	JSON
 */
		stringify = json.stringify,

		/*
 	System Hardware Info
 */
		systemCores = navigator.hardwareConcurrency;

	var _window = _global,
		_htmlcollection = HTMLCollection,
		_HTMLElement = HTMLElement,
		_nodelist = NodeList,
		_node = Node,
		_Element = Element,
		_document = document,
		_frag = _document.createDocumentFragment,
		_createElement = _document.createElement,

		//get library script
		//dom objects
		acidLib = _document.getElementById('acidjs'),

		//get prefix data for super safe prototypes
		acidLibPrefix = acidLib ? acidLib.getAttribute('data-prefix') || '' : '',
		_body,

		//cache document head
		head_node = _document.head,

		//cache div for DOM functions
		_empty_node_div = _createElement.call(_document, 'div'),
		node_prototype = _node[$prototype],

		//nodelist prototype
		nodelist_prototype = _nodelist[$prototype],

		//Element.prototype
		_Element_prototype = _Element[$prototype],

		//htmlcollection prototype
		htmlcollection_prototype = _htmlcollection[$prototype];

	var $class_test = /^.[\w_-]+$/,
		$tag_test = /^[A-Za-z]+$/,
		regex_space = /\s/,
		regex_space_global = /\s/g,
		regex_dot = /\./g,
		regex_dash = /-/g,
		regex_fowardslash = /\//g,
		$replace_template_string = /\{(.*?)\}/g,
		regex_ext = /\.[0-9a-z]+$/i,
		regex_underscore = /_/g,
		isJSRegex = /\.js/,
		isCSSRegex = /\.css/,
		isJSONRegex = /\.json/,
		hasDotRegex = /\./;

	var $protocol = location.protocol,

		//websocket protocol type
		$protocol_socket = '$protocol' == 'http:' ? 'ws' : 'wss',
		$hostname = location.hostname;
	var _afterNth = function _afterNth(node, new_child, position) {
		var child = node.children[position + 1];
		if (!child) {
			node.appendChild(new_child);
		} else {
			node.insertBefore(new_child, child);
		}
		return node;
	};
	var _append = function _append(node, child) {
		node.appendChild(child);
		return node;
	};
	//attr functions
	var _hasAttr = function _hasAttr(node, n) {
			return node.hasAttribute(n);
		},

		//set/get attribute
		_attr = function _attr(node, key, value) {
			if (_isString(key)) {
				if (hasValue(value)) {
					node.setAttribute(key, value);
				} else {
					return node.getAttribute(key);
				}
			} else if (isPlainObject(key)) {
				for (var i = 0, keys = _object_keys(key), len = keys.length; i < len; i++) {
					var keyed = keys[i];
					var item = key[keyed];
					node.setAttribute(keyed, item);
				}
			}
			return node;
		},
		_removeAttr = function _removeAttr(node, n) {
			node.removeAttribute(n);
			return node;
		};
	var _beforeNth = function _beforeNth(node, new_child, position) {
		var child = node.children[position];
		if (!child) {
			node.appendChild(new_child);
		} else {
			node.insertBefore(new_child, child);
		}
		return node;
	};
	//center object
	var _center = function _center(node, item) {
		if (item) {
			if (item === true) {
				var item = node.parentNode;
			}
			var w = Number(item.offsetWidth),
				h = Number(item.offsetHeight);
		} else {
			var w = Number(_cache.bodyWidth),
				h = Number(_cache.bodyHeight);
		}
		var divW = node.offsetWidth,
			divH = node.offsetHeight;
		if (divH > h) {
			node.style.position = '';
			node.style.transform = node.style['-webkit-transform'] = '';
		} else {
			var left = parseInt((w - divW) / 2) + 'px',
				top = parseInt((h - divH) / 2) + 'px';
			node.style.position = 'absolute';
			node.style.top = '0px';
			node.style.left = '0px';
			node.style.transform = node.style['-webkit-transform'] = 'translate3d(' + left + ',' + top + ',0)';
		}
		return node;
	};
	//change the tagname of a node and returns the a new node with the new tagname
	var changeTag = function changeTag(node, tagename) {
		var attrs = node.attributes,
			object = {},
			item,
			len = attrs.length;
		for (var i = 0; i < len; i++) {
			item = attrs[i];
			object[item.name] = item.value;
		}

		attrs = null;
		return _dom(tagename, {
			attr: object
		});
	};
	/*
 METHODS FOR CLASS MODS
 */
	//classname
	var _cn = function _cn(node, n) {
			if (hasValue(n)) {
				node.className = n;
				return node;
			}
			return node.className;
		},

		//classlist
		_cl = function _cl(node, args) {
			var node_classList = node.classList;
			if (args) {
				if (!_isArray(args)) {
					if (!node_classList.contains(args)) {
						node_classList.add(args);
					}
				} else {
					_each_array(args, function(item) {
						if (!node_classList.contains(item)) {
							node_classList.add(item);
						}
					});
				}
				return node;
			}
			return node_classList;
		},

		//classlist functions
		_clHas = function _clHas(node, key) {
			return node.classList.contains(key);
		},
		_clRemove = function _clRemove(node, args) {
			var node_classList = node.classList;
			if (!_isArray(args)) {
				if (node_classList.contains(args)) {
					node_classList.remove(args);
				}
			} else {
				_each_array(args, function(item) {
					if (node_classList.contains(item)) {
						node_classList.remove(item);
					}
				});
			}
			return node;
		},
		_clTog = function _clTog(node, args) {
			var node_classList = node.classList;
			if (!_isArray(args)) {
				node_classList.toggle(args);
			} else {
				_each_array(args, function(item) {
					node_classList.toggle(item);
				});
			}
			return node;
		};

	//clear
	var _clear = function _clear(node) {
		while (node.firstChild) {
			node.firstChild.remove();
		}
		return node;
	};
	var _clw = function _clw(node) {
			return node.clientWidth;
		},
		_clh = function _clh(node) {
			return node.clientHeight;
		};
	//copynode
	var _clone = function _clone(node, bool) {
		return node.cloneNode(bool);
	};

	//btn + adding
	var _add = function _add(node, n) {
			//get number add 1 to it
			node.textContent = Number(node.textContent || 0) + Number(n || 1);
			return node;
		},
		_sub = function _sub(node, n) {
			//get number subtract 1
			node.textContent = Number(node.textContent || 0) - Number(n || 1);
			return node;
		},

		//quick changes
		_hide = function _hide(node) {
			//hide class toggle
			node.style.display = 'none';
			return node;
		},
		_show = function _show(node) {
			//show class toggle
			node.style.display = '';
			return node;
		},
		_toggle = function _toggle(node, classname) {
			if (classname) {
				node.classList.toggle(classname);
			} else {
				var display = node.style.display;
				if (display == 'none') {
					node.style.display = '';
				} else {
					node.style.display = 'none';
				}
			}
			return node;
		};

	var _innerHTML = function _innerHTML(node, value) {
			if (hasValue(value)) {
				if (_isFunction(value)) {
					var value = value(node);
				}
				node.innerHTML = value;
				return node;
			}
			return node.innerHTML;
		},
		_ohtml = function _ohtml(node, value) {
			if (hasValue(value)) {
				if (_isFunction(value)) {
					var value = value(node);
				}
				node.outerHTML = value;
				return node;
			}
			return node.outerHTML;
		};

	//insertAdjacentHTML
	var _generate_insertAdjacentHTML = function _generate_insertAdjacentHTML(type) {
			var returned = function returned(node, data) {
				node.insertAdjacentHTML(type, data);
				return node;
			};
			return returned;
		},
		_be = _generate_insertAdjacentHTML('beforeEnd'),
		_ab = _generate_insertAdjacentHTML('afterbegin'),
		_bb = _generate_insertAdjacentHTML('beforeBegin'),
		_ae = _generate_insertAdjacentHTML('afterEnd');
	var insertAfter = function insertAfter(child, new_node) {
		child.parentNode.insertBefore(new_node, child.nextSibling);
		return new_node;
	};
	var insertBefore = function insertBefore(child, new_node) {
		child.parentNode.insertBefore(new_node, child);
		return new_node;
	};
	var _next = function _next(node) {
		return node.nextSibling;
	};
	//offsets
	var _ow = function _ow(node) {
			return node.offsetWidth;
		},
		_oh = function _oh(node) {
			return node.offsetHeight;
		},
		_ot = function _ot(node) {
			return node.offsetTop;
		},
		_offset = function _offset(node) {
			var i = node.getBoundingClientRect();
			var returned = {
				top: i.top + _body.scrollTop,
				left: i.left + _body.scrollLeft
			};
			return returned;
		};
	var _last = function _last(node) {
			return node.lastChild;
		},
		_first = function _first(node) {
			return node.firstChild;
		};
	var _parNode = function _parNode(node) {
		return node.parentNode;
	};
	var _plugInto = function _plugInto(node, string, object) {
		model = _find(string, _model);
		if (model) {
			model = model(node, object);
			node = null;
			object = null;
			return model;
		} else {
			_ensure(string, function() {
				model = _find(string, _model);
				if (model) {
					model(node, object);
				}
				string = null;
				object = null;
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
			node.appendChild(child);
		}
		return node;
	};
	var _previous = function _previous(node) {
		return node.previousSibling;
	};
	//props
	var _val = function _val(node, n) {
			if (hasValue(n)) {
				if (_isFunction(n)) {
					var n = n.apply(this, []);
				}
				node.value = n;
				return node;
			}
			return node.value;
		},
		_sty = function _sty(node, attr, value) {
			if (hasValue(value)) {
				node.style[attr] = value;
				return node;
			}
			return node.style;
		},
		_sel = function _sel(node, n) {
			if (n) {
				node.selected = n;
				return o;
			}
			return node.selected;
		};
	//checks for native remove function
	var isremovenative = _Element_prototype.remove ? true : false;
	//removes a node also checks if native is there
	var $remove = isremovenative ? null : function(node) {
		var par = node.parentNode;
		if (par) {
			par.removeChild(node);
		}
		par = null;
		return node;
	};

	var _removeNode = $remove ? $remove : function(node) {
		node.remove();
		return node;
	};

	var removeloop = function removeloop(node) {
		return _removeNode(node);
	};

	var _removeRange = function _removeRange(node, start, end) {
		if (!end) {
			var end = start,
				start = 0;
		}
		var nodes = _toArray(node),
			temp = [];
		for (; start < end; start++) {
			temp.push(_removeNode(nodes[start]));
		}
		start = null;
		end = null;
		return temp;
	};
	//replace a child node wrapper
	var replaceChild = function replaceChild(obj, born) {
		obj.parentNode.replaceChild(born, obj);
		return born;
	};
	//resets html good for clearing uploaded item
	var _resetHTML = function _resetHTML(node) {
		var obj = node.parentNode;
		obj.innerHTML = obj.innerHTML;
		return obj;
	};

	//scroll this node
	var _scrollIt = function _scrollIt(node, x, y) {
		if (hasValue(x)) {
			node.scrollTop = x;
		}
		if (hasValue(y)) {
			node.scrollLeft = y;
		}
		return node;
	};
	//scroll info
	var scrollInfo = function scrollInfo(node) {
		var returned = {
			top: node.scrollTop,
			left: node.scrollLeft
		};
		return returned;
	};
	//scroll
	var scrollInto = function scrollInto(node, nodeToScrollIntoView) {
		node.scrollIntoView(nodeToScrollIntoView);
		return node;
	};

	//selectors
	var _id = function _id(node, n) {
			return node.getElementById(n);
		},
		_clsDOM = function _clsDOM(node, n) {
			return node.getElementsByClassName(n);
		},
		_tagDOM = function _tagDOM(node, n) {
			return node.getElementsByTagName(n);
		},
		_qsa = function _qsa(node, n) {
			return node.querySelectorAll(n);
		},
		_qs = function _qs(node, n) {
			return node.querySelector(n);
		};
	//text
	var _tc = function _tc(node, value) {
			if (hasValue(value)) {
				if (_isFunction(value)) {
					value = value(node);
				}
				node.textContent = value;
				return node;
			}
			return node.textContent;
		},
		_txt = function _txt(node, value) {
			if (hasValue(value)) {
				if (_isFunction(value)) {
					value = value(node);
				}
				node.innerText = value;
				return node;
			}
			return node.innerText;
		};

	var _textValue = function _textValue(node, value) {
		var child = node.firstChild;
		if (child) {
			if (hasValue(value)) {
				if (_isFunction(value)) {
					value = value(node);
				}
				child.nodeValue = value;
				return node;
			}
			return child.nodeValue;
		} else {
			return _tc(node, value);
		}
	};

	//transverse up based on a match or number
	var _upTpParentLevel = function _upTpParentLevel(node, i) {
			var i = i ? i : Number(node.getAttribute('data-lv')),
				i = i - 1,
				node = node.parentNode;
			if (i) {
				while (i--) {
					node = node.parentNode;
				}
			}
			i = null;
			return node;
		},
		_upTo = function _upTo(node, name) {
			if (isNumber(name) || !name) {
				return upTpParentLevel(node, name);
			}
			while (node = node.parentNode) {
				if (!node) {
					return false;
				} else if (!isDom(node)) {
					return false;
				} else if (_isMatch_dom(node, name)) {
					break;
				}
			}
			return node;
		};
	//store internal data for selectors
	var tempObjsFromSelector = {},
		$id = function $id(selectorString) {
			//get id
			return _document.getElementById(selectorString);
		},
		$cls = function $cls(selectorString) {
			//get cls
			return _document.getElementsByClassName(selectorString);
		},
		$tag = function $tag(selectorString) {
			//get tag
			return _document.getElementsByTagName(selectorString);
		},
		$qsa = function $qsa(selectorString) {
			//get qsa
			return _document.querySelectorAll(selectorString);
		},
		$qs = function $qs(selectorString) {
			//get qs
			return _document.querySelector(selectorString);
		},
		cacheHashCharacter = '#',
		cacheDotCharacter = '.',

		//main selector class has optimizations
		$ = function $(select) {
			var obj = tempObjsFromSelector[select],
				safe,
				firtLetter = select[0],
				fun;
			if (obj) {
				return obj();
			}
			if (firtLetter === cacheHashCharacter) {
				if (!regex_space.test(select)) {
					safe = select.slice(1);
					obj = $id(safe);
					fun = function() {
						return $id(safe);
					};
				}
			} else if (firtLetter === cacheDotCharacter) {
				if ($class_test.test(select)) {
					obj = $cls(select.slice(1));
					fun = function() {
						return obj;
					};
				}
			} else if ($tag_test.test(select)) {
				obj = $tag(select);
				fun = function() {
					return obj;
				};
			}
			if (!fun) {
				obj = $qsa(select);
				fun = function() {
					return $qsa(select);
				};
			}
			tempObjsFromSelector[select] = fun;
			return obj;
		},

		//raw selection no optimizations
		$$ = function $$(select) {
			var firtLetter = select[0];
			if (firtLetter === cacheHashCharacter) {
				if (!regex_space.test(select)) {
					return $id(select.slice(1));
				}
			} else if (firtLetter === cacheDotCharacter) {
				if ($class_test.test(select)) {
					return $cls(select.slice(1));
				}
			} else if ($tag_test.test(select)) {
				return $tag(select);
			}
			return $qsa(select);
		},
		nodeOnlyMethodsSingleArgReturn = [_toggle, _show, _hide, _sub, _add, _act, _ae, _bb, _ab, _be, _removeAttr, _clTog, _clRemove, _hasAttr, _cl, _clHas, _upTo, _clone, _center, _innerHTML, _ohtml, _tc, _txt, _textValue, _val, _sel, _cn, _isMatch_dom, changeTag, replaceChild, prepend, _append, insertAfter, insertBefore, scrollInto, _id, _clsDOM, _tagDOM, _qsa, _qs],
		nodeOnlyMethodNamesSingleArgReturn = ['toggle', 'show', 'hide', 'sub', 'add', 'act', 'ae', 'bb', 'ab', 'be', 'removeAttr', 'clTog', 'clRemove', 'hasAttr', 'cl', 'clHas', 'upTo', 'clone', 'center', 'html', 'ohtml', 'tc', 'txt', 'textValue', 'val', 'sel', 'cn', 'isMatch', 'changeTag', 'replace', 'prepend', 'ap', 'after', 'before', 'scrollInto', 'id', 'cls', 'tag', 'qsa', 'qs'],
		nodeOnlyMethodsReturn = [scrollInfo, _resetHTML, _next, _previous, _parNode, _last, _first, _ow, _oh, _ot, _offset, _clw, _clh, _clear, $remove],
		nodeOnlyMethodNamesReturn = ['scrollInfo', 'resetHTML', 'next', 'previous', 'parNode', 'last', 'first', 'ow', 'oh', 'ot', 'offset', 'clw', 'clh', 'clear', 'remove'];

	//return temp obj
	$.temp = tempObjsFromSelector;
	//selectors
	//id
	$.id = $id;
	//tagename
	$.tagname = $tag;
	//classname
	$.cls = $cls;
	//query selector all
	$.qsa = $qsa;
	//query selector
	$.qs = $qs;
	//selector without optimizations
	$.select = $$;

	function zipUpTo(object, functs, names, wrap) {
		_each_array(functs, function(item, index) {
			if (!object[names[index]]) {
				object[names[index]] = wrap(item);
			}
		});
	}

	//avoid
	var acidLibAvoid = _global.acidAvoid ? _global.acidAvoid : "$";
	_global[acidLibAvoid] = $;
	_global.ACID = $;

	var $eventadd = function $eventadd(obj, name, func, capture) {
			obj.addEventListener(name, func, capture || false);
			return obj;
		},

		//remove event
		$eventremove = function $eventremove(obj, name, func, capture) {
			obj.removeEventListener(name, func, capture || false);
			return obj;
		};

	//add event
	$.eventAdd = function(obj, name, funct, bool) {
		return $eventadd(obj, name, funct, bool);
	};
	//remove event
	$.eventRemove = function(obj, name, funct, bool) {
		return $eventremove(obj, name, funct, bool);
	};

	$.isEnter = function(event) {
		//checks if this an enter key
		var i = event.keyCode;
		if (i == 13) {
			return true;
		}
		return false;
	};

	//sys info
	$.host = {
		// EX http https
		protocol: $protocol,
		// ws or wss
		protocol_socket: $protocol_socket,
		//hostname
		name: $hostname
	};
	//device info related to actual hardware
	$.hardware = {
		//core amount on system
		cores: systemCores
	};
	//useragent info plus mobile
	var _agentinfo = $.agent = {};
	//acid platform information
	$.acid = {
		name: 'ACIDjs',
		version: 1
	};

	/*
 STRING Prototype object
 */
	//initialize
	var rawURLDecode_regex = /%(?![\da-f]{2})/gi,
		and_regex = /&/g,
		less_than_regex = /</g,
		more_than_regex = />/g,
		double_quote_regex = /"/g,
		slash_regex = /\//g;
	//get characters in a range in a string
	var _rangeString = function _rangeString(text, start, end, insert) {
			var insert = insert || '',
				start_text = text.slice(0, start),
				end_text = text.slice(end, text.length),
				i = start_text + insert + end_text,
				start_text = null,
				text = null,
				insert = null,
				insert = null,
				end_text = null;
			return i;
		},

		//start index from last item
		_lastString = function _lastString(text) {
			return text[text.length - 1];
		},

		//start index from right of string
		_rightString = function _rightString(text, a) {
			return text[text.length - 1 - a];
		},

		//start index from right of string pollyfill
		_endsWithString = function _endsWithString(subjectString, searchString, position) {
			if (position === undefined || position > subjectString.length) {
				position = subjectString.length;
			}
			position -= searchString.length;
			var lastIndex = subjectString.indexOf(searchString, position);
			return lastIndex !== -1 && lastIndex === position;
		},
		chunkString = function chunkString(string, size) {
			return string.match(new RegExp('(.|[\r\n]){1,' + size + '}', 'g'));
		};

	$.rangeString = _rangeString;
	$.lastString = _lastString;
	$.rightString = _rightString;
	$.endsWithString = _endsWithString;
	$.chunkString = chunkString;

	//replace a phrase (word) with a string from an array of strings
	$.replacePhrase = function(w, a) {
		if (_isArray(w)) {
			var w = w.join('|');
		} else if (isPlainObject(w)) {
			var f = this;

			for (var i = 0, keys = _object_keys(w), len = keys.length; i < len; i++) {
				var key = keys[i];
				var f = f.replacephrase(key, w[key]);
			}

			return f;
		} else {
			//replace word regex
			var replace_word = new RegExp('\\b' + w + '\\b', 'gi');
			return this.replace(replace_word, a);
		}
	};
	//replace a string with a string from an array of strings
	$.replaceList = function(a, r) {
		var s = this,
			len = a.length;
		for (var i = 0; i < len; i++) {
			var s = s.replace(a[i], r);
		}
		var a = null,
			r = null;
		return s;
	};
	//raw URL encode
	var _rawURLDecode = function _rawURLDecode(string) {
			return decodeURIComponent(string.replace(rawURLDecode_regex, function() {
				return '%25';
			}));
		},

		//html entities
		_htmlEntities = function _htmlEntities(string) {
			return string.replace(and_regex, '&amp;').replace(less_than_regex, '&lt;').replace(more_than_regex, '&gt;').replace(double_quote_regex, '&quot;').replace(slash_regex, '&quot;');
		},
		_sanitize = function _sanitize(string) {
			return _htmlEntities(_rawURLDecode(string));
		},

		//decode URI Component
		_duc = function _duc() {
			return decodeURIComponent(this);
		},

		//encode URI Component
		_euc = function _euc() {
			return encodeURIComponent(this);
		};
	$.htmlEntities = _htmlEntities;
	$.rawURLDecode = _rawURLDecode;
	$.sanitize = _sanitize;
	$.duc = _duc;
	$.euc = _euc;

	var toString = $.toString = object_prototype.toString;

	//tokenize split by groups of characters that are not whitespace
	$.tokenize = function(string) {
		return string.match(/\S+/g) || [];
	};
	//match by alphanumeric+underscore
	$.words = function(string) {
		return string.match(/\w+/g);
	};
	//uppercase first letter for all
	var spaceCharacter = ' ',
		_ucFirst = function _ucFirst(string) {
			return string.charAt(0).toUpperCase() + string.substr(1);
		},
		ucFirstAll = function ucFirstAll(string) {
			var array = string.split(spaceCharacter),
				len = array.length;
			for (var i = 0; i < len; i++) {
				var item = array[i];
				array[i] = item.charAt(0).toUpperCase() + item.substr(1);
			}
			return array.join(' ');
		},

		//uppercase first letter lower case the rest
		ucFirstOnly = function ucFirstOnly(string) {
			return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
		},

		//uppercase first letter lower case the rest all
		ucFirstOnlyAll = function ucFirstOnlyAll(string) {
			var array = string.split(spaceCharacter),
				len = array.length;
			for (var i = 0; i < len; i++) {
				var item = array[i];
				array[i] = item.charAt(0).toUpperCase() + item.substr(1).toLowerCase();
			}
			return array.join(' ');
		},

		//Returns the camel cased string
		camelCase = function camelCase(stringOriginal) {
			var string = ucFirstAll(stringOriginal.replace(regex_underscore, spaceCharacter).replace(regex_dash, spaceCharacter));
			return (string.charAt(0).toLowerCase() + string.substr(1)).replace(regex_space_global, '');
		},

		//Returns the kebab cased string
		kebabCase = function kebabCase(stringOriginal) {
			return stringOriginal.toLowerCase().replace(regex_underscore, spaceCharacter).replace(regex_space_global, '-');
		},

		//Returns the snake cased string
		snakeCase = function snakeCase(stringOriginal) {
			return stringOriginal.toLowerCase().replace(regex_dash, spaceCharacter).replace(regex_space_global, '_');
		},

		//returns the trunced version of the string
		truncate = function truncate(stringOriginal, amount) {
			var string = stringOriginal,
				length = string.length;
			if (length > amount) {
				return string.slice(0, amount);
			}
			return string;
		},

		//returns the trunced version of the string starting from the right
		truncateLeft = function truncateLeft(stringOriginal, amount) {
			var string = stringOriginal,
				length = string.length;
			if (length > amount) {
				return string.substr(amount, length);
			}
			return string;
		},

		//returns the trunced version of the string
		truncateWord = function truncateWord(stringOriginal, amount) {
			var string = stringOriginal,
				length = string.length;
			if (length > amount) {
				var stringLength = 0;
				var newString = '';
				var words = string.split(' ');
				var wordsLength = words.length;
				var item;
				var possibleNew;
				for (var i = 0; i < wordsLength; i++) {
					item = words[i] + ' ';
					possibleNew = item.length + stringLength;
					if (possibleNew < amount) {
						stringLength = possibleNew;
						newString = newString + item;
					} else {
						break;
					}
				}
				return newString.trim();
			}
			return string;
		},

		//repeat
		repeatWord = function repeatWord(stringOriginal, amount) {
			if (!amount) {
				return '';
			}
			if (amount == 1) {
				return stringOriginal;
			}
			var string = stringOriginal,
				temp = string;
			for (var i = 1; i < amount; i++) {
				if (i > 0) {
					var temp = temp + string;
				}
			}
			return temp;
		};

	$.ucFirst = _ucFirst;
	$.ucFirstAll = ucFirstAll;
	$.ucFirstOnly = ucFirstOnly;
	$.ucFirstOnlyAll = ucFirstOnlyAll;
	$.camel = camelCase;
	$.kebab = kebabCase;
	$.snake = snakeCase;
	$.truncate = truncate;
	$.truncateLeft = truncateLeft;
	$.truncateWord = truncateWord;
	$.repeat = repeatWord;

	//add paramaters to a URL
	var _addParam = function _addParam(url, n) {
		var o = url,
			len = o.length;
		if (len > 0) {
			var last = o[len - 1];
			if (o.indexOf('?') != -1) {
				if (last != '?') {
					return o + '&' + n;
				} else if (last == '?') {
					return o + n;
				}
				return o + '&' + n;
			} else {
				return o + '?' + n;
			}
		} else {
			return '?' + n;
		}
	};

	$.addParam = _addParam;

	//shared functions
	//Flattens a nested array. Pass level to flatten up to a depth;
	var _flatten_once = function _flatten_once(arr) {
			return arr.reduce(function(a, b) {
				if (!_isArray(a)) {
					a = [a];
				}
				if (!_isArray(b)) {
					b = [b];
				}
				pushApply(a, b);
				return a;
			});
		},
		flatten = function flatten(array, level) {
			if (level) {
				if (level === 1) {
					return _flatten_once(array);
				}
				for (var i = 0; i < level; i++) {
					array = array.reduce(function(previousValue, currentValue, index, array) {
						return previousValue.concat(_isArray(currentValue) ? currentValue : [currentValue]);
					}, []); //initial starting value is an amepty array []
				}
				return array;
			}
			return array.reduce(function(previousValue, currentValue, index, array) {
				return previousValue.concat(_isArray(currentValue) ? flatten(currentValue) : currentValue);
			}, []); //initial starting value is an amepty array []
		},

		//cache for function that removes falsey values from array
		compact = function compact(self) {
			var result = [];

			for (var i = 0; i < self.length; i++) {
				if (self[i]) {
					result.push(self[i]);
				}
			}

			return result;
		};
	//initialize array object for array prototype
	var array_extend = {};
	var pushApply = function pushApply(item, array) {
		return _array_push.apply(item, array);
	};

	$.pushApply = pushApply;

	var _arrayLastItem = function _arrayLastItem(array, indexFrom) {
		var result;
		if (!indexFrom) {
			indexFrom = 1;
		}
		if (array) {
			result = array.splice(array.length - indexFrom, indexFrom);
		} else {
			result = array[array.length - 1];
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
		var low = 0;
		var high = item.length;
		var mid;

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
	};
	//Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.
	var arrayChunk = function arrayChunk(array, size) {
		size = size || 1;
		var numChunks = Math.ceil(array.length / size),
			index = 0;
		return _each_array(new Array(numChunks), function(item, i) {
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
	$.clone = function(item) {
		return item.slice(0);
	};
	/**
	 * Returns a new array with all falsey values removed. Falsey values
	 * are `false`, `0`, `""`, `null`, `undefined`, and `NaN`.
	 *
	 * @function Array#compact
	 * @returns {Array} The new array containing only the truthy values from the original array.
	 *
	 * @example
	 * [0, 1, false, 2, '', 3].compact();
	 * // -> [1, 2, 3]
	 */
	$.compact = compact;
	//Sorts a list into groups and returns a count for the number of objects in each group.
	$.countBy = function(array, funct) {
		var object = {},
			result;
		_each_object(array, function(item) {
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
			array.push(i);
			if (increment) {
				if (i_check == stop) {
					break;
				}
			}
		}
		return array;
	};

	//create an array from a range
	$.createRangeTo = function(array, start_arg, stop_arg, increment) {
		var stop = stop_arg ? stop_arg : start_arg,
			i,
			start = stop_arg ? start_arg : 0;
		for (var i = start; i <= stop; i++) {
			if (increment) {
				if (i > 0) {
					i = i - 1 + 5, i_check = i + increment;
				}
			}
			array.push(i);
			if (increment) {
				if (i_check == stop) {
					break;
				}
			}
		}
		return array;
	};
	//Creates an array excluding all values of the provided arrays using SameValueZero for equality comparisons.
	var arrayDifference = $.difference = function(array, compare) {
		return _each_array(array, function(item) {
			var indexof = compare.indexOf(item);
			if (indexof === -1) {
				return item;
			}
		});
	};

	//Creates a an array with elements taken from the end. Elements are taken until predicate returns falsey. The predicate is bound to thisArg and invoked with three arguments; (value, index, array).
	$.dropRightWhile = function(array, funct) {
		var temp = [],
			item,
			len = array.length;
		for (var i = len - 1; i >= 0; i--) {
			item = array[i], condition = funct(item, i, array);
			if (!condition) {
				temp[i] = item;
			}
		}
		return temp;
	};

	//Removes elements from array corresponding to the given indexes and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
	$.drop = function(array, amount) {
		return array.splice(amount, array.length);
	};

	//Removes elements from array corresponding to the given indexes (from right) and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
	$.dropRight = function(array, amount) {
		return array.slice(0, array.length - amount);
	};

	/*
 Each Methods
 Array
 	each,eachDo,eachRaw,eachwhileFalse,eachWhile,whileLength,eachRight
 Object
 	Each
 Number
 	Each
 */

	//loop through an array of items
	var _each_array = function _each_array(array, fn) {
			//an array of results will be returned
			var returned,
				a = 0,
				length = array.length,
				results = [];
			for (var i = 0; i < length; i++) {
				returned = fn(array[i], i, length, array);
				if (hasValue(returned)) {
					results[a] = returned;
					a++;
				}
			}
			return results;
		},
		_eachRaw = function _eachRaw(array, fn) {
			//an array of results will be returned
			for (var i = 0, length = array.length; i < length; i++) {
				fn(array[i], i, length, array);
			}
		},
		_eachDo = function _eachDo(array, callback, safeIteration) {
			var i = 0;

			if (safeIteration)
				while (i < array.length && (!(i in this) || callback(array[i], i, array) !== false)) ++i;
			else
				while (i < array.length && callback(array[i], i++, array) !== false);

			return array;
		},

		//loop while the returned result is false
		_whileFalse = function _whileFalse(array, fn) {
			//an array of results will be returned
			var result;
			for (var i = 0, results = [], len = array.length; i < len; i++) {
				result = fn(array[i], i, len);
				if (result) {
					break;
				}
				results[i] = result;
			}
			return results;
		},

		//each while the check function is true
		_eachWhile = function _eachWhile(array, fn, check) {
			//an array of results will be returned
			var result;
			for (var i = 0, results = [], len = array.length; i < len; i++) {
				result = fn(array[i], i, len);
				if (!result) {
					break;
				}
				results[i] = result;
			}
			return results;
		},

		//loop while the count is less than the length of the array
		_whileLength = function _whileLength(array, fn) {
			//an array of results will be returned
			var results = [];
			var i = 0;
			while (i < arr.length) {
				results[i] = fn(array[i], i);
				i++;
			}
			return results;
		},

		//loop through array backwards aka from the right
		eachArrayFromRight = function eachArrayFromRight(array, fn) {
			//an array of results will be returned
			for (var results = [], len = array.length, i = len - 1; i >= 0; i--) {
				results[i] = fn(array[i], i, len);
			}
			return results;
		},

		//loop through based on number
		_each_number = function _each_number(start, end, fn) {
			if (!fn) {
				var fn = end,
					end = start,
					start = 0;
			}
			var results = [];
			for (; start < end; start++) {
				//call function get result
				results[start] = fn(start);
			}
			return results;
		};

	//loop through array using for loop cached
	$.eachArray = _each_array;

	//loop through array using for loop cached but without returning data
	$.eachRaw = _eachRaw;

	//loop through array backwards aka from the right
	$.eachRight = eachArrayFromRight;

	//loop through array using for loop cached
	$.eachDo = _each_array;

	//each while the check function is true
	$.eachWhile = _eachWhile;

	//loop while the returned result is false
	$.eachWhileFalse = _whileFalse;

	//loop while the count is less than the length of the array
	$.eachWhileLength = _whileLength;

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

		if (!array || array.length !== item.length) {
			return false;
		}

		for (var i = 0; i < array.length; i++) {
			if (array[i] !== item[i]) {
				return false;
			}
		}

		return true;
	};
	//Returns the first element of an array. Passing n will return the first n elements of the array.
	$.first = function(array, n) {
		if (n) {
			return array.splice(0, n);
		}
		return array[array.length - 1];
	};
	//returns the first false item
	$.firstFalse = function(array, funct) {
		var item,
			len = array.length;
		for (var i = 0; i < len; i++) {
			item = array[i];
			if (!funct(item)) {
				return item;
			}
		}
	};

	//returns the first true item
	$.firstTrue = function(array, funct) {
		var item,
			len = array.length;
		for (var i = 0; i < len; i++) {
			item = array[i];
			if (funct(item)) {
				return item;
			}
		}
	};

	//Flattens a nested array. Pass level to flatten up to a depth;
	$.flatten = function(item, level) {
		return flatten(item, level);
	};

	//Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
	$.flow = function(array, args) {
		return function() {
			return _each_array(array, function(item) {
				return array[i].apply(null, _isArray(args) ? args : [args]);
			});
		};
	};

	//flowright is like flow except that it creates a function that invokes the provided functions from right to left.
	$.flowRight = function(array, args) {
		return function() {
			return eachArrayFromRight(array, function(item) {
				return array[i].apply(null, _isArray(args) ? args : [args]);
			});
		};
	};

	//Splits a collection into sets, grouped by the result of running each value through iteratee.
	$.groupBy = function(array, funct) {
		var object = {},
			results;
		_each_array(array, function(item, index) {
			results = funct(item);
			if (!object[results]) {
				object[results] = [];
			}
			object[results].push(item);
		});
		return object;
	};

	//Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know your keys are unique.
	$.indexBy = function(array, key) {
		var object = {};
		_each_array(array, function(item, index) {
			object[item[key]] = item;
		});
		return object;
	};

	//Returns everything but the last entry of the array.
	$.initial = function(array, startFrom) {
		return _each_array(array, function(item, index, length) {
			if (!(index + 1) !== length) {
				return item;
			}
		});
	};

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
	$.intersect = function(array, args) {
		var result = [],
			numArgs = args.length;

		if (!numArgs) {
			return result;
		}

		next: for (var i = 0; i < array.length; i++) {
			var item = array[i],
				j;

			if (result.indexOf(item) < 0) {
				for (j = 0; j < numArgs; j++) {
					if (args[j].indexOf(item) < 0) {
						continue next;
					}
				}
				result.push(item);
			}
		}

		return result;
	};

	//Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
	$.invoke = function(array, method, args) {
		return _each_array(array, function(item) {
			return item[method].apply(item, args);
		});
	};

	//checks if the array is empty
	$.isArrayEmpty = function(array) {
		return array.length === 0;
	};

	//get largest number from array
	$.largest = function(array) {
		return _math.max.apply(_math, array);
	};

	var _arrayLastItem = function _arrayLastItem(array, indexFrom) {
		var result;
		if (!indexFrom) {
			indexFrom = 1;
		}
		if (array) {
			result = array.splice(array.length - indexFrom, indexFrom);
		} else {
			result = array[array.length - 1];
		}
		return result;
	};

	//Returns the last element of an array. Passing n will return the last n elements of the array.
	$.last = _arrayLastItem;

	//start from begining of array using argument as index
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
	};

	//Converts arrays into objects. Keys as this and values as first argument
	$.object = function(array, value) {
		var len = array.length,
			object = {};
		for (var i = 0; i < len; i++) {
			object[array[i]] = value[i];
		}
		return object;
	};
	//Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
	$.partition = function(array, funct) {
		var temp_a = [],
			temp_b = [],
			item,
			len = array.length;
		for (var i = 0; i < len; i++) {
			item = array[i];
			if (funct(item)) {
				temp_a.push(item);
			} else {
				temp_b.push(item);
			}
		}
		return [temp_a, temp_b];
	};
	//extracting a list of property values to an array
	$.pluck = function(array, pluck_item) {
		var temp = [],
			item,
			len = array.length;
		for (var i = 0; i < len; i++) {
			item = array[i][pluck_item];
			if (item) {
				temp.push(item);
			}
		}
		return temp;
	};

	function chunkSlice(array, start, end) {
		var length = Math.min(end, array.length) - start,
			result = new Array(length),
			i = 0;

		for (; i < length; i++) {
			result[i] = array[start + i];
		}

		return result;
	}

	function numericalCompare(a, b) {
		return a - b;
	}

	function numericalCompareReverse(a, b) {
		return b - a;
	}

	function xorBase(a, b) {
		var result = [],
			item,
			i = 0;

		for (; i < a.length; i++) {
			item = a[i];
			if (b.indexOf(item) < 0 && result.indexOf(item) < 0) {
				result.push(item);
			}
		}

		for (i = 0; i < b.length; i++) {
			item = b[i];
			if (a.indexOf(item) < 0 && result.indexOf(item) < 0) {
				result.push(item);
			}
		}

		return result;
	}

	function _uniq(array, isSorted) {
		var result = [],
			length = array.length,
			i = 1;

		if (!length) {
			return result;
		}

		result[0] = array[0];

		if (isSorted) {
			for (; i < length; i++) {
				if (array[i] !== array[i - 1]) {
					result.push(array[i]);
				}
			}
		} else {
			for (; i < length; i++) {
				if (result.indexOf(array[i]) < 0) {
					result.push(array[i]);
				}
			}
		}

		return result;
	}

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
		var remStartIndex = 0,
			removeCurrentIndex,
			j,
			numToRemove = 0;

		if (!_isArray(args)) {
			args = [args];
		}

		for (var i = 0; i < array.length; i++) {
			removeCurrentIndex = false;

			for (j = 0; j < args.length; j++) {
				if (array[i] === args[j]) {
					removeCurrentIndex = true;
					break;
				}
			}

			if (removeCurrentIndex) {
				if (!numToRemove) {
					remStartIndex = i;
				}
				++numToRemove;
			} else if (numToRemove) {
				array.splice(remStartIndex, numToRemove);
				i -= numToRemove;
				numToRemove = 0;
			}
		}

		if (numToRemove) {
			array.splice(remStartIndex, numToRemove);
		}

		return array;
	};

	//Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result.
	$.rest = function(array, n) {
		var array = this;
		if (n) {
			return array.first(n);
		}
		array.shift();
		return array;
	};

	//start from end array using a as index
	$.right = function(array, a) {
		return array[array.length - 1 - a];
	};
	//Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
	$.sample = function(array, set_amount) {
		var len = array.length - 1;
		if (set_amount) {
			var temp = [],
				random;
			for (var i = 0; i < set_amount; i++) {
				random = array.splice(Math.round(Math.random() * (array.length - 1)), 1)[0];
				if (random) {
					temp.push(random);
				}
			}
			return temp;
		}
		return array[Math.round(Math.random() * len)];
	};
	//shuffle an array and return a new array
	$.shuffle = function(arrayOG) {
		var temp = _toArray(arrayOG),
			array = [],
			i = 0,
			len = temp.length;
		while (i < len) {
			array.push(temp.splice(Math.round(Math.random() * (temp.length - 1)), 1)[0]);
			i++;
		}
		return array;
	};

	//get smallest number from array
	$.smallest = function(item) {
		return _math.min.apply(_math, item);
	};
	//Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order.
	$.sortedIndex = function(array, n) {
		var min = 0,
			item,
			len = array.length;
		for (var i = 0; i < len; i++) {
			item = array[i];
			if (n > item) {
				min = i;
			}
		}
		if (min > 0) {
			min = min + 1;
		}
		return min;
	};
	//sum of values in an array
	$.sumOf = function(array) {
		var sumof = 0;
		_each_array(array, function(item) {
			sumof = sumof + item;
		});
		return sumof;
	};

	//Creates a slice of array with n elements taken from the beginning.
	$.take = function(array, amount) {
		return this.slice(0, amount);
	};

	//Creates a slice of array with n elements taken from the end.
	$.takeRight = function(array, amount) {
		var array = this;
		return array.splice(array.length - amount, amount);
	};

	//Creates a slice of array with elements taken from the end. Elements are taken until predicate returns falsey. function args (value, index, array).
	$.takeRightWhile = function(array, funct) {
		var temp = [],
			item,
			len = array.length;
		for (var i = len - 1; i >= 0; i--) {
			item = array[i], condition = funct(item, i, array);
			if (condition) {
				temp.unshift(item);
			} else {
				break;
			}
		}
		return temp;
	};

	//convert object to string
	var _toArray = $.toArray = _array.from;

	//Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
	$.union = function(arrayOG) {
		var result = _uniq(arrayOG);

		_each_array(arguments, function(array) {
			_each_array(array, function(item) {
				if (result.indexOf(item) < 0) {
					result.push(item);
				}
			});
		});

		return result;
	};

	//Produces a duplicate-free version of the array, using === to test object equality.
	$.uniq = _uniq;
	//Returns a copy of the array with all instances of the values removed.
	$.without = function(array, args) {
		var result = [],
			i,
			j;

		next: for (i = 0; i < array.length; i++) {
			for (j = 0; j < arguments.length; j++) {
				if (array[i] === arguments[j]) {
					continue next;
				}
			}
			result.push(array[i]);
		}

		return result;
	};
	//Creates an array that is the symmetric difference of the provided arrays. See Wikipedia for more details.
	$.xor = function(arrayOG) {
		var numArgs = arguments.length,
			result;

		if (!numArgs) {
			return _uniq(arrayOG);
		}

		result = xorBase(arrayOG, arguments[0]);

		_each_array(arguments, function(item) {
			esult = xorBase(result, item);
		});

		return result;
	};

	//Merges together the values of each of the arrays with the values at the corresponding position.
	$.zip = function() {
		var _arguments = arguments;

		return _each_array(arguments[0], function(arraySet) {
			return _each_array(_arguments, function(arraySet) {
				return arraySet.shift();
			});
		});
	};
	//unzip the array of zipped arrays [["fred",30,true],["barney",40,false]]
	$.unZip = function(array) {
		return _each_array(array[0], function(item) {
			return _each_array(array, function(arraySet) {
				return arraySet.shift();
			});
		});
	};

	$.assign = _object_assign;

	/*
 		This is for object checking is or isnot
 		*/
	//checking
	var obj_strng_gen = function obj_strng_gen(name) {
			return '[object ' + name + ']';
		},
		regexptype = obj_strng_gen('RegExp'),
		argsTag = obj_strng_gen('Arguments'),
		arrayTag = obj_strng_gen('Array'),
		boolTag = obj_strng_gen('Boolean'),
		dateTag = obj_strng_gen('Date'),
		errorTag = obj_strng_gen('Error'),
		funcTag = obj_strng_gen('Function'),
		mapTag = obj_strng_gen('Map'),
		numberTag = obj_strng_gen('Number'),
		objectTag = obj_strng_gen('Object'),
		setTag = obj_strng_gen('Set'),
		stringTag = obj_strng_gen('String'),
		weakMapTag = obj_strng_gen('WeakMap'),
		arrayBufferTag = obj_strng_gen('ArrayBuffer'),
		float32Tag = obj_strng_gen('Float32Array'),
		float64Tag = obj_strng_gen('Float64Array'),
		int8Tag = obj_strng_gen('Int8Array'),
		int16Tag = obj_strng_gen('Int16Array'),
		int32Tag = obj_strng_gen('Int32Array'),
		unit8Tag = obj_strng_gen('unit8Array'),
		unit8ClampedTag = obj_strng_gen('unit8ClampedArray'),
		unit16Tag = obj_strng_gen('unit16Array'),
		unit32Tag = obj_strng_gen('unit32Array'),
		is_same_obj_gen = function is_same_obj_gen(type) {
			return function(obj) {
				return $tostring.call(obj) === type;
			};
		},

		//is regexp
		isRegex = is_same_obj_gen(regexptype),

		//is args
		isArgs = is_same_obj_gen(argsTag),

		//is bool
		isBool = is_same_obj_gen(boolTag),

		//is date
		isDate = is_same_obj_gen(dateTag),

		//is error
		isError = is_same_obj_gen(errorTag),

		//is map
		isMap = is_same_obj_gen(mapTag),

		//is object
		isObject = is_same_obj_gen(objectTag),

		//is isSet
		isSet = is_same_obj_gen(setTag),

		//is isWeakMap
		isWeakMap = is_same_obj_gen(weakMapTag),

		//is isFloat32
		isFloat32 = is_same_obj_gen(float32Tag),

		//is isFloat64
		isFloat64 = is_same_obj_gen(float64Tag),

		//is isInt8
		isInt8 = is_same_obj_gen(int8Tag),

		//is isInt16
		isInt16 = is_same_obj_gen(int16Tag),

		//is isInt32
		isInt32 = is_same_obj_gen(int32Tag),

		//is unit8
		isUnit8 = is_same_obj_gen(unit8Tag),

		//is unit8clamped
		isUnit8clamped = is_same_obj_gen(unit8ClampedTag),

		//is unit16
		isUnit16 = is_same_obj_gen(unit16Tag),

		//is unit3
		isUnit32 = is_same_obj_gen(unit32Tag),

		//is native function
		isNative = function isNative(obj) {
			return hasValue(obj) ? obj.toString().toLowerCase().indexOf('native') != -1 : false;
		},

		//hasval fn returns true or false
		hasValue = function hasValue(n) {
			return n !== undefined && n !== null;
		},

		//is undefined
		isUndefined = function isUndefined(obj) {
			return obj === undefined;
		},

		//is NaN
		_isNaN = isNaN ? isNaN : number_object.isNaN,

		//is int
		_isInt = number_object.isInteger ? number_object.isInteger : function(num) {
			if (num % 1 === 0) {
				return true;
			}
			return false;
		},

		//is equal to null
		isNull = function isNull(obj) {
			return obj === null;
		},
		isFinite = isFinite,

		//check if object is array returns true or false
		_isArray = function _isArray(object) {
			return object instanceof _array;
		},

		//checks to see if is string returns true or false
		_isString = function _isString(obj) {
			return hasValue(obj) ? obj.constructor === _string : false;
		},

		//checks to see if is number returns true or false
		isNumber = function isNumber(obj) {
			return hasValue(obj) ? obj.constructor == number_object : false;
		},

		//is plain object returns true or false
		isPlainObject = function isPlainObject(obj) {
			return hasValue(obj) ? obj.constructor.toString().trim().slice(9, 16) === 'Object(' : false;
		},

		//checks to see if object is a function returns true or false
		_isFunction = function _isFunction(obj) {
			return hasValue(obj) ? obj instanceof _function : false;
		},

		//checks to see if object is a HTMLCollection returns true or false
		_isHTMLCollection = function _isHTMLCollection(obj) {
			return hasValue(obj) ? obj.constructor.name == "HTMLCollection" : false;
		},

		//checks to see if object is a NodeList returns true or false
		_isNodeList = function _isNodeList(obj) {
			return hasValue(obj) ? obj.constructor.name == "NodeList" : false;
		},

		//searching a string for a string returns true or false
		_has = function _has(string, search) {
			var value, loopValue;
			if (!_isString(search)) {
				_each(search, function(item, key) {
					loopValue = string.indexOf(item) != -1;
					if (loopValue) {
						value = loopValue;
					}
				});
			} else {
				value = string.indexOf(search) != -1;
			}
			return value;
		},

		//does object have length
		islength = function islength(obj) {
			return !obj.length;
		},
		isEmpty = function isEmpty(obj) {
			if (hasValue(obj)) {
				var len = islength(obj);
				if (islength(obj)) {
					return !len;
				}
				return !_object.keys(obj).length;
			}
			return false;
		},
		isFileCSS = function isFileCSS(item) {
			return isCSSRegex.test(item);
		},
		isFileJSON = function isFileJSON(item) {
			return isJSONRegex.test(item);
		},
		isFileJS = function isFileJS(item) {
			return isJSRegex.test(item) && !isFileJSON(item);
		},
		hasDot = function hasDot(item) {
			return hasDotRegex.test(item);
		},
		getModelRootName = function getModelRootName(string) {
			return string.split('.')[0];
		},
		getModelProperty = function getModelProperty(string) {
			return _arrayLastItem(string.split('/'))[0];
		},
		getModelName = function getModelName(string) {
			var splitIt = string.split('/');
			return _find(splitIt[splitIt.length - 1].split('.js')[0], _model);
		};

	//export all checking functions
	$.isArray = _isArray;
	$.isString = _isString;
	$.isNumber = isNumber;
	$.isObject = isObject;
	$.isPlainObject = isPlainObject;
	$.isFunction = _isFunction;
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
	$.isNaN = _isNaN;
	$.isInt = _isInt;
	$.isNull = isNull;
	$.isEmpty = isEmpty;
	$.isHTMLCollection = _isHTMLCollection;
	$.isNodeList = _isNodeList;
	$.isFileCSS = isFileCSS;
	$.isFileJSON = isFileJSON;
	$.isFileJS = isFileJS;
	$.hasDot = hasDot;
	$.getModelProperty = getModelProperty;
	$.getModelRootName = getModelRootName;
	$.hasValue = hasValue;
	$.has = _has;

	//copy an object ES6 + ES5
	$.copyObject = function(item) {
		return _object_assign({}, item);
	};

	//loop through an object
	var _each_object = function _each_object(object, fn) {
		//an object with matching keys with results will be returned
		var results = {};
		var key;
		for (var i = 0, keys = _object_keys(object), len = keys.length; i < len; i++) {
			//object currect key
			key = keys[i];
			//call function get result
			results[key] = fn(object[key], key, len);
		}
		return results;
	};
	$.eachObject = _each_object;

	//checks if objects are the same ES6
	$.isEqualObject = _objectIs;
	//extend object prototype
	var _extend = $.extend = function(item, firstSource) {
		return _object_assign(item.prototype, firstSource);
	};

	//copy an object ES6 + ES5
	$.stringify = function(item) {
		return stringify(item);
	};
	$.zipObject = function(keys, values) {
		var object = {};
		_each_array(keys, function(item, index) {
			object[item] = values[index];
		});
		return object;
	};
	$.unZipObject = function(object) {
		var keys = [],
			values = [];
		_each_object(object, function(item, key) {
			keys.push(key);
			values.push(item);
		});
		return [keys, values];
	};

	//Creates a function that accepts up to n arguments ignoring any additional arguments. The 2nd argument will be binded if none the initial new function will be.
	$.ary = function(funct, amount, bind) {
		var ary = function ary() {
			return funct.apply(bind || ary, _toArray(arguments).splice(0, amount));
		};
		return ary;
	};

	$.chain = function(funct, obj) {
		//chain functions together

		//add to chain
		if (funct.methods) {
			for (var i = 0, keys = _object_keys(obj), len = keys.length; i < len; i++) {
				var key = keys[i];
				var item = obj[key];
				funct.methods[key] = (function(item, key) {
					return function() {
						funct.results[key] = item.apply(item, _toArray(arguments));
						return funct.methods;
					};
				})(item, key);
			}
			return funct;
		}

		//create chain
		var chain = function chain() {
			chain.results.first = funct.apply(chain, _toArray(arguments));
			return chain.methods;
		};

		//remove chain item
		chain.removeChain = function(obj) {
			chain.results[obj] = null;
			return chain;
		};
		//remove all chains
		chain.removeAllChains = function() {
			chain.methods = {};
			return chain;
		};
		//return chain values
		chain.values = function(obj) {
			if (!obj) {
				return chain.results;
			}
			var array = [],
				chain_results = chain.results;
			for (var i = 0, keys = _object_keys(chain_results), len = keys.length; i < len; i++) {
				var key = keys[i];
				var item = chain_results[key];
				array.push(item);
			}
			return array;
		};
		//original function
		chain.original = function() {
			return funct.apply(chain, _toArray(arguments));
		};
		chain.results = {}; //chain results
		chain.methods = {}; //chain methods

		//add chained functions
		for (var i = 0, keys = _object_keys(obj), len = keys.length; i < len; i++) {
			var key = keys[i];
			var item = obj[key];
			chain.methods[key] = (function(item, key) {
				return function() {
					chain.results[key] = item.apply(item, _toArray(arguments));
					return chain.methods;
				};
			})(item, key);
		}

		//return new chained function
		return chain;
	};
	//short hand for request animation frame
	$.curry = function(funts) {
		var count = 0,
			args = [],
			argsLength = funts.length,
			curry = function curry() {
				args = _each_array(_toArray(arguments), function(item) {
					count++;
				});
				if (argsLength == count) {
					var value = funts.apply(funts, args);
					count = 0;
					args = [];
					return value;
				}
				return curry;
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
		var count = 0,
			args = [],
			argsLength = funts.length,
			curry = function curry() {
				_each_array(_toArray(arguments), function(item) {
					args.unshift(item);
					count++;
				});
				if (argsLength == count) {
					var value = funts.apply(curry, args);
					count = 0;
					args = [];
					return value;
				}
				return curry;
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

	//Creates a function that negates the result of the predicate func. The func predicate is invoked with the this binding and arguments of the created function.
	$.negate = function(func) {
		return function() {
			if (func.apply(func, _toArray(arguments))) {
				return false;
			}
			return true;
		};
	};

	//Creates a function that is restricted to execute func once. Repeat calls to the function will return the value of the first call. The func is executed with the this binding of the created function.
	$.once = function(fn) {
		var value,
			amount = false;
		return function() {
			if (!amount) {
				amount = true;
				value = fn.apply(this, _toArray(arguments));
				fn = null; //null func to free up mem
			}
			return value;
		};
	};

	//Creates a function that executes func, with the this binding and arguments of the created function, only after being called n times.
	$.after = function(fn, amount) {
		var called_amount = 0,
			value = 0;
		return function() {
			if (amount < called_amount) {
				amount = 1;
				value = fn.apply(this, _toArray(arguments));
				fn = null; //null func to free up mem
			}
			return value;
		};
	};

	//Creates a function that executes func, with the this binding and arguments of the created function, only before being called n times.
	$.before = function(fn, amount) {
		var called_amount = 0,
			value = 0;
		return function() {
			if (amount > called_amount) {
				amount = 1;
				value = fn.apply(this, _toArray(arguments));
				fn = null; //null func to free up mem
			}
			return value;
		};
	};

	//Creates a function that invokes func with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.
	$.reArg = function(funct, list) {
		return function() {
			return funct.apply(funct, _each_array(_toArray(arguments), function(item, index) {
				args.push(order[list[index]]);
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
	$.sync = function(functions) {
		return _each_array(functions, function(functionObject) {
			return functionObject();
		});
	};

	/*
 	This is for async promises & timer functions
 */
	//haspromises
	var promiseAsync = Promise.resolve(),

		//async function call
		_async = function _async(fnc) {
			return promiseAsync.then(fnc);
		},

		//timeing
		_timer = setTimeout;

	//debounce function
	$.debounce = function(original, time) {
		var timeout = false,
			fn = function fn() {
				if (timeout !== false) {
					clearTimeout(timeout);
				}
				var args = _toArray(arguments),
					boundTo = this;
				timeout = setTimeout(function() {
					original.apply(boundTo, args);
					timeout = false;
					args = null;
					boundTo = null;
				}, time);
			};
		fn.run = function() {
			if (timeout) {
				clearTimeout(timeout);
			}
			original.apply(this, _toArray(arguments));
		};
		fn.clear = function() {
			if (timeout) {
				clearTimeout(timeout);
				timeout = false;
			}
		};
		return fn;
	};

	//throttle function
	$.throttle = function(func, time) {
		var timeout = false,
			fn = function fn() {
				if (timeout !== false) {
					return false;
				}
				var args = _toArray(arguments);
				timeout = setTimeout(function() {
					func.apply(fn, args);
					args = null;
					timeout = false;
				}, time);
			};
		fn.clear = function() {
			clearTimeout(timeout);
			timeout = false;
		};
		fn.run = function() {
			clearTimeout(timeout);
			timeout = false;
			func.apply(fn, _toArray(arguments));
		};

		return fn;
	};

	$.timerClear = function(number) {
		return clearTimeout(number);
	};

	$.intervalClear = function(number) {
		return clearInterval(number);
	};

	$.clearTimers = function() {
		//clear all timers
		var maxId = setTimeout(function() {}, 0);
		for (var i = 0; i < maxId; i++) {
			clearTimeout(i);
		}
	};

	$.clearIntervals = function() {
		//clear all timers
		var maxId = setInterval(function() {}, 1000);
		for (var i = 0; i <= maxId; i++) {
			clearInterval(i);
		}
	};

	//timer wrapper
	$.timer = _timer;

	//timer wrapper
	$.interval = setInterval;

	$.async = function(fns) {
		if (_isFunction(fns)) {
			_async(fns);
		} else if (_isArray(fns)) {
			_each_array(fns, asyncLaunch);
		} else {
			_each_object(fns, asyncLaunch);
		}
	};

	//wrap 2 functions 'this' is launched after the argument function(s)
	$.wrap = function(funct, object, bind) {
		if (_isFunction(object)) {
			return function() {
				var args = _toArray(arguments);
				return [object.apply(bind, args), funct.apply(bind, args)];
			};
		} else if (isPlainObject(object)) {
			for (var i = 0, keys = _object_keys(object), len = keys.length; i < len; i++) {
				var key = keys[i];
				object[key] = $.wrap.apply(funct, [object[key], bind]);
			}
		}
		return object;
	};

	//wrap 2 functions 'this' is launched before the argument function(s)
	$.wrapBefore = function(funct, object, bind) {
		if (_isFunction(object)) {
			return function() {
				var args = _toArray(arguments);
				return [funct.apply(bind, args), object.apply(bind, args)];
			};
		} else if (isPlainObject(object)) {
			for (var i = 0, keys = _object_keys(object), len = keys.length; i < len; i++) {
				var key = keys[i];
				object[key] = wrap_before.apply(funct, [object[key], bind]);
			}
		}
		return object;
	};
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
		if (end === _undefined) {
			var end = start,
				start = 0;
		}
		return num > start && num < end;
	};

	//cache math functions
	var floorMethod = _math.floor,
		randomMethod = _math.random,
		roundMethod = _math.round;

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
	$.randomInt = function(number, min) {
		min = min || 0;
		return floorMethod(randomMethod() * (number - min)) + min;
	};

	//save browser info plus add class to body
	var _agentInfo = $.acid.agentInfo = function() {

		var str = _agentInfo.string = _window.navigator.userAgent.toLowerCase(),
			cl = document.body.classList,
			list = ['windows', 'macintosh', 'linux', 'ipad', 'iphone', 'chrome', 'safari', 'firefox', 'msie', 'trident', 'mobile', 'android', 'edge/'],
			addcls = [],
			agent = _agentinfo;

		_each_array(list, function(item) {
			_agentInfo[item] = _has(str, item);
		});

		_each_object(_agentInfo, function(item, key) {
			if (key === 'string') {
				return;
			} else if (key === 'mobile') {
				if (!item) {
					addcls.push('desktop');
					return;
				}
			}
			if (item) {
				addcls.push(key);
			}
		});

		_each_array(addcls, function(item) {
			cl.add(item);
		});
	};

	//Get useragent info
	$.isAgent = function(name) {
		if (!name) {
			return _agentinfo;
		}
		return _agentinfo[name];
	};

	var raf = requestAnimationFrame,
		caf = cancelAnimationFrame;
	$.caf = function(i) {
		//cancel animation frame
		return caf(i);
	};
	$.raf = function(i) {
		//cancel animation frame
		return raf(i);
	};

	var _bacthAdd = (function() {
		var batchCancelFrame = false,
			batchCount = 0,
			batchChanges = [],
			_batchLoop = function _batchLoop() {
				var items = batchChanges;
				for (var i = 0; i < batchCount; i++) {
					items[i]();
				}
				batchCount = 0;
				batchChanges = [];
				batchCancelFrame = false;
			},
			_batchCheck = function _batchCheck() {
				if (!batchCancelFrame) {
					batchCancelFrame = raf(_batchLoop);
				}
			},
			batchAdd = function batchAdd(func) {
				batchChanges[batchCount] = func;
				batchCount = batchCount + 1;
				_batchCheck();
			};
		return batchAdd;
	})();
	$.batch = _bacthAdd;

	var _cache = function _cache(key, value) {
		if (!key) {
			return _cache;
		} else if (hasValue(value)) {
			return _cache[key] = value;
		}
		return _cache[key];
	};

	$.cache = _cache;

	//toggle a cache item with two values
	$.cacheToggle = function(key, a, b) {
		if (_cache[key] === a) {
			return _cache[key] = b;
		}
		return _cache[key] = a;
	};
	_cache.screenHeight = screen.height;
	_cache.screenWidth = screen.width;

	var userConfig = $.acid.config = function(config) {
			if (config) {
				acidConfig(config);
			}
			_isDocumentReady(acidConfig);
		},
		acidConfig = function acidConfig(config) {
			//save config
			$.cache.config = config;

			//extend config settings to acid
			_each_object(config, function(item, key) {
				if (!$ext[key]) {
					$ext[key] = {};
				}
				$ext[key] = $merge($ext[key], item);
			});
		};

	//console.log
	var _log = console.log,
		_consoleObject = console,
		acidConsole = function acidConsole(array, theme) {
			var preped = [array];
			if (theme) {
				preped[0] = '%c' + preped[0];
				preped.push(logThemes[theme] + "font-size:13px;padding:2px 5px;border-radius:3px;");
			}
			_log.apply(_consoleObject, preped);
		},
		generateLogTheme = function generateLogTheme(color, bg) {
			return 'color:' + color + ';background:' + bg + ';';
		},
		logThemes = {
			notify: generateLogTheme('#01c690', '#0e2a36'),
			warning: generateLogTheme('#ebb227', '#262626'),
			important: generateLogTheme('#ffe4ea', '#dc3153')
		},
		addTheme = function addTheme(name, color, bg) {
			logThemes[name] = generateLogTheme(color, bg);
		};
	$.console = acidConsole;
	$.addConsoleTheme = addTheme;

	//turn acid logs on/off
	$.debug = function(i) {
		return $debug = i;
	};
	var _each = function _each(object, funct, fn) {
		var returned;
		if (_isArray(object)) {
			returned = _each_array(object, funct);
		} else if (isPlainObject(object)) {
			returned = _each_object(object, funct);
		} else if (isNumber(object)) {
			returned = _each_number(object, funct, fn);
		} else if (_isNodeList(object) || _isHTMLCollection(object)) {
			returned = _each_array(_toArray(object), funct);
		} else {
			returned = _each_object(object, funct);
		}
		return returned;
	};

	$.each = _each;

	$.exec = function() {
		return _document.execCommand.apply(_document, _toArray(arguments));
	};

	/*
 
 This is for finding an object method via a string used througout events
 
 */
	//find method
	var _find = $.get = function(name, obj) {
		var obj = obj ? obj : $,
			name = name.split('/'),
			name = name[name.length - 1];
		if (_has(name, '.')) {
			_eachWhile(name.split('.'), function(item, index) {
				obj = obj[item];
				if (hasValue(obj)) {
					return true;
				}
			});
		} else {
			var obj = obj[name];
		}
		return obj || false;
	};

	function jsonWithCatch(str) {
		try {
			return json.parse(str);
		} catch (e) {
			return false;
		}
	}

	//convert from json string to json object cache it to use across lib
	$.json = jsonWithCatch;

	$.weakMap = function(items) {
		return new weak_map(items);
	};

	$.map = function(items) {
		return new _map(items);
	};

	var _model = (function() {
		//get model -> (bool) option for a lean model meaning no methods will be attached
		var model_function = function model_function(modelName, object, bool) {
			if (hasValue(object)) {
				var model = _model[modelName] = object;
				if (_isFunction(model)) {
					model = model.bind(model);
				} else if (isPlainObject(model)) {
					_each_object(model, function(item, key) {
						if (_isFunction(item)) {
							model[key] = item.bind(model);
						}
					});
				}
				model.modelName = modelName;
				return model;
			} else if (_has(modelName, '.')) {
				return _find(modelName, _model);
			}
			return _model[modelName];
		};
		return model_function;
	})();

	$.model = _model;

	//export native functions
	$.keys = _object_keys;
	$.getPropDescrip = _object_getOwnPropertyDescriptor;

	//make a promise
	var _promise = $.promise = function(arry, name, callback, calls) {
			var arrayLength = arry.length;
			_promises[name] = function() {
				var fn = _promises[name],
					go = 0;
				_each_array(arry, function(item) {
					if (fn[item] === 1) {
						go = go + 1;
					}
				});
				//if amount of promises made were same as needed then launch callback
				if (go === arrayLength) {
					_async(callback);
					_promises[name] = null;
					return true;
				}
				return false;
			};
			_promises[name].call = {};
			if (calls) {
				_promises[name].call = calls;
			}
		},

		//promised
		_promised = function _promised(self, fn) {
			var val = _promises[fn];
			_promises[fn][self] = 1;
			if (val) {
				if (val()) {
					_promises[fn] = null;
				}
			}
			return false;
		},
		_promoiseFN = function _promoiseFN(array, name, fun) {
			return _promise(array, name, fun);
		},
		_promises = $.promises = {};

	/*
 		A service is an object that holds a set of processes that
 		can be added over time.
 		Then this service can run said processes.
 */

	var acidService = function acidService(name) {
			return acidService[name];
		},
		acidCreateService = function acidCreateService(name, optionalObjects) {
			var service = acidService[name] = {},
				serviceProcess = service.process = optionalObjects || {},
				serviceRun = service.run = function(optionalNameOfProcess) {
					if (optionalNameOfProcess) {
						serviceProcess[optionalNameOfProcess]();
					} else {
						_each_object(serviceProcess, function(item) {
							item();
						});
					}
				},
				serviceAdd = service.add = function(object) {
					_each_object(object, function(item, key) {
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
			_each_object(service, function(item, key) {
				if (_isFunction(item)) {
					service[key] = item.bind(service);
				}
			});
			_each_object(serviceProcess, function(item, key) {
				if (_isFunction(item)) {
					serviceProcess[key] = item.bind(service);
				}
			});
		};

	$.createService = acidCreateService;
	$.service = acidService;

	//localstorage
	$.local = _localstorage;
	//localstorage clear
	$.clearLocal = function() {
		return _localstorage.clear();
	};

	//session storage
	$.session = _sessionStorage;
	//session storage clear
	$.clearSession = function() {
		return _sessionStorage.clear();
	};

	//sys temp mem
	$.mem = {};
	$.toggle = function(value, a, b) {
		if (value === a) {
			return b;
		}
		return a;
	};
	//xhr functions
	$.xhr = {};
	$ext.xhr = {};

	var xhrLoaded = function xhrLoaded(evt) {
		if ($debug) {
			console.log(evt);
		}
		var xhr = evt.target,
			status = evt.target.status,
			type = xhr.getResponseHeader('content-type'),
			data = xhr.responseText,
			callback;
		if (status === 200) {
			if (type === 'application/json') {
				data = jsonWithCatch(data);
			}
			callback = xhr.callback;
			if (callback) {
				_async(function() {
					callback(data, evt);
					data = null;
					evt = null;
				});
			}
		} else if (status > 200) {
			callback = xhr.fail;
			if (callback) {
				_async(function() {
					callback(evt);
					evt = null;
				});
			}
		}
		$eventremove(xhr, 'load', xhrLoaded);
		xhr = null;
		status = null;
	};

	function xhrPostParam(url, add) {
		if (url.length > 0) {
			var url = url + '&';
		}
		var url = url + add;
		return url;
	}

	//xhr
	$.xhr = function(config) {
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
			credits = $ext.credits.url,
			analytics = $ext.xhr.analytics,
			newData = '';

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
				_each_object(data, function(item, key) {
					if (hasValue(item)) {
						newData = xhrPostParam(newData, key + '=' + item);
					}
				});
			} else if (_isArray(data)) {
				_each_array(data, function(item, key) {
					if (hasValue(item)) {
						newData = xhrPostParam(newData, item);
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
			$eventadd(xhr, 'error', fail);
		}
		if (progress) {
			$eventadd(xhr, 'progress', progress);
		}
		if (abort) {
			$eventadd(xhr, 'abort', abort);
		}

		$eventadd(xhr, 'load', xhrLoaded);

		if (type == 'GET') {
			if (newData) {
				if (!_has(url, '?')) {
					url = url + '?' + newData;
				} else {
					url = url + '&' + newData;
				}
				newData = '';
			}
		}

		if (credits) {
			if (!_has(url, '?')) {
				url = url + '?' + credits();
			} else {
				url = url + '&' + credits();
			}
		}

		if (jsonData) {
			newData = jsonData;
		}

		xhr.open(type, url, true);
		xhr.setRequestHeader("Content-type", contentType);
		xhr.send(newData);
		xhr = null, url = null, data = null, type = null, contentType = null, callback = null, credits = null, analytics = null;
		return false;
	};

	//node only
	function generateMethodSingleArgReturn(funct) {
		return function(arg) {
			return funct(this, arg);
		};
	}

	function generateMethodReturn(funct) {
		return function(arg) {
			return funct(this);
		};
	}

	var nodeOnly = {
		scrollIt: function scrollIt(x, y) {
			return _scrollIt(this, x, y);
		},
		prependTo: function prependTo(parent) {
			return prepend(parent, this);
		},
		apTo: function apTo(parent) {
			return _append(parent, this);
		},
		afterNth: function afterNth(new_child, position) {
			return _afterNth(this, new_child, position);
		},
		beforeNth: function beforeNth(new_child, position) {
			return _beforeNth(this, new_child, position);
		},
		sty: function sty(attr, value) {
			return _sty(this, attr, value);
		},
		//set/get attribute
		attr: function attr(key, value) {
			return _attr(this, key, value);
		},
		plugInto: function plugInto(string, object) {
			return _plugInto(this, string, object);
		}
	};
	zipUpTo(nodeOnly, nodeOnlyMethodsSingleArgReturn, nodeOnlyMethodNamesSingleArgReturn, generateMethodSingleArgReturn);
	zipUpTo(nodeOnly, nodeOnlyMethodsReturn, nodeOnlyMethodNamesReturn, generateMethodReturn);

	var generateLoopSingleArgReturnSelfCloneNodeSecondArg = function generateLoopSingleArgReturnSelfCloneNodeSecondArg(funct) {
			var generated = function generated(node) {
				var self = this;
				_each_array(self, function(item) {
					funct(item, node.cloneNode(true));
				});
				return self;
			};
			return generated;
		},
		generateLoopSingleArgReturnSelfCloneNodeFirstArg = function generateLoopSingleArgReturnSelfCloneNodeFirstArg(funct) {
			var generated = function generated(node) {
				var self = this;
				_each_array(self, function(item) {
					funct(item.cloneNode(true), node);
				});
				return self;
			};
			return generated;
		},
		generateLoopSingleArgReturnSelfNodeAsSecondArg = function generateLoopSingleArgReturnSelfNodeAsSecondArg(funct) {
			var generated = function generated(node) {
				var self = this;
				_each_array(self, function(item) {
					funct(node, item);
				});
				return self;
			};
			return generated;
		},
		generateLoopSingleArgReturnSelf = function generateLoopSingleArgReturnSelf(funct) {
			var generated = function generated(node) {
				var self = this;
				_each_array(self, function(item) {
					funct(node, item);
				});
				return self;
			};
			return generated;
		},
		generateLoopSingleArgReturnData = function generateLoopSingleArgReturnData(funct) {
			var generated = function generated(arg) {
				return _each_array(this, function(item) {
					return funct(item, arg);
				});
			};
			return generated;
		},
		generateLoopReturnData = function generateLoopReturnData(funct) {
			var generated = function generated(node) {
				return _each_array(this, function(item) {
					return funct(item);
				});
			};
			return generated;
		},

		//not as fast but works for extra methods
		generateLoopReturnDataMultipleArgs = function generateLoopReturnDataMultipleArgs(funct) {
			var generated = function generated() {
				var newArgs,
					args = _toArray(arguments);
				return _each_array(this, function(item) {
					newArgs = args.slice(0);
					newArgs.unShift(item);
					return funct.apply(null, args);
				});
			};
			return generated;
		},
		generateLoopForNthMethods = function generateLoopForNthMethods(funct) {
			var generated = function generated(new_child, position) {
				return _each_array(this, function(item) {
					return funct(item, new_child.cloneNode(true), position);
				});
			};
			return generated;
		},

		//live list operations meaning nodes can be removed from DOM and the loop is internal
		listOnly = {
			each: function each(funct) {
				_each_array(this, funct);
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
				_eachWhile(this, funct);
				return this;
			},
			eachWhileFalse: function eachWhileFalse(funct) {
				_whileFalse(this, funct);
				return this;
			},
			eachFromRight: function eachFromRight(funct) {
				eachArrayFromRight(this, funct);
				return this;
			},
			lastIn: function lastIn() {
				var node_list = this;
				return node_list[node_list.length - 1];
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
			prependTo: generateLoopSingleArgReturnSelfNodeAsSecondArg(prepend),
			ap: generateLoopSingleArgReturnSelfCloneNodeSecondArg(_append),
			apTo: generateLoopSingleArgReturnSelfNodeAsSecondArg(_append),
			after: generateLoopSingleArgReturnSelfCloneNodeSecondArg(insertAfter), //$('a').after($('.after'))
			before: generateLoopSingleArgReturnSelfCloneNodeSecondArg(insertBefore), //$('a').before($('.before'))
			afterNth: generateLoopForNthMethods(_afterNth),
			beforeNth: generateLoopForNthMethods(_beforeNth),
			removeRange: generateLoopReturnDataMultipleArgs(_removeRange),
			attr: generateLoopReturnDataMultipleArgs(_attr),
			plugInto: generateLoopReturnDataMultipleArgs(_plugInto)
		};
	zipUpTo(listOnly, nodeOnlyMethodsSingleArgReturn, nodeOnlyMethodNamesSingleArgReturn, generateLoopSingleArgReturnData);
	zipUpTo(listOnly, nodeOnlyMethodsReturn, nodeOnlyMethodNamesReturn, generateLoopReturnData);

	//make action on object via acid event
	var _act = function _act(node, type) {
		$['on' + type](node);
		return node;
	};

	$.act = _act;
	//checks to see if object is a dom node returns true or false
	var isDom = function isDom(obj) {
		if (!hasValue(obj)) {
			return false;
		}
		var nodetype = obj.nodeType;
		return typeof nodetype == "number" && nodetype != 9;
	};

	//IE 11+ support
	if (_Element_prototype.msMatchesSelector) {
		var _isMatch_dom = function _isMatch_dom(node, match_string) {
			return node.msMatchesSelector(match_string);
		};
	} else {
		var _isMatch_dom = function _isMatch_dom(node, match_string) {
			return node.matches(match_string);
		};
	}

	$.isDom = isDom;

	var domListToArray = $.domListToArray = function(collection) {
		var list = _toArray(collection),
			temp = [],
			item,
			name,
			length = list.length;
		for (var i = 0; i < length; i++) {
			item = list[i];
			name = item.constructor.name;
			if (name === "HTMLCollection" || name === "NodeList") {
				pushApply(temp, toArrayDeep(item));
			} else {
				temp.push(item);
			}
		}
		return temp;
	};

	var _ensure = function _ensure(models, call) {
		var models = _isString(models) ? [models] : models,
			importData = _each_array(models, function(item) {
				return item + ".js";
			});
		_import(importData, call);
	};
	$.ensure = _ensure;

	//create fragment
	var $frag = $.frag = function() {
		return _frag.call(_document);
	};

	//create node
	var domHeadNode;

	var generateRandomID = function generateRandomID() {
		return crypto.getRandomValues(new Uint32Array(1))[0];
	};

	var _tag = function _tag(name) {
		return _document.createElement(name);
	};
	$.tag = _tag;
	//build into dom
	var _dom = function _dom(name, data) {
		var e = _document.createElement(name),
			attr = data.attr,
			set = data.set,
			prop = data.prop;
		if (attr) {
			for (var i = 0, keys = _object_keys(attr), len = keys.length; i < len; i++) {
				var key = keys[i];
				e.setAttribute(key, attr[key]);
			}
		}
		if (set) {
			for (var i = 0, keys = _object_keys(set), len = keys.length; i < len; i++) {
				var key = keys[i];
				e.setAttribute('data-' + key, set[key]);
			}
		}
		if (prop) {
			for (var i = 0, keys = _object_keys(prop), len = keys.length; i < len; i++) {
				var key = keys[i];
				e[key] = prop[key];
			}
		}
		for (var i = 0, keys = _object_keys(data), len = keys.length; i < len; i++) {
			var key = keys[i];
			if (key == 'attr') {
				continue;
			}
			if (key == 'prop') {
				continue;
			}
			if (key == 'set') {
				continue;
			}
			var args = data[key];
			if (!_isArray(args)) {
				e[key](data[key]);
			} else {
				e[key].apply(e, data[key]);
			}
		}
		return e;
	};
	$.dom = _dom;
	//build into HTML
	var _html = function _html(e, data) {
		var attr = data.attr,
			set = data.set,
			html = data.html || '',
			items = '';
		if (attr) {
			for (var i = 0, keys = _object_keys(attr), len = keys.length; i < len; i++) {
				var key = keys[i];
				var items = items + ' ' + key + '="' + attr[key] + '"';
			}
		}
		if (set) {
			for (var i = 0, keys = _object_keys(set), len = keys.length; i < len; i++) {
				var key = keys[i];
				e.setAttribute('data-' + key, set[key]);
				var items = items + ' data-' + key + '="' + set[key] + '"';
			}
		}
		return '<' + e + ' ' + items + '>' + html + "</" + e + ">";
	};

	$.html = _html;
	//string to DOM
	var _toDOM = function _toDOM(html, childNumber) {
		var empty = _empty_node_div,
			frag = $frag(),
			first = null;

		empty.innerHTML = html;

		while (first = empty.firstChild) {
			frag.appendChild(first);
		}

		if (frag.childNodes.length === 1) {
			childNumber = 0;
		}
		if (hasValue(childNumber)) {
			frag = frag.childNodes[childNumber];
		}

		empty = null;
		first = null;
		return frag;
	};

	$.toDOM = _toDOM;

	function nodeAttachLoadingEvents(url, link, data) {
		var onload = data.load,
			onerror = data.error,
			append = data.append,
			name = generateRandomID();
		if (onload) {
			link.setAttribute('data-load', name + '.load');
		}
		if (onerror) {
			link.setAttribute('data-error', name + '.error');
		}
		if (append) {
			domHeadNode.appendChild(link);
		}
		_model[name] = {
			load: function load(link, event) {
				if (onload) {
					onload(event);
				}
				onerror = null;
				onload = null;
				_model[name] = null;
			},
			error: function error(link, event) {
				if (onerror) {
					onerror(event);
				}
				onload = null;
				onerror = null;
				_model[name] = null;
			}
		};
	}

	var _css = function _css(url, data) {
		var link = _tag('link');
		link.setAttribute('type', 'text/css');
		link.setAttribute('rel', 'stylesheet');
		nodeAttachLoadingEvents(url, link, data);
		link.setAttribute('href', url);
		return link;
	};

	$.css = _css;

	var _script = function _script(url, data) {
		var link = _tag('script');
		if (url) {
			link.setAttribute('src', url);
		}
		nodeAttachLoadingEvents(url, link, data);
		return link;
	};

	$.script = _script;

	/*
 	This imports any type of file.
 	It works just like require in the browser.
 
 	The main concern here is to
 		remove event listeners
 		null to ensure absolutely no leaks
 		condense the code
 */
	var _define,
		_import = (function() {
			var directoryNames = function directoryNames(name) {
					return directoryNames[name] || '';
				},
				_imported = {},
				import_listen = function import_listen(returned) {
					$eventadd(returned.node, 'load', returned.call, true);
					$eventadd(returned.node, 'error', returned.call, true);
				},
				import_id = function import_id(id) {
					return id.replace(regex_fowardslash, '_').replace(regex_dash, '_').replace(regex_dot, '_') + '_import';
				},
				importMainCallback = function importMainCallback(node, url, id, call, remove, returned) {
					if (call) {
						if (_isString(call)) {
							call = _find(call, _model);
						}
						_async(call);
					}
					if (remove) {
						node.remove();
					}
					//clean up
					$eventremove(node, 'load', returned.call);
					$eventremove(node, 'error', returned.call);
					node = null;
					remove = null;
					returned = null;
					call = null;
					id = null;
				},
				import_events = function import_events(node, url, id, data, remove) {
					var returned = {
						node: node,
						call: function call(event, funct, removeType) {
							_imported[id] = 1;
							event.stopPropagation();
							var type = event.type,
								removeType;
							if (type === 'load') {
								removeType = remove;
							} else {
								removeType = true;
							}
							importMainCallback(node, url, id, data.call, removeType, returned);
							returned = null;
							node = null;
							url = null;
							id = null;
							data = null;
							remove = null;
							event = null;
						}
					};
					return returned;
				},

				/*
  	CSS IMPORT FUNCTIONS
  */
				//STYLE NODE
				style_node = _attr(_attr(_tag('link'), 'rel', 'stylesheet'), 'type', 'text/css'),

				//create style node
				import_style = function import_style(url, id) {
					return _attr(_clone(style_node), 'href', url);
				},

				/*
  	SCRIPT IMPORT FUNCTIONS
  */
				script_node = _attr(_tag('script'), 'async', ''),

				//create style node
				import_script = function import_script(url, id) {
					return _attr(_clone(script_node), 'src', url);
				},

				/*
  	NODE TYPE OBJECT
  */
				node_types = {
					js: import_script,
					css: import_style
				},

				/*
  		EXTEND import to string
  	*/
				//import a single item
				import_it = function import_it(url, data, ismultiple) {
					var isJS = isFileJS(url),
						id = import_id(url),
						type = url.match(regex_ext)[0].replace('.', ''),
						remove,
						node,
						parent,
						model;
					if (!_has(url, '//')) {
						url = directoryNames(type) + url;
					}
					if (!data.remove) {
						if (isJS) {
							remove = true;
						}
					}
					if (!_imported[id]) {
						//mark as imported already
						_imported[id] = true;
						//create node type
						node = node_types[type](url, id);
						//events
						import_listen(import_events(node, url, id, data, remove));
						//append
						head_node.appendChild(node);
					} else {
						//if already there attach events
						node = $qs('[href="' + url + '"]');
						if (node && _imported[id] !== 1) {
							import_listen(import_events(node, url, id, data, remove));
						} else {
							_async(data.call);
						}
					}
				},
				orderArgumentObjects = function orderArgumentObjects(item) {
					if (_isString(item)) {
						if (isFileJS(item)) {
							item = getModelName(item);
						} else if (isFileCSS(item)) {
							item = $qs('[href="' + item + '"]');
						} else {
							item = _find(item, $);
						}
					}
					return item;
				},
				define = function define(data) {
					var funct = data.invoke,
						modelName = data.name,
						args = data['import'],
						wrapFunct = (function() {
							var freshArgs = _each_array(args, orderArgumentObjects);
							if (arguments.length > 0) {
								pushApply(freshArgs, arguments);
							}
							return funct.apply(wrapFunct, freshArgs);
						}).bind(wrapFunct);
					if (modelName) {
						_model[modelName] = wrapFunct;
					}

					return wrapFunct;
				},
				arrayImportLoop = function arrayImportLoop(item, name, error) {
					import_it(item, {
						call: function call() {
							if (error) {
								error(item, name);
							}
							_promised(item, name);
							item = null;
							name = null;
							error = null;
						}
					});
				},
				array_import = function array_import(array, data) {
					var name = import_id(array.join('')),
						error = data.error,
						call = data.call,
						callback = function callback() {
							call.apply(call, _each_array(array, orderArgumentObjects));
							call = null;
							array = null;
						},
						stringArray = _each_array(array, function(item, index) {
							if (_isString(item)) {
								if (isFileJS(item) || isFileCSS(item)) {
									return item;
								}
							}
						});
					if (stringArray.length > 0) {
						_promise(stringArray, name, function() {
							callback();
						});
						//make imports
						_each_array(stringArray, function(item, index) {
							arrayImportLoop(item, name, error);
						});
					} else {
						_async(function() {
							callback();
						});
					}
					name = null;
					data = null;
					error = null;
				},
				importFunction = function importFunction(key, value) {
					if (_isFunction(value)) {
						value = {
							call: value
						};
					}
					if (_isString(key)) {
						key = [key];
					}
					return array_import(key, value);
				},

				//Save CSS and JS files directories
				directoryNames = function directoryNames(name) {
					return directoryNames[name] || '';
				};
			//keep track of what has been imported
			$.imported = _imported;
			directoryNames.css = '';
			directoryNames.js = '';
			$.dir = directoryNames;

			//export Define function
			_define = define;
			$.define = define;
			return importFunction;
		})();

	$['import'] = _import;

	//create a function that takes an object that is apart of the main $ and applies/calls it to the functions arguments useful for caching functions
	var _module = $.module = function(data) {
		var fn = data.invoke,
			callback = data.callback,
			modelName = data.name,
			importData = data['import'],
			compiled = function compiled(callbackOptional) {
				_import(importData, {
					call: fn.bind(compiled)
				});
			};
		if (modelName) {
			_model[modelName] = compiled;
		}
		return compiled;
	};

	var _isDocumentReady = $.isDocumentReady = function(func) {
		var state = document.readyState;
		if (state == 'interactive' || state == 'completed' || state == 'complete') {
			if (func) {
				func();
			}
			return true;
		}
		if (func) {
			$eventadd(document, "DOMContentLoaded", func);
		}
		return false;
	};

	_isDocumentReady(function() {
		domHeadNode = document.getElementsByTagName('head')[0];
	});

	function saveDimensions() {
		_cache.windowHeight = _window.innerHeight;
		_cache.windowWidth = _window.innerWidth;
		_cache.bodyWidth = _body.offsetWidth;
		_cache.bodyHeight = _body.offsetHeight;
	};

	_isDocumentReady(function() {
		_body = document.body;
		raf(saveDimensions);
	});

	$.updateDimensions = saveDimensions;

	window.addEventListener('load', saveDimensions, true);

	//a tag DOM element used to parse URL
	var $atag = _document.createElement('a');
	//parse a URL
	$.linkParse = function(self) {
		var tag = $atag;
		tag.href = self;
		var data = {
			url: self,
			protocol: tag.protocol,
			hostname: tag.hostname,
			port: tag.port,
			path: tag.pathname[0] != '/' ? '/' + tag.pathname : tag.pathname,
			pathroot: tag.pathname[0] != '/' ? tag.pathname.split('/')[0] : tag.pathname.split('/')[1],
			search: tag.search,
			hash: tag.hash,
			host: tag.host
		};
		var root = data.hostname.split('.'),
			len = root.length,
			root = root[len - 2] + '.' + root[len - 1],
			len = null;
		if (data.protocol == 'http:') {
			data.ssl = false;
		} else {
			data.ssl = true;
		}
		data.domain = root;
		var tag = null;
		return data;
	};
	//single node only operations
	var extendDom = function extendDom(obj, ext) {
		_each_object(obj, function(item, key) {
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
	extendDom(nodeOnly, node_prototype);
	//lists without looping
	extendDom(listOnly, nodelist_prototype);
	extendDom(listOnly, htmlcollection_prototype);

	var _eventNames = $.eventNames = [],
		eventsArrayForWindow = ["readystatechange", "wheel", "copy", "cut", "paste", "beforescriptexecute", "afterscriptexecute", "abort", "canplay", "canplaythrough", "change", "ctextmenu", "duratichange", "emptied", "ended", "input", "invalid", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "reset", "seeked", "seeking", "select", "show", "stalled", "submit", "suspend", "timeupdate", "volumechange", "waiting", "fullscreenchange", "fullscreenerror", "pointerlockchange", "pointerlockerror", "blur", "error", "focus", "load", "scroll"],
		eventsArrayForBody = ["mouseenter", "mouseleave", "click", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "keydown", "keypress", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "blur", "focus"];

	var ensureItem = function ensureItem(action, analytics, obj, e, type, extra) {
			if (action) {
				var fn = _find(action, _model);
				if (fn) {
					if ($debug) {
						console.log(action);
					}
					fn(obj, e, extra);
					fn = null;
					action = null;
					obj = null;
					e = null;
					extra = null;
				}
				if (analytics) {
					_async(function() {
						analytics(type, action);
					});
				}
			}
		},
		domNodeEvent = function domNodeEvent(obj, e, analytics, fn, type, attr) {
			var action, ismodel, multi, length;
			if ($debug) {
				console.log(e);
			}
			if (!action) {
				if (obj.getAttribute) {
					action = obj.getAttribute(attr);
				}
			}
			if (!action) {
				if (obj !== _body) {
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
			var extra, hasExtra;
			if (action) {
				e.stopPropagation();
				multi = action.split(',');
				_each_array(multi, function(action) {
					hasExtra = action.match(/\((.*?)\)/);
					if (hasExtra) {
						action = action.replace(hasExtra[0], '');
						extra = hasExtra[1];
					}
					ismodel = _find(action, _model);
					if (ismodel) {
						ismodel(obj, e, extra);
					} else {
						_ensure(action.split('.')[0], function() {
							ensureItem(action, analytics, obj, e, type, extra);
							e = null;
							type = null;
							analytics = null;
							action = null;
						});
					}
					extra = '';
					hasExtra = false;
				});
			}
		},
		syntheticEvent = function syntheticEvent(e, analytics, fn, type, attr) {
			var isdom = isDom(e),
				obj,
				nonenode = false;
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
		},

		//create events from config
		getEventsOnObject = function getEventsOnObject(object, node, data) {
			var new_name;
			_each_object(object, function(item, key) {
				new_name = 'on' + key;
				data.type = key;
				data.fn = item.fn;
				$[new_name] = _eventGenerate(data);
				$eventadd(node, key, $[new_name], true);
			});
		},
		eventMethod = $.acid.event = function(event) {
			getEventsOnObject(event.window, window, {
				analytics: event.analytics
			});
			getEventsOnObject(event.body, document.body, {
				analytics: event.analytics
			});
		},

		//generate the onevent function
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

			_each_array(eventsArrayForWindow, function(item, key) {
				windowObject[item] = {};
			});
			_each_array(eventsArrayForBody, function(item, key) {
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
	_isDocumentReady(listenOnAllEvents);

	if (acidLib) {
		//get model directory -> save prefix to prefix
		var coreModel = acidLib.getAttribute('data-model');
		$.dir.js = coreModel;
		if (acidLib.onload) {
			acidLib.onload();
			acidLib.onload = null;
		} else if (coreModel) {
			//create core script and append to head
			_isDocumentReady(function() {
				_ensure('core', function(core) {
					if (core) {
						_async(core);
					}
				});
			});
		}
	}
	//clean up
	var acidLib = null;

	//log out the ACID version
	acidConsole('Acidjs v' + $.acid.version, 'notify');
	_isDocumentReady(_agentInfo);
})(this);