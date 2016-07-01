var isDocumentReady = $.isDocumentReady = (func) =>{
    var state = document.readyState;
    if (state === 'interactive' || state === 'completed' || state === 'complete') {
        if (func) {
            func();
        }
        return True;
    }
    if (func) {
        eventAdd(document, "DOMContentLoaded", func);
    }
    return False;
};

isDocumentReady(() =>{
	domHeadNode = qsSelector('head');
});
