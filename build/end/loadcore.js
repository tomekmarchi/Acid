var acidLib = idSelector('acidjs');
if (acidLib) {
    //get model directory -> save prefix to prefix
	var coreModel=nodeAttribute(acidLib,'data-model');
    $.dir.js = coreModel;
    if (!acidLib.onload && coreModel) {
		//create core script and append to head
		isDocumentReady(() => {
		    ensure('core', (core) => {
		        if (core) {
		            core();
		        }
		    });
		});
	}
}
//clean up
acidLib = null;
