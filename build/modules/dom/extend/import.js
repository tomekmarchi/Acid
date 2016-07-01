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
                    remove = True;
                }
                importMainCallback(node, data.call, remove);
                node = null;
            },
            append: True
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
            type = stringReplaceCall(stringMatchCall(url, regexExt)[0], dotString, emptyString),
            remove = (!data.remove && isJS)? True : undefined,
            node,
            parent,
            model;
            url = (!has(url, '//')) ? directoryNames(type) + url : url;

        if (!imported[id]) {
            //mark as imported already
            imported[id] = True;
            //create node type
            node = nodeTypes[type](url, importEvents(id, data, remove));
            //append
            append(headNode, node);
        } else {
            //if already there attach events
            node = qsSelector(`[href="${url}"]`);
            if (node && imported[id] !== 1) {
                nodeAttachLoadingEvents(node, importEvents(id, data, remove));
            } else {
                asyncMethod(data.call);
            }
        }
    },
    orderArgumentObjects = (item) => {
		var original=item;
        if (isString(item)) {
            if (isFileJS(item)) {
                item = getModelName(item);
            } else if (isFileCSS(item)) {
                item = qsSelector('[href="' + item + '"]');
            } else {
                item = find(item, $);
				if(!hasValue(item)){
					item = find(original, modelMethod);
				}
            }
        }
        return item || False;
    },
    defineMethod = $.define = (data) => {
        var modelName = data.name,
            wrapFunct = bindTo(function() {
                var freshArgs = mapArray(data.import, orderArgumentObjects);
                if (getLength(arguments) > 0) {
                    pushApply(freshArgs, arguments);
                }
                return apply(data.invoke, wrapFunct, freshArgs);
            }, wrapFunct);

        objectAssign(wrapFunct, data.invoke);
		wrapFunct._=objectAssign({}, data);
		wrapFunct._.invoke=null;
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
        var name =  uuid(),
            error = data.error,
            call = data.call,
            callback = () => {
                apply(call, call, mapArray(array, orderArgumentObjects));
            },
            stringArray = filterArray(array, (item, index) => {
                if (isFileJS(item) || isFileCSS(item)) {
                    return item;
                }
            });
        if (getLength(stringArray) > 0) {
			uuidRemove(name);
            promiseMethod(stringArray, name, () => {
                callback();
            });
            //make imports
            eachArray(stringArray, (item) => {
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
