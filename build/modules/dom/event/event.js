var ensureItem = (action, analytics, obj, e, type, extra) => {
        if (action) {
            var fn = find(action, modelMethod);
            if (fn) {
                if (debugMode) {
                    consoleNative(action);
                }
                fn(obj, e, extra);
                fn = null;
                action = null;
                obj = null;
                e = null;
                extra = null;
            }
            if (analytics) {
                asyncMethod(function() {
                    analytics(type, action);
                });
            }
        }
    },
    domNodeEvent = (obj, e, analytics, fn, type, attr) => {
        var action,
			extra,
			hasExtra,
            ismodel,
            multi,
            length;
        if (debugMode) {
            consoleNative(e);
        }
        if (!action) {
            if (obj.getAttribute) {
                action = obj.getAttribute(attr);
            }
        }
        if (!action) {
            if (obj !== bodyNode) {
                while (obj = obj.parentNode) {
                    if (!obj) {
                        return;
                    } else if (obj.nodeType != 1) {
                        return;
                    }
                    if (!action) {
                        action = obj.getAttribute(attr);
                    }
                    if (action) {
                        break;
                    }
                }
            }
        }
        if (action) {
            e.stopPropagation();
            multi = splitCall(action,',');
            eachArray(multi, (action) => {
                hasExtra = stringMatchCall(action,/\((.*?)\)/);
                if (hasExtra) {
                    action = stringReplace(action,hasExtra[0], emptyString);
                    extra = hasExtra[1];
                }
                ismodel = find(action, modelMethod);
                if (ismodel) {
                    ismodel(obj, e, extra);
                } else {
                    ensure(splitCall(action,dotString)[0], function() {
                        ensureItem(action, analytics, obj, e, type, extra);
                        e = null;
                        type = null;
                        analytics = null;
                        action = null;
                    });
                }
                extra = emptyString;
                hasExtra = false;
            });
        }
    },
    syntheticEvent = (e, analytics, fn, type, attr) => {
        var isdom = isDom(e),
            obj,
            nonenode = false;
        if (fn) {
            fn();
        }
        if (isdom) {
            obj = e;
        } else {
            obj = e.target;
            if (!isDom(obj)) {
                nonenode = true;
            }
        }
        if (obj) {
            if (!nonenode) {
                domNodeEvent(obj, e, analytics, fn, type, attr);
            }
        }
    },
    //create events from config
    getEventsOnObject = (object, node, data) => {
        var new_name;
        eachObject(object, (item, key) => {
            new_name = 'on' + key;
            data.type = key;
            data.fn = item.fn;
            $[new_name] = _eventGenerate(data);
            eventAdd(node, key, $[new_name], true);
        });
    },
    eventMethod = $.acid.event = (event) => {
        getEventsOnObject(event.window, window, {
            analytics: event.analytics
        });
        getEventsOnObject(event.body, document.body, {
            analytics: event.analytics
        });
    },
    //generate the onevent function
    _eventGenerate = $.acid.event.generate = (data) => {
        var type = data.type,
            fn = data.fn,
            analytics = data.analytics,
            data = null,
            attr = 'data-' + type,
            syntheticEventWrap = (e) => {
                syntheticEvent(e, analytics, fn, type, attr);
            };
        return syntheticEventWrap;
    },
    listenOnAllEvents = function() {
        var windowObject = {},
            bodyObject = {};


        eachArray(eventsArrayForWindow, function(item, key) {
            windowObject[item] = {};
        });
        eachArray(eventsArrayForBody, function(item, key) {
            bodyObject[item] = {};
        });

        windowObject.resize = {
            fn: function() {
                saveDimensions();
            }
        };

        eventMethod({
            window: windowObject,
            body: bodyObject
        });
    };
isDocumentReady(listenOnAllEvents);
