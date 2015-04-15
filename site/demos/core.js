(function(){

	$.model('core',function(){
		$.ensureInvoke('/site/scripts/models/css/css.js');

		$.view('item','<li><a class="f14 bold"></a><br /><span></span></li>',function(data,node){
			node.qs('a').tc(data.name).attr('href',data.url);
			node.qs('span').tc(data.descrip);
		});

		$.view('compare','<div><b></b> <a class="f14"></a> & <a class="f14"></a><br /><span></span></div>',function(data,node){
			node.qs('b').tc(data.name);
			node.qs('a').tc(data.url.name).attr('href',data.url.url);
			node.tag('a')[1].tc(data.url_other.name).attr('href',data.url_other.url);
			node.qs('span').tc(data.descrip);
		});

		$.ensure('list',function(list){
			var frag=$.frag();

			list.examples.each(function(item,i){
				frag.ap($.view('item',item));
			});

			$('#demo_list').ap(frag);

			var frag=$.frag();
			list.compare.each(function(item,i){
				frag.ap($.view('compare',item));
			});

			$('#compare_list').ap(frag);
		});


	});

})();