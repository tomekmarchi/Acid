//create node
var domHeadNode;

var generateRandomID = function() {
	return crypto.getRandomValues(new Uint32Array(1))[0];
};

_isDocumentReady(function() {
	domHeadNode = document.getElementsByTagName('head')[0];
});

var _tag = function(name) {
	return _document.createElement(name);
};
$.tag = _tag;
//build into dom
var _dom = function(name, data) {
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
var _html = function(e, data) {
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
var _toDOM = function(html, childNumber) {
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
		load: function(link, event) {
			if (onload) {
				onload(event);
			}
			onerror = null;
			onload = null;
			_model[name] = null;
		},
		error: function(link, event) {
			if (onerror) {
				onerror(event);
			}
			onload = null;
			onerror = null;
			_model[name] = null;
		}
	};
}

var _css = function(url, data) {
	var link = _tag('link');
	link.setAttribute('type', 'text/css');
	link.setAttribute('rel', 'stylesheet');
	nodeAttachLoadingEvents(url, link, data);
	link.setAttribute('href', url);
	return link;
};

$.css = _css;

var _script = function(url, data) {
	var link = _tag('script');
	if (url) {
		link.setAttribute('src', url);
	}
	nodeAttachLoadingEvents(url, link, data);
	return link;
};

$.script = _script;
