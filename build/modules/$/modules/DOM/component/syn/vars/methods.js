function loopMutations(mutations,target,model,name){
	 mutations.each(function(mutation) {
		var type=mutation.type;
		var prop=model[name];
		if(prop){
			if(type==='attributes'){
				var attributeName=mutation.attributeName;
				var method= prop[attributeName] || prop.attributes;
			}else if(type==='childList'){
				var method=prop.childList;
			}else if(type==='characterData'){
				var method=prop.characterData;
			}
			if(method){
				return method.apply(model,[target,mutation]);
			}
		}
	  });
};

var mutationConfig = { attributes: true, childList: true, characterData: true };

function obsrvDOM(target,model,name){
	var observer = new MutationObserver(function(mutations) {
		return loopMutations(mutations,target,model,name);
	});
	observer.observe(target, mutationConfig);
	return observer;
}

//kills observer logic and launches an unmount function
var componentKill = function (object) {
		object.root.componentList[object.componentID]=null;
		var modelName = object.modelName,
			ogName = object.ogModelName;
		componentsMade[ogName][modelName] = null;
		_unobserve(object.data, object.observerFN);
		if (object.observers) {
			_each_object(object.observers, function (item) {
				var type = item[0];
				if (isPlainObject(type)) {
					_unobserve(item[0], item[1]);
				} else if (_isArray(type)) {
					_array_unobserve(item[0], item[1]);
				}
			});
		}
		_each_array(object.subscribed, function (item,key) {
			_model[key].subscriber[modelName] = null;
		});
		_each_array(object.subscriber, function (item, key) {
			_model[key].subscribed[modelName] = null;
			_model[key].share[modelName]=null;
		});
		_model[modelName] = null;
		componentID--;
		var object = null;
		return null;
	};

//unmount function on component
var componentUnMount = function (object, unMount) {
		object.mounted=false;
		if (unMount) {
			unMount();
		}
		if(object.node){
			return _removeNode(object.node);
		}
		return object;
	};
//mount function on component
var componentMount = function (object, mount, set) {
		object.mounted=true;
		if (set) {
			componentSet(object, set);
		}
		if (mount) {
			mount();
		}
		if(object.node){
			return object.node;
		}
		return object;
	};
//remove node plus kill
var componentDestroy = function (object) {
		object.unMount();
		object.kill();
	};
//set to data
var componentSet = function (object, key, value) {
		if (value) {
			object.data[key] = value;
		} else if (isPlainObject(key)) {
			_each_object(key, function (item, key) {
				object.data[key] = item;
			});
		}
		return object.data[key];
	};