const fs = require('fs');
const path = require('path');

const examplesDir = '../../../examples';

const dirList = fs.readdirSync(path.join(__dirname, examplesDir));

const examples = dirList.map((item) => {
  const data = require(path.join(__dirname, examplesDir, item, 'meta.json'));
  return {
    ...data,
    id: item,
    jsContent: fs.readFileSync(path.join(__dirname, examplesDir, item, 'script.js'), 'utf8'),
    cssContent: fs.readFileSync(path.join(__dirname, examplesDir, item, 'styles.css'), 'utf8'),
    htmlContent: fs.readFileSync(path.join(__dirname, examplesDir, item, 'layout.html'), 'utf8'),
  }
});

module.exports = {
  list: examples,
};
