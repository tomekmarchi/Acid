function chunkSlice(array, start, end) {
  var length = Math.min(end, array.length) - start;
  var result = new Array(length);

  for (var i = 0; i < length; i++) {
    result[i] = array[start + i];
  }

  return result;
}

function numericalCompare(a, b) {
  return a - b;
}

function numericalCompareReverse(a, b) {
  return b - a;
}

function xorBase(a, b) {
  var result = [];
  var item;
  var i;

  for (i = 0; i < a.length; i++) {
    item = a[i];
    if (b.indexOf(item) < 0 && result.indexOf(item) < 0) {
      result.push(item);
    }
  }

  for (i = 0; i < b.length; i++) {
    item = b[i];
    if (a.indexOf(item) < 0 && result.indexOf(item) < 0) {
      result.push(item);
    }
  }

  return result;
}

function _uniq(array,isSorted){
    var result = [];
    var length = array.length;

    if (!length) {
      return result;
    }

    result[0] = array[0];
    var i = 1;

    if (isSorted) {
      for (; i < length; i++) {
        if (array[i] !== array[i - 1]) {
          result.push(array[i]);
        }
      }
    } else {
      for (; i < length; i++) {
        if (result.indexOf(array[i]) < 0) {
          result.push(array[i]);
        }
      }
    }

    return result;
}