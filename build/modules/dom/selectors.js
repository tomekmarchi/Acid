	//store internal data for selectors
	var cacheHashCharacter = '#',
	    cacheDotCharacter = '.',
	    //main selector class has optimizations
	    $ = (select) => {
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
	    $id = function(selectorString) { //get id
	        return _document.getElementById(selectorString)
	    },
	    $cls = function(selectorString) { //get cls
	        return _document.getElementsByClassName(selectorString)
	    },
	    $tag = function(selectorString) { //get tag
	        return _document.getElementsByTagName(selectorString)
	    },
	    $qsa = function(selectorString) { //get qsa
	        return _document.querySelectorAll(selectorString)
	    },
	    $qs = function(selectorString) { //get qs
	        return _document.querySelector(selectorString)
	    },
	    nodeMethodsValues = [_toggle, _show, _hide, _sub, _add, _act, _ae, _bb, _ab, _be,
	        _removeAttr, _clTog, _clRemove, _hasAttr, _cl, _clHas, _upTo, _clone, _center, _innerHTML, _ohtml, _tc, _txt, _textValue, _val, _sel,
	        _cn, _isMatch_dom, changeTag, replaceChild, prepend, _append, insertAfter, insertBefore, scrollInto, _id, _clsDOM, _tagDOM, _qsa, _qs,
	        scrollInfo, _resetHTML, _next, _previous, _parNode, _last, _first, _ow, _oh, _ot, _offset, _clw, _clh, _clear, $remove
	    ],
	    nodeMethodsKeys = ['toggle', 'show', 'hide', 'sub', 'add', 'act', 'ae', 'bb', 'ab',
	        'be', 'removeAttr', 'clTog', 'clRemove', 'hasAttr', 'cl', 'clHas', 'upTo', 'clone', 'center', 'html', 'ohtml', 'tc',
	        'txt', 'textValue', 'val', 'sel', 'cn', 'isMatch', 'changeTag', 'replace', 'prepend', 'ap', 'after', 'before', 'scrollInto', 'id', 'cls', 'tag', 'qsa', 'qs',
	        'scrollInfo', 'resetHTML', 'next', 'previous', 'parNode', 'last', 'first', 'ow', 'oh', 'ot', 'offset', 'clw', 'clh', 'clear', 'remove'
	    ],
	    generateNodeMethod = (funct) => {
	        return function() {
	            var args = _toArray(arguments);
	            args.unshift(this);
	            return funct.apply(this, args);
	        }
	    };

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
	//Global Select
	$.select = $;

	function zipUpTo(object, functs, names, wrap) {
	    _each_array(functs, function(item, index) {
	        if (!object[names[index]]) {
	            object[names[index]] = wrap(item);
	        }
	    });
	}
