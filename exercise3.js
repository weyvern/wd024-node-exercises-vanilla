import { readFile } from 'fs/promises';

readFile('test.html', 'utf8')
  .then(content => console.log(content))
  .catch(err => console.log(err.message));
