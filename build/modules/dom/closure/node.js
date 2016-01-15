//node only
function generateMethodSingleArgReturn(funct) {
	return function(arg) {
		return funct(this, arg);
	}
}

function generateMethodReturn(funct) {
	return function(arg) {
		return funct(this);
	}
}

var nodeOnly = {
		scrollIt: function(x, y) {
			return scrollIt(this, x, y);
		},
		prependTo: function(parent) {
			return prepend(parent, this);
		},
		apTo: function(parent) {
			return _append(parent, this);
		},
		afterNth: function(new_child, position) {
			return afterNth(this, new_child, position);
		},
		beforeNth: function(new_child, position) {
			return beforeNth(this, new_child, position);
		},
		sty: function(attr, value) {
			return _sty(this, attr, value);
		},
		//set/get attribute
		attr: function(key, value) {
			return _attr(this, key, value);
		},
		plugInto: function(string, object) {
			return _plugInto(this, string, object);
		}
	};
	zipUpTo(nodeOnly, nodeOnlyMethodsSingleArgReturn, nodeOnlyMethodNamesSingleArgReturn, generateMethodSingleArgReturn);
	zipUpTo(nodeOnly, nodeOnlyMethodsReturn, nodeOnlyMethodNamesReturn, generateMethodReturn);
