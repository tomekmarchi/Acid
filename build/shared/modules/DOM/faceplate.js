//takes a data object then places over based on nodes
var _faceplateDOM = function (node, data, name) {

		if(!name){
			var name='data-faceplate';
		}

		if(_isString(name)){//faster
			if(_has(name,'data-')){
				var face =  _faceplate[node.getAttribute(name)];
			}else{
				var face =  _faceplate[name];
			}
		}else {//fastest
			var face = name;
		}

		face(data, node);
		return node;
	};