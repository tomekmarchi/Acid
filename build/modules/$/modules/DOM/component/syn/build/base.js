/*A Base is an observable data structure that can be subscribed to as well as subscribe to other Models and Bases.
It's primary purpose is to hold and notify connected models and structures of it's changes. Think of it as a small live database. Bases are rendered on the spot. */
var _synBase = function (modelName, object, lean) {
		if(object === undefined){
			return _model[modelName];
		}else if(_isFunction(object)){
			return _model[modelName]=function(){
				return _synBase(modelName,object.apply(null,_toArray(arguments)));
			};
		}
		var cloneObject = _object_assign({},object);
		var model = _model[modelName]=object;
		model.base=true;
		model.bind={};

		renderDefaultSynModel(model,modelName,model.subscribeTo,true);

		return model;
	};

$.base = _synBase;