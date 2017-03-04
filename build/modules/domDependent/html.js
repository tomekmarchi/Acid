//create node
var domHeadNode,
  nodeHasAttribute = function (node, n) {
    return node.hasAttribute(n);
  },
  //set/get attribute
  nodeAttribute = function (node, keys, value) {
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
  nodeRemoveAttribute = function (node, n) {
    node.removeAttribute(n);
    return node;
  },
  createTag = $.createTag = bindTo(documentNode.createElement, documentNode),
  nodeAttachLoadingEvents = (node, data) => {
    const onload = (event) => {
        data.accept(event);
        end();
      },
      onerror = (event) => {
        data.reject(event);
        end();
      },
      end = () => {
        eventRemove(eventRemove(node, 'error', onerror, True), 'load', onload, True);
      };
    eventAdd(eventAdd(node, 'error', onerror, True), 'load', onload, True);
    append(domHeadNode, node);
  },
  importcss = $.importcss = (url) => {
    return promise((accept, reject) => {
      nodeAttachLoadingEvents(nodeAttribute(createTag('link'), {
        type: 'text/css',
        rel: 'stylesheet',
        href: `${url}.css`
      }), {
        accept,
        reject
      });
    });
  },
  importjs = $.importjs = (urlArg) => {
    return promise((accept, reject) => {
      let url = urlArg;
      if(!url.includes('//')){
        url = `${corePath}${url}`;
      }
      if(lastItem(url)==='/'){
        url = `${url}index`;
      }
      nodeAttachLoadingEvents(nodeAttribute(createTag('script'), {
        async: emptyString,
        src: `${url}.js`,
        accept,
        reject
      }), {
        accept,
        reject
      });
    });
  };
$.toDOM = (html) => {
  var div = createTag('div');
  div.innerHTML = html;
  return div;
};
