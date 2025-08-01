const path = require("path");
const fs = require("fs");
const baseFolder = path.join(__dirname, "Files");

const folder = fs.readdirSync(baseFolder);

folder.forEach((file) => {
  let ext = path.extname(file).replace(/\./g, "");
  if (ext) {
    const folderToCreate = path.join(baseFolder, ext);
    const oldPath = path.join(baseFolder, file);
    const newPath = path.join(folderToCreate, file);
    fs.mkdirSync(folderToCreate, { recursive: true });
    fs.renameSync(oldPath, newPath);
  }
});
