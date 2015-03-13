//Merges together the values of each of the arrays with the values at the corresponding position.
array_extend.zip = function () {
	var array = this,
		len = array.length,
		args=_toArray(arguments),
		arguments_length = args.length,
		zip = [];
	for (var i = 0; i < len; i++) {
		var zipped = [];
		zipped.push(array[i]);
		for (var a = 0; a < arguments_length; a++) {
			zipped.push(args[a][i]);
		}
		zip.push(zipped);
	}
	return zip;
};
//unzip the array of zipped arrays
array_extend.unZip = function () {
	var array = this,
		len = array.length,
		unzip = [],
		sub = array[0],
		sub_len = sub.length;
	for (var i = 0; i < sub_len; i++) {
		unzip[i] = [];
	}
	var i = 0;
	for (var a = 0; a < sub_len; a++) {
		for (var c = 0; c < len; c++) {
			unzip[i].push(array[c][a]);
		}
		i++;
	}
	return unzip;
};