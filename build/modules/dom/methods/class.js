/*
METHODS FOR CLASS MODS
*/
//classname
var nodeClassname = (node, n) =>{
        if (hasValue(n)) {
            node.className = n;
            return node;
        }
        return getClassname(node);
    },
	getClassList = (node) =>{
		return node.classList;
	},
	getClassname = (node) =>{
		return node.className;
	},
    //classlist
    nodeClassList = (node, args) =>{
        var nodeClassList = getClassList(node);
        if (args) {
            if (!isArray(args)) {
                if (!nodeClassListHas(node,args)) {
                    nodeClassList.add(args);
                }
            } else {
                eachArray(args, function(item) {
                    if (!nodeClassListHas(node,item)) {
                        nodeClassList.add(item);
                    }
                });
            }
            return node;
        }
        return nodeClassList;
    },
    //classlist functions
    nodeClassListHas = function(node, key) {
        return getClassList(node).contains(key);
    },
    nodeClassListRemove = function(node, args) {
        var nodeClassList = getClassList(node);
        if (!isArray(args)) {
            if (nodeClassListHas(node,args)) {
                nodeClassList.remove(args);
            }
        } else {
            eachArray(args, function(item) {
                if (nodeClassListHas(node,item)) {
                    nodeClassList.remove(item);
                }
            });
        }
        return node;
    },
    nodeClassListToggle = function(node, args) {
        var nodeClassList = getClassList(node);;
        if (!isArray(args)) {
            nodeClassList.toggle(args);
        } else {
            eachArray(args, function(item) {
                nodeClassList.toggle(item);
            });
        }
        return node;
    };
