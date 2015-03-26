//center object
var _center = function (node, item) {
	if (item) {
		if(item===true){
			var item=node.parentNode;
		}
		var w = Number(item.offsetWidth),
			h = Number(item.offsetHeight);
	} else {
		var w = Number(_cache.bodyWidth),
			h = Number(_cache.bodyHeight);
	}
	var divW = node.offsetWidth,
		divH = node.offsetHeight;
	if (divH > h) {
		node.style.position='';
		node.style.transform=node.style['-webkit-transform']='';
	} else {
		var left = parseInt((w - divW) / 2) + 'px',
			top = parseInt((h - divH) / 2) + 'px';
		node.style.position='absolute';
		node.style.transform=node.style['-webkit-transform']='translate3d('+left + ',' + top + ',0)';
	}
	return node;
};