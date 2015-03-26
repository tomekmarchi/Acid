var compileNode = function (node, attr, modelName, eventName) {
		node.setAttribute(attr, node.getAttribute(attr).replace(thisRegexReplace, eventName));
		node.setAttribute('data-react', modelName);
	},
	registerNode = function (object, node) {
		var name = node.getAttribute('data-node');
		object.nodes[name] = node;
	},
	compileNodes = function (object, rooNode) {
		var modelName = object.modelName,
			rooNode = rooNode || object.node,
			children = rooNode.childNodes,
			eventName = object.eventName;
		if (children) {
			var registerNodes = rooNode.querySelectorAll('[data-node]');
			if (registerNodes) {
				_each_array(_toArray(registerNodes), function (item) {
					registerNode(object, item);
				});
			}
			_each_array(_eventNames, function (item, i) {
				var item='data-' + item;
				var registerNodes = rooNode.querySelectorAll('[' + item + ']');
				if (registerNodes) {
					_each_array(_toArray(registerNodes), function (node) {
						compileNode(node, item, modelName, eventName);
					});
				}
			});
		}
		if (_isMatch_dom(rooNode, '[data-node]')) {
			registerNode(object, rooNode);
		}
		_each_array(_eventNames, function (item, i) {
			var item='data-' + item;
			if (_isMatch_dom(rooNode, '[' + item + ']')) {
				compileNode(rooNode, item, modelName, eventName);
			}
		});
		var registerNodes = null;
		return object;
	};