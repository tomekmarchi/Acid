//create node
var domHeadNode,
    nodeHasAttribute = function(node, n) {
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
            results = mapObject(keys, (item, key) => {
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
    },
    createTag = $.createTag = bindTo(documentNode.createElement,documentNode),
    nodeAttachLoadingEvents = (node, data) => {
        var launchEvent = (fnct, node, event) => {
                if (fnct) {
                    fnct(node, event);
                }
            },
            onload = (event) => {
                launchEvent(data.load, node, event);
                end();
            },
            onerror = (event) => {
                launchEvent(data.error, node, event);
                end();
            },
            end = () => {
                eventRemove(eventRemove(node, 'error', onerror, True), 'load', onload, True);
            };

        eventAdd(eventAdd(node, 'error', onerror, True), 'load', onload, True);

        if (data.append) {
            append(domHeadNode, node);
        }
        return node;
    },
    createCss = $.createCss = (url, data, options) => {
        return nodeAttachLoadingEvents(nodeAttribute(createTag('link'), objectAssign({
            'type': 'text/css',
            'rel': 'stylesheet',
            'href': url
        },options)), data);
    },
    createScript = $.createScript = (url, data, options) => {
        return nodeAttachLoadingEvents(nodeAttribute(createTag('script'), objectAssign({
            'async': emptyString,
            'src': url
        },options)), data);
    };
$.toDOM=(html) =>{
	var div = createTag('div');
	div.innerHTML=html;
	return div;
};
