(function() {

    $.model.app={
        showArch:function(){
            $('.architecture').toggle('hide');
        }
    };

    var define = [];
    //push acid functions to define
    define.pushApply(['isNative', 'isFunction', 'template', 'cache', 'toDOM', 'model', 'frag', 'service', 'serviceCreate', 'view', 'ensure']);
    //push files needed to be loaded
    define.pushApply(['docs/api.js', 'plugins/art.js', 'plugins/tip.js', 'templates/template.js']);
    //create a module and save it as a model named core (this will be launched onReadyState automatically loaded by acid) 
    //this is a short cut for creating a module and setting it on a model like so $.model('core',module);
    //module returns a function that is compiled and ready to be invoked
    //since the core model is auto launched by acid creating a model in this format is the current optimal method
    $.module({
    	//model name to assign module to
        modelName: 'core',
        //this creates a lean version fo the model which is without the ._ property. The ._ property has model functions attached to it.
        leanModel:true,
        //all required acid methods & models required are listed in this array
        import: define,
        //invoke this function after the compile phase is completed this function will be the callback. 
        //The resources are loaded when the module is invoked, this is the automatic callback set for the resources
        invoke: function(isNative, isFunction, template, cache, todom, model, fragment, service, serviceCreate, view, ensure, api, art, tip) {
            //create resize service
            serviceCreate('resize');
            //get properties for native objects
            var get_acid_props = function(type, object) {
                var array = Object.getOwnPropertyNames(type.prototype),
                    temp = [];
                array.each(function(item, i) {
                    if (item == '__proto__') {
                        return;
                    }
                    var method = object[item];
                    if (method) {
                        if (isFunction(method)) {
                            if (!isNative(method)) {
                                if (type == NodeList) {
                                    if (object[0][item]) {
                                        return;
                                    }
                                }
                                temp.push(item);
                            }
                        }
                    }
                });
                return temp.sort();
            };
            //native objects
            var objects = {
                    node: Node,
                    array: Array,
                    string: String,
                    number: Number,
                    'function': Function
                },
                //their symbols
                objects_symbols = {
                    node: document.body,
                    array: [],
                    string: 's',
                    number: 1,
                    'function': function() {}
                };
            /*
				build api stacks
			*/
            //build stacks for acid
            var frag = fragment();
            api.display.each(function(item, i) {
                //API info
                var object = item.obj,
                    id = item.id,
                    name = item.name;
                var blockNode=view('object_type_wrap', 'block_' + id);
                //template the header and container
                frag.ap(view('object_type_h3', name.ucFirst())).ap(blockNode);
                //loop through item methods
                $.each(object, function(value, key) {
                    blockNode.ap(view('item_method', {
                        name: key,
                        example: (value) ? value.descrip + ' -> ' + value.example : '',
                    }));
                });
                //insert line break
                frag.ap(template('line_break'));
            });
            /*
				BUILD STACKS FOR NATIVE OBJECTS
			*/
            objects.each(function(item, key) {
                var blockNode=view('object_type_wrap', 'block_' + key);
                frag.ap(view('object_type_h3', key.ucFirst())).ap(blockNode);
                $('#stacks').ap(frag).ap(template('line_break'));
                var doc = api[key];
                get_acid_props(item, objects_symbols[key]).each(function(method, i) {
                    var info = doc[method];
                    blockNode.ap(view('item_method', {
                        name: method,
                        example: (info) ? info.descrip + ' -> ' + info.example : '',
                    }));
                });
            });
            $('#stacks').ap(frag);
            //time for ASCII
            art.each(function(item) {
                $.console(item);
            });
            //app completed
            $.console('APP BUILT');
        }
    });

})();