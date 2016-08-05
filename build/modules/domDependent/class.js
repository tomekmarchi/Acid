/*
METHODS FOR CLASS MODS
*/
//classname
var getClassList = (node) => {
		return node.classList;
	},
	nodeClassList = (node, args, mode) => {
		var nodeClassList = getClassList(node),
			mode = nodeClassList.add || mode;
		return (args) ? apply(mode, nodeClassList, ensureArray(args)) : nodeClassList;
	},
	//classlist functions
	nodeClassListHas = (node, key) => {
		return getClassList(node).contains(key);
	},
	nodeClassListRemove = (node, args) => {
		nodeClassList(node, args, getClassList(node).remove)
		return node;
	};
