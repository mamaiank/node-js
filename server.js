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

// const http = require("http");
// const fs = require("fs");
// http
//   .createServer(function (req, res) {
//     let mtStream;
//     if (req.url === "/home" || req.url === "/") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       mtStream = fs.createReadStream(__dirname + "/" + "index.html");
//     } else if (req.url === "/facebook") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       mtStream = fs.createReadStream(__dirname + "/" + "facebook.html");
//     } else if (req.url === "/youtube") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       mtStream = fs.createReadStream(__dirname + "/" + "youtube.html");
//     } else {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       mtStream = fs.createReadStream(__dirname + "/" + "notfound.html");
//     }
//     mtStream.pipe(res);
//   })
//   .listen(3001, "127.0.0.1");

// const express = require("express");
// const routing = express();
// routing.get("/", function (req, res) {
//   res.send("<h1>Hello</h1>");
// });
// routing.listen(3001);

// const express = require("express");
// const routing = express();
// routing.get("/", function (req, res) {
//   res.send("<h1>Hello</h1>");
// });
// routing.get("/profile", function (req, res) {
//   res.send("<h1>Profile</h1>");
// });
// routing.get("/profile/:name", function (req, res) {
//   res.send("<h1>Hello " + req.params.name + "</h1>");
// });
// routing.listen(3001);

// const express = require("express");
// const routing = express();
// routing.get("/", function (req, res) {
//   res.send("<h1>Hello</h1>");
// });
// routing.get("/profile", function (req, res) {
//   res.send("<h1>Profile</h1>");
// });
// routing.use("/profile/:name", function (req, res, next) {
//   console.log("request: " + req.params.name + new Date(), req.method, req.url);
// });
// routing.listen(3001);

// const express = require("express");
// const routing = express();
// routing.set("view engine", "ejs");
// routing.get("/", function (req, res) {
//   res.render("index");
// });
// routing.get("/profile", function (req, res) {
//   const myUser = {
//     name: "piya",
//     job: "PG",
//     age: "28",
//   };
//   res.render("profile", { data: myUser });
// });
// routing.get("/profile/:name", function (req, res) {
//   const myUser = {
//     name: "piya",
//     job: "PG",
//     age: "28",
//   };
//   res.render("profile", { data: myUser, nickname: req.params.name });
// });
// routing.listen(3001);

// const express = require("express");
// const routing = express();
// routing.set("view engine", "ejs");
// routing.use(express.urlencoded());
// routing.use(express.json());
// routing.get("/", function (req, res) {
//   res.render("index");
// });
// routing.get("/showForm", function (req, res) {
//   res.sendFile(__dirname + "/" + "showForm.html");
// });
// routing.get("/showData", function (req, res) {
//   const myUser = {
//     name: req.query.fname + " " + req.query.lname,
//     job: "PG",
//     age: "28",
//   };
//   res.render("profile", { data: myUser });
// });
// routing.post("/showData", function (req, res) {
//   const myUser = {
//     name: req.body.fname + " " + req.body.lname,
//     job: "PG",
//     age: "28",
//   };
//   res.render("profile", { data: myUser });
// });
// routing.listen(3001);

const express = require("express");
const routing = express();
const cookie = require("cookie-parser");
routing.set("view engine", "ejs");
routing.use(cookie());
routing.get("/", function (req, res) {
  res.render("index");
});
routing.get("/createCookie", function (req, res) {
  res.cookie("cookiename", "cookievalue", { maxAge: 900000, httpOnly: true });
  res.end("create cookie");
});
routing.get("/delCookie", function (req, res) {
  res.clearCookie('cookiename');
  res.end("delete cookie");
});
routing.listen(3001);
