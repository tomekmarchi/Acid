 var _eventGenerate,
     _event = (function() {
         var ensureItem = (action, analytics, obj, e, type, extra) => {
                 if (action) {
                     var fn = _find(action, _model);
                     if (fn) {
                         if ($debug) {
                             console.log(action);
                         }
                         fn(obj, e, extra);
                         fn = null;
                         action = null;
                         obj = null;
                         e = null;
                         extra = null;
                     }
                     if (analytics) {
                         _async(function() {
                             analytics(type, action);
                         });
                     }
                 }
             },
             domNodeEvent = (obj, e, analytics, fn, type, attr) => {
                 var action,
                     ismodel,
                     multi,
                     length;
                 if ($debug) {
                     console.log(e);
                 }
                 if (!action) {
                     if (obj.getAttribute) {
                         action = obj.getAttribute(attr);
                     }
                 }
                 if (!action) {
                     if (obj !== _body) {
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
                 var extra,
                     hasExtra;
                 if (action) {
                     e.stopPropagation();
                     multi = action.split(',');
                     _each_array(multi, (action) => {
                         hasExtra = action.match(/\((.*?)\)/);
                         if (hasExtra) {
                             action = action.replace(hasExtra[0], '');
                             extra = hasExtra[1];
                         }
                         ismodel = _find(action, _model);
                         if (ismodel) {
                             ismodel(obj, e, extra);
                         } else {
                             _ensure(action.split('.')[0], function() {
                                 ensureItem(action, analytics, obj, e, type, extra);
                                 e = null;
                                 type = null;
                                 analytics = null;
                                 action = null;
                             });
                         }
                         extra = '';
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
             //generate the onevent function
             eventgenerate = (data) => {
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
             //create events from config
             getEventsOnObject = (object, node, data) => {
                 var new_name;
                 _each_object(object, (item, key) => {
                     new_name = 'on' + key;
                     data.type = key;
                     data.fn = item.fn;
                     $[new_name] = eventgenerate(data);
                     $eventadd(node, key, $[new_name], true);
                 });
             },
             eventMethod = (event) => {
                 getEventsOnObject(event.window, window, {
                     analytics: event.analytics
                 });
                 getEventsOnObject(event.body, document.body, {
                     analytics: event.analytics
                 });
             };
         _eventGenerate = eventgenerate;
         return eventMethod;
     })();
 $.acid.event = _event;
 $.acid.event.generate = _eventGenerate;
