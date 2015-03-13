(function(){
	$('navigation_bar').be('<div data-mouseover="tip.show" data-mouseout="tip.hide" class="content-box-size topnavbt right nohl" data-tooltip="Close Page" data-click="api.close">\
	<i class="icon icon-cancel"></i></div>');

	$.model('page',{
		close:function(){

		},
		open:function(){

		}
	});
})();