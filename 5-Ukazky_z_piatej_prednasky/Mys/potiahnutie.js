var canvas
var ctx
var timer
var image
var tick = 0

// Model
var mouse = { x: 0, y: 0, pressed: false, selected: false}
var scene = []

class Window{
  // Constructor for rectangular area
  constructor(canvas){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.width = Math.random() * 40 + 50;
    this.height = Math.random() * 40 + 50;
    this.color = "red";
  }

    // Draw self using a rectangle
    draw(ctx) {
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.fillRect(this.x, this.y, this.width, this.height)
      ctx.closePath()
    }

    setPosition(x, y) {
      this.x = x
      this.y = y
    }
}





// View
function display() {
  // Clear the canvas
  ctx.fillStyle = "gray"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Render all objects in scene
  for (i in scene) {
    scene[i].draw(ctx)
  }
}

// Controller

function mainLoop() {
  tick++
  display()
  requestAnimationFrame(mainLoop);
}

// Handle mouse interaction
function mousedown(event) {
  mouse.pressed = true
  for(i in scene) {
    var window = scene[i]
    //Mouse is in the window boundaries
    if(window.x < mouse.x && window.x + window.width > mouse.x &&
      window.y < mouse.y && window.y + window.height > mouse.y) {
        mouse.selected = window
        mouse.selected.color = "green"
        break
      }
  }
}

// Handle mouse movement
function mousemove(event) {
    mouse.x = event.pageX - canvas.offsetLeft
    mouse.y = event.pageY - canvas.offsetTop
    if(mouse.selected) mouse.selected.setPosition(mouse.x, mouse.y)
}

// Handle mouse release
function mouseup(event) {
  mouse.pressed = false
  if(mouse.selected) mouse.selected.color = "red"
  mouse.selected = false
}

// Initialization
window.onload = function() {
  // Setup global variables
  canvas = document.getElementById("canvas")
  canvas.onmousedown = mousedown
  canvas.onmouseup = mouseup
  canvas.onmousemove = mousemove

  ctx = canvas.getContext("2d")

  scene.push(new Window(canvas))
  scene.push(new Window(canvas))
  scene.push(new Window(canvas))
  scene.push(new Window(canvas))
  requestAnimationFrame(mainLoop);
}