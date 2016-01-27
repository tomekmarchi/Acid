//IE 11+ support
if (elementPrototype.msMatchesSelector) {
    var matchesSelector = function(node, matchString) {
        return node.msMatchesSelector(matchString);
    };
} else {
    var matchesSelector = function(node, matchString) {
        return node.matches(matchString);
    };
}
