$.model.todoItemComponentModel=function(todoItem) {
    return {
        template: todoItem,
        data: function() {
            return {
                title: '',
                editMode: false
            };
        },
        remove: function() {
            this.rootFactory.removeItem(this.index);
        },
        edit: function(node, event) {
            this.data.editMode = $.toggle(this.data.editMode, false, true);
        },
        editMode: function() {
            if (this.data.editMode) {
                this.node.cl('editing');
            } else {
                this.node.clRemove('editing');
            }
        },
        title: function() {
            this.nodes.title.textValue(this.data.title);
            this.nodes.editInput.value = this.data.title;
        },
        completed: function() {
            if (!this.data.completed) {
                this.node.clRemove('completed');
            } else {
                this.node.cl('completed');
            }
            this.rootFactory.listOnEvery();
        }
    };
};