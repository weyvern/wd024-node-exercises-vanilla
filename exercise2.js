import { writeFile } from 'fs/promises';

writeFile('test.html', 'hello there')
  .then(() => console.log('The file has been saved!'))
  .catch(err => console.log(err.message));
