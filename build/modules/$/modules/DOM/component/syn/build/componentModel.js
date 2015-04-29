//build the initial model
var build_model = function (config) {
	if(!config.isModelSlate){
		//root component model name
		var ogModelName = config.modelName;
		var componentList=config.componentList;
		var len=componentList.length;
		var id=len;
		for(var i=0; i<len; i++){
			if(!componentList[i]){
				var id=i;
				break;
			}
		}
		//component's new name
		var modelName = ogModelName+'Component'+ (id);
	}else {
		var modelName = ogModelName = config.modelName;
	}
	var componentSubscribeTo = config.component.subscribeTo;
	var componentShare = config.component.share;

	if(!config.isModelSlate){
		//save to models
		var newModel = _model[modelName] = {
			root:config,
			componentID:id,
			ogModelName: ogModelName,
			modelName: modelName,
			eventName: modelName + '.',
			subscriber:{},
			subscribed:{},
			mounted:false,
			data: {},
			bind:{},
			bindedNodes:{},
			node: {},
			nodes: {},
			observers: {},
			share: {},
			component:true,
			subscribeType:true
		};
	}else{
		var newModel = config;
		newModel.ogModelName= ogModelName;
		newModel.eventName= modelName + '.';
		newModel.subscriber={};
		newModel.subscribed={};
		newModel.mounted=false;
		newModel.data= {};
		newModel.bind={};
		newModel.bindedNodes={};
		newModel.node= {};
		newModel.nodes= {};
		newModel.observers= {};
		newModel.share= {};
		newModel.isModelSlate=true;
		newModel.subscribeType=1;
	}

	if(id >= 0){
		config.componentList[id]=newModel;
	}

	//extend share that was on root component model
	_each_object(config.share,function(item,key){
		if(key != ogModelName){
			newModel.share[key]=item;
		}
	});

	if(!config.slate){
		//add root model to share
		newModel.share[ogModelName]=config;
	}

	//subscribe to models
	if (componentSubscribeTo) {
		var isArraycomponentSubscribeTo = _isArray(componentSubscribeTo);
		var isObjectcomponentSubscribeTo = isPlainObject(componentSubscribeTo);
		var isStringcomponentSubscribeTo = _isString(componentSubscribeTo);
		if(isArraycomponentSubscribeTo || isStringcomponentSubscribeTo){
			var componentSubscribeTo = (_isArray(componentSubscribeTo)) ? componentSubscribeTo : [componentSubscribeTo];
			_each_array(componentSubscribeTo, function (item,key) {
				if(_isString(item)){
					_model[item].addSubscriber(modelName);
				}else{
					item.addSubscriber(modelName);
				}
			});
		}else if(isObjectcomponentSubscribeTo){
			if(componentSubscribeTo.modelName){
				componentSubscribeTo.addSubscriber(modelName);
			}else{
				_each_object(componentSubscribeTo, function (item,key) {
					if(_isString(item)){
						_model[item].addSubscriber(modelName);
					}else{
						item.addSubscriber(modelName);
					}
				});
			}
		}
	}

	//add shares for component
	if (componentShare) {
		var isArrayComponentShare = _isArray(componentShare);
		var isObjectComponentShare = isPlainObject(componentShare);
		var isStringComponentShare = _isString(componentShare);
		if(isArrayComponentShare || isStringComponentShare){
			var componentShare = (_isArray(componentShare)) ? componentShare : [componentShare];
			_each_array(componentShare, function (item,key) {
				if(_isString(item)){
					newModel.share[item]=_model[item];
				}else{
					newModel.share[key]=item;
				}
			});
		}else if(isObjectComponentShare){
			_each_object(componentShare, function (item,key) {
				if(_isString(item)){
					newModel.share[item]=_model[item];
				}else{
					newModel.share[key]=item;
				}
			});
		}
	}

	if(!config.isModelSlate){
		//keep track of the components made from the original model
		componentsMade[ogModelName][modelName] = newModel;
	}
	return newModel;
};