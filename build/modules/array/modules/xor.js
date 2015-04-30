//Creates an array that is the symmetric difference of the provided arrays. See Wikipedia for more details.
array_extend.xor = function () {
	var numArgs = arguments.length;

    if (!numArgs) {
      return _uniq(this);
    }

    var result = xorBase(this, arguments[0]);

    for (var i = 1; i < numArgs; i++) {
      var result = xorBase(result, arguments[i]);
    }

    return result;
};