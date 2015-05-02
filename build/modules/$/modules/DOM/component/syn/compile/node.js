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

        if (!object.bind[nodePropName]) {
            object.bind[nodePropName] = {};
        }

        var propertyCall = node[property];
        var isPropertyFunction = _isFunction(propertyCall);

        if (isPropertyFunction) {
            object.bind[nodePropName][key] = function() {
                propertyCall.call(node, dataObject[nodePropName]);
            };
        } else if(_has(property,'dataset.')) {
            var property=property.split('.')[1];
            object.bind[nodePropName][key] = function() {
                node.dataset[property] = dataObject[nodePropName];
            };
        }else {
            object.bind[nodePropName][key] = function() {
                node[property] = dataObject[nodePropName];
            };
        }
        if (!object.bindedNodes[key]) {
            object.bindedNodes[key] = {};
        }

        if (eventName) {
            var functionName = nodePropName + key + eventName;
            var attrValues = 'this.' + functionName + attrValues;
            object.bindedNodes[key][nodePropName] = functionName;
            if (isPropertyFunction){
                object[functionName] = function() {
                    dataObject[nodePropName] = propertyCall.call(node);
                };
            }else if(_has(property,'dataset.')) {
                var property=property.split('.')[1];
                object.bind[nodePropName][key] = function() {
                    dataObject[nodePropName] = node.dataset[property];
                };
            }   else{
                object[functionName] = function() {
                    dataObject[nodePropName] = node[property];
                };
            }
            node.setAttribute(attr, attrValues.replace(thisRegexReplace, modelEventName));
        }
    },
    loopThroughBindings = function(object, attr, node, nodeName, modelName, modelEventName) {
        var attr = attr || node.getAttribute('data-bind');
        if (attr) {
            var attrs = attr.split(';');
            _each_array(attrs, function(subitem, index) {
                var regex = subitem.match(/((.*?)(\[(.*?)\]))/g);
                if (regex) {
                    var set = regex[0].split('[');
                    var attrEventProp = set [0];
                    var attrProp = set [1].replace(']', '');
                    var attrEvent = attrProp.split(':');
                    var nodeProperty = attrEvent[0];
                    var attrEventName = attrEvent[1] || false;
                    compileBinding(object, modelName, modelEventName, node, nodeName, nodeProperty, attrEventName, attrEventProp);
                } else {
                    if (_has(subitem, 'privateData.')) {
                        var privateMode = true;
                        var subitem = subitem.replace('privateData.', '');
                        var testData = object.privateData[subitem];
                    } else {
                        var privateMode = false;
                        var testData = object.data[subitem];
                    }
                    if (_isArray(testData)) {
                        listsyn({
                            node: nodeName,
                            array: subitem
                        }, object, privateMode);
                    }
                }
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
                if (datSetList) {
                    _each_object(datSetList, function(item, subKey) {
                        compileNode(node, 'data-' + subKey, item, modelName, eventName);
                    });
                }
            });
        }
        rootNode.setAttribute('data-node','root');
        registerNode(object, rootNode);
        
        var datSetList = rootNode.dataset;
        _each_object(datSetList, function(item, key) {
            compileNode(rootNode, 'data-' + key, item, modelName, eventName);
        });
        var registerNodes = null;
        return object;
    };