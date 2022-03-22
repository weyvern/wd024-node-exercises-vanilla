import axios from 'axios';
import { writeFile } from 'fs/promises';

(async () => {
  try {
    const { data } = await axios.get('https://www.google.com');
    await writeFile('google.html', data);
    console.log('The file has been saved!');
  } catch (error) {
    console.log(error.message);
  }
})();
