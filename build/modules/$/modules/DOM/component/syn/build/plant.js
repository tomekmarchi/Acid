//Plants are used to generate large application areas such as pages that contain multiple factories, Bases, routers, models, components, modules, defines, scripts, styles and other resources
var _plant = function (plantName, instructions) {
		if(object === undefined){
			return _model[modelName];
		}else if(_isFunction(instructions)){
			return _model[modelName]=function(){
				return _plant(modelName,instructions.apply(null,_toArray(arguments)));
			};
		}
		if(instructions){
			var instructions=instructions(plantName);
		}

		var plantsObject=instructions.plants,
			factoriesObject=instructions.factories,
			basesObject=instructions.bases,
			modelsObject=instructions.models,
			plantFunctions=instructions.plantModel;

		var plantID= 0,
			factoryID= 0,
			baseID= 0,
			modelID= 0,
			renderID= 0;

		//Plant status 0 default 1 Ready
		var model = _model[plantName] = {
			state: {status:0},
			stateProp: {},
			instructions: instructions,
			plant: true,
			subscribeType:1,
			plants: {},
			factories: {},
			bases: {},
			models: {},
			imports: {},
			renders: [],
			renderQueue:[],
			onReady:function(){
				instructions.onReady.call(model);
			},
			rendered: function (index) {
				return {
					factories: this.factories,
					bases: this.bases,
					models: this.models,
					plants: this.plants
				};
			},
			renderPlants: function () {
				if(!this.state.status){
					return renderQueue.push('plants');
				}
				return _each_object(plantsObject, function (item, key) {
					return model.plants[key] = _synModel(plantName + key + (this.plantID++), _object_assign({},item));
				});
			},
			renderFactories: function () {
				if(!this.state.status){
					return renderQueue.push('factories');
				}
				return _each_object(factoriesObject, function (item, key) {
					return model.factories[key] = _synModel(plantName + key + (this.factoryID++), _object_assign({},item));
				});
			},
			renderBases: function () {
				if(!this.state.status){
					return renderQueue.push('bases');
				}
				return _each_object(basesObject, function (item, key) {
					return model.bases[key] = _synModel(plantName + key + (this.baseID++), _object_assign({},item));
				});
			},
			renderModels: function () {
				if(!this.state.status){
					return renderQueue.push('models');
				}
				return _each_object(modelsObject, function (item, key) {
					return model.models[key] = _synModel(plantName + key + (this.modelID++), _object_assign({},item));
				});
			},
			render: function () {
				if(!this.state.status){
					return renderQueue.push('render');
				}
				var rendered = {
					plants: this.renderPlants(),
					factories: this.renderFactories(),
					bases: this.renderBases(),
					models: this.renderModels(),
				};
				rendered.indexID = renders.push(rendered);
				return rendered;
			},
			notifyPlants:function(change){
				_each_object(this.plants,function(item){
					item.notify(change,plantName);
				});
			},
			notifyFactories:function(change){
				_each_object(this.factories,function(item){
					item.notify(change,plantName);
				});
			},
			notifyFactoriesPrivate:function(change){
				_each_object(this.factories,function(item){
					item.privateNotify(change,plantName);
				});
			},
			notifyBases:function(change){
				_each_object(this.bases,function(item){
					item.notify(change,plantName);
				});
			},
			notifyBasesPrivate:function(change){
				_each_object(this.bases,function(item){
					item.privateNotify(change,plantName);
				});
			},
			//Notify a model of a change
			notifyModel : function(notifyName,change){
				return _model[notifyName].notify(recompileChamge(change,plantName),plantName);
			},
			notifyFactoryComponents : function(notifyName,change){
				var change=recompileChamge(change,modelName);
				_each_object(componentsMade[notifyName],function(item,key){
					item.notify(change);
				});
			},
			notify:function(change){

			}
		};

		if(!instructions.imports){
			model.state.status=0;
		}

		_each_object(plantFunctions,function(item,key){
			model[key]=item.bind(model);
		});

		//observe plant state
		_observe(model.state, plantStateFN);
		_observe(model.stateProp, plantStateWatcher);

		return model;
	};
$.plant = _plant;