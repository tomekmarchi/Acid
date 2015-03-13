//checks for native remove function
var isremovenative = (_Element_prototype.remove) ? true : false;
//removes a node also checks if native is there
var $remove = (isremovenative) ? null : function (node) {
	var par = node.parentNode;
	if (par) {
		par.removeChild(node);
	}
	var par = null;
	return null;
};
var removeloop = function (node) {
	node.remove();
	return null;
};

var _removeNode = ($remove)? $remove : function(node){
	node.remove();
};
