var canvas
var ctx
var timer
var image
var tick = 0

// Model
var squares = []

// Constructor for the square object
class Square{
  constructor(canvas){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.dx = Math.random() * 10 - 5;
    this.dy = Math.random() * 10 - 5;
    this.width = Math.random() * 40 + 30;
    this.height = Math.random() * 40 + 30;
    this.color = "red";
  }

  move(canvas){
    // Movement logic
    if (this.x >= canvas.width || this.x <= 0) {
      this.dx *= -1
    }
    if (this.y >= canvas.height || this.y <= 0) {
      this.dy *= -1
    }

    // Posun
    this.x = this.x + this.dx
    this.y = this.y + this.dy
  }

  // Draw itself on canvas
  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.closePath()
  }

  // Function to call when clicked
  onclick() {
    this.color = "green"
  }

}

// View
function display() {
  // Clear canvas
  ctx.fillStyle = "gray"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  // Draw all squares
  for (i in squares) {
    squares[i].draw(ctx)
  }
}

// Controller
function move() {
  for (var i in squares) {
    squares[i].move(canvas)
  }
}

function mainLoop() {
  tick++
  move()
  display()
  requestAnimationFrame(mainLoop)
}

function mouseClick(event) {
  var x = event.pageX - canvas.offsetLeft
  var y = event.pageY - canvas.offsetTop

  // Test each square for click
  for (var i in squares) {
    var square = squares[i]
    if (x > square.x && x < square.x + square.width &&
        y > square.y && y < square.y + square.height) {
        square.onclick()
    }
  }
}

// Initialization
window.onload = function() {
  // Get canvas and context
  canvas = document.getElementById("canvas")
  canvas.onclick = mouseClick

  ctx = canvas.getContext("2d")

  // Create 20 squares
  for (i = 0; i < 10; i++) {
    squares.push(new Square(canvas))
  }
  requestAnimationFrame(mainLoop)
}