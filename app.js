// const method = require("./method.js");
// console.log(method.update());
// console.log(method.add(1, 1));
// method.method.updateData()
// console.log("Hello World");

// const fs = require("fs");
// const readFile = fs.readFileSync("code.txt", "utf8");
// console.log(readFile);
// fs.mkdir("File Test", function () {
//   console.log("folder create");
//   fs.writeFileSync("./File Test/text2.txt", readFile);
// });

// const method = require("./global.js");
// method.showDirname();
// method.showFilename();
// method.printTimeout();

// const buf = new Buffer.alloc(10);
// const buf = new Buffer.from("Piya");
// console.log(buf.toString());

// const buf = new Buffer.alloc(200);
// const length = buf.write("Piya");
// console.log(buf);
// console.log(length);
// console.log(buf.toString());

// const buf = new Buffer.alloc(26);
// for (let i = 0; i < buf.length; i++) {
//   buf[i] = i + 65;
// }
// console.log(buf.toString());
// console.log(buf.toString('utf8'));
// console.log(buf.toString('ascii'));
// const bufLetter = new Buffer.alloc(26);
// for (let i = 0; i < bufLetter.length; i++) {
//     bufLetter[i] = i + 97;
// }
// console.log(bufLetter.toString());
// console.log(bufLetter.toString('utf8'));
// console.log(bufLetter.toString('ascii'));
// const bufAll = new Buffer.alloc(58);
// for (let i = 0; i < bufAll.length; i++) {
//     bufAll[i] = i + 65;
// }
// console.log(bufAll.toString());
// console.log(bufAll.toString('utf8'));
// console.log(bufAll.toString('ascii'));

// const buf = new Buffer.from("Piya");
// const bufJson = buf.toJSON();
// console.log(bufJson);

// const fs = require("fs");
// let data = "";
// const readStream = fs.createReadStream("codse.txt");
// readStream.setEncoding("utf8");
// readStream.on("data", function (txt) {
//   data += txt;
// });
// readStream.on("end", function () {
//   console.log("end: ", data);
// });
// readStream.on("error", function (err) {
//   console.log("error: ", err.stack);
// });

// const fs = require("fs");
// let data = "piya test nodejs fs tutorial";
// const writableStream = fs.createWriteStream("text-stream.txt");
// writableStream.write(data);
// writableStream.end();
// writableStream.on("finish", function () {
//     console.log('success');
// });

// const fs = require("fs");
// const readPipe = fs.createReadStream("code.txt");
// const writePipe = fs.createWriteStream("text-pipe.txt");
// readPipe.pipe(writePipe);
