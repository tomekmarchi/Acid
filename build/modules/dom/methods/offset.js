//offsets
var owNode = (node) => {
        return node.offsetWidth;
    },
    ohNode = (node) => {
        return node.offsetHeight;
    },
    otNode = (node) => {
        return node.offsetTop;
    },
    offsetNode = (node) => {
        var boundingClientRect = node.getBoundingClientRect();
        return {
			top:boundingClientRect.top + bodyNode.scrollTop,
			left: boundingClientRect.left + bodyNode.scrollLeft
		};
    };
