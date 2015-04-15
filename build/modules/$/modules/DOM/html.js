//create node
var _tag = function (name) {
		return _document.createElement(name);
	};
$.tag = _tag;
//build into dom
var _dom = function (name, data) {
		var e = _document.createElement(name),
			attr = data.attr,
			set = data.set,
			prop = data.prop;
		if (attr) {
			for (var i = 0, keys = _object_keys(attr), len = keys.length; i < len; i++) {
				var key = keys[i];
				e.setAttribute(i, attr[key]);
			}
		}
		if (set) {
			for (var i = 0, keys = _object_keys(set), len = keys.length; i < len; i++) {
				var key = keys[i];
				e.setAttribute('data-' + i, set[key]);
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
var _html = function (e, data) {
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
var _toDOM = function (html, childNumber) {
		var empty = _empty_node_div;
		empty.innerHTML = html;
		var frag = $frag(),
			first = null;
		while (first = empty.firstChild) {
			frag.appendChild(first);
		}
		var empty = null,
			first = null;
		if (hasValue(childNumber)) {
			return frag.childNodes[childNumber];
		}
		return frag;
	};
$.toDOM = _toDOM;