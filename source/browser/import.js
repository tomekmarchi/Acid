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
/**
  * Asynchronously import a js file and append it to the head node.
  *
  * @function importjs
  * @type {Function}
  * @async
  * @returns {Promise} Returns a promise.
  *
  * @example
  * importjs('core.js');
*/
export const importjs = (url) => {
  const node = nodeAttribute(createTag('script'), {
    async: '',
    src: `${url}.js`
  });
  return nodeAttachLoadingEvents(node);
};
assign(acid, {
  importjs,
});
