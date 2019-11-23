const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(config) {
  config.addPassthroughCopy('src/assets/images');

  config.addPlugin(syntaxHighlight);

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}
