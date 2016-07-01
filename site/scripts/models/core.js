$.model('bench',function(testThis,callback){
	var start=performance.now();
	for (var i = 0; i < 100500; i++) {
		testThis();
	}
	callback(performance.now()-start);
});


$.module({
   name: 'core',
   import: [$, 'each', 'has', 'docs/api.js', 'querySelector', 'require', 'raf','bench','//cdn.ractivejs.org/latest/ractive.js'],
   invoke: function($, each, has, api, querySelector, require, raf,bench,ractive) {
       var dictionary = {};
       var methods = '';
	   ractive=Ractive;
       each(api, function(item, key) {
           if (key !== 'display') {
               each(api[key], function(subItem, subKey) {
                   dictionary[subKey] = subItem;
               });
           }
       });
	   var ractive = new Ractive({
		  el: '.contentWrap',
		  template: ` {{#methods}}
				<h6>{{this.key}}</h6>
				<p><b>Description</b><br />{{this.descrip}}</p>
				<p><b>Example</b><br />{{this.example}}</p>
				<p><b>Returns</b><br />{{this.returns}}</p>
			  {{/}}`,
		  data: {
			  methods:[]
		  }
		});
       require('/site/styles/resize.css', function(resize) {
           console.log(resize);
           each($, function(item, key) {
               if (!has(key, ['on', 'eventNames'])) {
                   var descrip = dictionary[key] || {
                       descrip: '',
                       example: '',
                       returns: ''
                   };
				   if(dictionary[key]){
					   ractive.push('methods',dictionary[key]);
				   }
               }
           });
       });
   }
});
