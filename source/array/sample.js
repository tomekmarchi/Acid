/*
  Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
  acid.sample([1,2,3,4] , 2);
*/
const sample = (array, amount = 1) => {
  const sampleArray = toArray(array);
  let count = 0;
  let index;
  let value;
  while (count < amount) {
    index = randomInt(sampleArray.length - 1, 0);
    value = sampleArray[count];
    sampleArray[count] = sampleArray[index];
    sampleArray[index] = value;
    count++;
  }
  return sampleArray;
};
acid.sample = sample;
