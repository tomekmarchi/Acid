import acid from '../namespace/index';
import { append } from './append';
import { assign } from '../internal/object';
import { eventAdd } from './event';
import { nodeAttribute } from './attribute';
import { promise } from '../utility/promise';
import { querySelector } from './selector';
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
    href: `${url}.css`,
    rel: 'stylesheet',
    type: 'text/css',
  });
  return nodeAttachLoadingEvents(node);
};
export const importjs = (url) => {
  const node = nodeAttribute(createTag('script'), {
    async: '',
    src: `${url}.js`
  });
  return nodeAttachLoadingEvents(node);
};
assign(acid, {
  importcss,
  importjs,
});
