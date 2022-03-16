var canvas;
var ctx;
var tick = 0;

// Model
var keys = {};

class Ball{
    
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
    }

    draw(canvas){

        ctx = canvas.getContext("2d");
        ctx.fillStyle = "gray";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Render a circle
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, this.r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }

    move(canvas){
        //ASCII representation of arrows, for A D S W use numbers 65, 68, 83 a 87 for a, d, s, w use 97, 100, 115 a 119 
        if (keys[37]) this.isInCanvas(canvas,-5,0);//Left
        if (keys[39]) this.isInCanvas(canvas, 5,0);//Right
        if (keys[38]) this.isInCanvas(canvas,0,-5);//Up
        if (keys[40]) this.isInCanvas(canvas,0, 5);//Down
    }

    //Check borders of canvas
    isInCanvas(canvas,x,y){
        var newX = this.x+x;
        var newY = this.y+y;

        if(newX>canvas.width) this.x=0;
        else if(newX<0) this.x=canvas.width;
        else if(newY>canvas.height) this.y=0;
        else if(newY<0) this.y=canvas.height;
        else {
            this.y += y;
            this.x += x;
        } 
    }
}

var ball = new Ball(50,50,30);

// Controller
function mainLoop() {
  tick++;
  ball.move(canvas);
  ball.draw(canvas);
  requestAnimationFrame(mainLoop);
}

// Initialization
window.onload = function() {
  // Setup global variables for easy access
  button = document.getElementById("button");
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  requestAnimationFrame(mainLoop);
};

// Handle keyboard events
window.onkeydown = function(event) {
  keys[event.keyCode] = true;
  console.log(keys);
};

window.onkeyup = function(event) {
  keys[event.keyCode] = false;
};