/*
	This imports any type of file & just like require in the browser.
*/
var directoryNames = $.importDirectory = (name) => {
		return directoryNames[name] || emptyString;
	},
	imported = $.imported = {},
	importMainCallback = (node, call, remove) => {
		ifInvoke(call);
		if (remove) {
			node.remove();
		}
	},
	importEvents = (url, data, remove) => {
		return {
			load: function (node, event) {
				imported[url] = 1;
				importMainCallback(node, data.call, remove);
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
		var type = arrayLastItem(splitCall(url,dotString)),
			remove = (isFileJS(url)) ? True : isFileCSS(url) ? False : data.remove,
			node;
		url = (!has(url, '//')) ? directoryNames(type) + url : url;
		((!imported[url]) ?
			(imported[url] = True, node = nodeTypes[type](url, importEvents(url, data, remove)), append(domHeadNode, node)) :
			(node = qsSelector(`[href="${url}"]`),
				(node && imported[url] !== 1) ?
				nodeAttachLoadingEvents(node, importEvents(url, data, remove)) : data.call()));
	},
	orderArgumentObjects = (item) => {
		var original = item;
		return isString(item) ? (isFileJS(item) ? getModelName(item) : (isFileCSS(item) ? qsSelector('[href="' + item + '"]') : item = find(item, $), hasValue(item) ? item : find(original, modelMethod))) : item;
	},
	setUpModel = (wrapFunct, data) => {
		objectAssign(wrapFunct, data.invoke);
		wrapFunct._ = objectAssign({}, data);
		wrapFunct._.invoke = null;
		ifNotEqual(modelMethod, data.name, wrapFunct);
		return wrapFunct;
	},
	setupModelData = (data, otherData) => {
		if (otherData) {
			if (isFunction(otherData)) {
				otherData = objectAssign({
					invoke: otherData
				}, otherData);
			}
			otherData.name = data;
			data = otherData;
		}
		ifNotEqual(data, 'import', []);
		ifNotEqual(data, 'invoke', () => {});
		return data;
	},
	arrayImportLoop = (item, name, error) => {
		importIt(item, {
			call: () => {
				ifInvoke(error, item, name);
				contract(item, name);
			}
		});
	},
	arrayImport = (array, data) => {
		var {
			error,
			call
		} = data;
		var name = uuid(),
			callback = function () {
				if (call) {
					apply(call, call, mapArray(array, orderArgumentObjects));
				}
			},
			stringArray = filterArray(array, (item, index) => {
				return (isFileJS(item) || isFileCSS(item)) ? item : undefinedNative;
			});
			(getLength(stringArray))?(
			uuidRemove(name),
			contract(stringArray, name, callback),
			//make imports
			eachArray(stringArray, (item) => {
				arrayImportLoop(item, name, error);
			})):asyncMethod(callback);

	},
	importMethod = $.require = (key, value) => {
		return arrayImport(isString(key) ? [key] : key, isPlainObject(value)? value : {
			call: value
		});
	};
