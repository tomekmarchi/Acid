//btn + adding
var _ison = function (node, n) {
		var cls = node.classList;
		if (cls.contains('ison')) {
			if (n) {
				node.textContent = Number(node.textContent) - Number(n);
			}
			cls.remove('ison');
		} else {
			if (n) {
				node.textContent = Number(node.textContent) + Number(n);
			}
			cls.add('ison');
		}
		return node;
	},
	_add = function (node, n) { //get number add 1 to it
		node.textContent = Number(node.textContent) + Number(n || 1);
		return node;
	},
	_sub = function (node, n) { //get number subtract 1
		node.textContent = Number(node.textContent) - Number(n || 1);
		return node;
	},
	//quick changes
	_hide = function (node) { //hide class toggle
		node.style.display='none';
		return node;
	},
	_show = function (node) { //show class toggle
		node.style.display='';
		return node;
	},
	_toggle = function (node, classname) {
		if(classname){
			node.classList.toggle(classname);
		}else{
			var display=node.style.display;
			if(display=='none'){
				node.style.display='';
			}else {
				node.style.display='none';
			}
		}
		return node;
	};