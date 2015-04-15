//combine a template and a faceplate
var _view = function (name,data,funct) {
		if(!funct){
			var node=_template(name),
				face=_faceplate[name];
			if(face){
				_each_array(node.querySelectorAll('[data-node]'),function(item,index){
					data[item.attr('data-node')]=item;
				});
				data.rootNode=node;
				_faceplate[name](data,node);
			}
			return node;
		}else{
			_faceplate(name,funct);
		}
		_template(name,data);
		return true;
	};

$.view = _view;