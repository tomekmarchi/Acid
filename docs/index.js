(async () => {
  const response = await fetch('template.html');
  const template = await response.text();
  const app = new window.Ractive({
    data() {
      const context = this;
      return {
        search: '',
        $: window.$,
        categories: window.docMap.categories,
        getDocItem(item) {
          return context.get(`items.${item}`);
        },
        items: window.docMap.items,
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
  console.log(app);
})();
