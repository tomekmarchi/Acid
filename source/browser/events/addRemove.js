const	eventAdd = (obj, eventName, func, capture) => {
  obj.addEventListener(eventName, func, capture);
  return obj;
};
$.eventAdd = eventAdd;
const eventRemove = (obj, eventName, func, capture) => {
  obj.removeEventListener(eventName, func, capture);
  return obj;
};
$.eventRemove = eventRemove;
