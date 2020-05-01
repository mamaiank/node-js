const pi = 3.14;
let method = {};
method.updateData = function () {
  console.log("update data");
};
const update = function () {
  return "update server";
};
const add = function (a, b) {
  return a + b;
};
exports.pi = pi;
exports.update = update;
exports.add = add;
exports.method = method;
