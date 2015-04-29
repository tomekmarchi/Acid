$.factory('todoFactory', function(todoStructure, todoItem) {
	return {
		template: todoStructure,
		subscribeTo: 'pushRouter',
		privateData: function() {
			return {
				list: [],
				text: ''
			};
		},
		mount: function() {
			this.pushRouter = $.router('pushRouter');
			this.filters = [this.nodes.filterindex, this.nodes.filteractive, this.nodes.filtercompleted];
			this.appState();
		},
		filterindex: function() {
			this.list.removeFilter();
		},
		filteractive: function() {
			this.list.setFilter('!completed');
		},
		filtercompleted: function() {
			this.list.setFilter('completed');
		},
		clearFilters: function() {
			this.filters.each(function(item) {
				item.clRemove('selected');
			});
		},
		listOnEvery: function() {
			var count = 0,
				len = 0;
			this.privateData.list.each(function(item) {
				if (item.data.completed) {
					count++;
				}
				len++;
			});
			this.nodes.todoCount.textValue((len - count) + ' Items Left');
            this.list.refreshFilter();
		},
		appState: function(change) {
			var page = this.pushRouter.data.appState.page;
			this.clearFilters();
			var state='filter'+page;
			this.nodes[state].cl('selected');
			return this[state]();
		},
		addTodo: function(node, event) {
			if (event.isEnter()) {
				this.privateData.list.push(this.component.listItem.render({
					title: this.privateData.text,
					completed:this.privateData.checkedAll
				}));
				this.privateData.text = '';
			}
		},
		removeItem:function(index){
			this.privateData.list.splice(index,1);
		},
		clearCompleted:function(index){
			this.list.remove(function(item,index){
				if(item.data.completed){
					return true;
				}
			});
		},
		checkedAll:function(object){
			if(!this.privateData.checkedAll){
				var funct=function(item,index){
					item.data.completed=false;
				};
			}else{
				var funct=function(item,index){
					item.data.completed=true;
				};
			}
			this.privateData.list.each(funct);
		},
		component:{
			listItem:todoItem
		}
	};
});