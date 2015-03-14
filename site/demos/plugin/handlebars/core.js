(function () {

	//core module
	var required = ['hb', '../../../scripts/models/css/css.js', '../../../scripts/models/libs/hl.js'],
		module = function (hb, css, hl) {
			$.promise(['css', 'hl'], 'payload', function () {
				var template = hb.compile('<div class="pad_box"><h1>{{title}}</h1><div class="body">{{body}}</div></div>');
				var context = {
					title: "Handlebars template + Acid",
					body: "Adding plugins to ACID hello world"
				};
				var html = template(context);
				$id('wrapper').ab(html);
			});
			css('css', 'payload');
			hl('hl', 'payload');
		};
	$.promise(['plugins', 'core'], 'appReady', function () {
		$.module(required, module); //launched in async
	});
	$.plugin({
		Handlebars: {
			url: 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.0/handlebars.min.js',
			name: 'hb'
		}
	}, function () {
		$.promise('plugins', 'appReady');
	});
	$.model('core', function () {
		$.promise('core', 'appReady');
	});
})();