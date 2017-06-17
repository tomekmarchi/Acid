const isDocumentReady = (func) => {
  const state = documentNode.readyState;
  if (state === 'interactive' || state === 'completed' || state === 'complete') {
    return (func) ? func() : true;
  }
  if (func) {
    eventAdd(documentNode, 'DOMContentLoaded', func);
  }
  return false;
};
isDocumentReady(() => {
  domHeadNode = qsSelector('head');
});
$.isDocumentReady = isDocumentReady;
