var listReact = function (rootNode, list, name) {
		var listAdd = function (index) {
				var object = list[index];
				if (!object) {
					return false;
				}
				beforeNth(rootNode, list[index].mount(), index);
			};
		var listMod = function (object, index) {
				object.node.replace(list[index].mount());
				componentDestroy(object);
			};
		var listDestroy = function (array) {
				_each_array(array, function (item, i) {
					componentDestroy(item);
				});
			};
		var listRefresh = function (change) {
				listDestroy(change.oldValue);
				list = change.object[name];
				_each_array(list, function (item, index) {
					listAdd(index);
				});
			};
		var splice = function (change) {
				if (change.removeRange) {
					listDestroy(change.removed);
				}
				if (change.addRange) {
					change.addRange.each(change.index, function (index) {
						listAdd(index);
					});
				}
			};
		var update = function (change) {
				if (_isNaN(number_object(change.name))) {
					listRefresh(change);
				} else {
					listMod(change.oldValue, change.name);
				}
			};
		var add = function (change) {
				listAdd(number_object(change.name));
			};
		var scope = {
			splice: splice,
			update: update,
			add: add
		};
		var compiled = function (change) {
				scope[change.type](change);
			};
		compiled.kill = function () {
			rootNode = null;
			list = null;
			scope = null;
			compiled = null;
		};
		return compiled;
	};
$.reactNodeList = listReact;