(function () {
	//core model used for onready
	$.model('core', function () {
		$.ensureInvoke('/site/scripts/models/css/css.js');

		$.factory('dataShare', {
			template:`<div><a target="_blank" href="core.js">See the code</a><input placeholder="Shared Text" data-node="input" data-bind="value[keyup:text]"></div>`,
			data: {
				text:''
			},
			component:{
				template: `<div>
				<h3 data-node="title">Title</h3>
				<p data-node="text">TEXT</p>
				<input placeholder="Title" data-node="input" data-keyup="this.onChange">
				</div>`,
				data: {
					title:''
				},
				text: function (change) {
					this.nodes.text.tc(this.root.data.text || 'TEXT');
				},
				onChange: function (obj) {
					this.data.title = obj.value;
				},
				title: function () {
					this.nodes.title.tc(this.data.title || 'Title');
				}
			}
		});

		var dataShare=$.model('dataShare').render();

		$('#wrapper').ap(dataShare.mount());

		for(var i=0; i<4; i++){
			$('#wrapper').ap(dataShare.componentRender().mount());
		}

	});
})();