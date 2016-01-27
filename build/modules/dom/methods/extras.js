//btn + adding
var addNode = function (node, n) { //get number add 1 to it
		nodeTextContent(node,Number(nodeTextContent(node) || 0) + Number(n || 1));
		return node;
	},
	subNode = function (node, n) { //get number subtract 1
		nodeTextContent(node,Number(nodeTextContent(node) || 0) - Number(n || 1));
		return node;
	},
	//quick changes
	hideNode = function (node) { //hide class toggle
		nodeStyle(node,'display','none');
		return node;
	},
	showNode = function (node) { //show class toggle
		nodeStyle(node,'display',emptyString);
		return node;
	},
	toggleNode = function (node, classname) {
		if(classname){
			nodeClassListToggle(node,classname);
		}else{
			if(nodeStyle(node,'display')==='none'){
				showNode(node);
			}else {
				hideNode(node);
			}
		}
		return node;
	};
