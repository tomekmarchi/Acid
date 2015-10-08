	//store internal data for selectors
	var tempObjsFromSelector = {},
		$id = function(i) { //get id
			return _document.getElementById(i)
		},
		$cls = function(i) { //get cls
			return _document.getElementsByClassName(i)
		},
		$tag = function(i) { //get tag
			return _document.getElementsByTagName(i)
		},
		$qsa = function(i) { //get qsa
			return _document.querySelectorAll(i)
		},
		$qs = function(i) { //get qs
			return _document.querySelector(i)
		},
		//main selector class has optimizations
		$ = function(select) {
			var obj = tempObjsFromSelector[select],
				safe,
				fun;
			if (obj) {
				return obj();
			}
			if (select[0] == '#') {
				if (!regex_space.test(select)) {
					obj = $id(select.slice(1)),
						safe = select.slice(1),
						fun = function() {
							return $id(safe);
						};
				}
			} else if (select[0] == '.') {
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
		$$ = function(select) {
			if (select[0] == '#') {
				if (!regex_space.test(select)) {
					return $id(select.slice(1));
				}
			} else if (select[0] == '.') {
				if ($class_test.test(select)) {
					return $cls(select.slice(1));
				}
			} else if ($tag_test.test(select)) {
				return $tag(select);
			}
			return $qsa(select);
		};
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
	$.$$ = $$;
	function zipUpTo(object, functs, names, wrap) {
		_each_array(functs, function(item, index) {
			if(!object[names[index]]){
				object[names[index]] = wrap(item);
			}
		});
	}
	var nodeOnlyMethodsSingleArgReturn = [_toggle, _show, _hide, _sub, _add, _ison, _act, _ae, _bb, _ab, _be,
			_removeAttr, _clTog, _clRemove, _hasAttr, _cl, _clHas, _upTo, _clone, _center, _innerHTML, _ohtml, _tc, _txt, _textValue, _val, _sel,
			_cn, _isMatch_dom, changeTag, replaceChild, prepend, _append, insertAfter, insertBefore, scrollInto, _id, _clsDOM, _tagDOM, _qsa, _qs
		],
		nodeOnlyMethodNamesSingleArgReturn = ['toggle', 'show', 'hide', 'sub', 'add', 'ison', 'act', 'ae', 'bb', 'ab',
			'be', 'removeAttr', 'clTog', 'clRemove', 'hasAttr', 'cl', 'clHas', 'upTo', 'clone', 'center', 'html', 'ohtml', 'tc',
			'txt', 'textValue', 'val', 'sel', 'cn', 'isMatch', 'changeTag', 'replace', 'prepend', 'ap', 'after', 'before', 'scrollInto', 'id', 'cls', 'tag', 'qsa', 'qs'
		],
		nodeOnlyMethodsReturn = [scrollInfo, _resetHTML, _next, _previous, _parNode, _last, _first, _ow, _oh, _ot, _offset, _clw, _clh, _clear,$remove],
		nodeOnlyMethodNamesReturn = ['scrollInfo', 'resetHTML', 'next', 'previous', 'parNode', 'last', 'first', 'ow', 'oh', 'ot', 'offset', 'clw', 'clh', 'clear','remove'];
