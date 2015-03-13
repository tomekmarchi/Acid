//center object
var _center = function (node, data) {
	var item = obj.getAttribute('data-centerobj'),
		itemname = item;
	if (item) {
		var wh = _cache.wh[itemname];
		if (!wh) {
			var item = $(item);
			if (item.length) {
				var item = item[0];
			}
			var w = Number(item.offsetWidth.toString()),
				h = Number(item.offsetHeight.toString());
			if (h && w && item) {
				$.cache.wh[itemname] = [w, h];
			}
		} else {
			var w = Number(wh[0]),
				h = Number(wh[1]);
		}
	} else {
		var w = Number(_cache.body_width),
			h = Number(_cache.body_height);
	}
	var divW = node.offsetWidth,
		divH = node.offsetHeight;
	if (divH > h) {
		obj.removeAttribute('style');
	} else {
		var left = parseInt((w - divW) / 2) + 'px',
			top = parseInt((h - divH) / 2) + 'px';
		node.setAttribute("style", 'position:absolute;\
	-webkit-transform:translate3d(' + left + ',' + top + ',0);\
	transform:translate3d(' + left + ',' + top + ',0)');
	}
	return node;
};