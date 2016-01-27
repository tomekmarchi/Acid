//center object
var centerNode = function(node, item) {
    var divW = owNode(node),
        divH = ohNode(node),
        w,h, left, top;
    if (item) {
        if (item === true) {
            item = node.parentNode;
        }
        w = owNode(item);
        h = ohNode(item);
    } else {
        w = Number(appState.bodyWidth);
        h = Number(appState.bodyHeight);
    }
    if (divH >= h) {
        nodeStyle(node, {
            'position': emptyString,
            'transform': emptyString
        });
    } else {
        left = parseInt((w - divW) / 2) + 'px';
        top = parseInt((h - divH) / 2) + 'px';
        nodeStyle(node, {
            'position': 'absolute',
            'top': '0px',
            'left': '0px',
            'transform': `translate3d(${left},${top},0)`
        });
    }
    return node;
};
