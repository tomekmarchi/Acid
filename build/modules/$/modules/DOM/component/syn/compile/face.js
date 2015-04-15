var compileFaceplate = function (object, config , view) {
		if (_isString(view)) {
			var face = _faceplate[view];
			if (face) {
				face(object, object.node);
			}
		}
	};