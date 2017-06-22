import acid from '../namespace/index';
import { eventAdd } from './event';
import { append } from './append';
import { nodeAttribute } from './attribute';
import { querySelector } from './selector';
import { assign } from '../internal/object';
import { last } from '../array/last';
import { promise } from '../native/promise';
const createTag = document.createElement.bind(document);
const nodeAttachLoadingEvents = (node) => {
  return promise((accept, reject) => {
    eventAdd(node, 'load', accept, true);
    eventAdd(node, 'error', reject, true);
    append(querySelector('head'), node);
  });
};
export const importcss = (url) => {
  const node = nodeAttribute(createTag('link'), {
    type: 'text/css',
    rel: 'stylesheet',
    href: `${url}.css`
  });
  return nodeAttachLoadingEvents(node);
};
export const importjs = (urlArg) => {
  let url = urlArg;
  if (!url.includes('//')) {
    url = `${acid.corePath}${url}`;
  }
  if (last(url) === '/') {
    url = `${url}index`;
  }
  const node = nodeAttribute(createTag('script'), {
    async: '',
    src: `${url}.js`
  });
  return nodeAttachLoadingEvents(node);
};
assign(acid, {
  importjs,
  importcss
});
