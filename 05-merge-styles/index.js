const fs = require('fs');
const { readdir } = require('fs/promises');
const path = require('path');
const bundle = path.join(__dirname, 'project-dist', 'bundle.css');
const sourceFolder = path.join(__dirname, 'styles');

const ws = fs.createWriteStream(bundle);

async function createBundle() {
  try {
    const files = await readdir(sourceFolder, { encoding: 'utf-8', withFileTypes: true });

    for (const file of files) {
      const ext = path.extname(file.name);
      if(file.isFile() && ext === '.css') {
        const rs = fs.createReadStream(path.join(sourceFolder, file.name));
        rs.pipe(ws);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

createBundle();
