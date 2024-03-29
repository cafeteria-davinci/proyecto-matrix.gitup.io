var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var w = document.body.clientWidth;
var h = document.body.clientHeight;
canvas.width = w;
canvas.height = h;
var position = Array(300).join(0).split("");
var initMatrix = function initMatrix() {
  ctx.fillStyle = "rgba(0, 15, 2, 0.45)";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#4caf50";
  ctx.font = "12pt";
  position.map(function (y, index) {
    var text = String.fromCharCode(1e3 + Math.random() * 30);
    var x = index * 15 + 15;
    canvas.getContext("2d").fillText(text, x, y);
    y > 100 + Math.random() * 1e5 ? position[index] = 0 : position[index] = y + 15;
  });
};
setInterval(initMatrix, 50);