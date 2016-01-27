//create node
var domHeadNode,
    createTag = (name) => {
        return documentNode.createElement(name);
    },
    emptyNodeDiv = call(createElement, documentNode, 'div'),
    //string to DOM
    toDom = (html, childNumber) => {
        var frag = innerHTML(createFragment(), html),
            children = frag.childNodes,
            first;

        while (first = emptyNodeDiv.firstChild) {
            append(frag, first);
        }
        if (getLength(children) === 1) {
            childNumber = 0;
        }
        if (hasValue(childNumber)) {
            frag = children[childNumber];
        }
        return frag;
    },
    nodeAttachLoadingEvents = (node, data) => {
        var launchEvent = (fnct,node,event) =>{
				if(isString(fnct)){
					fnct=find(fnc,$);
				}
				if(fnct){
					fnct(node,event);
				}
			},
			onload = (event) => {
				launchEvent(data.load,node,event);
				end();
            },
            onerror = (event) => {
				launchEvent(data.error,node,event);
				end();
            },
			end = () => {
				eventRemove(eventRemove(node, 'error', onerror, true), 'load', onload, true);
            };

        eventAdd(eventAdd(node, 'error', onerror, true), 'load', onload, true);

        if (data.append) {
            append(domHeadNode, node);
        }
        return node;
    },
    createCss = (url, data) => {
        return nodeAttachLoadingEvents(nodeAttribute(createTag('link'), {
			'type':'text/css',
			'rel':'stylesheet',
			'href':url
		}), data);
    },
    createScript = (url, data) => {
        return nodeAttachLoadingEvents(nodeAttribute(createTag('script'), {
			'async':emptyString,
			'src':url
		}), data);
    };

$.createScript = createScript;
$.createCss = createCss;
$.createTag = createTag;
$.toDOM = toDom;
