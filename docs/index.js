(async () => {
  const response = await fetch('template.html');
  const template = await response.text();
  const app = new window.Ractive({
    data() {
      const context = this;
      const items = window.docMap.items;
      const {
        eachObject,
        eachArray,
        mapArray,
        upperFirst
      } = $;
      const paramName = (string) => {
        const split = string.trim().split('-');
        if (split[0] && split[0].trim().length) {
          const param = split[0].trim();
          return ` - <span class="paramName">${param}</span>  - ${split[1]}`;
        }
        return string;
      };
      const colorize = (item, secondMethod) => {
        const split = item.substring(0, item.indexOf('}') + 1);
        const colorizedItems = split.replace(/[{}]/g, '').split('|');
        return mapArray(colorizedItems, (value) => {
          if (!value) {
            return '';
          }
          return `<span class="param${value.replace(/[{})()]/g, '').replace('...', '').replace('*','any')}">${upperFirst(value.replace(/[{})()]/g, '').replace('*','Anything').trim())}</span>`;
        }).join(' | ') + secondMethod(item.substring(item.indexOf('}')+1));
      };
      eachObject(items, (item, value) => {
        if (item.params) {
          eachArray(item.params, (param, key) => {
            item.params[key].source = colorize(param.source, paramName);
          });
        }
        if (item.returns) {
          item.returns.source = colorize(item.returns.source, (string) => {
            return ` - ${string.replace('-', '')}`;
          });
        }
      });
      return {
        libraryName: 'Acid',
        company: 'Arity',
        search: '',
        $: window.$,
        categories: window.docMap.categories,
        getDocItem(item) {
          return items[item];
        },
        methodCount: Object.keys(window.docMap.items).length,
        items,
      };
    },
    el: 'body',
    onrender() {
      const script = document.createElement('script');
      script.src = 'pretty.js';
      document.querySelector('head').appendChild(script);
    },
    template,
  });
})();
