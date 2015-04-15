var prepareCompileData = function (object, objectData , copyData) {
		if (_isFunction(copyData)) {
			var copyData = copyData.call(object);
		}

		_each_object(copyData, function (item, key) {
			objectData[key] = item;
		});
	};