
if (acidLib) {
    //get model directory -> save prefix to prefix
	var coreModel=acidLib.getAttribute('data-model');
    $.dir.js = coreModel;
    if (acidLib.onload) {
        acidLib.onload();
        acidLib.onload = null;
    }else if(coreModel){
		//create core script and append to head
		_isDocumentReady(() => {
		    _ensure('core', (core) => {
		        if (core) {
		            _async(core);
		        }
		    });
		});
	}
}
//clean up
var acidLib = null;
