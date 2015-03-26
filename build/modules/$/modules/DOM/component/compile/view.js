var compileView = function (object, modelName, view_name, template) {
		if (view_name) {
			if (_isFunction(view_name)) {
				var node = view_name.call(object, object);
				if (_isString(node)) {
					var node = _toDOM(node, 0);
				}
			} else if (_isString(view_name)) {
				var node = _template(view_name);
				if (_isFunction(node)) {
					var node = _toDOM(node(modelName), 0);
				}
			}
		} else if (template) {
			if (_isString(template)) {
				var node = _toDOM(template, 0);
			} else if (_isFunction(template)) {
				var node = template.call(object, object);
				if (_isString(node)) {
					var node = _toDOM(node, 0);
				}
			} else {
				if (_document.contains(template)) {
					var node = template;
				} else {
					var node = template.cloneNode(true);
				}
			}
		}
		if (node) {
			if (!(node instanceof _HTMLElement)) {
				var wrapNode = _document.createElement('div');
				wrapNode.appendChild(node);
				var node = wrapNode;
			}
			node.setAttribute('data-react-root', modelName, '');
			node.setAttribute('data-react-root-' + modelName, '');
			object.node = node;
		}
		return false;
	};