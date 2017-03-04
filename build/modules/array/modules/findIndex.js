var find = $.find = (array, func, returnLast) => {
    var result;
    eachWhileFalse(array, (item, key) => {
      result = func(item, key);
      return (hasValue(result)) ? True : False;
    }, returnLast);
    return result;
  },
  findItem = $.findItem = (array, index, name = 'id', returnKey, returnLast = True) => {
    return find(array, (item, key) => {
      if (item[name] == index) {
        return (returnKey) ? key : item;
      }
    }, returnLast);
  },
  findIndex = $.findIndex = (array, index, name = 'id') => {
    return findItem(array, index, name, True, True);
  };
