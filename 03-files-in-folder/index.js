const path = require('path');
const folder = path.join(__dirname, 'secret-folder');
const { stat } = require('fs');
const { readdir } = require('fs/promises');

async function readFolder() {
  try {
    const files = await readdir(folder, {withFileTypes: true});
    for (const file of files) {
      if (file.isFile()) {
        const ext = path.extname(file.name).slice(1);
        const name = file.name.slice(0, -ext.length -1);
        const filePath = path.join(folder, file.name);
        stat(filePath, (err, stats) => console.log(`${name} - ${ext} - ${stats.size}bytes`));
      }
    }
  } catch (err) {
    console.error(err);
  }
}

readFolder();
