$('core', {
	import: ['/docs/api.js','/docs/art.js', '//cdn.ractivejs.org/latest/ractive.js'],
	invoke: function(api,art) {
		var {
			each,
			map,
			has,
			sortAlpha,
			isFunction
		} = $;
		each(art,(item,key)=>{
			console.log(item);
		});
		var dictionary = {};
		var methods = '';
		var ractive = new Ractive({
			el: 'body',
			template: '#template',
			data: {
				color: 'pink',
				language: {
					title: 'Acid.js',
					description: `A utility library for building conscious web apps.`,
				},
				totalMethods:0,
				tab: 'methods',
				methods: [],
				list: []
			}
		});
		each(api, function(item, key) {
			each(item, function(subItem, subKey) {
				if (subKey && subItem.descrip) {
					subItem.key = subKey;
					ractive.push('methods', subItem);
				}
			});
		});
		var list = [],
			totalMethods = 0;
		each($, function(item, key) {
			if (isFunction(item)) {
				list.push({
					name: key.trim()
				});
				totalMethods++;
			}
		});
		sortAlpha(list,'name');
		ractive.push('list', ...list);
		ractive.set('totalMethods', totalMethods);
		top.ractive = ractive;
	}
});
