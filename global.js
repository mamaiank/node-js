function showFilename() {
  console.log(__filename);
}

function showDirname() {
  console.log(__dirname);
}

function printTimeout() {
  setTimeout(() => {
    console.log("hello time out");
  }, 2000);
}
setTimeout(() => {
  printTimeout();
}, 1000);

exports.showFilename = showFilename;
exports.showDirname = showDirname;
exports.printTimeout = printTimeout;
