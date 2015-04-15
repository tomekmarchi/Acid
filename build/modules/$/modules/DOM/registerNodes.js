var registeredNodes = {};

_defineProperty($, "nodes", {
    get: function() {
        return registeredNodes;
    },
    set:function(){
    	return registeredNodes;
    }
});

var updateNodes = function() {
    var temp = {};
    _each_array(_toArray($('[data-global-node]')), function(item, index) {
        temp[item.attr('data-global-node')] = item;
    });
    registeredNodes = temp;
    var temp = null;
    return registeredNodes;
};

$.getGlobalNodes = function() {
    return updateNodes();
};

function watcherOfDOM(target) {
    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            updateNodes();
        });
    });

    // configuration of the observer:
    var config = {
        attributes: false,
        childList: true,
        characterData: false
    };

    // pass in the target node, as well as the observer options
    observer.observe(target, config);
}

var nodeWatcher = function(target) {
    watcherOfDOM(target);
};

$.nodeWatcher = function(target) {
    return nodeWatcher(target);
};

_isDocumentReady(function() {
    watcherOfDOM(document.body);
    $.getGlobalNodes();
});