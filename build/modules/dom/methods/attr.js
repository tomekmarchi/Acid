//attr functions
var nodeHasAttribute = function(node, n) {
        return node.hasAttribute(n);
    },
    //set/get attribute
    nodeAttribute = function(node, keys, value) {
        var results;
        if (isString(keys)) {
            if (hasValue(value)) {
                node.setAttribute(keys, value);
            } else {
                return node.getAttribute(keys);
            }
        } else if (isPlainObject(keys)) {
            results = eachObject(keys, (item, key) => {
                return nodeAttribute(node, key, item);
            });
            if (value) {
                return results;
            }
        }
        return node;
    },
    nodeRemoveAttribute = function(node, n) {
        node.removeAttribute(n);
        return node;
    };
