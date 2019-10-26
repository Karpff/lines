var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = innerWidth;
canvas.height = innerHeight;
var c = canvas.getContext('2d');

c.fillRect(0,0,canvas.width,canvas.height);

var walls =
[
  ["0","Math.random()*innerHeight"],//left
  ["innerWidth","Math.random()*innerHeight"],//right
  ["Math.random()*innerWidth","0"],//top
  ["Math.random()*innerWidth","innerHeight"]//bottom
];

function line()
{
  let wall1 = Math.floor(Math.random()*4);
  let wall2;
  do
  {
    wall2 = Math.floor(Math.random()*4);
  }while(wall2==wall1);
  wall1X = eval(walls[wall1][0]);
  wall1Y = eval(walls[wall1][1]);
  wall2X = eval(walls[wall2][0]);
  wall2Y = eval(walls[wall2][1]);
  c.beginPath();
  c.moveTo(wall1X,wall1Y);
  c.lineTo(wall2X,wall2Y);
  c.lineWidth = 8;
  c.strokeStyle = "black";
  c.stroke();
  c.lineWidth = 4;
  c.strokeStyle = "white";
  c.stroke();
}
setInterval(line,10);

function animate()
{
  c.fillStyle = "rgba(0,0,0,0.02)";
  c.fillRect(0,0,canvas.width,canvas.height);
  window.requestAnimationFrame(animate);
}
animate();
