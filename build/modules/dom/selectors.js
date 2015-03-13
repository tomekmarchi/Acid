	//store internal data for selectors
	var temp_objs_from_selector = {},
		$id = function (i) { //get id
			return _document.getElementById(i)
		},
		$cls = function (i) { //get cls
			return _document.getElementsByClassName(i)
		},
		$tag = function (i) { //get tag
			return _document.getElementsByTagName(i)
		},
		$qsa = function (i) { //get qsa
			return _document.querySelectorAll(i)
		},
		$qs = function (i) { //get qs
			return _document.querySelector(i)
		},
		//main selector class has optimizations
		$ = function (select) {
			var obj = temp_objs_from_selector[select];
			if (obj) {
				return obj();
			}
			if (select[0] == '#') {
				if (!regex_space.test(select)) {
					var obj = $id(select.slice(1)),
						safe = select.slice(1),
						fun = function () {
							return $id(safe);
						};
				}
			} else if (select[0] == '.') {
				if ($class_test.test(select)) {
					var obj = $cls(select.slice(1));
					var fun = function () {
							return obj;
						};
				}
			} else if ($tag_test.test(select)) {
				var obj = $tag(select);
				var fun = function () {
						return obj;
					};
			}
			if (!fun) {
				var obj = $qsa(select);
				var fun = function () {
						return $qsa(select);
					};
			}
			temp_objs_from_selector[select] = fun;
			return obj;
		},
		//raw selection no optimizations
		$$ = function (select) {
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
	$.temp = temp_objs_from_selector;
	//selectors
	//id
	_global.$id = $id;
	//tagename
	_global.$tag = $tag;
	//classname
	_global.$cls = $cls;
	//query selector all
	_global.$qsa = $qsa;
	//query selector
	_global.$qs = $qs;
	//selector without optimizations
	_global.$$ = $$;