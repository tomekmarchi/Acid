/**
 * JSdoc plugin that allows categorization of classes
 */
exports.defineTags = function(dictionary) {
  dictionary.defineTag('category', {
    mustHaveValue: true,
    onTagged(doclet, tag) {
      if (env.conf.categoryList.indexOf(tag.value) !== -1) {
        doclet.category = tag.value.split('/');
        doclet.categoryString = tag.value;
        doclet.categoryNestingLevel = doclet.category.length - 1;
      } else {
        console.error(`ERROR  Undefined category "${tag.value}"`);
        throw 'Undefined category';
      }
    }
  });
};
exports.handlers = {
  parseBegin() {
    loadConfiguration();
  }
};
exports.processCategories = function(categories) {
  return processCats(JSON.parse(JSON.stringify(categories)));
};
function processCats(categories, level, parent) {
  if (!level) {
    parent = '';
    level = 1;
  }
  const processedCats = {};
  for (const category in categories) {
    if (categories.hasOwnProperty(category) && category.indexOf(parent) === 0 && category.split('/').length == level) {
      // Determine category name at this level
      var catName;
      if (level > 1) {
        const splitCat = category.split('/');
        catName = splitCat[splitCat.length - 1];
      } else {
        catName = category;
      }
      // Copy data of the category
      const categoryData = categories[category];
      const newCategoryObject = {};
      for (key in categoryData) {
        if (categoryData.hasOwnProperty(key)) {
          newCategoryObject[key] = categoryData[key];
        }
      }
      processedCats[catName] = newCategoryObject;
      // Recurse into next level
      delete categories[category]; // To speed up the process
      const children = processCats(categories, level + 1, category);
      if (Object.keys(children).length) {
        processedCats[catName].children = children;
      }
    }
  }
  return processedCats;
}
function loadConfiguration() {
  try {
    const fs = require('jsdoc/fs');
    const confFileContents = {
      'category': {
        '$': 'Main Acid Object',
        'Array': 'Array Methods',
        'Object': 'Object Methods',
        'Function': 'Function Methods',
        'Collection': 'Collection Methods',
        'Utility': 'Utility Methods'
      },
      'category/subcategory': {
        'displayName': 'A subcategory of \'category\''
      }
    };
    env.conf.categories = confFileContents;
    env.conf.categoryList = Object.keys(confFileContents.category);
  } catch (e) {
    throw 'Could not load category file';
  }
}
