(function(){
	function save_body_info(){
		$.cache.bodyWidth=document.body.offsetWidth;
		$.cache.bodyHeight=document.body.offsetHeight;
	};

	_isDocumentReady(function(){
		_body=document.body;
		save_body_info();
	});

})();