//Merges together the values of each of the arrays with the values at the corresponding position.
$.zip = function (array) {
	var len = array.length,
		args=_toArray(arguments),
		arguments_length = args.length,
		zip = [],
		i,
		a,
		zipped;
	for (i = 0; i < len; i++) {
		zipped = [];
		zipped.push(array[i]);
		for (a = 0; a < arguments_length; a++) {
			zipped.push(args[a][i]);
		}
		zip.push(zipped);
	}
	return zip;
};
//unzip the array of zipped arrays
$.unZip = function (array) {
	var len = array.length,
		unzip = [],
		i,
		a,
		c,
		sub = array[0],
		sub_len = sub.length;

	for (i = 0; i < sub_len; i++) {
		unzip[i] = [];
	}
	for (a = 0; a < sub_len; a++) {
		for (c = 0; c < len; c++) {
			unzip[i].push(array[c][a]);
		}
		i++;
	}
	return unzip;
};
