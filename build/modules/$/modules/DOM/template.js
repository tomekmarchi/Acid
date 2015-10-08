/*
	This is basic templating
		Cloning nodes
		Returning a node from a function stored
		Faceplating data over it via direct DOM manipulation
	It's main purpose is to simple store nodes then return a copy
	or a compiled version.
*/
var _template = (data) => {
	var render,
		isRenderDom,
		isRenderFunction,
		isRenderString,
		name = data,
		faceplate,
		modelName,
		templateItem;
	if (!_isString(data)) {
		render = data.render;
		isRenderDom = isDom(render);
		isRenderFunction = _isFunction(render);
		isRenderString = _isString(render);
		faceplate = data.faceplate,
		name = data.name;
		modelName = data.modelName;

		if (isRenderString) {
			isRenderDom = true;
			render = _toDOM(render);
		}

		if (isRenderDom) {
			templateItem = (optionalData) => {
				var returned=_clone(render,true);
				if(faceplate){
					faceplate(returned,optionalData);
				}
				return returned;
			};
		}else{
			templateItem = (optionalData) => {
				var returned=_toDOM(render(optionalData));
				if(faceplate){
					faceplate(returned,optionalData);
				}
				return returned;
			};
		}

		_template[name] = templateItem;
	}
	return _template[name];
};

$.template = _template;
