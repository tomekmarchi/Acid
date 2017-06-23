import acid from '../namespace/index';
import { assign } from '../internal/object';
export const createFragment = document.createDocumentFragment.bind(document);
assign(acid, {
  createFragment
});
