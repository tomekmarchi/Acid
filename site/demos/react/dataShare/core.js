(function () {
	//core model used for onready
	$.model('core', function () {
		var child = $.reactModel('child', {
			data: {
				text:''
			},
			componentData: {
				title:''
			},
			text: function (obj) {
				this.nodes.text.tc(this.share.text || 'TEXT');
			},
			onChange: function (obj) {
				this.data.title = obj.value;
			},
			title: function () {
				this.nodes.title.tc(this.data.title || 'Title');
			},
			template: '<div><h3 acid="title">Title</h3> <p acid="text">TEXT</p><input placeholder="Title" acid="input[keyup:this.onChange]"></div>'
		});

		for(var i=0; i<4; i++){
			$('#wrapper').ap(child.render().node);
		}


		var parent = $.reactModel('parent', {
			onChange: function (obj) {
				child.data.text = obj.value;
			},
			template: '<div><input placeholder="Shared Text" acid="input[keyup:this.onChange]"></div>'
		});

		$('#wrapper').prepend(parent.render().node);

	});
})();