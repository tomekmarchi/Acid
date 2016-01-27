var nodeOnly = {
		scrollIt: function(x, y) {
			return scrollIt(this, x, y);
		},
		prependTo: function(parent) {
			return prepend(parent, this);
		},
		apTo: function(parent) {
			return append(parent, this);
		},
		afterNth: function(newChild, position) {
			return afterNth(this, newChild, position);
		},
		beforeNth: function(newChild, position) {
			return beforeNth(this, newChild, position);
		},
		sty: function(attr, value) {
			return nodeStyle(this, attr, value);
		},
		//set/get attribute
		attr: function(key, value) {
			return nodeAttribute(this, key, value);
		},
		plugInto: function(string, object) {
			return plugInto(this, string, object);
		}
	};
	zipUpTo(nodeOnly, nodeMethodsValues, nodeMethodsKeys, generateNodeMethod);
	zipUpTo(nodeOnly, nodeOnlyMethodsReturn, nodeOnlyMethodNamesReturn, generateNodeMethod);
