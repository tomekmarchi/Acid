//takes a data object then places over based on nodes
var _faceplateDOM = function (node, data, name) {
		var face;

		if(!name){
			name='data-faceplate';
		}

		if(_isString(name)){//faster
			if(_has(name,'data-')){
				face =  _faceplate[node.getAttribute(name)];
			}else{
				face =  _faceplate[name];
			}
		}else {//fastest
			face = name;
		}

		face(data, node);

		data=null;
		face=null;
		name=null;
		return node;
	};