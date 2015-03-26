(function(){

	var depend=['tiles.js'],
		app=function(tiles){
			var data=tiles.build({
				wrap:$('#tile_container'),
				width:document.body.ow(),
				padding:8,
				widthMin:150,
				widthMax:400,
				height:document.body.oh(),
				heightMin:150,
				heightMax:400
			});

			console.log(data.data);

			var block=$.tag('div').cl('tile','shadow-inset-only-2px').sty('float','left'),
				frag=$.frag(),
				animations=['slideinft', 'slideinfb', 'slideinfl', 'slideinfr','popin','spaceInUp','spaceInDown','fadein'];

			var total=data.total,
				height=data.height,
				width=data.width;

			for(var i=0; i< total; i++){
				$('#tile_container').ap(block.clone().sty('width',width).sty('height',height).cl(animations.sample()));
			}

			$('#tile_container').ap(frag);


		};

	var module=$.module(depend,app);

	//core model used for onready
	$.model('core',function(){
		module();
	});

})();