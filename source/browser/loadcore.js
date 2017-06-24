import acid from '../namespace/index';
import { getById } from './selector';
import { importjs } from './import';
import { nodeAttribute } from './attribute';
acid.isDocumentReady(() => {
  const acidLib = getById('acidjs');
  const corePath = nodeAttribute(acidLib, 'data-model');
  if (corePath) {
    importjs('core');
  }
});
