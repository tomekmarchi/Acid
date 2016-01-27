var isDocumentReady = $.isDocumentReady = (func) =>{
    var state = document.readyState;
    if (state === 'interactive' || state === 'completed' || state === 'complete') {
        if (func) {
            func();
        }
        return true;
    }
    if (func) {
        eventAdd(document, "DOMContentLoaded", func);
    }
    return false;
};

isDocumentReady(() =>{
	domHeadNode = qsSelector('head');
});
