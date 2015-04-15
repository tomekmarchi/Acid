var compileNode = function(node, attr, item, modelName, eventName) {
        node.setAttribute(attr, item.replace(thisRegexReplace, eventName));
        node.setAttribute('data-syn', modelName);
    },
    unBindLoop = function(nodeObject, name) {
        _each_object(object.bindedNodes[name], function(item, key) {
            object.bind[key][name] = null;
        });
        object.bindedNodes[name] = null;
        return
    },
    removeNodeFromThis = function(name, node, object, unbind) {
        unbind(name);
        object.nodes[name] = null;
        return _removeNode(node);
    },
    registerNode = function(object, node) {
        var name = node.getAttribute('data-node');
        object.nodes[name] = node;
        var unbind = node.unBindFromThis = function() {
            return unBindLoop(node, name);
        };
        node.bindToThis = function(attr) {
            return loopThroughBindings(object, attr, node, name);
        };
        node.removeNodeFromThis = function(name) {
            return removeNodeFromThis(name, node, object, unbind);
        };
    },
    compileBinding = function(object, modelName, modelEventName, node, key, property, eventName, attrEventProp) {
        var attr = 'data-' + eventName;
        var attrValues = node.getAttribute(attr);
        if (attrValues) {
            var attrValues = ',' + attrValues;
        } else {
            var attrValues = '';
        }

        var dataObject = (_has(attrEventProp, 'privateData')) ? object.privateData : object.data,
            nodePropName = attrEventProp.replace('privateData.', '');

        var functionName = nodePropName + key + eventName;
        var attrValues = 'this.' + functionName + attrValues;

        if (!object.bind[nodePropName]) {
            object.bind[nodePropName] = {};
        }
        object.bind[nodePropName][key] = function() {
            node[property] = dataObject[nodePropName];
        };
        if (!object.bindedNodes[key]) {
            object.bindedNodes[key] = {};
        }
        object.bindedNodes[key][nodePropName] = functionName;
        object[functionName] = function() {
            dataObject[nodePropName] = node[property];
        };
        node.setAttribute(attr, attrValues.replace(thisRegexReplace, modelEventName));
    },
    loopThroughBindings = function(object, attr, node, nodeName, modelName, modelEventName) {
        var attr = attr || node.getAttribute('data-bind');
        if (attr) {
            var attrs = attr.match(/((.*?)(\[(.*?)\]))/g);
            _each_array(attrs, function(subitem, subkey) {
                var set = subitem.split('[');
                var nodeProperty = set [0];
                var attrProp = set [1].replace(']', '');
                var attrEvent = attrProp.split(':');
                var attrEventName = attrEvent[0];
                var attrEventProp = attrEvent[1];
                compileBinding(object, modelName, modelEventName, node, nodeName, nodeProperty, attrEventName, attrEventProp);
            });
            node.removeAttribute('data-bind');
        }
        return node;
    },
    checkBinding = function(object, modelName, modelEventName) {
        var registerdNodes = object.nodes;
        if (registerdNodes) {
            _each_object(registerdNodes, function(node, nodeName) {
                loopThroughBindings(object, false, node, nodeName, modelName, modelEventName);
            });
        }
    },
    compileNodes = function(object, rootNode) {
        var modelName = object.modelName,
            rootNode = rootNode || object.node,
            children = rootNode.childNodes,
            eventName = object.eventName;
        if (children) {
            var registerNodes = rootNode.querySelectorAll('[data-node]');
            if (registerNodes) {
                _each_array(_toArray(registerNodes), function(item) {
                    registerNode(object, item);
                });
            }
            _each_object(registerNodes, function(node, key) {
                var datSetList = node.dataset;
                if(datSetList){
	                _each_object(datSetList, function(item, subKey) {
	                    compileNode(node, 'data-' + subKey, item, modelName, eventName);
	                });
                }
            });
        }
        if (_isMatch_dom(rootNode, '[data-node]')) {
            registerNode(object, rootNode);
        }
        var datSetList = rootNode.dataset;
        _each_object(datSetList, function(item, key) {
            compileNode(rootNode, 'data-' + key, item, modelName, eventName);
        });
        var registerNodes = null;
        return object;
    };