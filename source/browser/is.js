import acid from '../namespace/index';
import { isSameObjectGenerator, objectStringGenerate } from '../internal/is';
import { eachArray } from '../array/each';
eachArray(['HTMLCollection', 'NodeList'], (item) => {
  acid[`is${item}`] = isSameObjectGenerator(objectStringGenerate(item));
});
