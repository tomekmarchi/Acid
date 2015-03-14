(function(){

	$.model('hl',function(name,promise){
		var callback_wrap=function(){
			hljs.configure({
			    tabReplace: '    '
			});
			hljs.initHighlightingOnLoad();
			$.promise(name,promise);
			return false;
		};
		$.import(['//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/styles/default.min.css','//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/highlight.min.js'],callback_wrap);
	});

})();