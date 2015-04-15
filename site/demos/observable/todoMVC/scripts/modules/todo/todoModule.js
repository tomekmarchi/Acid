$.module({
    modelName: 'todoModule',
    import: ['modules/todo/factories/todoFactory.js',
        'modules/todo/templates/todoStructure.js',
        'modules/todo/models/todoItemComponentModel.js',
        'modules/todo/templates/todoItemTemplate.js',
        'scripts/modules/todo/css/todo.css'
    ],
    invoke: function(todoFactory, todoStructure, todoItemModel, todoItemTemplate) {
        //load resources and compile fatory then return it to previous core module call back
        return todoFactory(todoStructure(), todoItemModel(todoItemTemplate()));
    }
});