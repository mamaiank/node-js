// const http = require("http");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello world");
//   })
//   .listen(3001, "127.0.0.1");

// const http = require("http");
// const fs = require("fs");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     const mtStream = fs.createReadStream(__dirname + "/" + "index.html");
//     mtStream.pipe(res);
//   })
//   .listen(3001, "127.0.0.1");

// const http = require("http");
// const myUser = {
//   name: "piya",
//   job: "PG",
//   age: "28",
// };
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(myUser));
//   })
//   .listen(3001, "127.0.0.1");

const http = require("http");
const fs = require("fs");
http
  .createServer(function (req, res) {
    let mtStream;
    if (req.url === "/home" || req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      mtStream = fs.createReadStream(__dirname + "/" + "index.html");
    } else if (req.url === "/facebook") {
      res.writeHead(200, { "Content-Type": "text/html" });
      mtStream = fs.createReadStream(__dirname + "/" + "facebook.html");
    } else if (req.url === "/youtube") {
      res.writeHead(200, { "Content-Type": "text/html" });
      mtStream = fs.createReadStream(__dirname + "/" + "youtube.html");
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      mtStream = fs.createReadStream(__dirname + "/" + "notfound.html");
    }
    mtStream.pipe(res);
  })
  .listen(3001, "127.0.0.1");
