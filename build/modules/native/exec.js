$.exec=function () {
	return apply(documentNode.execCommand,documentNode,toArray(arguments));
};
