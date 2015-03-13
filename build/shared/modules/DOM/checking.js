//checks to see if object is a dom node returns true or false
var isDom = function (obj) {
	if (!hasValue(obj)) {
		return false;
	}
	var nodetype = obj.nodeType;
	return typeof nodetype == "number" && nodetype != 9;
};

//wrapper for match a slector
var _isMatch_dom = (function () {
	if (_Element_prototype.msMatchesSelector) {
		var method = function (node, match_string) {
				//IE 11+ support
				return node.msMatchesSelector(match_string);
			};
	} else {
		var method = function (node, match_string) {
				return node.matches(match_string);
			};
	}
	return method;
})();