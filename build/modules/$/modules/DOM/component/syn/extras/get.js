//get the observer object that is attached to DOM node
var _getsyn = function (node) {
		var modelName = node.getAttribute('data-syn-root') || node.getAttribute('data-syn');
		if (modelName) {
			return _model[modelName];
		}
		return false;
	};

$.getsyn = _getsyn;