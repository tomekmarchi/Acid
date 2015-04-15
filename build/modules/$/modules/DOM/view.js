//combine a template and a faceplate
var _view = function (name,html,funct) {
		if(!funct){
			var node=_template(name),
				face=_faceplate[name];
			if(face){
				_faceplate[name](html,node);
			}
			return node;
		}else{
			_faceplate(name,funct);
		}
		_template(name,html);
		return true;
	};

$.view = _view;