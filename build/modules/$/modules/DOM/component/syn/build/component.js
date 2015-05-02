//build a view for a node
var _componentRender = function (config, data) {
		//uses a porxy for super fast binding plus avoiding mem usage
		if (_isFunction(config)) {
			var config = _bind_call(config);
		}
		var model = build_model(config);
		var copyData = config.component.data || {};

		model.data = {};
		model.rootFactory = config.rootFactory;


		//bind methods to new model
		generateMethods(model, config.component);
		//generate component specific methods
		generateComponentMethods(model, config.component);

		//compile initial state
		prepareCompileData(model, model.data, copyData);

		if(config.component.view || config.component.template){
			//compile DOM
			compileView(model, model.modelName, config.component.view, config.component.template);
			//cache nodes and correct actions
			compileNodes(model);
			//faceplate
			compileFaceplate(model, config.component.view || config.component.faceplate);
			//check bing
			checkBinding(model,model.modelName,model.eventName);
		}
		//add helpers
		addHelpers(model,config.component.helper);
		
		//set data 
		if (data) {
			model.set(data);
		}
		model.component=true;
		return model;
	};

var _slate = function(modelName, config , lean , factory){
		if(!config){
			return _model[modelName];
		}else if(_isFunction(config)){
			return _model[modelName]=function(){
				return _slate(modelName,config.apply(null,_toArray(arguments)));
			};
		}

		var model =  _model[modelName] = {};
		model.component = config;
		var config = model.component;

		if(factory){
			model.rootFactory=factory;
		}
		model.share={};
		model.modelName=modelName;
		model.component=config;
		model.isModelSlate=true;

		_componentRender(model);
		return model;
};

$.slate=_slate;

var _component = function (modelName, config , lean , factory) {
		if(!config){
			return _model[modelName];
		}else if(_isFunction(config)){
			return _model[modelName]=function(){
				return _component(modelName,config.apply(null,_toArray(arguments)));
			};
		}
		var model =  _model[modelName] = {};
		model.component = config;
		var config = model.component;
		var onRender=config.render;

		if(factory){
			model.rootFactory=factory;
		}
		model.componentConfig=true;
		model.share={};
		model.rendered={};
		model.componentList=[];
		model.modelName=modelName;
		if(!componentsMade[modelName]){
			componentsMade[modelName]={};
		}
		//Methods for child components
		model.components = function(){
			return componentsMade[modelName];
		};
		//Methods for child components
		model.notify = function(change){
			change.origin.push(modelName);
			_each_object(componentsMade[modelName],function(item){
				item.notify(change);
			});
		};
		model.render=function(data){
			var component = _componentRender(model,data);
			if(onRender){
				onRender.call(component);
			}
			return component;
		};
		model.componentsNode = function(){
			return modelComponentsNode(model);
		};
		var destroyComponents = model.destroyComponents = function () {
			return modelDestroyChildren(model);
		};
		model.killComponents = function () {
			return modelKillChildren(model);
		};
		model.mountComponents = function () {
			return modelMountChildren(model);
		};
		model.unMountComponents = function () {
			return 	modelUnMountChildren(model);
		};
		model.kill = function(){
			destroyComponents();
			_model[modelName]=null;
		};
		return model;
	};

$.component = _component;