import acid from '../namespace/index';
import { importjs } from './import';
acid.isDocumentReady(() => {
  importjs('core');
});
