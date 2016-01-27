//scroll this node
var scrollIt = function(node, x, y) {
        if (hasValue(x)) {
            node.scrollTop = x;
        }
        if (hasValue(y)) {
            node.scrollLeft = y;
        }
        return node;
    },
    //scroll info
    scrollInfo = function(node) {
        return {
            top: node.scrollTop,
            left: node.scrollLeft
        };
    },
    //scroll
    scrollInto = function(node, nodeToScrollIntoView) {
        node.scrollIntoView(nodeToScrollIntoView);
        return node;
    };
