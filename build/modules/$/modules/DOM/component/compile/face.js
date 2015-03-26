var compileFaceplate = function (object, config) {
		if (_isString(config.view)) {
			var face = _faceplate[config.view];
			if (face) {
				face(object, object.node);
			}
		}
	};