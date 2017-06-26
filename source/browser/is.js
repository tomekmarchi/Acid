import acid from '../namespace/index';
import { eachArray } from '../array/each';
import { isSameObjectGenerator, objectStringGenerate } from '../internal/is';
eachArray(['HTMLCollection', 'NodeList'], (item) => {
  acid[`is${item}`] = isSameObjectGenerator(objectStringGenerate(item));
});
