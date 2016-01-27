//selectors
var idNode = function(node, select) {
        return node.getElementById(select);
    },
    clsNode = function(node, select) {
        return node.getElementsByClassName(select);
    },
    tagNode = function(node, select) {
        return node.getElementsByTagName(select);
    },
    qsaNode = function(node, select) {
        return node.querySelectorAll(select);
    },
    qsNode = function(node, select) {
        return node.querySelector(select);
    };
