var bodyNode,
	selfWindow = window,
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

    createElement = documentNode.createElement,

	generateNodeMethod = (funct) => {
		return function() {
			var args = toArray(arguments);
			unShiftArray(args,this);
			return apply(funct, args);
		};
	},
	zipUpTo = (object, functs, names, wrap) => {
		mapArray(functs, (item, index) => {
			if (!object[names[index]]) {
				object[names[index]] = wrap(item);
			}
		});
	},
	domPropertyMethod = (propertyName) =>{
		return (node,value,other) =>{
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
