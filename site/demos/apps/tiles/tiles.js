(function () {
	function nearestEvenInt(to) {
		return (to % 2 == 0) ? to : (to - 1);
	}

	function getTilesAmount(width, padding, optimal_max, optimal_min) {
		var og=width,
			width = nearestEvenInt(width) - (padding*2);

		var column_number = 1,
			possible = [];

		while (column_number) {
			var wrap_test = width / column_number;
			if (wrap_test >= optimal_min && wrap_test <= optimal_max) {
				possible.push({
					width: wrap_test,
					columns: column_number
				});
			} else if (wrap_test < optimal_min) {
				break;
			}
			column_number++;
		}
		var valid = [];
		possible.each(function (item) {
			if ($.isInt(item.width)) {
				valid.push(item);
			}
		});

		if(valid.length == 0){
			return getTilesAmount(width, padding+(padding/2), optimal_max, optimal_min);
		}

		var cls = valid[valid.length - 1];
		var data = {
			dimension: cls.width,
			amount: cls.columns,
			valid: valid,
			padding:padding,
			container: og
		};
		return data;
	}

	function calculate(data){
		var width=getTilesAmount(data.width, data.padding, data.widthMax, data.widthMin);
		var height=getTilesAmount(data.height, width.padding, data.heightMax, data.heightMin);
		var data={width:width,height:height,padding:width.padding};
		return data;
	}


	$.model('tiles', {
		calculate:calculate,
		build:function(data){
			var config=calculate(data);
			data.wrap.sty('width',config.width.container+'px')
			.sty('height',config.height.container+'px')
			.sty('padding',config.padding+'px').center();

			var retuned={
				total:config.height.amount*config.width.amount,
				height:config.height.dimension+'px',
				width:config.width.dimension+'px',
				data:config
			};

			return retuned;
		},
	});


})();