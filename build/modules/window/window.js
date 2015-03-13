var window_extend = {
		selection: function () { //get text selection
			var i, len, ranges = [],
				sel = _window.getSelection();
			if (sel.getRangeAt && sel.rangeCount) {
				for (i = 0, len = sel.rangeCount; i < len; i += 1) {
					ranges.push(sel.getRangeAt(i));
				}
				var returned = {
					sel: sel,
					ranges: ranges,
					start: _window.selection.start(),
					html: _window.selection.html(sel)
				};
				return returned;
			}
			return null;
		}
	},
	savedSel = false;

window_extend.selection.start = function () {
	var node = _document.getSelection().anchorNode,
		startNode = (node && node.nodeType === 3 ? node.parentNode : node);
	return startNode;
};
window_extend.selection.restore = function (i) {
	var i, len, sel = _window.getSelection();
	if (savedSel) {
		sel.removeAllRanges();
		for (i = 0, len = savedSel.length; i < len; i += 1) {
			sel.addRange(savedSel[i]);
		}
	}
};
window_extend.selection.html = function (a) {
	var i, html = '',
		sel, len, container;
	if (a !== undefined) {
		sel = a;
		if (sel.rangeCount) {
			container = _document.createElement('div');
			for (i = 0, len = sel.rangeCount; i < len; i += 1) {
				container.appendChild(sel.getRangeAt(i).cloneContents());
			}
			html = container.innerHTML;
		}
	} else if (_document.selection !== undefined) {
		if (_document.selection.type === 'Text') {
			html = _document.selection.createRange().htmlText;
		}
	}
	return html;
};