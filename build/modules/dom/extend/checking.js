//checks to see if object is a dom node returns true or false
var isDom = function(obj) {
    if (!hasValue(obj)) {
        return false;
    }
    var nodetype = obj.nodeType;
    return typeof nodetype == "number" && nodetype != 9;
};

//IE 11+ support
if (_Element_prototype.msMatchesSelector) {
    var _isMatch_dom = function(node, match_string) {
        return node.msMatchesSelector(match_string);
    };
} else {
    var _isMatch_dom = function(node, match_string) {
        return node.matches(match_string);
    };
}

$.isDom = isDom;
