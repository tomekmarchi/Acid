$.isDocumentReady(() => {
  const acidLib = idSelector('acidjs');
  corePath = nodeAttribute(acidLib, 'data-model');
  if (corePath) {
    importjs('core');
  }
});
