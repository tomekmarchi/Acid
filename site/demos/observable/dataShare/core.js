(function () {
	//core model used for onready
	$.model('core', function () {
		$.ensureInvoke('/site/scripts/models/css/css.js');

		$.factory('dataShare', {
			template:`<div><a target="_blank" href="core.js">See the code</a><input placeholder="Shared Text" data-node="input" data-bind="factoryText[value:keyup]"></div>`,
			data: {
				factoryText:''
			},
			component:{
				item:{
					template: `<div>
					<h3 data-node="titleNode" data-bind="title[textValue]"></h3>
					<p data-node="textNode" data-bind="text[textValue]"></p>
					<input type="text" placeholder="Title" data-node="input" data-bind="title[value:keyup]" />
					</div>`,
					data: {
						title:''
					},
					factoryText:function(){
						this.data.text=this.rootFactory.data.factoryText;
					}
				}
			}
		});

		var dataShare=$.model('dataShare').render();

		$('#wrapper').ap(dataShare.mount());

		for(var i=0; i<4; i++){
			$('#wrapper').ap(dataShare.component.item.render().mount());
		}

	});
})();