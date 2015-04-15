(function () {
	//core model used for onready
	$.model('core', function () {
		$.ensureInvoke('/site/scripts/models/css/css.js');

		$.factory('app', {
			template:`<a target="_blank" href="core.js">See the code</a>`,
			data: {
				text: ''
			}
		});

		var app=$.factory('app').render();
		$('#wrapper').ap(app.mount());

		$.component('parent', {
			subscribeTo: app,
			share:{
				appFactory:app
			},
			onChange: function (obj) {
				this.share.appFactory.data.text = obj.value;
			},
			template: `<div>
			<b>Change Text</b><input placeholder="Shared Text" data-node="input" data-keyup="this.onChange">
			</div>`
		});

		$('#wrapper').ap($.component('parent').render().mount());

		$.component('child', {
			subscribeTo: app,
			share:{
				appFactory:app
			},
			template: `<div>
				<h3 data-node="title">Title</h3>
				<input placeholder="Title" data-keyup="this.onChange" />
				<p data-node="text" class="pad_box">TEXT</p>
			</div>`,
			data: {
				title: ''
			},
			text: function (obj) {
				this.nodes.text.tc(this.share.appFactory.data.text || 'TEXT');
			},
			onChange: function (obj) {
				this.data.title = obj.value;
			},
			title: function () {
				this.nodes.title.tc(this.data.title || 'Title');
			}
		});

		for (var i = 0; i < 4; i++) {
			$('#wrapper').ap($.component('child').render().mount());
		}

	});
})();