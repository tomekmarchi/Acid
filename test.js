(async () => {
  const lucy = require('Lucy');
  const nbome25 = require('nbome25');
  const {
    keys
  } = lucy;
  console.log('Building Test Cases');
  await nbome25({
    destination: `${__dirname}/tests`,
    filePath: './build/bundle.js',
    prefix: ` delete require.cache[require.resolve('Lucy')];
    const $ = require('Lucy');
    const {
      ${keys(lucy).join(',')}
    } = $;`,
  });
  console.log('END');
})();
