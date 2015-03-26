//node only
var nodeOnly = {
	isMatch: function (match_string) {
		return _isMatch_dom(this, match_string);
	},
	changeTag: function (tagename) {
		return changeTag(this, tagename);
	},
	replace: function (born) {
		return replaceChild(this, born);
	},
	scrollIt: function (x, y) {
		return scrollIt(this, x, y);
	},
	scrollInfo: function () {
		return scrollInfo(this);
	},
	prepend: function (node) {
		return prepend(this, node);
	},
	prependTo: function (parent) {
		return prepend(parent, this);
	},
	ap: function (new_node) {
		return _append(this, new_node);
	},
	apTo: function (parent) {
		return _append(parent, this);
	},
	after: function (new_node) {
		return insertAfter(this, new_node);
	},
	before: function (new_node) {
		return insertBefore(this, new_node);
	},
	afterNth: function (new_child, position) {
		return afterNth(this, new_child, position);
	},
	beforeNth: function (new_child, position) {
		return beforeNth(this, new_child, position);
	},
	//select text in node
	selectIt: function () {
		return scrollInto(this);
	},
	//scroll
	scrollInto: function (node_to_scroll_into_view) {
		return scrollInto(this, node_to_scroll_into_view);
	},
	//will return null if .remove is in
	remove: $remove,
	resetHTML: function () { //clears uploaded item
		return _resetHTML(this);
	},
	next: function () {
		return _next(this);
	},
	previous: function () {
		return _previous(this);
	},
	//selectors
	id: function (n) {
		return _id(this, n);
	},
	cls: function (n) {
		return _clsDOM(this, n);
	},
	tag: function (n) {
		return _tagDOM(this, n);
	},
	qsa: function (n) {
		return _qsa(this, n);
	},
	qs: function (n) {
		return _qs(this, n);
	},
	//class functions
	//classname
	cn: function (string) {
		return _cn(this, string);
	},
	//classlist
	cl: function (arg) {
		if(arguments.length>1){
			var arg=_toArray(arguments);
		}
		return _cl(this, arg);
	},
	//classlist functions
	clHas: function (key) {
		return _clHas(this, key);
	},
	//transverse up based on a match or number
	upTo: function (name) {
		return _upTo(this, name);
	},
	//copynode
	clone: function (bool) {
		return _clone(this, bool);
	},
	//center object
	center: function (data) {
		return _center(this, data);
	},
	html: function (n) {
		return _html(this, n);
	},
	ohtml: function (n) {
		return _ohtml(this, n);
	},
	//text
	tc: function (n) {
		return _tc(this, n);
	},
	txt: function (n) {
		return _txt(this, n);
	},
	//order
	parNode: function () {
		return _parNode(this);
	},
	last: function () {
		return _last(this);
	},
	first: function () {
		return _first(this);
	},
	//props
	val: function (n) {
		return _val(this, n);
	},
	sty: function (attr,value) {
		return _sty(this, attr,value);
	},
	sel: function (n) {
		return _sel(this, n);
	},
	//offsets
	ow: function () {
		return _ow(this);
	},
	oh: function () {
		return _oh(this);
	},
	ot: function () {
		return _ot(this);
	},
	offset: function () {
		return _offset(this);
	},
	clw: function () {
		return _clw(this);
	},
	clh: function () {
		return _clh(this);
	},
	//attr functions
	hasAttr: function (n) {
		return _hasAttr(this, n);
	},
	//set/get attribute
	attr: function (key, value) {
		return _attr(this, key, value);
	},
	plugInto: function (string, object) {
		return _plugInto(this, string, object);
	},
	clRemove: function (arg) {
		if(arguments.length>1){
			var arg=_toArray(arguments);
		}
		return _clRemove(this, arg);
	},
	clTog: function (arg) {
		if(arguments.length>1){
			var arg=_toArray(arguments);
		}
		return _clTog(this, arg);
	},
	//takes a data object then places over based on nodes
	faceplate: function (data, name) {
		return _faceplateDOM(this, data, name);
	},
	removeAttr: function (arg) {
		if(arguments.length>1){
			var arg=_toArray(arguments);
		}
		return _removeAttr(this, arg);
	},
	//insertAdjacentHTML
	be: function (n) {
		return _be(this, n);
	},
	ab: function (n) {
		return _ab(this, n);
	},
	bb: function (n) {
		return _bb(this, n);
	},
	ae: function (n) {
		return _ae(this, n);
	},
	//clear
	clear: function () {
		return _clear(this);
	},
	//make action on object via acid event
	act: function (n) {
		return _act(this, n);
	},
	//btn + adding
	ison: function (n) {
		return _ison(this, n);
	},
	add: function (n) {
		return _add(this, n);
	},
	sub: function (n) {
		return _sub(this, n);
	},
	//quick changes
	hide: function (n) {
		return _hide(this, n);
	},
	show: function (n) {
		return _show(this, n);
	},
	toggle: function (n) {
		return _toggle(this, n);
	}
};