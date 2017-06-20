acid.isDocumentReady(() => {
  const acidLib = idSelector('acidjs');
  const corePath = nodeAttribute(acidLib, 'data-model');
  if (corePath) {
    importjs('core');
  }
});
