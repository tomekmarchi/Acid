import acid from '../namespace/index';
import { getById } from './selectors';
import { nodeAttribute } from './attribute';
import { importjs } from './import';
acid.isDocumentReady(() => {
  const acidLib = getById('acidjs');
  const corePath = nodeAttribute(acidLib, 'data-model');
  if (corePath) {
    importjs('core');
  }
});
