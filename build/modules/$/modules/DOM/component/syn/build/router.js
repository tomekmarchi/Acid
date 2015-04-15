/*A router is for notifying other objects of it's changes via a manual notify*/
//build the component model
var updateLocationKeysRegex = ['host', 'hostname', 'href', 'hash', 'origin', 'pathname', 'port', 'protocol', 'search'];
var updateLocation = function(modelState, model) {
    _each_array(updateLocationKeysRegex, function(item, key) {
        modelState[item] = _global.location[item];
    });
    var currentPath = modelState.currentPath = modelState.pathname.replace(modelState.root, '/');
    modelState.isIndex = (currentPath === '/');
    modelState.currentPathLocations = currentPath.split('/');
    model.stateChange(modelState);
    return model;
};
var urlRouterPushState = function(url, title, object, modelState, model) {
    if (url === '/') {
        var url = modelState.root;
    }else{
    	var url = modelState.root+url;
    }
    _historyPushState.apply(history, [object, title, url]);
    updateLocation(modelState,model);
    return model;
};
var urlRouterPushStateKill = function(wrapKill, updateState) {
    $eventremove(_global, "popstate", updateState);
    return wrapKill();
};
var _router = function(modelName, object, lean) {
    if (object === undefined) {
        return _model[modelName];
    } else if (_isFunction(object)) {
        return _model[modelName] = function() {
            return _plant(modelName, object.apply(null, _toArray(arguments)));
        };
    }
    //create model
    var model = _model[modelName] = object;
    //default props for RMs
    modelDefaultProps(model, modelName, 1);
    //type of model
    model.router = true;
    //router state
    var modelState = model.privateData;
    //notify models
    notifyModel(model, modelName);
    //notify others
    notifyFactoryComponents(model);
    //custom router functions
    addCustomMethods(model);
    //observe changed data
    modelObserverFunctions(model, modelName);
    //observers
    _observe(model.data, model.observerFN);
    _observe(model.privateData, model.privateDataChanges);
    //Methods for pushStateRouter mode
    if (model.pushStateRouter === true) {
        var updateState = model.updateState = function() {
            return updateLocation(modelState, model);
        };
        model.push = function(url, title, object) {
            return urlRouterPushState(url, title, object, modelState, model);
        };
        //kill the router
        var wrapKill = model.kill;
        model.kill = function(changes) {
            return urlRouterPushStateKill(wrapKill, updateState);
        };
        //update the current state
        updateState();
        //listen on popState changes
        $eventadd(window, "popstate", updateState);
    }
    //set the router status to true meaning operating
    model.data.routerStatus = true;
    return model;
};
$.router = _router;