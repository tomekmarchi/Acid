var _ensure = $.ensure =(function () {

	//ensure a model is loaded if not load it then launch fn again
	var ensure = function (string, call) {
			var models = _model,
				root = string.split('.')[0],
				url = root + ".js",
				model = _find(root, models);
			if (model) {
				if (call) {
					_async(function () {
						call(model);
						call = null;
						model = null;
					});
				}
				return true;
			}
			return _import(url, {
				//callback
				call: function () {
					var model = _find(root, models);
					if (call) {
						_async(function () {
							call(model);
							call = null;
							root = null;
							model = null;
						});
					}
					return false;
				}
			});
		};

		//import an array of items
	var array_ensure = function (array,call) {
		var len = array.length,
			array_model = [],
			name = array.join('').replace(regex_fowardslash, '_').replace(regex_dash, '_').replace(regex_dot, '_') + '_promise';
		//create promise
		_promise(array, name, function () {
			for (var i = 0; i < array.length; i++) {
				var item = array[i];
				var splitIt=item.split('/'),
					model = _find(splitIt[splitIt.length-1].split('.js')[0], _model);
					if (model) {
						array_model[i]=model;
					}
			}
			_async(function () {
				call.apply(call, array_model);
				call = null;
				array_model = null;
			});
			return false;
		});
		//make imports
		for (var i = 0; i < len; i++) {
			(function (item, n) {
				var url=(_has(item,'.js'))? item:item + '.js';
				_import(url,{
					call: function () {
						_promised(item, n);
						item = null;
						n = null;
						return false;
					}
				},1);
			})(array[i], name);
		}
		var len = null,
			name = null;
		return false;
	};

	return function(key,call){
		if(_isString(key)){
			return ensure(key,call);
		}
		return array_ensure(key,call);
	};

})();

$.ensureInvoke=function(ensures){
	var ensures=(_isArray(ensures))? ensures : [ensures];
	_ensure(ensures,function(){
		_each_array(ensures,function(item){
			var splitIt=item.split('/'),
				model = _find(splitIt[splitIt.length-1].split('.js')[0], _model);
			if(model){
				model();
			}
		});
		ensures=null;
	});
};