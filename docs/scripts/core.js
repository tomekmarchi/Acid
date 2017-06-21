(async function () {
  const {
    each,
    importjs,
    sortAlpha,
    isFunction
  } = $;
  await importjs('//cdn.ractivejs.org/latest/ractive');
  await importjs('/docs/api');
  await importjs('/docs/art');
  const art = $('art');
  const api = $('api');
  each(art, (item) => {
    console.log(item);
  });
  const ractive = new Ractive({
    el: 'body',
    template: '#template',
    data: {
      color: 'pink',
      language: {
        title: 'Acid.js',
        description: `A utility library for building conscious web apps.`,
      },
      totalMethods: 0,
      tab: 'methods',
      methods: [],
      list: []
    }
  });
  each(api, (item, key) => {
    each(item, (subItem, subKey) => {
      if (subKey && subItem.descrip) {
        subItem.key = subKey;
        ractive.push('methods', subItem);
      }
    });
  });
  var list = [],
    totalMethods = 0;
  each($, (item, key) => {
    if (isFunction(item)) {
      list.push({
        name: key.trim()
      });
      totalMethods++;
    }
  });
  sortAlpha(list, 'name');
  ractive.push('list', ...list);
  ractive.set('totalMethods', totalMethods);
  top.ractive = ractive;
})();
