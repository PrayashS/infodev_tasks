var context;
var x = 150;
var y = 300;
var dx = 0;
var dy = 5;

function init(){
    context = myCanvas.getContext("2d");
    setInterval(draw,10);
}

function draw(){
    // Clear Canvas
    context.clearRect(0,0,300,300);
    context.beginPath();
    context.fillStyle = "red";

    // Drawing Circle
    context.arc(x,y,20,0,Math.PI*2, true);
    context.closePath();
    context.fill();

    if(x < 0 || x > 300){
        dx = -dx;
    }
    if(y < 0 || y > 300){
        dy = -dy;
    }

    x += dx;
    y += dy;
}