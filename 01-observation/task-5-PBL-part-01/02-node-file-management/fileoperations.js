

const fs = require("fs");
const path = require("path");

// All files this app manages are kept inside a dedicated "files" folder.
const DATA_DIR = path.join(__dirname, "files");

/** Makes sure the "files" folder exists before we try to use it. */
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
  }
}

/** Resolves a filename to its full path inside the data folder. */
function getFilePath(filename) {
  return path.join(DATA_DIR, filename);
}

/** Creates the file (or overwrites it) with the given content. */
function createAndWrite(filename, content) {
  ensureDataDir();
  const filePath = getFilePath(filename);
  fs.writeFileSync(filePath, content, "utf8");
  return filePath;
}

/** Reads and returns the file's current contents. */
function readFile(filename) {
  const filePath = getFilePath(filename);
  return fs.readFileSync(filePath, "utf8");
}

/** Appends additional content to the end of the file, on a new line. */
function appendToFile(filename, extraContent) {
  const filePath = getFilePath(filename);
  fs.appendFileSync(filePath, "\n" + extraContent, "utf8");
  return filePath;
}

module.exports = {
  getFilePath,
  createAndWrite,
  readFile,
  appendToFile,
};