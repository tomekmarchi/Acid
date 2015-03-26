//get the observer object that is attached to DOM node
var _getReact = function (node) {
		var modelName = node.getAttribute('data-react-root') || node.getAttribute('data-react');
		if (modelName) {
			return _model[modelName];
		}
		return false;
	};

$.getReact = _getReact;