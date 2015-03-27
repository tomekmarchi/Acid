//checks for native remove function
var isremovenative = (_Element_prototype.remove) ? true : false;
//removes a node also checks if native is there
var $remove = (isremovenative) ? null : function (node) {
	var par = node.parentNode;
	if (par) {
		par.removeChild(node);
	}
	var par = null;
	return node;
};

var _removeNode = ($remove)? $remove : function(node){
	node.remove();
	return node;
};

var removeloop = function (node) {
	return _removeNode(node);
};

var _removeRange = function (node,start,end){
	if(!end){
		var end=start,
			start=0;
	}
	var nodes=_toArray(node),
		temp=[];
	for(; start < end; start++){
		temp.push(_removeNode(nodes[start]));
	}
	return temp;
};