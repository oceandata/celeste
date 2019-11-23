const fs = require('fs');
const path = require('path');

const list = [
  {
    title: 'Title 1',
    id: 'test-1',
    dir: '1',
    tags: ['TAG_1', 'TAG_2'],
  },
  {
    title: 'Title 2',
    id: 'test-2',
    dir: '2',
    tags: ['TAG_3', 'TAG_4'],
  }
]

const examples = list.map((item) => ({
  ...item,
  content: fs.readFileSync(`${path.join(__dirname, '../examples', item.dir)}/index.js`, 'utf8'),
}));

module.exports = {
  list: examples,
};
