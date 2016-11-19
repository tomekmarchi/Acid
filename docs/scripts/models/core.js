$('core', {
	import: ['/docs/api.js', '//cdn.ractivejs.org/latest/ractive.js'],
	invoke: function(api) {
		var {
			each,
			has
		} = $;
		var dictionary = {};
		var methods = '';
		var ractive = new Ractive({
			el: 'body',
			template: '#template',
			data: {
				color:'pink',
				language: {
					title: 'Acid.js',
					description: `A utility library for building conscious web apps.`,
				},
				methods: []
			}
		});
		each(api, function(item, key) {
			each(item, function(subItem, subKey) {
				if(subKey && subItem.descrip){
					subItem.key = subKey;
					ractive.push('methods', subItem);
				}
			});
		});
		top.ractive = ractive;
	}
});
