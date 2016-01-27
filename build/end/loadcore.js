
if (acidLib) {
    //get model directory -> save prefix to prefix
	var coreModel=nodeAttribute(acidLib,'data-model');
    $.dir.js = coreModel;
    if (acidLib.onload) {
        acidLib.onload();
        acidLib.onload = null;
    }else if(coreModel){
		//create core script and append to head
		isDocumentReady(() => {
		    ensure('core', (core) => {
		        if (core) {
		            asyncMethod(core);
		        }
		    });
		});
	}
}
//clean up
acidLib = null;
