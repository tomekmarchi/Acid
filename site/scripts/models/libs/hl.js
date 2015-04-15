(function(){

	$.model('hl',function(name,promise){
		var callback_wrap=function(){
			hljs.configure({
			    tabReplace: '    '
			});
			hljs.initHighlightingOnLoad();
			if(promise){
				$.promise(name,promise);
			}
			return false;
		};
		$.import(['//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.5/styles/default.min.css','//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.5/highlight.min.js'],callback_wrap);
	});

})();