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
        if (args) {
            if (!isArray(args)) {
                mode.call(nodeClassList, args);
            } else {
                eachArray(args, function(item) {
                    nodeClassList(node, item);
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
        nodeClassList(node, getClassList(node).remove)
        return node;
    };
