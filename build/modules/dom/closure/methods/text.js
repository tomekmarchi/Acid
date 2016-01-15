//text
var	_tc = function (node, value) {
	if (hasValue(value)) {
		if (_isFunction(value)) {
			value = value(node);
		}
		node.textContent = value;
		return node;
	}
	return node.textContent;
},
_txt = function (node, value) {
	if (hasValue(value)) {
		if (_isFunction(value)) {
			value = value(node);
		}
		node.innerText = value;
		return node;
	}
	return node.innerText;
};

var _textValue=function(node,value){
	var child=node.firstChild;
	if(child){
		if (hasValue(value)) {
			if (_isFunction(value)) {
				value = value(node);
			}
			child.nodeValue = value;
			return node;
		}
		return child.nodeValue;
	}else{
		return _tc(node,value);
	}
}