const	eventAdd = (obj, eventName, func, capture) => {
  obj.addEventListener(eventName, func, capture);
  return obj;
};
acid.eventAdd = eventAdd;
const eventRemove = (obj, eventName, func, capture) => {
  obj.removeEventListener(eventName, func, capture);
  return obj;
};
acid.eventRemove = eventRemove;
