(function () {
	var width = document.body.offsetWidth,
		optimal_max = 400,
		optimal_min = 100;
	var column_number = 1,
		possible = [];
	while (column_number) {
		var wrap_test = width / column_number;
		if (wrap_test >= optimal_min && wrap_test <= optimal_max) {
			possible.push(wrap_test);
		} else if (wrap_test < optimal_min) {
			break;
		}
		column_number++;
	}
	var possible_len = possible.length;
	if (possible_len == 0) {
		var column_number = 1,
			cls = 100;
	} else {
		var cls = (possible[possible_len - 1] / width) * 100,
			column_number = column_number - 1;
	}
	var width = document.body.offsetHeight,
		optimal_max = 400,
		optimal_min = 100;
	var column_number = 1,
		possible_columns = [],
		possible = [];
	while (column_number) {
		var wrap_test = width / column_number;
		if (wrap_test >= optimal_min && wrap_test <= optimal_max) {
			possible.push(wrap_test);
		} else if (wrap_test < optimal_min) {
			break;
		}
		column_number++;
	}
	var possible_len = possible.length;
	if (possible_len == 0) {
		var column_number = 1,
			cls = 100;
	} else {
		var cls = (possible[possible_len - 1] / width) * 100,
			column_number = column_number - 1;
	}
	$.model('tiles', {});
})();