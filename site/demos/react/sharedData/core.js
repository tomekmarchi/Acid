(function () {
	//core model used for onready
	$.model('core', function () {
		$.ensureInvoke('/site/scripts/models/css/css.js');
		var app = $.reactModel('app', {
			data: {
				text: ''
			}
		});
		var parent = $.reactModel('parent', {
			onChange: function (obj) {
				app.data.text = obj.value;
			},
			template: '<div><b>Change Text</b><input placeholder="Shared Text" acid="input[keyup:this.onChange]"></div>'
		});
		$('#wrapper').prepend(parent.render().node);
		var child = $.reactModel('child', {
			componentData: {
				title: ''
			},
			subscribe: 'app',
			text: function (obj) {
				this.nodes.text.tc(app.data.text || 'TEXT');
			},
			onChange: function (obj) {
				this.data.title = obj.value;
			},
			title: function () {
				this.nodes.title.tc(this.data.title || 'Title');
			},
			template: '<div><h3 acid="title">Title</h3><input placeholder="Title" acid="input[keyup:this.onChange]" /> <p acid="text" class="pad_box">TEXT</p></div>'
		});
		for (var i = 0; i < 4; i++) {
			$('#wrapper').ap(child.render().node);
		}
	});
})();