//checks for native remove function
var isremovenative = (elementPrototype.remove) ? true : false,
    //removes a node also checks if native is there
    removeNode = (isremovenative) ? null : function(node) {
        var par = node.parentNode;
        if (par) {
            par.removeChild(node);
        }
        par = null;
        return node;
    },
    removeNodeMethod = (removeNode) ? removeNode : function(node) {
        node.remove();
        return node;
    },
    removeNodesInRange = function(node, start, end) {
        if (!end) {
            var end = start,
                start = 0;
        }
        var nodes = toArray(node),
            temp = [];
        for (; start < end; start++) {
            pushArray(temp,_removeNode(nodes[start]));
        }
        return temp;
    };
