var generate_loop_single_clonenode = function (funct) {
		var generated = function (node) {
				var self = this,
					items = _toArray(self);
				_each_array(items, function (item) {
					funct(item, node.cloneNode(true));
				});
				return self;
			};
		return generated;
	},
	generate_loop_single_clonenode_switch_clone = function (funct) {
		var generated = function (node) {
				var self = this,
					items = _toArray(self);
				_each_array(items, function (item) {
					funct(item.cloneNode(true), node);
				});
				return self;
			};
		return generated;
	},
	generate_loop_single_switch = function (funct) {
		var generated = function (node) {
				var self = this,
					items = _toArray(self);
				_each_array(items, function (item) {
					funct(node, item);
				});
				return self;
			};
		return generated;
	},
	generate_loop_single = function (funct) {
		var generated = function (node) {
				var self = this,
					items = _toArray(self);
				_each_array(items, function (item) {
					funct(node, item);
				});
				return self;
			};
		return generated;
	},
	generate_loop_single_return = function (funct) {
		var generated = function (arg) {
				var self = this,
					items = _toArray(self);
				if(arguments.length>1){
					var arg=_toArray(arg);
				}
				var rertuned=_each_array(items, function (item) {
					return funct(item, arg);
				});
				return rertuned;
			};
		return generated;
	},
	generate_loop_return = function (funct) {
		var generated = function (node) {
				var self = this,
					items = _toArray(self);
				var rertuned=_each_array(items, function (item) {
					return funct(item);
				});
				return rertuned;
			};
		return generated;
	},
	//not as fast but works for extra methods
	generate_loop_return_triple = function (funct) {
		var generated = function (x,y) {
				var self = this,
					args=_toArray(arguments),
					items = _toArray(self);
				var rertuned=_each_array(items, function (item) {
					return funct(item,x,y);
				});
				return rertuned;
			};
		return generated;
	},
	generate_loop_nth = function (funct) {
		var generated = function (new_child, position) {
				var self = this,
					args=_toArray(arguments),
					items = _toArray(self);
				var rertuned=_each_array(items, function (item) {
					return funct(item,new_child.cloneNode(true), position);
				});
				return rertuned;
			};
		return generated;
	};

//live list operations meaning nodes can be removed from DOM and the loop is internal
var listOnly = {
	each: function (n) {
		var list = this;
		for (var i = 0, items = _toArray(list), len = items.length; i < len; i++) {
			n(items[i]);
		}
		return list;
	},
	lastIn: function () {
		var node_list = this;
		var last = node_list[node_list.length - 1];
		return last;
	},
	firstIn: function () {
		var first = this[0];
		return first;
	},
	toArray:function(){
		return _toArray(this);
	},
	isMatch:generate_loop_single_return(_isMatch_dom),
	changeTag:generate_loop_single_return(changeTag),
	replace: generate_loop_single_clonenode(replaceChild),
	scrollIt:generate_loop_return_triple(scrollIt),
	scrollInfo:generate_loop_return(scrollInfo),
	prepend:generate_loop_single_clonenode(prepend),
	prependTo: generate_loop_single_switch(prepend),
	ap:generate_loop_single_clonenode(_append),
	apTo:generate_loop_single_switch(_append),
	after:generate_loop_single_clonenode(insertAfter),//$('a').after($.toDOM('after'))
	before: generate_loop_single_clonenode(insertBefore),//$('a').before($.toDOM('before'))
	afterNth:generate_loop_nth(afterNth),
	beforeNth:generate_loop_nth(beforeNth),
	remove:generate_loop_return(removeloop),
	resetHTML:generate_loop_return(_resetHTML),
	next:generate_loop_return(_next),
	previous:generate_loop_return(_previous),
	//selectors
	id:generate_loop_single_return(_id),
	cls:generate_loop_single_return(_cls),
	tag:generate_loop_single_return(_tag),
	qsa:generate_loop_single_return(_qsa),
	qs:generate_loop_single_return(_qs),
	//class functions
	//classname
	cn:generate_loop_single_return(_cn),
	//classlist
	cl:generate_loop_single_return(_cl),
	//classlist functions
	clHas:generate_loop_single_return(_clHas),
	//transverse up based on a match or number
	upTo:generate_loop_single_return(_upTo),
	//copynode
	copy:generate_loop_single_return(_copy),
	//center object
	center:generate_loop_single_return(_center),
	html:generate_loop_single_return(_html),
	ohtml:generate_loop_single_return(_ohtml),
	//text
	tc:generate_loop_single_return(_tc),
	txt:generate_loop_single_return(_txt),
	//order
	parNode:generate_loop_return(_parNode),
	last:generate_loop_return(_last),
	first:generate_loop_return(_first),
	//props
	val:generate_loop_single_return(_val),
	sty:generate_loop_single_return(_sty),
	sel:generate_loop_single_return(_sel),
	//offsets
	ow:generate_loop_return(_ow),
	oh:generate_loop_return(_oh),
	ot:generate_loop_return(_ot),
	offset:generate_loop_return(_offset),
	clw:generate_loop_return(_clw),
	clh:generate_loop_return(_clh),
	//attr functions
	hasAttr:generate_loop_single_return(_hasAttr),
	//set/get attribute
	attr:generate_loop_return_triple(_attr),
	plugInto:generate_loop_return_triple(_plugInto),
	clRemove:generate_loop_single_return(_clRemove),
	clTog:generate_loop_single_return(_clTog),
	//takes a data object then places over based on nodes
	faceplate:generate_loop_return_triple(_faceplateDOM),
	removeAttr:generate_loop_single_return(_removeAttr),
	//insertAdjacentHTML
	be:generate_loop_single_return(_be),
	ab:generate_loop_single_return(_ab),
	bb:generate_loop_single_return(_bb),
	ae:generate_loop_single_return(_ae),
	//clear
	clear:generate_loop_return(_clear),
	//make action on object via acid event
	act:generate_loop_single_return(_act),
	//btn + adding
	ison:generate_loop_single_return(_ison),
	add:generate_loop_single_return(_add),
	sub:generate_loop_single_return(_sub),
	//quick changes
	hide:generate_loop_single_return(_hide),
	show:generate_loop_single_return(_show),
	toggle:generate_loop_single_return(_toggle)
};