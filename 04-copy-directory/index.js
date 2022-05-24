const path = require('path');
const sourceFolder = path.join(__dirname, 'files');
const destFolder = path.join(__dirname, 'files-copy');
const { copyFile, readdir, mkdir, rm } = require('fs/promises');

async function copyDir() {
  try {
    await rm(destFolder, { recursive: true, force: true });
    await mkdir(destFolder);
    const files = await readdir(sourceFolder);
    for (const file of files) {
      copyFile(path.join(sourceFolder, file), path.join(destFolder, file));
    }
  } catch (err) {
    console.log(err);
  }
}

copyDir();
