var acidLib = idSelector('acidjs');
if (acidLib) {
	//get model directory
	directoryNames.js = nodeAttribute(acidLib, 'data-model');
	if (directoryNames.js) {
		isDocumentReady(() => {
			ensure('core', ifInvoke);
		});
	}
}
//clean up
acidLib = null;
