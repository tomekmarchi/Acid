/*
	This imports any type of file.
	It works just like require in the browser.

	The main concern here is to
		remove event listeners
		null to ensure absolutely no leaks
		condense the code
*/
var directoryNames = (name) => {
        return directoryNames[name] || emptyString;
    },
    imported = $.imported = {},
    importId = (id) => {
        return replaceWithList(id, [dotString, slashString, dashString], underscoreString) + 'importMethod';
    },
    importMainCallback = (node, call, remove) => {
        if (isString(call)) {
            call = find(call, modelMethod);
        }
        if (call) {
            asyncMethod(call);
        }
        if (remove) {
            node.remove();
        }
        node = null;
    },
    importEvents = (id, data, remove) => {
        return {
            load: function(node, event) {
                imported[id] = 1;
                event.stopPropagation();
                if (event.type != 'load') {
                    remove = true;
                }
                importMainCallback(node, data.call, remove);
                node = null;
            },
            append: true
        };
    },
    /*
    	NODE TYPE OBJECT
    */
    nodeTypes = {
        js: createScript,
        css: createCss
    },
    //importMethod a single item
    importIt = (url, data, ismultiple) => {
        var isJS = isFileJS(url),
            id = importId(url),
            type = stringReplaceCall(stringMatchCall(url,regexExt)[0],dotString, emptyString),
            remove,
            node,
            parent,
            model;
        if (!has(url, '//')) {
            url = directoryNames(type) + url;
        }
        if (!data.remove) {
            if (isJS) {
                remove = true;
            }
        }
        if (!imported[id]) {
            //mark as imported already
            imported[id] = true;
            //create node type
            node = nodeTypes[type](url, importEvents(id, data, remove));
            //append
            append(headNode, node);
        } else {
            //if already there attach events
            node = qsSelector('[href="' + url + '"]');
            if (node && imported[id] !== 1) {
                nodeAttachLoadingEvents(node, importEvents(id, data, remove));
            } else {
                asyncMethod(data.call);
            }
        }
    },
    orderArgumentObjects = (item) => {
        if (isString(item)) {
            if (isFileJS(item)) {
                item = getModelName(item);
            } else if (isFileCSS(item)) {
                item = qsSelector('[href="' + item + '"]');
            } else {
                item = find(item, $);
            }
        }
        return item;
    },
    defineMethod = $.define = (data) => {
        var modelName = data.name,
            wrapFunct = bindTo(function() {
                var freshArgs = eachArray(data.import, orderArgumentObjects);
                if (getLength(arguments) > 0) {
                    pushApply(freshArgs, arguments);
                }
                return apply(data.invoke,wrapFunct, freshArgs);
            },wrapFunct);

        if (modelName) {
            modelMethod[modelName] = wrapFunct;
        }

        return wrapFunct;
    },
    arrayImportLoop = (item, name, error) => {
        importIt(item, {
            call: () => {
                if (error) {
                    error(item, name);
                }
                promisedMethod(item, name);
            }
        });
    },
    arrayImport = (array, data) => {
        var name = importId(joinArray(array,emptyString)),
            error = data.error,
            call = data.call,
            callback = () => {
                apply(call,call, eachArray(array, orderArgumentObjects));
            },
            stringArray = eachArray(array, (item, index) => {
				if (isFileJS(item) || isFileCSS(item)) {
					return item;
				}
            });
        if (getLength(stringArray) > 0) {
            promiseMethod(stringArray, name, () => {
                callback();
            });
            //make imports
            eachArray(stringArray, (item, index) => {
                arrayImportLoop(item, name, error);
            });
        } else {
            asyncMethod(() => {
                callback();
            });
        }
        name = null;
        data = null;
        error = null;
    },
    importMethod = $.require = (key, value) => {
        value = value || () => {

        };
        if (isFunction(value)) {
            value = {
                call: value
            };
        }
        if (isString(key)) {
            key = [key];
        }
        return arrayImport(key, value);
    },
    //Save CSS and JS files directories
    directoryNames = (name) => {
        return directoryNames[name] || emptyString;
    };

directoryNames.css = emptyString;
directoryNames.js = emptyString;

$.dir = directoryNames;
