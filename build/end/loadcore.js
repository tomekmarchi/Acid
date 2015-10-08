//load acid lib info
if (acid_lib) {
	//get model directory -> save prefix to prefix
	$.dir.js = acid_lib.getAttribute('data-core') || '';
	if(acid_lib.onload){
		acid_lib.onload();
		acid_lib.onload=null;
	}
}
//create core script and append to head
_isDocumentReady(function(){
	_ensure('core',function(core){
		if(core){
			_async(core);
		}
	});
});
//clean up
var acid_lib = null;

//DOM
//single node only operations
extend(_domMethods.nodeOnly, node_prototype);
//lists without looping
extend(_domMethods.listOnly, nodelist_prototype);
extend(_domMethods.listOnly, htmlcollection_prototype);
