(function(){
	//Defines that JavaScript code should be executed in "strict mode".
	"use strict";

	//create a todo template as raw DOM
	$.view('todo','<li><input type="checkbox" data-click="todo.check"><span></span></li>',function(data,item){
		item.qs('span').tc(data.text);
	});

	//faceplates for template filling & updating
	var faceplates={
		//todo app amount
		amount:function(data,obj){
			//textcontent operation
			obj.tc(data.amount);
		},
		//todo app remaining amount
		remaining:function(data,obj){
			//textcontent operation
			obj.tc(data.remaining);
		}
	};
	//add faceplates
	$.faceplate(faceplates);

	//todo model - Contains Todo App logic
	var self=$.model('todo',{
		//todo app stats
		stat:{
			amount:0,
			remaining:0,
			done:0
		},
		//remove todo
		archive:function(obj,e){
			$('.checked').each(function(){
				self.stat.amount--;
				self.stat.done--;
				this.remove();
			});
		},
		//check a todo item
		check:function(obj,e){
			var par=obj.parNode();
			if(!par.clHas('checked')){
				self.stat.done++;
			}else{
				self.stat.done--;
			}
			par.toggle('checked');
		},
		//add a todo item
		add:function(obj,e){
			var input=$('#todo_input');
			$('#todos').ap($.view('todo',{
				text:input.val()
			}));

			input.val('');

			self.stat.amount++;
		}
	},true),//true is for a plain model
	//update todo app data
	update=function(){
		//update remaining amount
		self.stat.remaining=self.stat.amount-self.stat.done;
		//update faceplate with new data
		$('.todo_item').faceplate(self.stat);
	};

	//Wrap each method (in the todo model) in a function and after a method is executed launch the update function. "this" will be set to the todo model
	update.wrap(self,self);

})();