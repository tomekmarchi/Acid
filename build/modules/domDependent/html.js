// create node
let domHeadNode;
const nodeAttribute = (node, keys, value) => {
  let results;
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
};
const createTag = bindTo(documentNode.createElement, documentNode);
$.createTag = createTag;
const nodeAttachLoadingEvents = (node, data) => {
  const loaded = (event) => {
    data.accept(event);
    end();
  };
  const onerror = (event) => {
    data.reject(event);
    end();
  };
  const end = () => {
    eventRemove(eventRemove(node, 'error', onerror, true), 'load', loaded, true);
  };
  eventAdd(eventAdd(node, 'error', onerror, true), 'load', loaded, true);
  append(domHeadNode, node);
};
const importcss = (url) => {
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
};
$.importcss = importcss;
const importjs = (urlArg) => {
  return promise((accept, reject) => {
    let url = urlArg;
    if (!url.includes('//')) {
      url = `${corePath}${url}`;
    }
    if (lastItem(url) === '/') {
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
$.importjs = importjs;
