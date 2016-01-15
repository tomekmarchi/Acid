var _isDocumentReady = $.isDocumentReady = function(func) {
    var state = document.readyState;
    if (state == 'interactive' || state == 'completed' || state == 'complete') {
        if (func) {
            func();
        }
        return true;
    }
    if (func) {
        $eventadd(document, "DOMContentLoaded", func);
    }
    return false;
};

_isDocumentReady(function() {
	domHeadNode = document.getElementsByTagName('head')[0];
});
