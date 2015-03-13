(function(){

	//core model used for onready
	$.model('core',function(){
		$.import(['//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/styles/default.min.css','//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/highlight.min.js','todo.js'],{
			call:function(){
				hljs.configure({
			        tabReplace: '    '
			    });
			    hljs.initHighlightingOnLoad();
			}
		});
	});
})();