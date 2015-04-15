(function () {
	//compact style module
	$.define(['template', 'model', 'view', 'console'], function (template, model, view, console) {
		/*

			Create templates and faceplates
			template(name, html);
			faceplate(name,function);
			view(name,html,function);

		*/
		var animations=['slideinft', 'slideinfb', 'slideinfl', 'slideinfr'];
		//create view for headers
		view('object_type_h3', '<h3 class="full left"></h3>', function (data, item) {
			item.tc(data.text);
		});
		//Create a view for stack blocks
		view('object_type_wrap', '<ul class="margin-top-10 f14 clearfix standard_list"></ul>', function (data, item) {
			item.attr('id', data.id);
		});
		//api item template
		view('item_method', '<li data-click="nav.go" class="griditem slow_2 left"><a data-mouseover="plugins/tip.unpack"></a><span></span></li>', function (data, item) {
			item.cl(animations.sample(0));
			item.firstChild.tc(data.name).attr('data-tooltip', data.example || '');
		});
		//simple break line template
		template('line_break', '<div class="border-sep twopix-line margin-top-10 left margin-bottom-10"></div>');
		//empty box template
		template('empty_box', '<div class="scroll_box empty_block"></div>');

		//log to the console
		console('TEMPLATES LOADED');
		//Mark template as loaded using empty object & argument set to true for a lean model
		model('templates',{},true);
		//end of function
		return false;
	});

})();