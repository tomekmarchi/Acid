var _isDocumentReady=function(func){
	var state=document.readyState;
	if(state=='interactive' || state=='completed'){
		if(func){
			func();
		}
		return true;
	}
	if(func){
		$eventadd(document,"DOMContentLoaded", func);
	}
	return false;
};